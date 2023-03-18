<script>
  import Hero from '$lib/components/home/Hero.svelte';
  import HeadingPanel from '../../lib/components/HeadingPanel.svelte';
</script>

<svelte:head>
	<title>Smrtni slučaj</title>
	<meta name="description" content="Pogrebno Poduzeće Mimoza - Kako postupiti u slučaju smrti" />
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="page" />
  <meta property="og:title" content="Pogrebno Poduzeće Mimoza - Kako postupiti u slučaju smrti" />
  <meta property="og:description" content="Kako postupiti u slučaju smrti" />
  <!-- <meta property="og:url" content="PERMALINK" /> -->
  <meta property="og:site_name" content="Pogrebno Poduzeće Mimoza" />
</svelte:head>

<Hero
  h1="Smrtni slučaj"
  h2="Kako postupiti kada se dogodi smrtni slučaj?"
  buttonIcon="bi bi-whatsapp"
  buttonText="Nazovite: (+385) 098 737 163"
  anchorHref="tel:+385098737163"
/>
<HeadingPanel 
  heading="KAKO POSTUPITI KADA SE DOGODI SMRTNI SLUČAJ:"
/>
<section class="container d-flex flex-column gap-4 display-6 mt-4 mb-4 p-4">
  <p>Mi smo pogrebna služba 0-24.</p>
  <p>
    Stojimo Vam na raspolaganju za pomoć u organizaciji ispraćaja Vaših najmilijih u najtežim trenucima.
  </p>
  <p>
    Naše kontakt informacije možete pronaći na poveznici ispod.
  </p>
  <div class="divider"></div>
  <p class="">
    <a href="/kontakt" class="button d-flex gap-2 align-items-center justify-content-between">
      <span>Kontaktirajte nas</span>
      <i class="bi bi-arrow-right-circle-fill"></i>
    </a>
  </p>
</section>
<HeadingPanel 
  heading="SMRTNI SLUĆAJ U KUĆI ILI STANU:"
/>
<section class="container d-flex flex-column gap-4 display-6 mt-4 mb-4 p-4">
  <p>Nazovite policiju na broj 192 i obično će nakon nekog vremena doći liječnička ekipa ili mrtvozornik koji će pregledati povijest bolesti i medicinsku dokumentaciju umrle osobe te odobriti ukop i prijevoz umrle osobe.</p>
  <p>
    Dok čekate mrtvozornika, potrebno je kontaktirati nas na broj (+385) 098 737 163 kako bi dogovorili prijevoz pokojnika.
  </p>
  <p>
    Ako je smrt bila neuobičajena, ostavite tijelo i mjesto zločina kako su pronađeni radi moguće policijske istrage.
  </p>
  <div class="divider"></div>
  <p class="">
    <a href="/kontakt" class="button d-flex gap-2 align-items-center justify-content-between">
      <span>Kontaktirajte nas</span>
      <i class="bi bi-arrow-right-circle-fill"></i>
    </a>
  </p>
</section>
<HeadingPanel 
  heading="SMRTNI SLUČAJ U DOMU ZA STARIJE I NEMOĆNE OSOBE:"
/>
<section class="container d-flex flex-column gap-4 display-6 mt-4 mb-4 p-4">
  <p>Najbliža rodbina bit će obaviještena o smrti, a potom može kontaktirati nas na broj (+385) 098 737 163 kako bi dogovorili preuzimanje pokojnika i konačni prijevoz.</p>
  <div class="divider"></div>
  <p class="">
    <a href="/kontakt" class="button d-flex gap-2 align-items-center justify-content-between">
      <span>Kontaktirajte nas</span>
      <i class="bi bi-arrow-right-circle-fill"></i>
    </a>
  </p>
</section>
<HeadingPanel 
  heading="SMRTNI SLUČAJ U BOLNICI:"
/>
<section class="container d-flex flex-column gap-4 display-6 mt-4 mb-4 p-4">
  <p>Bolnica će izdati potrebne dokumente za sprovod. Stoga je potrebno kontaktirati nas na broj (+385) 098 737 163 kako bi preuzeli odjeću u kojoj će pokojnik biti pokopan.</p>
  <div class="divider"></div>
  <p class="">
    <a href="/kontakt" class="button d-flex gap-2 align-items-center justify-content-between">
      <span>Kontaktirajte nas</span>
      <i class="bi bi-arrow-right-circle-fill"></i>
    </a>
  </p>
</section>
<HeadingPanel 
  heading="SMRTNI SLUČAJ U INOZEMSTVU:"
/>
<section class="container d-flex flex-column gap-4 display-6 mt-4 mb-4 p-4">
  <p>Ukoliko je smrt nastupila u inozemstvu, osim prijevoza obavljamo i pripremamo svu dokumentaciju potrebnu za prijevoz.</p>
  <div class="divider"></div>
  <p class="">
    <a href="/kontakt" class="button d-flex gap-2 align-items-center justify-content-between">
      <span>Kontaktirajte nas</span>
      <i class="bi bi-arrow-right-circle-fill"></i>
    </a>
  </p>
</section>

<style>
  .button {
    background-color: #0b7978;
    padding: 13px 20px;
    border-radius: 25px;
    text-decoration: none;
    color: white !important;
    transition: 0.3s;
    font-size: large;
    width: 300px;
  }

  .button:hover {
    background-color: #0e9b99;
  }

  .divider {
    border: 1px solid rgb(160, 160, 160);
    height: 0;
    width: 60%;
  }

</style>