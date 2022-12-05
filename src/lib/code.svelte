<script>
  import hljs from 'highlightjs';
  import hljsDefineSolidity from 'highlightjs-solidity';
  import 'highlightjs/styles/vs2015.css';
  import { onMount } from "svelte";
  // import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte'
  
  
  export let sourcecode = '';
  let code = '';
  onMount(async () => {
    hljsDefineSolidity(hljs);
    hljs.initHighlightingOnLoad();
    code = (hljs.highlightAuto(sourcecode).value || '').trim();
  });
  
</script>

<div class="mockup-code text-sm max-w-xl mx-auto mt-5 rounded" style="background-color: #191b1d;">
  <pre class="flex flex-col justify-left">
    <svg 
    class="relative -top-3 left-2"
    xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg>

    {#if code}
    <code class="hljs language-solidity !bg-transparent">
      {@html code }
    </code>
    {/if}
  </pre>
</div>
<style>
.mockup-code {
    position: relative;
    overflow: hidden;
    overflow-x: auto;
    min-width: 18rem;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--n) / var(--tw-bg-opacity));
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    --tw-text-opacity: 1;
    color: hsl(var(--nc) / var(--tw-text-opacity));
    border-radius: var(--rounded-box, 1rem)
}
</style>