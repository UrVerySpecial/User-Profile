<template>
  <button class="button is-outlined" :class="buttonType">
    <b-icon
      :icon="icon"
      size="is-small">
    </b-icon>
  </button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      default: 'is-primary'
    },
    icon: String,
    title: String
  }
}
</script>

<style scoped>

</style>
