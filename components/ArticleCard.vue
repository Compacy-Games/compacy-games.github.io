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
    background: #0000ff0f;
    /*border-image: linear-gradient(to bottom, #00f 60%, #0000ffd0) 1;
    border-left: 5px solid #0d9488;
    border-radius: .2rem; */
    border-left: 5px solid #00f;
    max-height: 20rem;
    /* TODO: ugly. */
    box-shadow: 0px 5px 15px 0px gray;
}
/*
h2 a {
    color: whitesmoke;
}

h2 a:hover {
    text-decoration: underline 1px;
    color:#0d9488;
}*/
</style>