<template>
    <div class="fixed md:hidden bottom-0 w-full bg-white">
        <div class="flex items-center container mx-auto h-full">
            <nuxt-link v-for="link,i in navbarLinks" :to="link.url" :key="i"
                class="flex flex-1 h-[70px] flex-col items-center justify-center hover:bg-primary-50 gap-1"
                :class="route.path==link.url?'hover:bg-primary-100 bg-primary-50':''">
                <div>
                    <component :is="link.icon" class="size-6 text-primary-500" />
                </div>
                <p v-show="route.path==link.url" class="text-sm text-primary-500 text-nowrap">{{ link.title }}</p>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { navbarLinks } from '~/constants'

const route = useRoute()
</script>