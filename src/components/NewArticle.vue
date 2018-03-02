<template lang="html">
  <div class="form-group">
    <div class="form-group">
  <label for="exampleInput">Title</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="required field" v-model="title">
</div>
  <div class="form-group">
  <label for="exampleTextarea">Short Content</label>
  <textarea class="form-control" id="exampleTextarea" rows="2" placeholder="short desciption of your article" v-model="shortContent"></textarea>
</div>  
<div class="form-group">
  <label for="exampleTextarea">Main Content</label>
  <textarea class="form-control" id="exampleTextarea" rows="4" placeholder="desciption of your article" v-model="longContent"></textarea>
</div>
<button type="button" class="btn btn-secondary" title="" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="Popover Title" @click="postArticle">Submit</button>
</div>

</template>

<script>
export default {
  data () {
    return {
      title: '',
      shortContent: '',
      longContent: ''
    }
  },
  methods: {
    postArticle () {
      let payload = {
        title: this.title,
        shortContent: this.shortContent,
        longContent: this.longContent,
        token: localStorage.getItem('token')
      }
      this.$store.dispatch('postNewArticle', payload)
      this.title = ''
      this.shortContent = ''
      this.longContent = ''
    }
  }
}
</script>

<style lang="css">
</style>
