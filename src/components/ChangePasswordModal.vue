<template>
  <form @submit.prevent="savePassword">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Change Password</p>
      </header>
    <section class="modal-card-body">
      <div class="field">
        <label class="label">
          Password
        </label>
        <div class="control is-clearfix has-icons-right">
          <input
            class="input"
            autocomplete="on"
            :type="passwordField"
            placeholder="Input new password"
            v-model="newPassword"
            required
          />
          <b-icon
            @click.native="changePasswordStatus"
            class="is-right has-text-info is-clickable"
            :icon="passwordIcon"
            size="is-small">
          </b-icon>
        </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
      <button class="button is-primary">Save</button>
    </footer>
    </div>
  </form>
</template>

<script>
import zxcvbn from 'zxcvbn'

const PASSWORD_INPUT_TYPE = 'password'
const TEXT_INPUT_TYPE = 'text'

export default {
  data () {
    return {
      newPassword: '',
      passwordField: PASSWORD_INPUT_TYPE
    }
  },
  computed: {
    passwordIcon () {
      return this.passwordField === PASSWORD_INPUT_TYPE ? 'eye' : 'eye-slash'
    }
  },
  watch: {
    newPassword (changePassword) {
      console.log(zxcvbn(changePassword))
    }
  },
  methods: {
    savePassword () {
      this.$emit('changePassword', this.newPassword)
      this.$parent.close()
    },
    changePasswordStatus () {
      console.log('changePasswordStatus')
      if (this.passwordField === PASSWORD_INPUT_TYPE) {
        this.passwordField = TEXT_INPUT_TYPE
      } else {
        this.passwordField = PASSWORD_INPUT_TYPE
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.modal-card-foot {
  justify-content: flex-end;
}
</style>
