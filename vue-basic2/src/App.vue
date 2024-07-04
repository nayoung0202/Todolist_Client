<template>
  <nav>
    <router-link to="/">Main</router-link> 
  </nav>
  <nav class="navbar navbar-light bg-light">
  <form class="container-fluid justify-content-start">
    <router-link class="btn btn-outline-primary mx-2" to="about">로그인</router-link>
    <router-link class="btn btn-outline-success mx-2" to="list">list</router-link>
    <button class="btn btn-outline-success mx-2" type="button">문의</button>
    <div class="navbar-text ml-auto">
          환영합니다람쥐
  </div>
  </form>
</nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  padding: 30px;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}

.navbar-text {
  margin-left: auto;
}

.btn-about {
  background-color: #007bff; /* Bootstrap primary color */
  color: #fff; /* White text */
}

.btn-list {
  background-color: #28a745; /* Bootstrap success color */
  color: #fff; /* White text */
}

</style>

