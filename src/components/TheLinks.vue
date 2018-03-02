<template lang="html">
  <router-link :to="{name:'Article',params:{id:article._id}}" class="list-group-item list-group-item-action" :id="id">
  {{article.title}}
</router-link>
</template>

<script>
export default {
  data () {
    return {
      id: this.article._id
    }
  },
  props: ['article']
}
</script>

<style lang="css">
</style>
