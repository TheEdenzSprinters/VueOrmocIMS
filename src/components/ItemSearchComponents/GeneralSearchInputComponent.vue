<template>
    <div>
        <vue-bootstrap-typeahead
            :data="items"
            v-model="itemName"
            size="sm"
            placeholder="Type an Item Name"
            @hit="selectedItem = $event"
        />
        
        <b-button class="appPrimaryBackgroundColor simpleSearch" v-on:click="ItemNameSearch(itemName)" size="sm">SEARCH</b-button>
    </div>
</template>

<script>
import _ from "underscore";
import axios from "axios";
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";

export default {
    name: 'GeneralSearchInputComponent',
    components: {VueBootstrapTypeahead},
    data() {
        return {
            items: [],
            itemName: '',
            selectedItem: null,
            itemList: [],
        }
    },
    methods: {
        async getItems(query){
            let searchString = query;
            axios.post("http://localhost:49995/api/ItemManagement/ItemAutoComplete",{searchString})
                .then(res => {
                        if(res.data.Result !== ""){ 
                            this.items = res.data.Result;
                        } else {
                            this.items = [];
                        }
                    })
                .catch(err => console.log(err));
        },
        ItemNameSearch(item){
            if(item !== ""){
                let query = {
                    ItemName: item,
                    NextBatch: 1
                }
                axios.post("http://localhost:49995/api/ItemManagement/ItemsBySimpleSearch",query)
                    .then(res => {
                        const itemResultList = {
                            ItemName: this.itemName,
                            itemSearchResult: res.data,
                            isSimpleSearch: true,
                        }
                        this.$emit('items-list', itemResultList);
                    })
                    .catch(err => console.log(err));
            }
        }
    },
    watch: {
        itemName: _.debounce(function(itm) {this.getItems(itm)}, 500)
    }
}
</script>

<style scoped>
    .simpleSearch {
        margin: 0 auto;
        margin-top: 10px;
        display: block;
    }
</style>
