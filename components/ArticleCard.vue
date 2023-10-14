<template>
<div class="article-card">
    <h2><RouterLink :to="path ?? '/blog'">{{ title }}</RouterLink></h2>
    <p>{{ description }}</p>
</div>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

defineProps<{
  title?: string
  description?: string
  path?: string
}>()
</script>

<style scoped>
.article-card {
    /*background-color: red;*/
    display: grid;
    /*grid-template-rows: max-content;*/

    padding-top: .5rem;
    padding-bottom: .5em;
    padding-left: 2.5rem;
    margin-bottom: 1rem;
    background: #030712;
    border-image: linear-gradient(to bottom, #042f2e 60%, #030712) 1;
    border-left: 5px solid #0d9488;
    /* border-radius: .2rem; */
    max-height: 20rem;
}

h2 a {
    color: whitesmoke;
}

h2 a:hover {
    text-decoration: underline 1px;
    color:#0d9488;
}
</style>