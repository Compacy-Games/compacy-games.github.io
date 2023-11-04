<template>
    <div class="site-footer">
        <p>© 2023 Compacy Games</p>
        <p>Powered by
            <a href="https://nuxt.com/">
                <!--<NuxtImg id="nuxt-logo" src="/nuxt-icon.png"/> **Does Not Work!** -->
                <!--<img id="nuxt-logo" src="~/public/nuxt-icon.png"/>-->
                Nuxt
            </a>
        </p>
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

    background: rgba(0, 0, 0, 0.9);

    /*
    border-top: solid;
    border-image: linear-gradient(to left, #042f2e, #030712) 1;
    */
}

.site-footer p {
    text-align: center;
    margin: .2rem;
    color: #ffffff;
    font-size: .85rem;
    font-weight: 200;
}

#nuxt-logo {
    height: 1.2em;
    line-height: 1.2em;
    margin-left: 3px;
    vertical-align: -15%;
}

a {
    color: #ffffff;
    text-decoration: underline;
}
</style>