<template>
    <b-container fluid>
        <b-alert variant="success" :show="successCountDown" fade dismissible @dismissed="successCountDown=0" @dismiss-count-down="successCountDownChanged">
            {{msg}}
        </b-alert>
        <b-alert variant="danger" :show="dangerCountDown" fade dismissible @dismissed="dangerCountDown=0" @dismiss-count-down="dangerCountDownChanged">
            {{msg}}
        </b-alert>
        <b-row>
            <b-col sm="12">
                <b-row>
                    <b-col sm="9"> 
                        <h4 v-if="form.Id==0">Item Request</h4>
                        <h4 v-if="form.Id!=0">Item Request {{form.Id}}</h4>
                    </b-col>

                    <b-col sm="3" class="iconContainer">
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="print"/>
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="plus" v-on:click="addNewItemRequest" v-if="form.Id == 0 && !showCancelButton"/>
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="times" v-on:click="onReset" v-if="showCancelButton"/>
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="edit" v-on:click="modifyItemRequest" v-if="form.Id != 0 && !showCancelButton"/>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

        <b-row>
            <b-container fluid>
                <b-form class="ItemRequestForm" @submit="onSubmit" @reset="onReset">
                    <b-row>
                        <b-col sm="7">
                            <label class="text-1" for="title">Title:</label>
                            <b-form-input id="title" size="sm" :readOnly="readOnly" v-model="form.Title"></b-form-input>
                        </b-col>    
                        <b-col sm="5">
                            <label class="text-1" for="status">Status:</label>
                            <b-form-select id="status" size="sm" v-model="form.StatusCd" :state="isValidStatus" v-on:change="validateStatusChange" :options="itemRequestStatusList" :disabled="!toModify"></b-form-select>
                         </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="7">
                            <label class="text-1" for="notes">Notes:</label>
                            <b-textarea id="notes" rows="3" v-model="form.Notes" no-resize :readOnly="readOnly"></b-textarea>
                        </b-col> 
                        <b-col sm="5">
                            <b-container class="miscContainer" fluid>
                                <b-row>
                                    <b-col sm="6">
                                        Date Created:
                                    </b-col>
                                    <b-col>
                                        {{form.CreateDttm}}
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col sm="6">
                                        Last Updated:
                                    </b-col>
                                    <b-col>
                                        {{form.UpdateDttm}}
                                    </b-col>
                                </b-row>
                                <b-row v-if="!readOnly">
                                    <b-col sm="12" style="text-align: center;">
                                        <b-button type="submit" variant="success" class="formButton" size="sm">Submit</b-button>
                                        <b-button type="reset" class="formButton" size="sm">Cancel</b-button>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-col>
                    </b-row>
                </b-form>
            </b-container>
        </b-row>
        <b-row>
            <b-col sm="12">
                <b-row>
                    <b-col sm="11">
                        <h4>Items</h4>
                    </b-col>
                    <b-col sm="1">
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="plus" v-b-modal.add-new-item v-if="form.Id != 0"/>
                    </b-col>
                </b-row>
                <b-row class="stockBalanceContainer">
                    <b-col sm="12"> 
                        <ItemStockBalance v-bind:item-list="addedItemList" v-on:delete-item="deleteSelectedItem"/>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="12">
                <b-row>
                    <b-col sm="12"> <h4>Quotations</h4>
                        <QuotationLists/>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="12">
                <b-row>
                    <b-col sm="12"> <h4>Price Scoresheet</h4>
                        <PriceScoresheet/>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-modal id="add-new-item" size="lg" @ok="handleOk" title="Add an Item to Item Request">
            <GeneralSearchInputComponent v-on:items-list="showResults"/>
            <ItemSearchResultForItemRequest v-bind:item-list="itemList" v-on:selected-item-search="selectedItem"/>
        </b-modal>
    </b-container>
</template>

<script>
import ItemStockBalance from "./ItemStockBalance";
import QuotationLists from "./QuotationLists";
import PriceScoresheet from "./PriceScoresheet";
import axios from "axios";
import moment from "moment";
import GeneralSearchInputComponent from "../ItemSearchComponents/GeneralSearchInputComponent";
import ItemSearchResultForItemRequest from "../ItemSearchComponents/ItemSearchResultForItemRequest";

export default {
    name: "ItemRequestDetails",
    props: ['itemRequestNumber'],
    components: {
        ItemStockBalance,
        QuotationLists,
        PriceScoresheet,
        GeneralSearchInputComponent,
        ItemSearchResultForItemRequest
    },
    data() {
        return{
            showCancelButton: false,
            readOnly: true,
            toModify: false,
            itemRequestStatusList: [{value: null, text: "Select Status"}],
            form: {
                Id: 0,
                Title: "",
                StatusCd: null,
                Notes: "",
                CreateDttm: "",
                UpdateDttm: ""
            },
            itemList: [],
            addedItemList: [],
            selectedItemToAdd: [],
            msg: "",
            successCountDown: 0,
            dangerCountDown: 0,
            dismissSecs: 3,
            isValidStatus: null,
        }
    },
    methods: {
        onSubmit(event){
            event.preventDefault();
            if(!this.toModify){
                axios.post("http://localhost:50006/api/PurchaseOrderManagement/InsertNewItemRequest", this.form)
                    .then(res => {
                        if(res.data != ""){
                            this.form.Id = res.data.Id;
                            this.form.CreateDttm = moment(res.data.CreateDttm).format("DD MMM YYYY");
                            this.form.UpdateDttm = moment(res.data.UpdateDttm).format("DD MMM YYYY");
                            this.form.StatusCd = res.data.StatusCd;
                        }
                        this.showCancelButton = false;
                        this.toModify = false;
                        this.readOnly = true;
                    });
            }
            else {
                if(this.isValidStatus == null){
                    axios.post("http://localhost:50006/api/PurchaseOrderManagement/UpdateItemRequestById", this.form)
                    .then(res => {
                        if(res.data != ""){
                            
                        }
                        this.showCancelButton = false;
                        this.toModify = false;
                        this.readOnly = true;
                    });
                }
            }
        },
        onReset(event){
            event.preventDefault();
            if(!this.toModify){
                this.form = {
                    Id: 0,
                    Title: "",
                    StatusCd: null,
                    Notes: "",
                    CreateDttm: "",
                    UpdateDttm: ""
                }
            }
            this.showCancelButton = false;
            this.toModify = false;
            this.readOnly = true;
            
        },
        dangerCountDownChanged(dismissCountDown){
            this.dangerCountDown = dismissCountDown;
        },
        successCountDownChanged(dismissCountDown){
            this.successCountDown = dismissCountDown;
        },
        addNewItemRequest(){
            this.showCancelButton = true;
            this.readOnly = false;
        },
        modifyItemRequest() {
            this.showCancelButton = true;
            this.toModify = true;
            this.readOnly = false;
        },
        showResults(results) {
            this.itemList = results;
        },
        selectedItem(results) {
            this.selectedItemToAdd = results;
        },
        handleOk(){
            const itemMapping = {
                ItemId: this.selectedItemToAdd[0].Id,
                ItemRequestId: this.form.Id
            }
            const item = {
                Id: this.selectedItemToAdd[0].Id,
                ItemName: this.selectedItemToAdd[0].ItemName,
                Notes: this.selectedItemToAdd[0].Notes,
                BrandName: this.selectedItemToAdd[0].Brand,
                StocksLeft: this.selectedItemToAdd[0].StocksLeft
            }

            axios.post("http://localhost:50006/api/PurchaseOrderManagement/AttachItemToItemRequest", itemMapping)
                .then(res => {
                    if(res.data != "" && typeof(res.data) !== "undefined"){
                        if(res.data.isSuccess){
                            this.successCountDown = this.dismissSecs;
                            this.msg = res.data.Message;
                            this.addedItemList = this.addedItemList.concat(item);
                        }
                        else {
                            this.dangerCountDown = this.dismissSecs;
                            this.msg = res.data.Message;
                        }
                    }
                });
        },
        deleteSelectedItem(item){
            if(item.length > 0){
                const itemMapping = {
                    ItemId: item[0].Id,
                    ItemRequestId: this.form.Id
                }

                axios.post("http://localhost:50006/api/PurchaseOrderManagement/DeleteItemFromItemRequest", itemMapping)
                    .then(res => {
                        if(res.data != "" && typeof(res.data) !== "undefined"){
                            if(res.data.isSuccess){
                                this.successCountDown = this.dismissSecs;
                                this.msg = res.data.Message;
                                this.addedItemList = this.addedItemList.filter(obj => {return obj.Id != itemMapping.ItemId});
                            }
                            else {
                                this.dangerCountDown = this.dismissSecs;
                                this.msg = res.data.Message;
                            }
                        }
                    });
            }
        },
        validateStatusChange() {
        const validateModel = {
          Id: this.form.Id,
          StatusCd: this.form.StatusCd
        };
        axios.post("http://localhost:50006/api/PurchaseOrderManagement/ValidateStatusChangeItemRequest", validateModel)
          .then(res => {
            if(res.data != "" && typeof(res.data) !== "undefined"){
                if(res.data.isSuccess){
                    this.isValidStatus = null;
                }
                else {
                    this.dangerCountDown = this.dismissSecs;
                    this.msg = res.data.Message;
                    this.isValidStatus = false;
                }
            }
          });
      }
    },
    watch: {
        itemRequestNumber: function(){
            this.readOnly = true;
            this.toModify = false;
            this.showCancelButton = false;
            const Id = this.itemRequestNumber;
            if(Id != 0){
                axios.post("http://localhost:50006/api/PurchaseOrderManagement/GetItemRequestFormById", {Id})
                    .then(res => {
                        if(res.data != ""){
                            this.form.Id = res.data.Id;
                            this.form.Title = res.data.Title;
                            this.form.Notes = res.data.Notes;
                            this.form.StatusCd = res.data.StatusCd;
                            this.form.CreateDttm = moment(res.data.CreateDttm).format("DD MMM YYYY");
                            this.form.UpdateDttm = moment(res.data.UpdateDttm).format("DD MMM YYYY");
                            this.addedItemList = res.data.RequestFormItems;
                        }
                    });
            }
            else {
                this.form = {
                    Id: 0,
                    Title: "",
                    StatusCd: null,
                    Notes: "",
                    CreateDttm: "",
                    UpdateDttm: ""
                };

                this.itemList = [];
                this.addedItemList = [];
            }
        }
    },
    beforeMount: function(){
        axios.get("http://localhost:50006/api/PurchaseOrderManagement/GetItemRequestTicketSatus")
        .then(res => {
          for(var i = 0; i < res.data.length; i++){
            var ticketStatus = {
              value: res.data[i].Id,
              text: res.data[i].Status
            };

            this.itemRequestStatusList = this.itemRequestStatusList.concat(ticketStatus);
          }
        });
    }
}
</script>

<style scoped>
    .ItemRequestForm {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .ItemRequestForm input {
        margin-bottom: 5px;
    }

    .miscContainer {
        padding-top: 30px;
    }

    .formButton{
        margin-top: 10px;
        margin-right: 10px;
    }

    .icons {
        font-size: 24px;
        cursor: pointer;
        margin-top: 5px;
        margin-right: 15px;
        float: right;
    }
    
    .stockBalanceContainer { 
        margin-bottom: 10px;
    }
</style>
