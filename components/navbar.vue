<template>
    <nav class="w-full sticky">
        <div class="container mx-auto">
            <div class="py-4 flex items-center justify-between">
                <nuxt-link to="/">
                    <img src="/logo.png" width="180" />
                </nuxt-link>

                <div class="hidden md:flex gap-4">
                    <ul class="flex items-center gap-8">
                        <li v-for="link,i in navbarLinks" :key="i">
                            <nuxt-link :to="link.url" class="font-normal hover:text-primary-500">{{ link.title }}</nuxt-link>
                        </li>
                    </ul>
                    
                    <select class="px-4 outline-none cursor-pointer appearance-none text-primary-500">
                        <option class="font-medium" selected>Русский</option>
                        <option class="font-medium">English</option>
                        <option class="font-medium">O'zbek</option>
                    </select>
                </div>

                v
            </div>
            <div class="flex justify-between items-center">
                <btn>
                    Каталог
                    <div>
                        <CdMenu class="mt-0.5"/>
                    </div>
                </btn>

                <div class="max-w-[550px] w-full">
                    <inp placeholder="Поиск товаров" />
                </div>

                <div class="flex items-center gap-2">
                    <btn class="px-[.55rem] py-2"><BxHeart class="size-6" /></btn>
                    <btn class="px-[.55rem] py-2"><MdOutlinedShoppingCart class="size-6" /></btn>
                    <btn class="px-[.55rem] py-2"><BxUserCircle class="size-6" /></btn>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { navbarLinks } from '~/constants'
import { CdMenu, BxHeart, MdOutlinedShoppingCart, BxUserCircle, CaPhoneFilled } from '@kalimahapps/vue-icons'

</script>