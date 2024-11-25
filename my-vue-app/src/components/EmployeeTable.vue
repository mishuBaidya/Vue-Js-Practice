<template>
    <div id="employee-table">
      <table>
        <thead>
          <tr>
            <th>Employee name</th>
            <th>Employee email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.name }}</td>
            <td>{{ employee.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
export default {
    name: 'employee-table',
    props: {
    employees: Array,
    },
}
</script>
  
<style scoped>

#employee-table {
  display: flex;
  align-items: center;
  justify-content: center;
}

#employee-table caption {
  font-size: 1.3em;
  margin: .5em 0 .75em;
}

#employee-table tr {
  padding: .35em;
}

#employee-table th,
#employee-table td {
  color: white;
  padding: .625em;
  text-align: center;
  border: 2px solid #ddd;
}

#employee-table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
  
}




</style>