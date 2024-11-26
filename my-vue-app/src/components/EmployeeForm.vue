<template>
  <div >
    <form @submit.prevent="handleSubmit" id="employee-form">
      <div>
        <label>Name</label>
        <input v-model="employee.name" type="text" />
        <label> Email</label>
        <input v-model="employee.email" type="text" />
      </div>
      
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

  #employee-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #employee-form label {
    font-size: 18px;
    font-weight: bold;
    margin: 10px;
  }

  #employee-form button {
    margin-top: 1rem;
    width: 30vh;

  }
</style>