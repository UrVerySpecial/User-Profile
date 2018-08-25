<template>
  <form @submit.prevent="saveUser">
    <div class="card">
      <div class="card-content">
        <b-field label="First Name" :type="amIError('firstName')" :message="getErrorMsg('firstName')">
          <b-input name="firstName" v-validate="'required|max:30'" v-model="editUser.firstName"/>
        </b-field>
        <b-field label="Last Name" :type="amIError('lastName')" :message="getErrorMsg('lastName')">
          <b-input name="lastName" v-validate="'required|max:30'" v-model="editUser.lastName"/>
        </b-field>
        <b-field label="Email" :type="amIError('email')" :message="getErrorMsg('email')">
          <b-input name="email" v-validate="'required|email'" v-model="editUser.email"/>
        </b-field>
      </div>
      <footer class="card-footer">
        <router-link class="card-footer-item" :to="{ name: 'UserDetails' }">
          Cancel
        </router-link>
        <!-- I wanted to submit at this, but normally can't submit inside a tag, and if I change this to button tag style has changed. -->
        <a class="card-footer-item" @click="saveUser">Save</a>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    user: {
      type: Object
    }
  },
  data () {
    return {
      editUser: {...this.user}
    }
  },
  methods: {
    saveUser () {
      console.log('this.errors', this.errors)
      if (this.errors.any()) return
      this.$emit('saveUser', this.editUser)
    },
    amIError (inputName) {
      if (this.errors.has(inputName)) {
        return 'is-danger'
      }
      return ''
    },
    getErrorMsg (inputName) {
      return this.errors.first(inputName)
    }
  }
}
</script>

<style scoped>

</style>
