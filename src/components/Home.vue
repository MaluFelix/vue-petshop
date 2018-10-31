<template>
  <div class="wrapper">
    <div class="panel tall-panel light-mint">
        <h2>Pet Products</h2>
        <p>Premium Puppy Chow</p>
        <p>Kibble, sale in bulk, $20/lb</p>
        <img src="https://raw.githubusercontent.com/VueVixens/projects/master/petshop/images/food.png"/>
    </div>
    <div class="panel bisque">
        <h2>Donate</h2>
    </div>
    <div class="panel tall-panel light-brown">
        <h2>Adoptable Pets</h2>
        <p>Fisher, Chihuahua, age 3</p>
        <img src="https://raw.githubusercontent.com/VueVixens/projects/master/petshop/images/chihuahua.jpg"/>
    </div>

    <div class="panel bisque">
        <h2>Contact Us</h2>
    </div>
    <div class="panel tall-panel dark-mint">
        <h2>Pet of the Month</h2>
        <p>Meet Stanley, A young French Bulldog</p>
        <img src="https://raw.githubusercontent.com/VueVixens/projects/master/petshop/images/bulldog.jpg"/>
    </div>
    <div class="panel tall-panel light-mint">
        <h2>Success Stories</h2>
        <p>Bennie found his forever home!</p>
        <img src="https://raw.githubusercontent.com/VueVixens/projects/master/petshop/images/collie.jpg"/>
    </div>

    <div class="panel bisque">
        <h2>Special Events</h2>
    </div>

    <div class="panel bisque">
        <h2>Learn About Pet Ownership</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
