<template>
  <div id="employee-form">
    <form @submit.prevent="handleSubmit">
      <label>Name</label>
      <input v-model="employee.name" type="text" />
      <label> Email</label>
      <input v-model="employee.email" type="text" />
      <button>Add Employee</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'employee-form',
    data() {
      return {
        employee: {
          name: '',
          email: '',
        },
      }
    },
    methods: {
    handleSubmit() {
      console.log('testing handleSubmit')
      this.$emit('add:employee', this.employee)
    },
  },
  }
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input{
    height: 6vh;
    font-size: 18px;
  }
</style>