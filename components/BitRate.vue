<template>
    <div>
        <input 
            type="number" 
            v-model="state.height"
            style="width:100px"
        >px *
        <input 
            type="number"
            v-model="state.width"
            style="width:100px"
        >px *
        8 bit * 3 * 
        <input   
            type="number"
            v-model="state.frameRate"
            style="width:100px"
        >fps 
        <div>
            = {{ rate }} bit/s
        </div>
        <div>
            = {{ (rate / 1024).toFixed(2)  }} Kb/s
        </div>
        <div>
            = {{ (rate / 1024 / 1024).toFixed(2)  }} Mb/s
        </div>
        <div>
            = {{ (rate / 1024 / 1024 / 1024).toFixed(2) }} G/s
        </div>
    </div>
</template>
<script setup lang="ts">
import * as vue from 'vue';

const state = vue.reactive({
    width: 1920,
    height: 1080,
    frameRate: 30
});

const rate = vue.computed(() => state.width * state.height * state.frameRate  * 8 * 3);

</script>