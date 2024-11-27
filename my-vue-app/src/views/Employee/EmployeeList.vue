<script>
  import EmployeeTable from '../../components/EmployeeTable.vue'
  import EmployeeForm from '../../components/EmployeeForm.vue'

  export default {
    name: 'EmployeeView',
    components: {
      EmployeeTable,
      EmployeeForm,
    },
  }
</script>


<template>
  <div class="small-container">
    <h1>Employees</h1>
    <employee-form />
    <employee-table />
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


