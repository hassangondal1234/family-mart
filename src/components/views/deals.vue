<template>
  <section class="deals">

    <!-- BACKGROUND LAYER -->
    <div class="bg"></div>
    <div class="overlay"></div>

    <!-- HERO -->
    <div class="hero">
      <h1>🔥 Mega Deals Store</h1>
      <p>Limited time premium grocery offers — grab before it’s gone</p>
    </div>

    <!-- DEAL GRID -->
    <div class="grid">

      <!-- ITEM 1 -->
      <div class="card">
        <span class="badge">-35%</span>
        <img src="https://cdn.pixabay.com/photo/2016/11/30/06/52/tea-cup-1872026_1280.jpg" />
        <h2>Premium Tea Leaves</h2>
        <p>Strong aroma high-quality tea for daily energy</p>

        <div class="price">
          <del>PKR 1800</del>
          <span>PKR 1200</span>
        </div>

        <button>Buy Now</button>
      </div>

      <!-- ITEM 2 -->
      <div class="card">
        <span class="badge">-25%</span>
        <img src="https://cdn.pixabay.com/photo/2015/06/27/16/35/honey-823614_1280.jpg" />
        <h2>Organic Honey Jar</h2>
        <p>Pure natural honey from mountain farms</p>

        <div class="price">
          <del>PKR 2500</del>
          <span>PKR 1850</span>
        </div>

        <button>Buy Now</button>
      </div>

      <!-- ITEM 3 -->
      <div class="card">
        <span class="badge">-40%</span>
        <img src="https://cdn.pixabay.com/photo/2013/07/25/11/56/spices-166903_1280.jpg" />
        <h2>Spice Masalas</h2>
        <p>Authentic Pakistani kitchen spice mix</p>

        <div class="price">
          <del>PKR 1500</del>
          <span>PKR 900</span>
        </div>

        <button>Buy Now</button>
      </div>

      <!-- ITEM 4 -->
      <div class="card">
        <span class="badge">-30%</span>
        <img src="https://cdn.pixabay.com/photo/2013/11/05/23/55/coffee-206142_1280.jpg" />
        <h2>Fresh Coffee pack</h2>
        <p>Strong roasted beans for perfect coffee</p>

        <div class="price">
          <del>PKR 3000</del>
          <span>PKR 2100</span>
        </div>

        <button>Buy Now</button>
      </div>

    </div>

  </section>
</template>

<style scoped>

/* MAIN SECTION */
.deals {
  min-height: 100vh;
  padding: 60px 20px;
  position: relative;
  color: white;
  overflow: hidden;
}

/* BACKGROUND IMAGE */
.bg {
  position: absolute;
  inset: 0;
  background: url("https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1600")
    center/cover no-repeat;
  filter: blur(0px);
  transform: scale(1.1);
  animation: zoomBg 20s infinite alternate;
  z-index: 0;
}

/* DARK OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.65);
  z-index: 1;
}

/* HERO */
.hero {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 50px;
  animation: fadeDown 1s ease;
}

.hero h1 {
  font-size: 50px;
}

.hero p {
  opacity: 0.8;
}

/* GRID */
.grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

/* CARD */
.card {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  overflow: hidden;
  padding: 18px;
  text-align: center;
  transition: 0.4s;
  box-shadow: 0 10px 40px rgba(0,0,0,0.4);
}

.card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 20px 60px rgba(255,215,0,0.2);
}

/* IMAGE */
.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 12px;
}

/* BADGE */
.badge {
  position: absolute;
  background: linear-gradient(45deg, #facc15, #f97316);
  color: black;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;
}

/* PRICE */
.price {
  margin: 10px 0;
}

.price del {
  opacity: 0.6;
  margin-right: 6px;
}

.price span {
  color: #facc15;
  font-weight: bold;
}

/* BUTTON */
button {
  margin-top: 10px;
  padding: 10px 18px;
  border: none;
  background: linear-gradient(45deg, #facc15, #f97316);
  color: black;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.08);
}

/* ANIMATIONS */
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes zoomBg {
  0% { transform: scale(1.05); }
  100% { transform: scale(1.15); }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 32px;
  }
}
</style>