<script>
  export default {
    name: 'app',
    components: {
    },
    data() {
      }
  }
</script>


<template>
  <div id="nav">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{name: 'about'}">About</router-link>
    </nav>
  </div>
  <div>
    <router-view/>
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

  #nav{
    padding: 30px;
  }
  #nav a {
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    font-weight: bold;
    color: white;
  }
</style>


