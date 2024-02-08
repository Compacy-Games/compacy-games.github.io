<script>
    export let raw = "";
    export let lang = "";
    export let text = "";

    // all languages
    // import hljs from 'highlight.js';
    
    // common languages
    import hljs from 'highlight.js/lib/common';

    // only the library, register the languages you need
    // import hljs from 'highlight.js/lib/core';

    let result = text;
    let language = "<p/>";

    if (hljs.listLanguages().includes(lang)) {
        const highlightedCode = hljs.highlight(text, {language: lang});
        result = highlightedCode.value;
        language = `<p style="color: #aaaaaa;">${lang}</p>`
    }
        
</script>

<!--Don't modify the tabs-->
<pre>{@html language}<code>{@html result}</code></pre>