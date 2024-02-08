<script>
    import Header from '../components/SiteHeader.svelte';
    import Footer from '../components/SiteFooter.svelte';
</script>

<div>
    <Header/>
    <main>
        <slot></slot>
    </main>
    <Footer/>
</div>