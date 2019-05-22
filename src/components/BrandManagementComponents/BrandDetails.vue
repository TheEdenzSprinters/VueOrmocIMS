<template>
    <b-container fluid class="MainContainer">
        <b-row>
            <b-col sm="9">
                <h3>Brand Details</h3>              
            </b-col>
            <b-col sm="3" class="iconContainer">
                <font-awesome-icon class="icons fa-2x appPrimaryTextColor" icon="plus" @click="show=true"/>
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
                                    ></b-form-textarea>

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
        <b-row class="detailWrapper">
            <b-col sm="7">
                <label>Notes:</label>
                <b-form-textarea id="textarea-no-resize" :value="this.selectedBrandNotes" rows="5" no-resize></b-form-textarea>         
            </b-col>
            
            <b-col sm="5">
                <b-container>
                    <b-row>
                        <b-col sm="6">
                            Date Created:
                        </b-col>
                        <b-col sm="6">
                            {{ this.dateCreated }}
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="6">
                            Last Updated:
                        </b-col>
                        <b-col sm="6">
                            {{ this.lastUpdated }}
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="6">
                            Is Active:
                        </b-col>
                        <b-col sm="6">
                            {{ this.isActive }}
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
            selectedBrandNotes: "none",
        }
    },
    methods: {
        addBrand() {
            axios.post("http://localhost:49995/api/ItemManagement/InsertNewBrand", {BrandName: this.newBrand, Notes: this.newNotes, IsActive: true})
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
                this.dateCreated = moment(this.selectedBrand[0].CreateDttm).format("DD-MMM-YYYY");
                this.lastUpdated = moment(this.selectedBrand[0].UpdateDttm).format("DD-MMM-YYYY");
                this.isActive = this.selectedBrand[0].IsActive;
                this.selectedBrandNotes = this.selectedBrand[0].Notes;
            }
        }
    }
}

</script>

<style scoped>
    .no-intent {
        padding: 0;
    }

    .iconContainer {
        padding-left: 35px;   
    }

    .icons{
        margin-left: 20px;
    }

    .icons:hover{
        color: #9b9b9b;
    }

    .detailWrapper {
        height: 569px;
    }

    .col-sm-7 {
        padding-top: 40px;
    }

    .col-sm-5 {
        padding-top: 40px;
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

    .notes {
        min-height: 80px;
        height: auto;
    }
</style>
