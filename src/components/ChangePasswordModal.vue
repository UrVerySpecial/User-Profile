<template>
  <form @submit.prevent="savePassword">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Change Password</p>
      </header>
    <section class="modal-card-body">
    <b-field label="Password">
      <b-input
        type="password"
        placeholder="Input new password"
        v-model="newPassword"
        required>
      </b-input>
    </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
      <button class="button is-primary">Save</button>
    </footer>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      newPassword: ''
    }
  },
  methods: {
    savePassword () {
      this.$emit('changePassword', this.newPassword)
      this.$parent.close()
    }
  }
}
</script>

<style scoped lang='scss'>
.modal-card-foot {
  justify-content: flex-end;
}
</style>
