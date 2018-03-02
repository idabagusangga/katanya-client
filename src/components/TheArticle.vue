<template lang="html">
  <div class="">
    <div class="card text-white bg-dark mb-6 offset-2" style="min-height:250px;">
    <div class="card-header">{{article.author}}  <a href="#" style="margin-left:220px" @click="removeArticle(article._id)" v-if="userCrud">Remove</a></div>
    <div class="card-body">
      <h4 class="card-title">{{article.title}}</h4>
      <p class="card-text" style="">{{article.longContent}}</p>
    </div>
  </div>

</div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    article () {
      return this.$store.state.article
    },
    author () {
      return this.$store.state.user
    },
    userCrud () {
      if (this.author === this.article.author || this.$store.state.role === 'admin') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    removeArticle (id) {
      this.$store.dispatch('destroyArticle', id)
    }
  },
  created () {
    this.$store.dispatch('getArticle', this.id)
  },
  watch: {
    id (newId) {
      this.$store.dispatch('getArticle', newId)
    }
  }
}
</script>

<style lang="css">
</style>
