<template lang="html">
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active rapiin">
  <div class="d-flex w-100 justify-content-between activeColor">
    
      <h5 class="mb-1">{{article.title}}</h5>
      <small>{{article.author}}</small>
    </div>
    <p class="mb-1">{{article.shortContent}}</p>
    <small>Donec id elit non mi porta.</small>
  </a>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="css">
.rapiin {
  margin-bottom: 15px;
}

.active {
  /*color: #708D81;*/
  background-color: #1A1B25 !important;
}
</style>
