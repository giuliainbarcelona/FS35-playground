<template>
  <div>The message is: {{ message }}</div>

  <input v-model="message" />
</template>
<script>
export default {
  data() {
    return {
      message: "",
    };
  },
};
</script>

<!-- 
0. You want to know what you want to build
1. DATA!  Do I need new data for this? Give it a name.
2. Which type of data? What's the data shape? What is the initial value of it?
3. Showing data on the screen. ON THE TEMPLATE. Remember: {{}} or v-model
4. Is this data going to change? If so, is that going to be as the result of what? 
   How? When? Because of what?

 -->
