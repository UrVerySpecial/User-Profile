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
          {{ props.row.firstName | fullName(props.row.lastName) }}
        </b-table-column>
        <b-table-column field="action" label="">
          <router-link :to="{ name: 'UserDetails', params: {id: props.row.id}}">
            <outline-button
              buttonType="is-link"
              icon="id-card"
            />
          </router-link>
          <outline-button
            buttonType="is-danger"
            icon="trash-alt"
          />
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import OutlineButton from './common/OutlineButton'
export default {
  components: {
    OutlineButton
  },
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
