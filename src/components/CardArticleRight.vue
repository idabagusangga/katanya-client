<template lang="html">
  <div class="content-left">
    <h4>{{errorMessages}}</h4>
    <LoginForm v-if="!loginState"></LoginForm>
    <Logout v-if="loginState" style="margin-left:70px;" @click="logout"></Logout>
    <br>
    <div class="list-group">
        <h4>Articles List</h4>
    <TheLinks v-for="a in articlesComputed.articles" :key="a._id" :article="a">{{articlesComputed}}</TheLinks>
  </div>
  <br>
  <h4>Post New Article</h4>
    <NewArticle></NewArticle>
</div>

</template>

<script>
import TheLinks from '@/components/TheLinks'
import NewArticle from '@/components/NewArticle'
import LoginForm from '@/components/LoginForm'
import Logout from '@/components/logout'
export default {
  components: {
    TheLinks: TheLinks,
    NewArticle: NewArticle,
    LoginForm: LoginForm,
    Logout: Logout
  },
  computed: {
    articlesComputed () {
      return this.$store.state.articles
    },
    errorMessages () {
      return this.$store.state.msg
    },
    loginState () {
      return this.$store.state.isLoggedin
    }
  },
  created () {
    this.$store.dispatch(`checkLoginState`)
  },
  methods: {
    logout () {
      location.reload()
    }
  }
}
</script>

<style lang="css">
.card {
  margin: auto;
}
.content-left {
  margin: 50px auto;
  max-width: 300px;
  
}
</style>
