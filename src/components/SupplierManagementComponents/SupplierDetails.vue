<template>
    <b-container>
        <b-row class="headerContainer">
            <b-col class="header" sm="8">
                <h4>Supplier A</h4>
            </b-col>
             <b-col sm="4" class="iconContainer">
                <font-awesome-icon class="icons appPrimaryTextColor" icon="plus" @click="show=true"/>       
                <font-awesome-icon class="icons appPrimaryTextColor" icon="print"/>                
            </b-col>
        </b-row>
        <b-row>   

            <b-modal
                v-model="show"
                ref="modal"
                title="Add New Supplier"
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
                                    label="Supplier Name"
                                    label-for="name-input"
                                    class="appPrimaryTextColor subhead">

                                    <b-form-input
                                        id="name-input"
                                        v-model="newSupplier"
                                        :state="nameState"
                                        required>

                                    </b-form-input>
                                    </b-form-group>

                                <b-form-group
                                    :state="addressState"
                                    label="Supplier Address"
                                    label-for="address-input"
                                    class="appPrimaryTextColor subhead">

                                    <b-form-input
                                        id="address-input"
                                        v-model="newSupplierAddress"
                                        :state="addressState"
                                        required>

                                    </b-form-input>
                                </b-form-group>

                                 <b-form-group
                                    :state="phoneState"
                                    label="Telephone Number"
                                    label-for="phone-input"
                                    class="appPrimaryTextColor subhead">

                                    <b-form-input
                                        id="phone-input"
                                        v-model="newSupplierPhone"
                                        :state="phoneState"
                                        required>

                                    </b-form-input>
                                    </b-form-group>
                                   
                                     <b-form-group
                                    :state="emailState"
                                    label="Supplier Email"
                                    label-for="email-input"
                                    class="appPrimaryTextColor subhead">

                                    <b-form-input
                                        id="email-input"
                                        v-model="newSupplierEmail"
                                        :state="emailState"
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

        </b-row>
        <b-row class="form">
            <b-col sm="12">
                <label class="text" for="item-name">Supplier Name</label>
                <b-form-input v-model="supplierName" id="item-name" class="input-small" size="sm"></b-form-input>
                <label class="text" for="address">Address</label>
                <b-form-input v-model="supplierAddress" id="address" class="input-small" size="sm"></b-form-input>
                <label class="text" for="contact">Telephone No.</label>
                <b-form-input v-model="supplierContact" id="contact" class="input-small" size="sm"></b-form-input>
                <label class="text" for="email">Email</label>
                <b-form-input v-model="supplierEmail" id="email" class="input-small" size="sm"></b-form-input>
                <label class="text" for="notes">Notes</label>
                <b-form-input v-model="notes" id="notes" class="input-small1" size="sm"></b-form-input>
                
                                        
            </b-col>

            <b-container>
                <b-row sm="12" class="btn-container">
            <b-col sm="4">
                 <b-button size="sm" v-on:click= "updateSupplier">Save Changes</b-button>
            </b-col>
                       
            <b-col sm="8">
            <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="active" unchecked-value="inactive">Is Active</b-form-checkbox>
            </b-col>
            </b-row>        
            </b-container>
            

        </b-row>
    </b-container>
</template>

<script>
import axios from "axios";


export default {
    data() {
        return{
            show: false,
            nameState: null,
            newSupplier:"",
            newSupplierAddress:"",
            addressState:null,
            newSupplierPhone:"",
            phoneState:null,
            newSupplierEmail:"",
            emailState:null,
            newNotes: "",   
            notesState:null, 
            supplierName:"",   
            supplierAddress:"",
            supplierContact:"", 
            supplierEmail:"", 
            notes:"", 
            newSupplierId:"",
            status: false,      

        }

    },
    props:['supplierId'],
     methods: {               
        addSupplier() {
            axios.post("http://localhost:49995/api/ItemManagement/CreateNewSupplier", {SupplierName: this.newSupplier, SupplierAddress: this.newSupplierAddress, Email: this.newSupplierEmail, TelephoneNumber: this.newSupplierPhone, Notes: this.newNotes})
            .then(res => {                
                    if(res.data.Result.SupplierName !== null) {
                    this.$emit('new-supplier-array', res.data.Result)                              
                }
            })
            .catch( error => {
                // eslint-disable-next-line
                console.log(error);
            })
        },
        updateSupplier() {
            axios.post("http://localhost:49995/api/ItemManagement/UpdateSupplier", {Id: this.newSupplierId, SupplierName: this.supplierName, SupplierAddress: this.supplierAddress, TelephoneNumber: this.supplierContact, Email: this.supplierEmail, Notes: this.notes, Status: this.status})
            .then(() => {
                
                this.$emit('update-supplier', {Id: this.selectedSupplierId})
            })
            .catch( error => {
                // eslint-disable-next-line
                console.log(error);
            })
        },
        resetModal() {          
            this.nameState = null,
            this.newSupplier = "",
            this.newSupplierAddress = "",
            this.addressState = null,
            this.newSupplierPhone = "",
            this.phoneState = null,
            this.newSupplierEmail = "",
            this.emailState = null,
            this.newNotes = "",   
            this.notesState = null        
        },
        
        handleSubmit() {
            if (this.newSupplier !== ''){
                // Push to DB the Supplier name
                this.addSupplier();
                // Hide the modal manually
                this.$nextTick(() => {
                    this.$refs.modal.hide()
                    // Reset entered name
                    this.newSupplier = '';
                })
            } else {
                alert("Supplier name is required")
            }
        },
     },
    watch:{
        supplierId:function(){
            let Id=this.supplierId;
            this.newSupplierId= this.supplierId;

            if(Id >0){
                axios.post("http://localhost:49995/api/ItemManagement/ViewSupplierById",{Id})
                .then(res => {                   
                    this.supplierName = res.data.Result.SupplierName;
                    this.supplierAddress = res.data.Result.SupplierAddress;
                    this.supplierContact = res.data.Result.TelephoneNumber;
                    this.supplierEmail = res.data.Result.Email;
                    this.notes = res.data.Result.Notes;
                    this.status = res.data.Result.Status;       

                })
            }
            console.log(this.supplierId);
        }
    }
}

</script>

<style scoped>
.input-small{
    width: 370px;
}
.input-small1{
    height: 80px;
    width: 420px;
}
.iconContainer{
  margin-left: 430px;
}
.icons {
  font-size: 24px;
  cursor: pointer;
  margin-top: 15px;
  margin-right: 15px;
}
.btn-container {
    margin-top: 30px;
}

</style>

