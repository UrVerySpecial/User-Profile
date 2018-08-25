<template>
  <div>
    <user-profile :user="userById($route.params.id)"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '@/components/UserProfile'
export default {
  components: {
    UserProfile
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
