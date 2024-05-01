<template>
  <TicTacToe />
</template>

<script>
// 1: import the component
import InputMessage from "./components/InputMessage.vue";
import Counter from "./components/Counter.vue";
import TicTacToe from "./components/TicTacToe.vue";
export default {
  // 2: declare the component
  components: {
    InputMessage,
    Counter,
    TicTacToe,
  },
};
</script>
