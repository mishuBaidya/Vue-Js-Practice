import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    employees: [
      {
        id: 1,
        name: "Mishu Baidya",
        email: "mishu.baidya@enosisbd.com",
      },
      {
        id: 2,
        name: "Swapnil Biswas",
        email: "swapnil.biswas@enosisbd.com",
      },
    ],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addEmployee(state, employee) {
      employee.id = state.employees.length + 1;
      state.employees = [...state.employees, employee];
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },

    addEmployee(context, employee) {
      context.commit("addEmployee", employee);
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },

    getEmployees(state) {
      return state.employees;
    },
  },
});
