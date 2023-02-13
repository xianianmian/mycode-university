<template>
    <div>
        <h3>插槽</h3>
        <slot>000</slot>
        <slot>000</slot>
        <slot name="1hao">111</slot>
        <slot name="2hao">222</slot>
        <slot name="hao3" :nam="name">333</slot>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'xiaoren'
        }
    }
}
</script>

<style>

</style>