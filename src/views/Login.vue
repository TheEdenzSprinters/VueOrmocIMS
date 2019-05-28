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
    <b-row align-h="center" class="input-group form-group">
        <b-col class="col-md-6 input-group-prepend">
                <span class="fa-align-custom">
                    <font-awesome-icon class="icon fa-align-center" icon="user" />
                </span>
            <input 
            type="text"
            class="form-control input-custom"
            placeholder="Username"
            v-model="input.username"
            required>
        </b-col>
    </b-row>
    <b-row align-h="center" class="input-group form-group">
        <b-col class="col-md-6 input-group-prepend">
            <span class="fa-align-custom">
                <font-awesome-icon class="icon fa-align-center" icon="key" />
            </span>
            <input 
            type="password"
            placeholder="Password"
            class="form-control input-custom"
            v-model="input.password"
            required>
        </b-col>
    </b-row>
    <b-row align-h="center" class="input-group form-group">
        <b-col class="col-md-3">
            <b-button
                @click="login()"
                class="btn-block btn-login">Enter
            </b-button>
        </b-col>
    </b-row>
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
                    // Alert about wrong credentials and reset typed fields
                    alert("The username and / or password is incorrect");
                    this.input = [];
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
    color: #fff;
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

.login-container .btn-login {
    background-color: #283593;
    color: #fff;
}

.input-group-prepend span {
    width: 50px;
    border-radius: 5px;
    background-color: #283593;
    color: #ffffff;
    border:0 !important;
}

.input-custom {
    margin-left: -6px;
}

.fa-align-custom {
    display: inline-block; 
    text-align: center;
    font-size: 18px;
    padding-right: 5px;
}

</style>