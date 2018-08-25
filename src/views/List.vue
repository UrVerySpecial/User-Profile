<template>
  <div>
    List
    {{users}}
    {{isLoading}}
    <b-icon
        icon="coffee"
        size="is-small">
    </b-icon>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created () {
    this.getUsers()
  },
  computed: {
    // https://vuex.vuejs.org/guide/modules.html
    ...mapGetters({
      users: 'user/users',
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
