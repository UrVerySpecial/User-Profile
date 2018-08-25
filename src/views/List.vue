<template>
  <div>
    List
    {{users}}
    <b-icon
        icon="coffee"
        size="is-small">
    </b-icon>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      users: 'user/users'
    })
  }
}
</script>

<style scoped>

</style>
