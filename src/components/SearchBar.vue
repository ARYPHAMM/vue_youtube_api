<template>
  <div>
      <!-- <input  v-on:input="onInput">#1 -->
      <input @input="onInput">
  </div>
</template>

<script>
export default {
 name: 'SearchBar',
 methods: {
   onInput: function(event){
      this.$emit('termChange',event.target.value); // từ sự kiện của components để components cha bắt tín hiệu
   }
 },
};
</script>

<style scoped>
 input{
   width: 75%;
 }
 div{
   text-align: center;
   margin-top: 20px;
 }
</style>