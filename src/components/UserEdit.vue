<template>
  <div class="card">
    <div class="card-content">
      <b-field label="First Name">
        <b-input maxlength="30" v-model="editUser.firstName"/>
      </b-field>
      <b-field label="Last Name">
        <b-input maxlength="30" v-model="editUser.lastName"/>
      </b-field>
      <b-field label="Email">
        <b-input maxlength="50" type="email" v-model="editUser.email"/>
      </b-field>
    </div>
    <footer class="card-footer">
      <router-link class="card-footer-item" :to="{ name: 'UserDetails' }">
        Cancel
      </router-link>
      <a class="card-footer-item" @click="saveUser">Save</a>
    </footer>
  </div>
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
      // todo: validation
      this.$emit('saveUser', this.editUser)
    }
  }
}
</script>

<style scoped>

</style>
