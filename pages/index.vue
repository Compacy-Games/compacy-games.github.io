<template>
    <main>
        <h1 class="intro"><span id="tr">Compacy</span><br/>Games</h1>
        <p>Compact + (-cy) = Compacy.</p>
        <p>此网站正在重构！</p>
        <h2>联系我们</h2>
        <p><a href="mailto:nofuncoding@qq.com">电子邮件</a> nofuncoding@qq.com</p>
        
        <div>
            <h2>测试区</h2>
            <NuxtLink class="btn" to="/about" @click="navigateTo('/about')">
                一个按钮
            </NuxtLink>
        </div>
    </main>
</template>

<style scoped>
.intro {
    font-size: 3rem;
}

/*
#tr {
    color: transparent;
    background-clip: text;
    background-image: linear-gradient(to bottom right,#5eead4, #0e7490);
}*/

#tr {
    color: #00f;
}

a {
    font-weight: 700;
}

.btn {
    border: 0;
    background-color: #00f;
    color: white;
    padding: .7rem 1rem .7rem 1rem;
    border-radius: 20px;
    text-decoration: none;
    transition: all 200ms;

    color: white;
    font-weight: 500;
    font-family: "Inter var", "Noto Sans SC", sans-serif;
}

.btn:hover {
    background-color: #0000ffe0;
    box-shadow: 0px 0px 20px 0px gray;
}

</style>