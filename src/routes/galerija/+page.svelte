<script>
  import Hero from '$lib/components/home/Hero.svelte';
  import Galery from '$lib/components/galery/Galery.svelte';
</script>

<svelte:head>
	<title>Štefok - Galerija</title>
	<meta name="description" content="Pogrebno Poduzeće Mimoza - Galerija aranžmana" />
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="page" />
  <meta property="og:title" content="Pogrebno Poduzeće Mimoza - Galerija aranžmana" />
  <meta property="og:description" content="Galerija aranžmana" />
  <!-- <meta property="og:url" content="PERMALINK" /> -->
  <meta property="og:site_name" content="Pogrebno Poduzeće Mimoza" />
</svelte:head>
<Hero
  containerClass='container-custom'
  h1="Galerija"
  h2="U našoj ponudi pronaći ćete bogat izbor vijenaca i cvijeća za pogrebe."
  shortAbout="Ukoliko imate posebne želje oko cvjetnih aranžmana koje nisu sadržane u našoj redovnoj ponudi, obratite nam se"
  shortAboutIconClass="bi bi-arrow-down-circle-fill"
  buttonIcon="bi bi-whatsapp"
  buttonText="Nazovite: (+385) 098 737 163"
  anchorHref="tel:+385098737163"
/>
<Galery cssClass=""/>

<style>
  .container-custom {
    width: 60%;
    margin: 0 auto;
  }
</style>