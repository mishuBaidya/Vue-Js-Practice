

<script>
  import EmployeeTable from './components/EmployeeTable.vue'
  import EmployeeForm from './components/EmployeeForm.vue'

  export default {
    name: 'app',
    components: {
      EmployeeTable,
      EmployeeForm,
    },
    data() {
    return {
      employees: [
        {
          name: 'Mishu Baidya',
          email: 'mishu.baidya@enosisbd.com',
        },
          ],
      }},
      methods: {
        addEmployee(employee) {
          this.employees = [...this.employees, employee]
        }
      }
  }
</script>


<template>
  <div class="small-container">
    <h1>Employees</h1>
    <employee-form @add:employee="addEmployee" />
    <employee-table :employees="employees" />
  </div>
</template>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 680px;
  }
</style>


