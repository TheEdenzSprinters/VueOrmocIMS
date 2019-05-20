<template>
    <b-container fluid>
        <b-row>
            <b-col sm="12">
                <b-row>
                    <b-col sm="9"> 
                        <h4 v-if="form.Id==0">Item Request</h4>
                        <h4 v-if="form.Id!=0">Item Request {{form.Id}}</h4>
                    </b-col>

                    <b-col sm="3" class="iconContainer">
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="print"/>
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="plus" v-on:click="addNewItemRequest" v-if="Id == 0 && !showCancelButton"/>
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="times" v-on:click="onReset" v-if="showCancelButton"/>
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="edit" v-on:click="modifyItemRequest" v-if="Id != 0 && !showCancelButton"/>
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
                            <b-form-select id="status" size="sm" v-model="form.StatusCd" :options="itemRequestStatusList" :disabled="!toModify"></b-form-select>
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
                    <b-col sm="12"> <h4>Items</h4>
                        <ItemStockBalance/>
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
  </b-container>
</template>

<script>
import ItemStockBalance from "./ItemStockBalance";
import QuotationLists from "./QuotationLists";
import PriceScoresheet from "./PriceScoresheet";
import axios from "axios";
import moment from "moment";

export default {
    name: "ItemRequestDetails",
    props: ['itemRequestNumber'],
    components: {
        ItemStockBalance,
        QuotationLists,
        PriceScoresheet
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
            }
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
                axios.post("http://localhost:50006/api/PurchaseOrderManagement/UpdateItemRequestById", this.form)
                .then(res => {
                    debugger;
                    if(res.data != ""){
                        
                    }
                    this.showCancelButton = false;
                    this.toModify = false;
                    this.readOnly = true;
                });
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
        addNewItemRequest(){
            this.showCancelButton = true;
            this.readOnly = false;
        },
        modifyItemRequest() {
            this.showCancelButton = true;
            this.toModify = true;
            this.readOnly = false;
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
                        }
                    });
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
        margin-top: 15px;
        margin-right: 15px;
        float: right;
    }
</style>
