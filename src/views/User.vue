<template>
  <div class="columns">
    <div v-if="!isLoading" class="column is-half is-offset-one-quarter">
      <b-loading :active.sync="isLoading"/>
      <router-view/>
    </div>
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
