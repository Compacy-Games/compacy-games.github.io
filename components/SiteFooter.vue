<template>
    <div class="site-footer">
        <p>© 2023 Compacy Games</p>
        <p>Powered by <a href="https://nuxt.com/"><img id="nuxt-logo" src="~/assets/img/nuxt.ico" alt="Nuxt.js"/></a></p>
    </div>
</template>

<style scoped>
.site-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    flex-direction: column;

    width: 100%;
    height: 4rem;
    padding: 1rem 0 1rem 0;

    background: #030712;
    border-top: solid;
    border-image: linear-gradient(to left, #042f2e, #030712) 1;

}

.site-footer p {
    text-align: center;
    margin: .2rem;
    color: #94a3b8;
}

#nuxt-logo {
    height: 1.2em;
    line-height: 1.2em;
    margin-left: 3px;
    /*border: 1px solid red;*/
    vertical-align: -15%;
}
</style>