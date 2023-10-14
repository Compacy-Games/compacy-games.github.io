<template>
    <main>
        <h1>Blogs</h1>
        <ContentList path="/blog" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <ArticleCard :title="article.title" :description="article.description" :path="article._path" />
            </div>
        </ContentList>
    </main>
</template>