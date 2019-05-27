<template>
  <div id="app">
    <div id="nav">
      <ul id="List">
        <li class="Item">
          <router-link to="/" class="SLink" exact>Home</router-link>
        </li>
        <li class="Item">
          <router-link route :to="{name: 'tv'}" class="SLink" exact>tv</router-link>
        </li>
        <li class="Item">
          <router-link route :to="{name: 'search'}" class="SLink" exact>search</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style>
a{
  text-decoration:none;
  color:inherit;
}
*{
  box-sizing: border-box;
}
body {
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:12px;
  background-color: rgba(20, 20, 20, 1);
  color: white;
  padding-top: 50px;
}
#nav {
  color: white;
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  height:50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index:2;
}
#List {
  display: flex;
}
.Item {
  width: 50px;
  height: 50px;
  text-align: center;
}

.SLink {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
