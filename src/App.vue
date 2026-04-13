<template>
  <div>
    <header class="header">
      <div class="logo">Pakistan Mart</div>

      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/deals">Deals</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>

    <router-view />
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 18px 50px;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);
  color: white;
  z-index: 1000;
  animation: slideDown 1s ease;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}

.nav a {
  margin-left: 20px;
  text-decoration: none;
  color: white;
  transition: 0.3s;
}

.nav a:hover {
  color: #00ffcc;
  transform: scale(1.1);
}

@keyframes slideDown {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}
</style>