<template>
  <div>
    <b-loading :active.sync="isLoading"/>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  created () {
    this.getUsers()
  },
  computed: {
    ...mapGetters({
      isLoading: 'user/isLoading'
    })
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
