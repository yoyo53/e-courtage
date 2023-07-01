<template>
  <div>
    <notifications />
    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f1f1f1;
  background: linear-gradient(to bottom left, #7ceb8c, #2c3b2e);
  height: 100dvh;
  overflow-y: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
