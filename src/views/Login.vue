<template>
<!-- <b-container>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</b-container> -->

<b-container fluid class="login-container">
    <h2>Login</h2>
    <div class="row">
        <div class="col-md-12 form-group">
            <input 
                type="text"
                class="form-control"
                placeholder="username"
                v-model="input.username">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 form-group">
            <input 
                type="password"
                placeholder="password"
                class="form-control"
                v-model="input.password">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 form-group">
            <button 
                type="button"
                class="btn btn-block btn-login"
                v-on:click="login()">Login
            </button>
        </div>
    </div>
</b-container>

</template>

<script>

export default {
    name: 'login',  
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            if(this.input.username != "" && this.input.password != "") {
                if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "home" });
                } else {
                    // eslint-disable-next-line
                    console.log("The username and / or password is incorrect");
                }
            } else {
                // eslint-disable-next-line
                console.log("A username and password must be present");
            }
        }
    }
}
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }

.login-container{
    width: 300px;
    max-width: 100%;
    margin: 50px auto;
}
.login-container h2{
    text-align: center;
    font-size: 20px;
}

.login-container .btn-login{
    background-color: #283593;
    color: #fff;
}
</style>