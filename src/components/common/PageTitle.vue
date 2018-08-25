<template>
  <div>
    <h1 class="title is-spaced"> {{ title }}</h1>
    <!-- subtime is optional, but to add space between title and body, add subtitle even there is no subtitle -->
    <h2 class="subtitle">{{ subTitle || '' }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: String
  }
}
</script>

<style scoped>

</style>
