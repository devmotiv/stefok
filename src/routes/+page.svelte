<script>
  import Hero from '$lib/components/home/Hero.svelte';
  import ServicesShort from '$lib/components/home/ServicesShort.svelte';
  import data from '$lib/components/home/data.json';
  import AboutShort from '../lib/components/about/AboutShort.svelte';
  import Map from '../lib/components/contact/Map.svelte';
</script>

<svelte:head>
	<title>Štefok - Pogrebno poduzeće</title>
  <meta name="description" content="Pogrebno Poduzeće Mimoza, Čačinci. S Vama još od 1999. godine.">
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="page" />
  <meta property="og:title" content="Pogrebno Poduzeće Mimoza" />
  <meta property="og:description" content="Početna" />
  <!-- <meta property="og:url" content="PERMALINK" /> -->
  <meta property="og:site_name" content="Pogrebno Poduzeće Mimoza" />
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
    buttonText="Pogledajte galeriju"
    displayPhone='false'
    displayCustom='true'/>
  <AboutShort />
  <Map />
</section>