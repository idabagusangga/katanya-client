<template>
  <div class="">
    <TheNavBar/>
    <div class="row">
      <div class="col-md-6 content-top">


        <CardArticleRight/>
      </div>
      <div class="col-md-6 content-top">
        <div class="container logo">
          <Logo/>
        </div>
        <router-view></router-view>
      </div>
    </div>

  </div>

</template>

<script>
import CardArticleLeft from '@/components/CardArticleLeft'
import CardArticleRight from '@/components/CardArticleRight'
import TheNavBar from '@/components/TheNavBar'
import Logo from '@/components/Logo'
import { mapActions } from 'vuex'
export default {
  components: {
    CardArticleRight: CardArticleRight,
    CardArticleLeft: CardArticleLeft,
    TheNavBar: TheNavBar,
    Logo: Logo
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  mounted () {
    this.getAllArticles()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2, h3, h4 {
  font-weight: normal;
  color: #F4D58D;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.margin-card {
  margin-bottom: 20px;
}

.content-top {
  margin-top: 40px;
}

.logo {
  margin-bottom: 20px;
}


</style>
