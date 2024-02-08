<script>
    /** @type {import('./$types').PageData} */
	export let data;
    
    import SvelteMarkdown from 'svelte-markdown'
    import Codeblock from '../../../components/Codeblock.svelte';
    const source = data.reponse;
</script>

<SvelteMarkdown {source}
    renderers={{ code: Codeblock }}
/>