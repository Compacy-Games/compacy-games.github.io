<template>
    <div class="site-header">
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog">Blog</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.site-header {
    display: flex;
    width: 100%;
    height: 5rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    background: #030712;
    border-bottom: solid;
    border-image: linear-gradient(to right, #042f2e, #030712) 1;

    margin: 0;
}

.site-header .container {
    padding-left: 2rem;
    padding-right: 2rem;
}

.site-header .container ul {
    /*justify-content: center;
    background-color: blue;*/
    list-style-type: none;
}

.site-header .container ul li {
    float: left;
    margin: .5rem;
}

.site-header .container ul li a {
    display: block;
    width: 5rem;
    padding: .5rem;
    text-align: center;
    color: white;
    /*border: solid .1px;*/
}

.site-header .container ul li a:hover {
    background-color: #115e59;
}
</style>