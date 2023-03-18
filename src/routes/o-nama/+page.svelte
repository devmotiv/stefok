<script>
  import Hero from '$lib/components/home/Hero.svelte';
</script>

<svelte:head>
	<title>Štefok - O nama</title>
	<meta name="description" content="Pogrebno Poduzeće Mimoza - O nama" />
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="page" />
  <meta property="og:title" content="Pogrebno Poduzeće Mimoza - O nama" />
  <meta property="og:description" content="O nama" />
  <!-- <meta property="og:url" content="PERMALINK" /> -->
  <meta property="og:site_name" content="Pogrebno Poduzeće Mimoza" />
</svelte:head>

<Hero
  h1="O nama",
  h2="Uz Vas smo u najtežim i najtužnijim trenucima"
  buttonIcon="bi bi-whatsapp"
  buttonText="Nazovite: (+385) 098 737 163"
  anchorHref="tel:+385098737163"
/>
<section class="container mt-4 mb-4">
  <div class="d-flex justify-content-center">
    <img src="/images/logo.svg" alt="logotip" class="img-fluid"/>
  </div>
  <div class="d-flex justify-content-center">
    <img src="/images/logo.svg" alt="logotip" class="img-fluid"/>
  </div>
</section>