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
            <router-link :to="{ name: 'employeeDetails', params: { id: employee.id } }"  >
              <td>{{ employee.name }}</td>
            </router-link>
            <td>{{ employee.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
export default {
    name: 'employee-table',
    setup() {
        const store = useStore()
        const employees = (computed(() => store.getters.getEmployees))
        //console.log(employees)
        return {
          store,
          employees
        }
    }
}
</script>
  
<style scoped>

#employee-table {
  margin-top: 2rem;
}

table {
  width: 50vw;
  border-collapse: collapse;
  border: 5px solid #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 4px rgba(231, 224, 224, 0.1);  
}

thead, tbody {
  border: 1px solid #ffffff;
}

th, td {
  padding: 10px;
  text-align: center;
}

th {
  font-weight: bold;
}



</style>