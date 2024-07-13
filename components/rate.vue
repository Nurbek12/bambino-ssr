<template>
    <div class="flex gap-2">
        <template v-for="i in 5">
            <component class="text-orange-500 size-4 cursor-pointer" :is="i<r?BsStarFill:BsStar" />
        </template>
    </div>
</template>

<script setup lang="ts">
import { BsStarFill, BsStarHalf, BsStar } from '@kalimahapps/vue-icons'

const r = ref(Math.floor(Math.random()*5 + 1))
// const model = defineModel({default: 0, type: Number})
</script>