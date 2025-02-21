<template>
  <header id="container-header">
    <nav id="container-nav">
      <ul id="container-ul">
        <li>
          <RouterLink to="/">Hem</RouterLink>
        </li>
        <li>
          <RouterLink to="/register">Result</RouterLink>
        </li>
        <li>
          <RouterLink to="/scoretable">Leaderboard</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style>
#container-header {
  background-color: #333;
  color: whitesmoke;
}
#container-nav {
  /* background-color: pink; */
  display: flex;
  flex-direction: row;
}
#container-ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}
</style>
