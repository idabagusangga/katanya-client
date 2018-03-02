<template lang="html">
  <div class="col-md-8 offset-2">
    <div class="list-group">
      <ListTitles v-for="a in allArticles" :key="a._id" :article="a"></ListTitles>
    </div>
  </div>

</template>

<script>
import ListTitles from '@/components/ListTitles'
// import LoginForm from '@/components/LoginForm'
export default {
  data () {
    return {
      msg: 'Please log in before posting'
    }
  },
  components: {
    ListTitles: ListTitles
    // LoginForm: LoginForm
  },
  computed: {
    allArticles () {
      return this.$store.state.articles.articles
    },
    loginState () {
      return this.$store.state.isLoggedin
    }
  }
}
</script>

<style scoped lang="css">
.card {
  margin: auto;
}

.layout {
  margin-top: 120px;
}

</style>
