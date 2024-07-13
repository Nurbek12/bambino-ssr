<template>
    <div class="fixed md:hidden bottom-0 w-full bg-white">
        <div class="flex items-center container mx-auto h-full">
            <nuxt-link v-for="link,i in navbarLinks" :to="link.url" :key="i"
                class="flex flex-1 h-full flex-col items-center p-4 hover:bg-primary-50">
                <component :is="link.icon" class="size-6 text-primary-500" />
                <p class="text-sm text-primary-500" v-if="i==0">{{ link.title }}</p>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { navbarLinks } from '~/constants'

</script>