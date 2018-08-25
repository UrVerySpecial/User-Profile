<template>
  <div>
    <page-title title="User Edit" />
    <user-edit
      v-if="currentUser"
      :user="currentUser"
      @saveUser="saveUser"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PageTitle from '@/components/common/PageTitle'
import UserEdit from '@/components/UserEdit'
export default {
  components: {
    PageTitle,
    UserEdit
  },
  computed: {
    ...mapGetters({
      userById: 'user/userById'
    }),
    currentUser () {
      return this.userById(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions('user', [
      'editUser'
    ]),
    async saveUser (editedUser) {
      await this.editUser(editedUser)
      this.$toast.open({
        message: 'Saved!',
        type: 'is-success'
      })
      this.$router.push({ name: 'UserDetails' })
    }
  }
}
</script>

<style scoped>

</style>
