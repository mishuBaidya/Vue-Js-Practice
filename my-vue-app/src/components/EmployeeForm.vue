<template>
  <div >
    <form id="employee-form" @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name</label>
        <input v-model="employee.name" type="text" id ="name"/>
        <label for="email"> Email</label>
        <input v-model="employee.email" type="text" id ="email"/>
      </div>
      
      <button >Add Employee</button>
    </form>
  </div>
</template>

<script>
import { useStore } from 'vuex'
  export default {
    name: 'employee-form',
    setup(){
        const store = useStore()
        const employee = {
            id: null,
            name: '',
            email: '',
        }

        const handleSubmit = () => {
          console.log(employee)
            store.dispatch('addEmployee', employee)
        }

        return { 
          store,
          employee,
            handleSubmit
         }
    }
    
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