<template>
    <section>
        <div class="container mx-auto py-10">
            
            <div class="flex flex-col md:flex-row gap-6">

                <div class="max-w-[400px] w-full">
                    <div class="w-full rounded border p-4 bg-gray-50 flex flex-col gap-4">
                        <div>
                            <h3 class="text-primary-600 font-medium">Искать по назавыние</h3>
                            <inp class="mt-2 bg-white placeholder:text-gray-900" placeholder="Назавыние" />
                        </div>
                        <div>
                            <h3 class="text-primary-600 font-medium">Искать по цене</h3>
                            <div class="mt-2 flex gap-4">
                                <inp class="bg-white placeholder:text-gray-900" placeholder="Минм. цена" />
                                <inp class="bg-white placeholder:text-gray-900" placeholder="Макс. цена" />
                            </div>
                        </div>
                        <div>
                            <h3 class="text-primary-600 font-medium">Категории</h3>
                            <ul class="space-y-1 mt-2">
                                <li v-for="c,i in productCategories" :key="i" class="flex items-center gap-4">
                                    <input type="checkbox" :id="c.title" class="appearance-none cursor-pointer w-4 h-4 border-2 border-primary-600 checked:bg-primary-600 rounded">
                                    <label :for="c.title" class="cursor-pointer select-none">{{ c.title }}</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <product v-for="product in products" :key="product.id" :product="product" />
                </div>

            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { products, productCategories } from '~/constants'

</script>