<script>
  import { onMount } from "svelte";


  export let icon, svg, title, text, cssClasses;
  onMount(() => {
    const parser = new DOMParser();
    const s = document.getElementById('svg');
    if(svg) {
      s.innerHTML = svg;
      console.log(s)
    }
  })
</script>

<div class="{cssClasses} w-25 text-center mini_card">
  <div class="d-flex justify-content-center">
    <span class="outer">
      <span class="inner">
        {#if svg}
        <span id="svg">
          {svg}
        </span>
        {:else}
          <i class="{icon}"></i>
        {/if}
      </span>
    </span>
  </div>
  <div class="mt-4">
    <h4>{title}</h4>
  </div>
  {#if text}
  <div class="mt-4">
    {text}
  </div>
  {/if}
</div>

<style>

@media screen and (max-width: 768px) {
  .mini_card {
    flex: 0 1 50%;
    padding: 0 !important;
    margin-top: 1rem;
  }
}

@media screen and (max-width: 576px) {
  .mini_card {
    flex: 0 1 100%;
  }
}


.outer {
  border: 1px solid #bfbfbf;
  padding: 1rem;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner {
  padding: .5rem;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  color:#bfbfbf
}

.py-10 {
  padding-top: 2.5rem;
}

.py-20 {
  padding-top: 5rem;
}

.py-30 {
  padding-top: 7.5rem;
}
</style>