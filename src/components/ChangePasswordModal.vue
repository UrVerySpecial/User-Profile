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
          <div v-if="newPassword" class="password-meter">
            <svg viewBox="0 0 123 2" class="password-meter__bar" preserveAspectRatio="none">
              <path v-for="(n,index) in 4" :key="index"
                :d="getActivePath(index)"
                :class="strengthClass(index)"
              ></path>
            </svg>
            <div class="help is-pulled-right" :class="strengthMessageAndClass.class">{{strengthMessageAndClass.message}}</div>
          </div>
        </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
      <button class="button is-primary" :disabled="passwordStrength < MIN_PASSWORD_STRENGTH">Save</button>
    </footer>
    </div>
  </form>
</template>

<script>
import zxcvbn from 'zxcvbn'
import { mapActions } from 'vuex'

const PASSWORD_INPUT_TYPE = 'password'
const TEXT_INPUT_TYPE = 'text'
const STRENGTH_CLASSE_AND_MSG = [
  {
    class: 'password-meter__bar__very-weak',
    message: 'Very Weak'
  },
  {
    class: 'password-meter__bar__weak',
    message: 'Weak'
  },
  {
    class: 'password-meter__bar__medium',
    message: 'Medium'
  },
  {
    class: 'password-meter__bar__strong',
    message: 'strong'
  },
  {
    class: 'password-meter__bar__very-strong',
    message: 'Very Strong'
  }
]
export default {
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      newPassword: '',
      passwordField: PASSWORD_INPUT_TYPE,
      passwordStrength: 0,
      MIN_PASSWORD_STRENGTH: 2
    }
  },
  computed: {
    passwordIcon () {
      return this.passwordField === PASSWORD_INPUT_TYPE ? 'eye' : 'eye-slash'
    },
    strengthMessageAndClass () {
      return STRENGTH_CLASSE_AND_MSG[this.passwordStrength]
    }
  },
  watch: {
    newPassword (changePassword) {
      this.passwordStrength = zxcvbn(changePassword).score
    }
  },
  methods: {
    ...mapActions('user', [
      'changePassword'
    ]),
    savePassword () {
      let payload = {
        userId: this.userId,
        newPassword: this.newPassword
      }
      try {
        this.changePassword(payload)
        this.$toast.open({
          message: 'Password has changed!',
          type: 'is-success'
        })
      } catch (e) {
        this.$toast.open({
          message: 'Error has occured',
          type: 'is-danger'
        })
      } finally {
        this.$parent.close()
      }
    },
    changePasswordStatus () {
      if (this.passwordField === PASSWORD_INPUT_TYPE) {
        this.passwordField = TEXT_INPUT_TYPE
      } else {
        this.passwordField = PASSWORD_INPUT_TYPE
      }
    },
    getActivePath (index) {
      /*
      display strength bar like
      ------ ------ ------ ------
      */
      const offset = 30
      return `M${offset * index + index} 1 L${offset * (index + 1) + index} 1`
    },
    strengthClass (index) {
      if (this.passwordStrength <= index) return ''
      return STRENGTH_CLASSE_AND_MSG[this.passwordStrength].class
    }
  }
}
</script>

<style scoped lang='scss'>
.modal-card-foot {
  justify-content: flex-end;
}
.password-meter {
  .password-meter__bar {
    color: rgb(204, 204, 204);
    display: block;
    height: .5rem;
    margin-top: .2rem;
    padding-left: .5rem;
    padding-right: .5rem;
    width: 100%;
    path {
      stroke: currentColor;
      stroke-width: 2;
    }
  }
  .password-meter__bar__weak {
    color: rgb(255, 0, 0)
  }
  .password-meter__bar__medium {
    color: rgb(255, 160, 65);
  }
  .password-meter__bar__strong {
    color: rgb(93, 185, 70);
  }
  .password-meter__bar__very-strong {
    color: rgb(25, 0, 255);
  }
}
</style>
