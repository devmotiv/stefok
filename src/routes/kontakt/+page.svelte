<script>
  import Hero from '$lib/components/home/Hero.svelte';
  import ContactForm from '$lib/components/contact/ContactForm.svelte';
  import Map from '$lib/components/contact/Map.svelte';
  import data from './data.json';
  import config from '$lib/config/config.json';
</script>

<svelte:head>
	<title>Štefok - Kontakt</title>
	<meta name="description" content="Kontaktirajte nas" />
</svelte:head>

<section>
  <Hero 
    h1={data.h1} 
    h2={data.h2}   
    buttonIcon="bi bi-whatsapp"
    buttonText="(+385) 098 737 163"
    anchorHref="tel:+385098737163"/>
  <ContactForm />
  <section class="container-fluid my-4 wrapper p-4">
    <div class="text-center info mx-auto">
      <h2>Pogrebno Poduzeće Mimoza</h2>
      <h4>
        <div class="">
          <i class="bi bi-pin-map"></i>
          <a href="https://www.google.com/maps/place/Pogrebno+poduze%C4%87e+Mimoza+%C5%A0tefok/@45.6009359,17.8651103,17z/data=!3m1!4b1!4m6!3m5!1s0x475d65a30ff19ee9:0x523645729471a6e0!8m2!3d45.6009359!4d17.867299!16s%2Fg%2F11h3qssyqy" target="_blank" rel="noreferrer">
            {config.adress}
          </a>
        </div>
      </h4>
      <h4>
        <i class="bi bi-whatsapp"></i>
        <a href="tel:{config.phone}">{config.phone}</a>
      </h4>
      <h4>
        <i class="bi bi-envelope"></i>
        <a href="mailto:{config.email}">{config.email}</a>
      </h4>
      <h4>
        <i class="bi bi-clock"></i>
        <span>Radimo od 0 - 24 sata</span>
      </h4>
      <h4>
        <i class="bi bi-info-circle"></i>
        OIB: 39890832265
      </h4>
    </div>
  </section>
  <Map />
</section>

<style>
  .info a {
    text-decoration: none;
    color: #fff;
    transition: 0.2s;
  }
  .info a:hover {
    color: #14bbb8;
  }

  h2 {
    text-decoration: underline;
  }

  .wrapper {
    background-color: #0c213f;
    color: #fff;
  }
</style>