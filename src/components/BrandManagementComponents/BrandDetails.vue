<template>
    <b-container fluid class="main-intent">
        <b-row align-h="between">
            <b-col sm="9" class="no-intent">
                <h3 class="appPrimaryTextColor">Brand <b>{{ this.selectedBrandName }}</b> Details</h3>
            </b-col>
            <b-col sm="1">
                <font-awesome-icon class="icon fa-2x appPrimaryTextColor" icon="plus" @click="show=true"/>
                <!-- remove print icon for now -->
                <!-- <font-awesome-icon class="icons appPrimaryTextColor" icon="print"/> -->
                <b-modal
                v-model="show"
                ref="modal"
                title="Add New Brand"
                hide-footer
                header-bg-variant="primary"
                header-text-variant="light"
                @show="resetModal"
                @hidden="resetModal"
                >
                <b-container fluid>
                    <b-row>
                        <b-col class="no-intent">
                            <form ref="form" @submit.stop.prevent="handleSubmit">
                                <b-form-group
                                    :state="nameState"
                                    label="Brand Name"
                                    label-for="name-input"
                                    class="appPrimaryTextColor subhead">

                                    <b-form-input
                                        id="name-input"
                                        v-model="newBrand"
                                        :state="nameState"
                                        required>

                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                    :state="notesState"
                                    label="Notes"
                                    label-for="notes-input"
                                    class="appPrimaryTextColor subhead">

                                    <b-form-textarea
                                    id="notes-input"
                                    v-model="newNotes"
                                    :state="notesState"
                                    placeholder="Enter notes..."
                                    rows="3"
                                    max-rows="6"
                                    >
                                    </b-form-textarea>

                                </b-form-group>
                            </form>
                        </b-col>
                    </b-row>
                    <b-row align-h="end">
                        <b-button
                            @click="handleSubmit"
                            class="submit-btn">
                            Submit
                        </b-button>
                        <b-button
                            @click="show=false"
                            class="cancel-btn">
                            Cancel
                        </b-button>
                    </b-row>
                </b-container>
            </b-modal>
            </b-col>                                
        </b-row>
        <b-row class="row-height">
            <b-col class="no-intent" >
                <p class="appPrimaryTextColor notes-font">Brand Name</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="4" class="no-intent">
                <b-form-input 
                v-model="selectedBrandName" 
                id="item-name" 
                class="input-brand" 
                size="sm"
                ></b-form-input>
            </b-col>
        </b-row>
        <b-row class="row-height">
            <b-col class="no-intent" >
                <p class="appPrimaryTextColor notes-font">Notes</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="7" class="no-intent">
                <b-form-textarea 
                id="textarea-no-resize"
                v-model="selectedBrandNotes"
                rows="5"
                class="notes-textarea"
                no-resize
                ></b-form-textarea>         
            </b-col>
            <b-col class="no-intent">
                <b-container fluid class="details">
                    <b-row>
                        <b-col sm="6">
                            Date Created:
                        </b-col>
                        <b-col sm="6">
                            <i><b>{{ this.dateCreated }}</b></i>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="6">
                            Last Updated:
                        </b-col>
                        <b-col sm="6">
                            <i><b>{{ this.lastUpdated }}</b></i>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="6">
                            Is Active:
                        </b-col>
                        <b-col v-if="this.isActive == true"  sm="6">
                            <b-form-checkbox
                            v-model="isActive"
                            >
                            </b-form-checkbox>
                        </b-col>
                        <b-col v-else sm="6">
                            <b-form-checkbox
                            v-model="isActive"
                            >
                            </b-form-checkbox>
                        </b-col>
                    </b-row>
                    <b-row>
                        <!-- Hide\show submit changes button -->
                        <b-col v-if="selectedBrandNotes !== initialNotes || isActive !== initialStatus || selectedBrandName !== initialBrandName ">
                            <b-button @click="updateBrand(isActive, selectedBrandNotes, selectedBrandName)" class="btn-save-changes">SAVE CHANGES</b-button>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { host } from "../../variables.js";

export default {
    props: ["selectedBrand"],
    data() {
        return {
            show: false, // Modal initial state
            newBrand: "",
            newNotes: "",
            nameState: null,
            notesState: null,
            dateCreated: "",
            lastUpdated: "",
            isActive: "",
            selectedBrandNotes: "",
            selectedBrandName: "",
            selectedBrandId: "",
            initialNotes: "",
            initialStatus: "",
            initialBrandName: "",
        }
    },
    methods: {
        addBrand() {
            axios.post(host + "api/ItemManagement/InsertNewBrand", {BrandName: this.newBrand, Notes: this.newNotes, IsActive: true})
            .then(res => {
                if(res.data.Result.BrandName !== null) {
                    this.$emit('new-brand-array', res.data.Result)
                }
            })
            .catch( error => {
                // eslint-disable-next-line
                console.log(error);
            })
        },
        updateBrand(newStatus, newNotes, newBrandName) {
            axios.post(host + "api/ItemManagement/UpdateBrand", {Id: this.selectedBrandId, BrandName: newBrandName, Notes: newNotes, IsActive: newStatus})
            .then(() => {
                // refresh brand details
                this.$emit('new-brand-array', {BrandName: this.selectedBrandName})
            })
            .catch( error => {
                // eslint-disable-next-line
                console.log(error);
            })
        },
        resetModal() {
            this.newBrand = '',
            this.nameState = null
            this.newNotes = '',
            this.notesState= null
        },
        handleSubmit() {
            if (this.newBrand !== ''){
                // Push to DB the Brand name
                this.addBrand();
                // Hide the modal manually
                this.$nextTick(() => {
                    this.$refs.modal.hide()
                    // Reset entered name
                    this.newBrand = '';
                })
            } else {
                alert("Brand name is required")
            }
        },
    },
    watch: {
        selectedBrand: function(){
            if(this.selectedBrand[0].Id > 0){
                this.selectedBrandId = this.selectedBrand[0].Id;
                this.dateCreated = moment(this.selectedBrand[0].CreateDttm).format("MMM DD, YYYY");
                this.lastUpdated = moment(this.selectedBrand[0].UpdateDttm).format("MMM DD, YYYY");
                this.isActive = this.initialStatus = this.selectedBrand[0].IsActive;
                this.selectedBrandNotes = this.initialNotes = this.selectedBrand[0].Notes;
                this.selectedBrandName = this.initialBrandName = this.selectedBrand[0].BrandName;
            }
        }
    }
}

</script>

<style scoped>
    .no-intent {
        padding: 0;
    }

    .main-intent {
        padding: 20px;
    }

    .icon:hover{
        color: #9b9b9b;
    }

    .submit-btn {
        margin-right: 20px;
        background-color: #218838;
        font-size: 20px;
        padding: 0px 15px;
    }

    .cancel-btn {
        background-color: #7c7c7c;
        font-size: 20px;
        padding: 0px 15px;
    }

    .subhead {
        font-size: 20px;
    }

    .notes-textarea, .input-brand {
        border-color: #283593;
    }

    .notes-font {
        font-size: 14px;
        margin-top: 10px;
    }

    .row-height {
        height: 35px;
    }

    .details {
        color: #283593;
        font-size: 14px;
    }

    .btn-save-changes {
        background-color: #283593;
        font-size: 12px;
        padding: 4px 12px;
        margin-top: 40px;
    }

    .btn-save-changes:hover {
        background-color: #7c7c7c;
    }

</style>
