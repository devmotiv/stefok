<script>
  import Hero from '$lib/components/home/Hero.svelte';
  import ServicesShort from '$lib/components/home/ServicesShort.svelte';
  import HelpPanel from '$lib/components/HelpPanel.svelte';
  import data from '$lib/components/home/data.json';
</script>

<svelte:head>
	<title>Štefok - Pogrebno poduzeće</title>
</svelte:head>

<section>
  <Hero h1={data.h1} h2={data.h2} shortAbout={data.shortAbout}/>
  <ServicesShort />
  <HelpPanel />
</section>