<template>
 <div id="app">
    <!-- Add Nav Bar boostap -->
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <!-- router link to index -->
      <router-link to="/" class="navbar-brand"><div style=" margin-left: 40px;">BOKIE</div></router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <!-- router link to /tutorials -->
          <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <!-- router link to /add -->
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
