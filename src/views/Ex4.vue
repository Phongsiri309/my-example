<template>
  <div>
    <input v-model="Number" type="number" />
    <button v-on:click="printstar(Number)">Sum</button>
    <br /><br />
    <div id="display"></div>
  </div>
</template>

<script>
export default {

  methods: {
    printstar(Number) {
      let n = Number;
      let string = "";
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
          string += "";
        }
        for (let k = 0; k < (n - i) * 2 - 1; k++) {
          string += "*";
        }
        string += "\n";
      }
      document.getElementById("display").innerHTML = `<pre>${string}</pre>`
   
    },
  },
};
</script>

<style></style>
