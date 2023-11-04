<template>
    <main>
        <ContentDoc />
    </main>
</template>

<style scoped>
main :deep(h1) {
    border-left: 5px solid #0000ff;
    padding: 0.2rem;
    padding-left: 1rem;
    margin-bottom: 4rem;
}

main :deep(h2 a, h3 a) {
    color: black;
}

main :deep(h2 a, h3 a):hover {
    color: black;
    text-decoration: underline 1px;
}
</style>