<template>
  <div class="columns">
    <div class="card column is-half is-offset-one-quarter">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
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
export default {
  props: {
    user: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
