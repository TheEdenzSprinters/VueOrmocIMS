<template>

<b-container fluid class="login-container background">
    <b-row>
        <b-col>
            <h1 class="header-title">Welcome to ORMOC LANTERN HARDWARE AND SUPPLIES</h1>
        </b-col>
    </b-row>
    <b-row>
        <b-col>
            <h2 class="subheader-title">Login</h2>
        </b-col>
    </b-row>
    <b-row align-h="center" class="no-gutters row-margin">
        <b-col cols="1" class="icon-colors custom-icon">
            <font-awesome-icon icon="user" />
        </b-col>
        <b-col cols="5">
            <input 
                type="text"
                class="form-control"
                placeholder="Username"
                v-model="input.username"
                required>
        </b-col>
    </b-row>
    <b-row align-h="center" class="no-gutters row-margin">
        <b-col cols="1" class="icon-colors custom-icon">
            <font-awesome-icon icon="key" />
        </b-col>
        <b-col cols="5">
            <input 
                type="password"
                placeholder="Password"
                class="form-control"
                v-model="input.password"
                required>
        </b-col>
    </b-row>
    <b-row align-h="center" class="no-gutters">
        <b-col cols="6">
            <b-button
                @click="login()"
                class="btn-block btn-login">Enter
            </b-button>
        </b-col>
    </b-row>
</b-container>

</template>

<script>
import axios from "axios";

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
                axios.post("http://localhost:49995/api/UserManagement/Login", { UserName: this.input.username, Password: this.input.password })
                .then(res => {
                    if(res.data.Result.Message == "Success"){
                        localStorage.setItem("userName", this.input.username)
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "/" });
                        // reload page after login
                        window.location.reload();
                    }
                    else {
                        alert("The username and / or password is incorrect");
                        this.input.password = [];
                    }
                })
            } else {
                alert("Username and password are required");
            }
        }
    },

}
</script>

<style scoped>
.background {
    background: #e8eaf6;
    padding: 20px;
    border-radius: 15px;
}

.header-border {
    border: 1px solid #283593;
    margin: 5px 0px;
}

.header-title {
    font-size: 24px;
    text-align: center;
    color: #ffffff;
    background-color: #283593;
    padding: 5px;
    border-radius: 5px;
}

.subheader-title {
    margin: 10px 0px 15px 0px;
    color: #283593;
    text-align: center;
}

.login-container {
    width: 530px;
    max-width: 100%;
    margin: 150px auto;
}

.btn-login, .icon-colors {
    background-color: #283593;
    color: #ffffff;
}

.form-control {
    border-radius: 0px 5px 5px 0px;
}

.custom-icon {
    font-size: 16px;
    border-radius: 5px 0px 0px 5px;
    text-align: center;
    border: 1.5px solid #ced4da;
    border-right: 0px;
    padding: 0.375rem 0rem;
    height: calc(1.5em + 0.75rem + 2px);
}

.row-margin {
    margin-bottom: 15px;
}
</style>