<template>
    <div class="flex flex-col">
        <div class="h-[200px] w-full mb-2 rounded overflow-hidden">
            <img :src="product.image" class="w-full h-full object-cover" alt="">
        </div>
        <div class="flex justify-between items-center">
            <div>
                <nuxt-link to="/product/tvorog-bez-saxara" class="cursor-pointer text-lg mb-1">{{ product.title }}</nuxt-link>
                <client-only>
                    <rate :model-value="product.rate" />
                </client-only>
            </div>
            <p class="text-2xl font-medium text-primary-500">{{ product.price }} $</p>
        </div>
        <p class="my-2 flex-1 text-gray-600">{{ product.description }}</p>
        <div>
            <btn class="w-full">Добавить в корзину</btn>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    product: {
        id: number
        title: string
        description: string
        rate: number
        price: number
        image: string
    }
}>()

</script>