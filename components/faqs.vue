<template>
    <div class="space-y-2">
        <div v-for="item,i in items" :key="i">
            <div @click="opened=(opened===i?-1:i)" class="bg-gray-100 cursor-pointer px-4 py-2 rounded flex justify-between items-center"
                :class="{'rounded-b-none': opened===i}">
                <p>{{ i+1 }}. {{ item.question }}</p>
                <component :is="opened===i?AkChevronDownSmall:AkChevronUpSmall" />
            </div>
            <div v-show="opened===i" class="px-4 py-2 bg-gray-50 rounded-b">
                <p>{{ item.answer }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AkChevronDownSmall, AkChevronUpSmall } from '@kalimahapps/vue-icons'

const opened = ref(-1)

defineProps<{
    items: {
        answer: string,
        question: string
    }[]
}>()
</script>