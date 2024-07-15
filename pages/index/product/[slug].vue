<template>
    <section>
        <div class="container mx-auto py-10">
            <h1>Product {{ route.params.slug }}</h1>
        </div>
    </section>
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'default'
})

const route = useRoute()

</script>