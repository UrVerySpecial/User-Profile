<template>
  <div class="columns">
    <div class="card column is-half is-offset-one-quarter">
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
    </div>
  </div>
</template>

<script>
import md5 from 'md5'

export default {
  props: {
    user: {
      type: Object
    }
  },
  methods: {
    test () {
      let md5Email = md5(this.user.email)
      console.log(md5Email)
      return `http://www.gravatar.com/avatar/${md5Email}`
    }
  }
}
</script>

<style scoped>

</style>
