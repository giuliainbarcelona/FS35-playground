<template>
  <div>
    The count is: {{ count }}

    <button @click="increase" :disabled="count === max">+1</button>
    <button @click="decrease" :disabled="count === 0">-1</button>
  </div>
</template>

<script>
export default {
  props: ["max"],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    decrease() {
      if (this.count > 0) {
        this.count--;
      }
    },
    increase() {
      if (this.count < this.max) {
        this.count++;
      }
    },
  },
};
</script>
