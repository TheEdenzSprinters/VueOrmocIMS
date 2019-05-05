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
                <b-container fluid>
                    <b-row class="headline-2">
                        Hardware
                    </b-row>
                    <b-row>
                        <b-col cols="auto" class="list">
                            Plywood
                            <img class="delete-img">
                        </b-col>
                        <b-col cols="auto" class="list">
                            Lumber
                            <img class="delete-img">
                        </b-col>
                        <b-col cols="auto" class="list">
                            Adhesives
                            <img class="delete-img">
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
        <b-row>
            <b-button class="button appPrimaryBackgroundColor" v-on:click="">Add New Hardware Sub-Category</b-button>
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: "SubCategoryManagement"
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
        padding: 15px 0px 0px 15px;
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
        margin: 5px 0px 10px;
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

    .delete-img {
        margin-left: 15px;
        content: url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD5SURBVDhPzZJZagJBEIYbgoKi5gJGryGK3iaL7/Ei4nIClxMo3kWzkOQpJ/BJ/68XZpxF8UHwg4+qGrqbnqo2t6Arl/JP7n1cyI48S0FO5Va+yLos+vgqP+RIPshMJnIlK7ZKw/e15JAUXHsny7YypuRjINQ1+SVTv8M/P7vUHvIte7ZykToc/ibnLo2gUU8utbDpXw58DIcB635dGkG3aVicd3nwMQ7rWH/CNTdoytQNmDOjg0s96MuZSyPo6qes2ip/Co+SdW1bJWC+zDkckoQRbuTQVhnwwsaS6/LyGpKGERkd82dz7ksMcD3mTKPo9o+vW/LuMOYI44cxddmu8LAAAAAASUVORK5CYII=");
    }
</style>