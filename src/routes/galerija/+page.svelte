<script>
  const urls = import.meta.glob("/static/images/galery/*.{png,jpg,JPG}");
</script>

<svelte:head>
	<title>Galerija</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
  <div id="galery">
    <!-- {#each Object.entries(urls) as [name]}
      <p>{name.replace('/static','')}</p>
      <img scr="{name.replace('/static','')}" alt="" loading="lazy" />
    {/each} -->
    <img scr="/images/galery/dsci0154.jpg" alt="" loading="lazy" />
    <!-- <img src="/images/galery/20190518_180106.jpg" alt="" loading="lazy"/> -->
  </div>
</div>
