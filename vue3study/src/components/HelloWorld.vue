<template>
  <h2>姓名：{{ yk.name }}</h2>
  <div>sdfsdf</div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "HelloWorld",
  props: ['msg'], // 不写全会报警告 
  setup(props, context) {
    let yk = reactive({
      name: "YK菌",
    });
    console.log('props-----',props);
    console.log()
    console.log('context.attrs-----', context.attrs)
    return { yk };
  },
};
</script>
