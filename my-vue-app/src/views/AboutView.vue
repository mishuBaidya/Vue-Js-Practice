
<script>
import { useStore } from 'vuex'
    export default { 
        name: 'aboutView', 
        setup(){
            
            const store = useStore()
            return { store }
        }
    
    
    }

</script>

<template>
    <h1>About</h1>

    <h2> {{ store.getters.getCount }}</h2>


</template>

<style>
    
</style>