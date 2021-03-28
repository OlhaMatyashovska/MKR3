<template>
  <nav>
<li><router-link to="/student">Інформація про студента</router-link></li>
<li><router-link to="/theory">Теоретичне запитання</router-link></li>
<li><router-link to="/photos">Інтерфейс фотографій</router-link></li>
</nav>
  <router-view>
  </router-view>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{}
  }
  
}
</script>

<style>

</style>
