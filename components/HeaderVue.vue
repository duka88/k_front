<template>
  <div class="header">  
    <div class="side">
      <div class="top">
        <div class="logo ">
          <nuxt-link to="/"><img src="~/assets/images/logo.png" /></nuxt-link>
        </div>
        <div class="login-wrap">
          <a v-if="!token" @click="loginForm = 'login'">Login / Register</a>
          <a v-else @click="logOut()">Logout</a>
        </div>
        <div class="nav-wrap">
          <div class="nav">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
            <nuxt-link to="/">Contact </nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
          </div>
          <div class="social">
            <div class="line"></div>
            <div class="addthis_inline_share_toolbox"></div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="line"></div>
        <div class="link-wrap">
          <nuxt-link to="/">Privacy Policy</nuxt-link>
          <a href="">Created</a>
        </div>
      </div>
    </div>
    <div v-if="loginForm" id="loginForm">
    </div>
    <div v-if="loginForm" class="form">
      <transition name="flip" mode="out-in">
        <div v-if="loginForm === 'login'" key="login">
          <div class="form-wrap">
            <div class="close-container">
              <div @click="loginForm = 'register'" class="main-button">Register</div>
              <div @click="loginForm = false" class="close"><i class="fas fa-times"></i></div>
            </div>
            <label for="name">Email</label>
            <input v-model="loginName" type="email" name="name">
            <label for="password">Password</label>
            <input v-model="loginPass" type="password" name="password">
            <div @click="login()" class="main-button">Login</div>
          </div>
        </div>
        <div v-if="loginForm === 'register'" key="register">
          <div class=" form-wrap">
            <div class="close-container">
              <div @click="loginForm = 'login'" class="main-button">Login</div>
              <div @click="loginForm = false" class="close"><i class="fas fa-times"></i></div>
            </div>
            <label for="user_name">User Name</label>
            <input v-model="userName" type="text" name="user_name">
            <label for="name">Email</label>
            <input v-model="email" type="email" name="name">
            <label for="password">Password</label>
            <input v-model="password" type="password" name="password">
            <label for="confirm_password">Confirm Password</label>
            <input v-model="confirm_password" type="password" name="confirm_password">
            <div @click="register()" class="main-button">Login</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {


  data() {
    return {
      loginForm: false,
      loginName: 'mail@mail.com',
      loginPass: 'mail@mail.com',
      userName: 'mail@mail.com',
      email: 'mail@mail.com',
      password: 'mail@mail.com',
      confirm_password: 'mail@mail.com'
    }
  },

  methods: {
    login() {

      this.$store.dispatch('retrieveToken', {
        username: this.userName,
        password: this.password
      })
    },
    logOut() {

      this.$store.dispatch('logOut');
    },
    register() {
      this.$axios.post('/api/register', {

          name: this.userName,
          email: this.email,
          password: this.password,

        })
        .then((data) => {
          console.log(data)
        })
        .catch((data) => {
          console.log(data)
        })
    }
  },
  computed: {
    ...mapState({
      token: state => state.token,


    })
  }

}

</script>
