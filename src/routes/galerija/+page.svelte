<script>
  import Hero from '$lib/components/home/Hero.svelte';
  import Galery from '$lib/components/galery/Galery.svelte';
</script>

<svelte:head>
	<title>Štefok - Galerija</title>
	<meta name="description" content="Nešto iz naše ponude" />
</svelte:head>
<!-- <section class="container-custom mt-4 mb-4">
  <h1 class="text-center">Galerija</h1>
</section> -->
<Hero
  containerClass='container-custom text-center'
  h1="Galerija"
  h2="U našoj ponudi pronaći ćete bogat izbor vijenaca i cvijeća za pogrebe."
  shortAbout="Ukoliko imate posebne želje oko cvjetnih aranžmana koje nisu sadržane u našoj redovnoj ponudi, obratite nam se"
  shortAboutIconClass="bi bi-arrow-down-circle-fill"
  displayPhone='true'
/>
<Galery cssClass=""/>

<style>
  .container-custom {
    width: 60%;
    margin: 0 auto;
  }
</style>