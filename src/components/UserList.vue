<template>
  <div>
    <b-table
      :data="users"
      :loading="isLoading"
    >
      <template slot-scope="props">
        <b-table-column field="email" label="Email">
          {{ props.row.email }}
        </b-table-column>
        <b-table-column field="name" label="FullName">
          {{ props.row.firstName }}
        </b-table-column>
        <b-table-column field="action" label="">
          <div class="buttons">
            <router-link :to="{ name: 'UserDetails', id: props.row.id}">
              <button class="button is-link is-outlined">
                <b-icon
                  icon="pencil-alt"
                  size="is-small">
                </b-icon>
              </button>
            </router-link>
            <button class="button is-danger is-outlined">
              <b-icon
                icon="trash-alt"
                size="is-small">
              </b-icon>
            </button>
          </div>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
