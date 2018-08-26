<template>
  <button class="button is-outlined" :class="buttonType">
    <b-icon
      v-if="icon"
      :icon="icon"
      size="is-small">
    </b-icon>
    <span v-if="title">{{title}}</span>
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
