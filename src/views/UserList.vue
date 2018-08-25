<template>
  <div>
    <page-title title="UserList" />
    <user-list :users="users" :isLoading="isLoading"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PageTitle from '@/components/common/PageTitle'
import UserList from '@/components/UserList'
export default {
  components: {
    PageTitle,
    UserList
  },
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
