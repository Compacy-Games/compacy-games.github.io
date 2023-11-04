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
    height: 3rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-bottom: solid 1px black;
    /*border-image: linear-gradient(to right, #0000ff, #030712) 1;*/

    margin: 0;
    padding-bottom: .1rem;

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
    padding: .5rem 1rem .5rem 1rem;
    text-align: center;
    color: black;
    /*border: solid .1px;*/
}

.site-header .container ul li a:hover {
    background-color: #0000ff;
    color: white;
}
</style>