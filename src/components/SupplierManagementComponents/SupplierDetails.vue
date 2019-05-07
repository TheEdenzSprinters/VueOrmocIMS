<template>
    <b-container>
        <b-row>
            <b-col sm="3" class="iconContainer">
                <font-awesome-icon class="icons appPrimaryTextColor" icon="plus"/>
                <font-awesome-icon class="icons appPrimaryTextColor" icon="times"/>
                <font-awesome-icon class="icons appPrimaryTextColor" icon="edit"/>
                <font-awesome-icon class="icons appPrimaryTextColor" icon="print"/>
            </b-col>
        </b-row>
        <b-row class="form">
            <b-col sm="12">
                <label class="text" for="item-name">Material Name</label>
                <b-form-input id="item-name" class="input-small" size="sm"></b-form-input>
                <label class="text" for="address">Address</label>
                <b-form-input id="address" class="input-small" size="sm"></b-form-input>
                <label class="text" for="contact">Telephone No.</label>
                <b-form-input id="contact" class="input-small" size="sm"></b-form-input>
                <label class="text" for="email">Email</label>
                <b-form-input id="email" class="input-small" size="sm"></b-form-input>
                <label class="text" for="notes">Notes</label>
                <b-form-input id="notes" class="input-small1" size="sm"></b-form-input>
               
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

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

</style>

