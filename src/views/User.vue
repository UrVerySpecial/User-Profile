<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created () {
    this.getUsers()
  },
  methods: {
    ...mapActions('user', [
      'getUsers'
    ])
  }
}
</script>

<style scoped>

</style>
