<template>
  <div>
      <input v-model="inputNum" type="text">
      <button v-on:click='sortMintoMax'>SortMintoMax</button>
      <button v-on:click='sortMaxtoMin'>SortMaxtomin</button>
        <br><br>
        <div id="display">
        </div>
  </div>
</template>

<script>
export default {    
    data(){
        return{
            inputNum : []
        }
    },
    methods: {
        sortMaxtoMin(){
            var a = this.inputNum.split(',')
         
            document.getElementById('display').innerHTML = a.sort(function(a, b) {return b - a;})
        },
          sortMintoMax(){
            var a = this.inputNum.split(',')    
            document.getElementById('display').innerHTML = a.sort((a, b) => a - b);
        }
    }
}
</script>

<style>

</style>