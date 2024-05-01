<template>
  <h2>Tic Tac Toe</h2>
  <div class="grid">
    <div v-for="(row, i) in grid" class="row">
      <div v-for="(val, j) in row" class="cell" @click="clickCell(i, j)">
        {{ val }}
      </div>
    </div>
  </div>
</template>
<!-- The tempate is the visual interface of the page -->

<script>
export default {
  data() {
    return {
      grid: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      playerOne: true,
    };
  },
  methods: {
    clickCell(i, j) {
      console.log("Cell was clicked", i, j);
    },
  },
};
</script>

<style>
.cell {
  background-color: pink;
  width: 60px;
  height: 60px;
}

.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.grid {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
}
</style>
