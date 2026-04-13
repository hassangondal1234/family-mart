<template>
  <div class="home">

    <!-- HERO SECTION -->
    <section class="hero">
      <div class="overlay">
     
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features">
      <h2>Why Choose Us?</h2>

      <div class="grid">
        <div class="card">🚚 Fast Delivery</div>
        <div class="card">💰 Best Prices</div>
        <div class="card">🥦 Fresh Products</div>
        <div class="card">📞 24/7 Support</div>
      </div>
    </section>

   <!-- PRODUCTS -->
<section class="products">
  <h2>Popular Products</h2>

  <div class="product-grid">

    <div class="product">
      <img src="https://cdn.pixabay.com/photo/2017/06/07/16/24/rice-2380808_1280.jpg" />
      <h3>Rice</h3>
      <p>Premium quality basmati rice</p>
    </div>

    <div class="product">
      <img src="https://cdn.pixabay.com/photo/2016/11/29/04/06/olive-oil-1867229_1280.jpg" />
      <h3>Cooking Oil</h3>
      <p>Healthy & pure oil</p>
    </div>

    <div class="product">
      <img src="https://media.istockphoto.com/id/516363138/photo/portion-of-white-sugar.jpg?s=1024x1024&w=is&k=20&c=xPYmke1bBHn1hBMNVjxuX47VQCGmjSyXvkev76Uvawc=" />
      <h3>Sugar</h3>
      <p>Sweet & refined sugar</p>
    </div>

  </div>
</section>

  </div>
</template>

<style scoped>
/* RESET */
.home {
  font-family: Arial, sans-serif;
}

/* HERO */
.hero {
  height: 100vh;
  background: url("https://cdn.pixabay.com/photo/2014/04/02/13/07/choctaw-bluff-305932_1280.jpg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: zoom 15s infinite alternate;
}

.overlay {
  background: lightyellow;
  padding: 0px;
  text-align: center;
  border-radius: 50px;
  backdrop-filter: blur(16px);
}

.hero h1 {
  font-size: 50px;
  margin-bottom: 10px;
  animation: fadeIn 2s ease;
}

.hero p {
  font-size: 18px;
  margin-bottom: 20px;
  opacity: 0.8;
}

.buttons button {
  padding: 12px 25px;
  margin: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px;
  transition: 0.3s;
}

.buttons button:hover {
  transform: scale(1.05);
}

.outline {
  background: transparent;
  border: 2px solid white;
  color: white;
}

/* FEATURES */
.features {
  padding: 80px 20px;
  text-align: center;
  background: #f7f7f7;
}

.features h2 {
  margin-bottom: 30px;
  font-size: 30px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-10px);
}

/* PRODUCTS */
.products {
  padding: 80px ;
  text-align: center;
}

.product-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

.product {
  background: white;
  padding: 25px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: 0.3s;
}
.product img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.product:hover {
  transform: scale(1.05);
}

/* ANIMATIONS */
@keyframes zoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>