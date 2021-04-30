<template>
  <div>
    <input type="text" v-model="Str1">
    <input type="text" v-model="Str2">
    <button v-on:click="checkchracter">Check</button>
  <br><br>
    <div id="display">
      
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      Str1: '',
      Str2: ''
      }
  },
  methods:{
    checkchracter(){
      let a = this.Str1.split('')
      let b = this.Str2.split('')
      if(a.length == b.length && a.value == b.value){
        document.getElementById('display').innerHTML = 'true'
      }else(
         document.getElementById('display').innerHTML = 'false'
      )
    }
  }

}
</script>

<style>

</style>