<template>
  <div class="home">
    HOME
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    //to use composition API
    console.log("setup");

    let name = "mario";
    let age = 30;

    const handleClick = () => {
      console.log("you clicked me");
    };

    return { name, age, handleClick };
  },
  data() {
    return {
      age: 40,
    };
  },
};
</script>
