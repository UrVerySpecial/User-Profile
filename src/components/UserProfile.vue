<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img class="is-rounded" :src="user.email | gravatarUrl" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ user.firstName | fullName(user.lastName) }}</p>
          <p class="subtitle is-6">{{ user.email }}</p>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" @click="showChangePasswordDialog">Change Password</a>
      <router-link class="card-footer-item" :to="{ name: 'UserEdit'}">
        Edit
      </router-link>
    </footer>
    <b-modal :active.sync="isChangePasswordModalActive" has-modal-card>
      <change-password-modal @changePassword="changePassword"/>
    </b-modal>
  </div>
</template>

<script>
import ChangePasswordModal from './ChangePasswordModal'
export default {
  data () {
    return {
      isChangePasswordModalActive: false
    }
  },
  components: {
    ChangePasswordModal
  },
  props: {
    user: {
      type: Object
    }
  },
  methods: {
    showChangePasswordDialog () {
      this.isChangePasswordModalActive = true
    },
    changePassword (newPassword) {
      console.log('changePassword', newPassword)
    }
  }
}
</script>

<style scoped>

</style>
