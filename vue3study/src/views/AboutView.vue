<template>
  <h1>博主的信息</h1>
  <HelloWorld msg="你好啊" school="ABC"></HelloWorld>
  <div>sdffsf{{age}}</div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: "App",
  components: { HelloWorld },
  setip(){
    let age = ref(12)

    return{age}
  }
}; 
</script>

<style></style>
