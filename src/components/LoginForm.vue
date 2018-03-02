<template lang="html">
  <div class="">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" @keyup.enter="loginButton">
  </div>
  <p>Don't have an account?<a href="#" @click="register"> Register</a></p>
  <h4>or</h4>
  <button type="button" class="btn btn-info" style="margin-left:40px;" @click="facebook">Log in with facebook</button>
  </div>

</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginButton () {
      let payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    },
    facebook () {
      this.$store.dispatch('fbLogin')
    },
    register () {
      let payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style lang="css">

</style>
