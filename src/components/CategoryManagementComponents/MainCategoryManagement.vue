<template>
    <b-container fluid class="borders whiteWrapper">
        <b-row class="auto-height">
            <b-col class="no-intent">
                <h2 class="headline">Main Categories</h2>
                <hr>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-container fluid>
                    <b-row>
                        <b-col cols="auto" v-for="cat of catList" :key="cat.CategoryName" class="list" :style="{'background-color': bgcolor}">
                            <span @click="focusArray(cat.Id)">{{ cat.CategoryName }}</span>
                            <font-awesome-icon class="icons appPrimaryTextColor delete-btn-margin" icon="times-circle" v-on:click="deleteCategory(cat.Id)"/>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
        <b-row>
            <b-button @click="show=true" class="button appPrimaryBackgroundColor">Add New Category</b-button>
            <b-modal
                v-model="show"
                ref="modal"
                title="Add New Category"
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
                                    label="Category Name"
                                    label-for="name-input"
                                    class="appPrimaryTextColor subhead">

                                    <b-form-input
                                        id="name-input"
                                        v-model="newCat"
                                        :state="nameState"
                                        required>

                                    </b-form-input>
                                </b-form-group>
                            </form>
                        </b-col>
                    </b-row>
                    <b-row align-h="end">
                        <b-button
                            @click="handleOk"
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
        </b-row>
    </b-container>
</template>

<script>
import axios from "axios";
import { host } from "../../variables.js";

export default {
    name: "MainCategoryManagement",
    data() {
        return {
            show: false, // Modal initial state
            newCat: '',
            nameState: null,
            catList: [],
            focusArrayDetails: [],
            bgcolor: '',
        }
    },
    methods: {
        colorChange(x) {
            if (x == 2) {
                this.bgcolor = 'red';
            }
        },
        focusArray(cat){
            this.focusArrayDetails = this.catList.filter(e => { return cat === e.Id});
            this.$emit('focus-array', this.focusArrayDetails);

        },
        resetModal() {
            this.newCat = '',
            this.nameState = null
        },
        handleOk(modalEvt) {
            // Prevent modal from closing
            modalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            if (this.newCat !== ''){
                // Push to DB the Cat name
                this.addCategory();
                // Hide the modal manually
                this.$nextTick(() => {
                    this.$refs.modal.hide()
                    // Reset entered name
                    this.newCat = '';
                })
            } else {
                alert("Category name is required")
            }
        },
        getCategory() {
            axios.get(host + "api/ItemManagement/GetAllCategories")
            .then(res => {
                this.catList = res.data;
                this.$emit('go-cat', this.catList);
            })
            .catch (error => {
                // eslint-disable-next-line
                console.log(error);
            })
        },
        addCategory() {
            axios.post(host + "api/ItemManagement/InsertNewCategory", {CategoryName: this.newCat, IsActive: true})
            .then(res => {
                if(res.data.Result.NewCategory.CategoryName !== null) {
                    if(res.data.Result.IsSuccess){
                        this.catList = this.catList.concat(res.data.Result.NewCategory);
                        this.$emit('go-cat', this.catList);
                    }
                    else {
                        alert(res.data.Result.Message);
                    }
                }
            })
            .catch (error => {
                // eslint-disable-next-line
                console.log(error);
            })
        },
        deleteCategory(catDelete) {
            axios.post(host + "api/ItemManagement/DeleteCategory", catDelete, {headers: {'Content-Type':'application/json'}})
            .then(() => {
                this.catList = this.catList.filter(e => { return e.Id !== catDelete; });
                this.$emit('go-cat', this.catList);
            })
            .catch (error => {
                // eslint-disable-next-line
                console.log(error);
            })
        },
    },
    mounted() {
        this.getCategory();
    }
}
</script>

<style scoped>
    .whiteWrapper {
        height: 100%;
        background-color: #ffffff;
    }

    .no-intent {
        padding: 0;
    }

    .no-margin {
        margin: 0;
    }

    .headline {
        color:  #283593;
        padding: 10px 0px 0px 15px;
        font-weight: bold;
        font-size: 24px;
    }

    .borders {
        border-style: solid;
        border-color: #9b9b9b;
        border-width: 0.5px;
    }

    .button {
        margin: 15px 0px 15px 15px;
        font-size: 14px;  
    }
    
    .auto-height {
        height: auto;
    }
    
    hr {
        border: 0.5px solid #283593;
        margin: 5px 0px 5px;
    }

    .list {
        padding: 0px 5px 0px 7px;
        margin: 5px 20px 10px 0px;
        border-style: solid;
        border-color: #7c7c7c;
        border-width: 0.5px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        font-weight: bold;
        color:  #283593;
        background-color: #dee1f1;
    }

    .list:hover {
        background-color: #9b9b9b;
    }

    .list:active {
        background-color:#283593;
        color: #dee1f1;
    }

    .delete-btn-margin {
        margin: 5px 0px 0px 15px;
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
</style>