<template>
  <div id="app">
    <!-- navbar -->
      <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div class="container">
          <router-link to="/" class="navbar-brand">Home</router-link>
          <router-link class="nav-link" to="/blog">Blog</router-link>
          <router-link class="nav-link" to="/contact">contact</router-link>
        </div>
      </div>
    <router-view />
    <div class="container">
      <transition name="moveInUp">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.moveInUp-enter-active{
  animation: fadeIn 2s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}
</style>