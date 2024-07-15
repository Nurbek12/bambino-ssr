<template>
    <nav class="w-full sticky">
        <div class="container mx-auto">
            <div class="py-4 flex items-center justify-between">
                <nuxt-link to="/">
                    <img src="/logo.png" width="180" />
                </nuxt-link>

                <div class="max-w-[550px] w-full hidden md:flex">
                    <inp placeholder="Поиск товаров" class="rounded-r-none" />
                    <btn class="px-[.55rem] py-2 rounded-l-none"><CaSearch class="size-6" /></btn>
                </div>

                <div class="flex items-center gap-2">
                    <btn class="px-[.55rem] py-2"><BxHeart class="size-6" /></btn>
                    <btn class="px-[.55rem] py-2"><MdOutlinedShoppingCart class="size-6" /></btn>
                    <btn class="px-[.55rem] py-2"><BxUserCircle class="size-6" /></btn>
                </div>
            </div>
            <div class="flex gap-4 items-center">
                <btn>
                    Каталог
                    <div>
                        <CdMenu class="mt-0.5"/>
                    </div>
                </btn>

                <div class="flex-1 flex justify-between">

                    <ul class="hidden md:flex items-center bg-gray-100 py-2 rounded">
                        <li v-for="link,i in navbarLinks" :key="i">
                            <nuxt-link :to="link.url" class="font-normal px-4 py-2.5 rounded"
                                :class="route.path==link.url?'bg-primary-600 hover:bg-red-500 text-white hover:text-white':'hover:text-primary-800 hover:bg-primary-100'">{{ link.title }}</nuxt-link>
                        </li>
                    </ul>
                    <span class="block md:hidden"></span>
                    
                    <select class="px-4 py-2 outline-none cursor-pointer appearance-none bg-primary-600 rounded text-white">
                        <option class="font-medium bg-white text-primary-600" selected>Русский</option>
                        <option class="font-medium bg-white text-primary-600">English</option>
                        <option class="font-medium bg-white text-primary-600">O'zbek</option>
                    </select>

                </div>
                
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { navbarLinks } from '~/constants'
import { CdMenu, BxHeart, MdOutlinedShoppingCart, BxUserCircle, CaSearch } from '@kalimahapps/vue-icons'

const route = useRoute()
</script>