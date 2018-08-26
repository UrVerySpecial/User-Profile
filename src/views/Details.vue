<template>
  <div>
    <router-link :to="{ name: 'UserList' }">
      <outline-button icon="chevron-left" title="Back"/>
    </router-link>
    <user-profile :user="userById($route.params.id)"/>
  </div>
</template>

<script>
import OutlineButton from '../components/common/OutlineButton'
import { mapGetters } from 'vuex'
import UserProfile from '@/components/UserProfile'
export default {
  components: {
    UserProfile,
    OutlineButton
  },
  computed: {
    ...mapGetters({
      userById: 'user/userById'
    })
  }
}
</script>

<style scoped>

</style>
