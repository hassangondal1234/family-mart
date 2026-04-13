<template>
  <section class="about">

    <!-- BACKGROUND EFFECT LAYERS -->
    <div class="bg"></div>
    <div class="glow"></div>

    <div class="container">

      <!-- LEFT CONTENT -->
      <div class="left">

        <h1>About Pakistan Mart</h1>

        <p class="tagline">
          Modern Grocery Experience for Every Home in Pakistan
        </p>

        <p>
          Pakistan Mart is a next-generation grocery platform designed to bring
          freshness, affordability, and convenience directly to your doorstep.
          We combine technology with trust to redefine daily shopping.
        </p>

        <p>
          From premium rice to daily essentials, we ensure every product is
          carefully selected, quality-checked, and delivered with speed.
        </p>

        <!-- FEATURES -->
        <div class="features">

          <div class="feature">
            ⚡ Fast Delivery
          </div>

          <div class="feature">
            💯 Premium Quality
          </div>

          <div class="feature">
            💰 Best Prices
          </div>

        </div>

        <button class="btn">Explore Store</button>

      </div>

      <!-- RIGHT VISUAL CARD -->
      <div class="right">

        <div class="image-card">
          <img src="https://cdn.pixabay.com/photo/2014/04/02/13/07/choctaw-bluff-305932_1280.jpg" />
        </div>

        <div class="stats">

          <div class="stat">
            <h2>10K+</h2>
            <p>Customers</p>
          </div>

          <div class="stat">
            <h2>500+</h2>
            <p>Products</p>
          </div>

          <div class="stat">
            <h2>24/7</h2>
            <p>Support</p>
          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>

/* MAIN SECTION */
.about {
  position: relative;
  min-height: 100vh;
  padding: 80px 20px;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* GRADIENT BACKGROUND (PRO LEVEL) */
.bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, #0f172a, #1e3a8a, #0f172a);
  background-size: 300% 300%;
  animation: gradientMove 10s ease infinite;
  z-index: 0;
}

/* GLOW EFFECT */
.glow {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255,215,0,0.25), transparent 70%);
  top: -150px;
  right: -150px;
  filter: blur(40px);
  z-index: 0;
}

/* CONTAINER */
.container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* LEFT SIDE */
.left {
  flex: 1;
  animation: fadeInUp 1s ease;
}

.left h1 {
  font-size: 50px;
  margin-bottom: 10px;
}

.tagline {
  color: #facc15;
  font-weight: bold;
  margin-bottom: 20px;
}

.left p {
  line-height: 1.8;
  opacity: 0.85;
  margin-bottom: 12px;
}

/* FEATURES */
.features {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.feature {
  background: rgba(255,255,255,0.08);
  padding: 10px 15px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  font-size: 13px;
}

/* BUTTON */
.btn {
  margin-top: 25px;
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #facc15, #f97316);
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  transform: scale(1.08);
}

/* RIGHT SIDE */
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* IMAGE CARD */
.image-card {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  animation: zoomIn 1.2s ease;
}

.image-card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

/* STATS */
.stats {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.stat {
  flex: 1;
  min-width: 120px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  transition: 0.3s;
}

.stat:hover {
  transform: translateY(-8px);
}

.stat h2 {
  color: #facc15;
  font-size: 26px;
}

/* ANIMATIONS */
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .left h1 {
    font-size: 34px;
  }

  .container {
    flex-direction: column;
  }

  .image-card img {
    height: 220px;
  }
}
</style>