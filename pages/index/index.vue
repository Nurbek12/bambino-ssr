<template>
    <header>
        <div class="container mx-auto py-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="rounded overflow-hidden col-span-1 md:col-span-2">
                    <img class="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                </div>
                <div class="hidden md:grid grid-cols-1 md:col-span-2 lg:col-span-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                    <div class="rounded overflow-hidden">
                        <img class="w-full h-[240px] object-cover" src="https://images.unsplash.com/photo-1437750769465-301382cdf094?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                    </div>
                    <div class="rounded overflow-hidden">
                        <img class="w-full h-[240px] object-cover" src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section>
        <div class="container mx-auto py-10">
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div class="flex flex-col items-center text-center" v-for="card,i in indexCards" :key="i">
                    <component :is="card.icon" class="size-20 mb-2 text-primary-500" />
                    <h1 class="text-lg font-medium">{{ card.title }}</h1>
                    <p class="mt-2 text-gray-600 text-sm">{{ card.description }}</p>
                </div>

            </div>

        </div>
    </section>

    <section>
        <div class="container mx-auto py-10 md:py-20">

            <h1 class="text-2xl font-medium">Категории Товаров</h1>
            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div class="flex gap-4 items-center p-4 rounded bg-gray-50" v-for="category,i in productCategories" :key="i">
                    <div class="text-4xl">{{ category.icon }}</div>
                    <h1 class="text-lg">{{ category.title }}</h1>
                </div>

            </div>

        </div>
    </section>
    
    <section>
        <div class="container mx-auto py-10 md:py-20">

            <h1 class="text-2xl font-medium">Популярные Продукты</h1>
            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <product v-for="product in products" :key="product.id" :product="product" />

            </div>

        </div>
    </section>

    <section>
        <div class="container mx-auto py-10 md:py-20">
            
            <h1 class="text-2xl font-medium mb-6">Часто задаваемые вопросы</h1>
            
            <faqs :items="indexFaqs" />

        </div>
    </section>
</template>

<script setup lang="ts">
import { indexCards, productCategories, products, indexFaqs } from '~/constants'

definePageMeta({
    layout: 'default'
})

</script>