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
                        <b-col cols="auto" v-for="cat of catList" v-bind:key="cat.catName" class="list">
                            <span>{{ cat.catName }}</span>
                            <font-awesome-icon class="icons appPrimaryTextColor delete-btn-margin" icon="times-circle" v-on:click="deleteCategory(cat.id)"/>
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
export default {
    name: "MainCategoryManagement",
    props: ["catList"],
    data() {
        return {
            show: false, // Modal initial state
            newCat: '',
            nameState: null,
        }
    },
    methods: {
        resetModal() {
            this.newCat = '',
            this.nameState = null
        },
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            //console.log(this.newCat);
            if (this.newCat !== ''){
                // Push the name to submitted names
                this.catList.push({ id: this.catList.length + 1, catName: this.newCat });
               // console.log(this.cats);
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
        deleteCategory(catDelete) {
            this.$emit('receive-cat-list', catDelete);
        },

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