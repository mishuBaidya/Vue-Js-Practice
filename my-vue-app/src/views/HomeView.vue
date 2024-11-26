<template>
    <h1>Home</h1>
    <input type="text" v-model="searched"/>
    <h2> Name List </h2>
    <div v-for="name in filteredNames" :key="name">
        {{ name }}
    </div>

</template>

<script>
import { ref, computed } from 'vue'
export default { 
    name: 'homeView', 


    setup(){

        const names = ref(['John', 'Jane', 'Joe', 'Mary', 'Max', 'Mick', 'Micheal', 'Mishu', 'Alice', 'Bob', 'Carol', 'David', 'Ed', 'Fiona', 'Gina', 'Hank', 'Iris']);
        const searched = ref('')

        const filteredNames = computed(() => {
            return names.value.filter(name => name.toLowerCase().includes(searched.value.toLowerCase()))
        })

        return {
            names,
            filteredNames,
            searched
        }
    }

}

</script>



<style>
    input{
        font-size: 18px
    }
</style>