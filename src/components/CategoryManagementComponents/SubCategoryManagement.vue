<template>
    <b-container fluid class="borders whiteWrapper">
        <b-row>
            <b-col class="no-intent">
            <h2 class="headline">Sub-Categories</h2>
            <hr>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-container fluid v-for="cat of catList" v-bind:key="cat.catName">
                    <b-row class="headline-2">
                        <span>{{ cat.catName }}</span>
                    </b-row>
                    <b-row>
                        <div v-for="subCat of subCats" v-bind:key="subCat.subCatName">
                            <b-col v-if="cat.id == subCat.catId" cols="auto" class="list">
                                <span>{{ subCat.subCatName }}</span>
                                <font-awesome-icon class="icons appPrimaryTextColor delete-btn-margin" icon="times-circle" v-on:click="deleteSubCategory(subCat.id)"/>
                            </b-col>
                        </div>
                    </b-row>
                    <b-row>
                        <b-button @click="show=true; catSelect=cat.id" class="button appPrimaryBackgroundColor">Add new {{ cat.catName }} Sub-Category</b-button>
                    </b-row>
                </b-container>
            </b-col>
            <b-modal
                v-model="show"
                ref="modal"
                title="Add New Sub-Category"
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
                                label="Category"
                                label-for="cat-select">

                                    <b-form-select
                                        id="cat-select"
                                        v-model="catSelect"
                                        :options="catListOptions"
                                        class="mb-3">

                                    </b-form-select>
                                </b-form-group>
                                <b-form-group
                                    :state="nameState"
                                    label="Sub-Category Name"
                                    label-for="name-input">

                                    <b-form-input
                                        id="name-input"
                                        v-model="newSubCat"
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

export default {
    components: {
    },
    name: "SubCategoryManagement",
    props: ["catList"],
    data() {
        return {
            show: false, // Modal initial state
            newSubCat: null,
            nameState: null,
            catSelect: null,
            subCats: [
                { id: 1, subCatName: "Plywood", catId: 1},
                { id: 2, subCatName: "Lumber", catId: 1},
                { id: 3, subCatName: "Adhesives", catId: 1},
                { id: 4, subCatName: "Wires", catId: 2},
                { id: 5, subCatName: "Resistors", catId: 2},
                { id: 6, subCatName: "Fuses", catId: 2},
                { id: 7, subCatName: "Transformers", catId: 2},
                { id: 8, subCatName: "Pneumatical Drills", catId: 3},
                { id: 9, subCatName: "Jackhammers", catId: 3},
                { id: 10, subCatName: "Fan Belts", catId: 4},
                { id: 11, subCatName: "Tires", catId: 4},
            ],
            catListOptions: [{
                value: null, text: "", disabled: true
            }]
        }
    },
    methods: {
        resetModal() {
            this.newSubCat = '';
        },
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            if (this.catSelect !== null){
                // Push the name to submitted names
                if (this.newSubCat !== ''){
                    this.subCats.push({ id: this.subCats.length + 1, subCatName: this.newSubCat, catId: this.catSelect });
                    // Hide the modal manually
                    this.$nextTick(() => {
                        this.$refs.modal.hide()
                        // Reset entered name
                        this.newSubCat = null;
                        this.catSelect=null;
                    })
                } else {
                    alert("Sub-Category name is required")
                }
            } else {
                alert("No Category selected, please choose one from the list")
            }
        },
        deleteSubCategory (subCatDelete) {
            this.subCats = this.subCats.filter(function(el) { return el.id !== subCatDelete; }); 
        }
    },
    beforeMount: function() {
        // Get current cat list
        for(var i = 0; i < this.catList.length; i++){
            var catItem = {
                value: this.catList[i].id, text: this.catList[i].catName
            }

            this.catListOptions = this.catListOptions.concat(catItem);
        }
    },
    watch: {
        // Update cat list when cat has been added
        catList: function(){
            // Reinitialise cat list
            this.catListOptions = [];

            for(var i = 0; i < this.catList.length; i++){
                var catItem = {
                    value: this.catList[i].id, text: this.catList[i].catName
                }

                this.catListOptions = this.catListOptions.concat(catItem);
            }
        }
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

    .headline {
        color:  #283593;
        padding: 10px 0px 0px 15px;
        font-weight: bold;
        font-size: 24px;
    }

    .headline-2 {
        color:  #283593;
        padding-left: 5px;
        font-weight: bold;
        font-size: 18px;
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
        padding: 2px 5px 2px 7px;
        margin: 0px 20px 10px 0px;
        border-style: solid;
        border-color: #7c7c7c;
        border-width: 0.5px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color:  #283593;
        background-color: #dee1f1;
    }

    .delete-btn-margin {
        margin-left: 15px;
    }

    .button {
        margin: 0px 0px 15px;
        padding: 1px 10px;
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