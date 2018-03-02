<template lang="html">
  <button type="button" class="btn btn-danger" @click="logout">Logout</button>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$store.dispatch('fbLogout')
      this.$store.dispatch('changeIsLoggedIn', false)
      location.reload(true)
    }
  }
}
</script>

<style lang="css">
</style>
