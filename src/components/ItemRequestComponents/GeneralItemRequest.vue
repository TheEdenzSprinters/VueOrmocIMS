<template>
    <div>
        <vue-bootstrap-typeahead
            :data="items"
            v-model="itemName"
            size="sm"
            placeholder="Type an Item Name"
            @hit="selectedItem = $event"
        />
        
        <b-button class="appPrimaryBackgroundColor simpleSearch" block v-on:click="ItemNameSearch(itemName)" size="sm">SEARCH</b-button>
    </div>
</template>

<script>
import _ from "underscore";
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";

export default {
    name: 'GeneralSearchInputComponent',
    components: {VueBootstrapTypeahead},
    data() {
        return {
            items: [],
            itemName: '',
            selectedItem: null
        }
    },
    methods: {
        async getItems(query){
            let dummyData = ["test", "test1", "item"];
            this.items = dummyData.filter(item => {return item.indexOf(query) > -1 ? item : null});
        },
        ItemNameSearch(item){
            alert(item);
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
        float: left;
    }
</style>
