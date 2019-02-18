<style>

</style>
<template>
  <div>
    <div v-for="(v,k) in 5" :key="k">
      {{v}}
    </div>
  </div>
</template>
<script>
import ajax from '../common/ajax.js'
export default {
  data(){
    return{
      users:[]
    }
  },
  created(){
    this.getList();
  },
  methods:{
    getList(){
     
    }
  }
}
</script>
