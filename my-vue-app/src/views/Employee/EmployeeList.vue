<script>
  import EmployeeTable from '../../components/EmployeeTable.vue'
  import EmployeeForm from '../../components/EmployeeForm.vue'

  export default {
    name: 'EmployeeView',
    components: {
      EmployeeTable,
      EmployeeForm,
    },
    data() {
    return {
      employees: [
            {
                id: 1,
                name: 'Mishu Baidya',
                email: 'mishu.baidya@enosisbd.com',
            },
            {
                id: 2,
                name: 'Swapnil Biswas',
                email: 'swapnil.biswas@enosisbd.com',
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>


