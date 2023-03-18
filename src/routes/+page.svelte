<script>
  import Hero from '$lib/components/home/Hero.svelte';
  import ServicesShort from '$lib/components/home/ServicesShort.svelte';
  import data from '$lib/components/home/data.json';
  import AboutShort from '../lib/components/about/AboutShort.svelte';
  import Map from '../lib/components/contact/Map.svelte';
</script>

<svelte:head>
	<title>Štefok - Pogrebno poduzeće</title>
</svelte:head>

<section>
  <Hero 
    h1={data.h1} 
    h2={data.h2} 
    shortAbout={data.shortAbout} 
    displayPhone='true' 
    anchorHref="tel:+385098737163"
    buttonIcon="bi bi-whatsapp"
    buttonText="Nazovite: (+385) 098 737 163"/>
  <ServicesShort />
  <Hero
    h1="Galerija",
    h2="Veliki izbor cvijeća i cvjetnih aranžmana"
    secondary="true"
    buttonIcon="bi bi-flower2"
    anchorHref="/galerija"
    buttonText="Pogledajte galeriju"/>
  <AboutShort />
  <Map />
</section>