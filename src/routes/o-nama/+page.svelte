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

<section class="mt-4 mb-4 p-4">
  <div>
    <h2 class="decorated"><span>Pogrebno Poduzeće Mimoza</span></h2>
    <h4 class="text-center mt-1">U Vašim najtežim trenutcima pružamo Vam kompletnu organizaciju pogreba i ispračaj vaših najmilijih.</h4>
    <h4 class="text-center mt-1">Uz Vas još od 1999 godine!</h4>
  </div>

  <div class="container mt-4 mb-4 p-4">
    <h5>Uz veliko iskustvo specijalizirali smi se za obaljanje pogrebnih djelatnosti u obiteljskom obrtu od 1999 godine.</h5>
    <h5>U vašim najtužnijim i najtežim trenutcima pružamo Vam kompetnu organizaciju pogreba i ispračaj vaših najmilijih.</h5>
    <h5>To Podrazumijeva:</h5>
      <ul>
        <li>
          <h5>Dogovaranje termina za ispračaj</h5>
        </li>
        <li>
          <h5>Prijevoz pokojne osobe</h5>
        </li>
        <li>
          <h5>Odabir pogrebne opreme u našem salonu</h5>
        </li>
        <li>
          <h5>Izrada osmrtnica</h5>
        </li>
        <li>
          <h5>Objava u javnim glasilima</h5>
        </li>
        <li>
          <h5>Organizacija glazbe</h5>
        </li>
      </ul>
    <div class="divider"></div>
    <h3 class="text-center mt-4 py-4 text-gold">
      Naša briga kreće od Vašeg poziva
    </h3>
    <div class="d-flex flex-column justify-content-center">
      <a href="tel:+385098737163" class="button-phone m-auto">
        <i class="bi bi-whatsapp"></i>
        <span>(+385) 098 737 163</span>
      </a>
      <br>
      <a href="/usluge" class="button-phone d-flex gap-2 align-items-center justify-content-center">
        <span>Saznajte više o našim uslugama</span>
        <i class="bi bi-arrow-right-circle-fill"></i>
      </a>
    </div>
  </div>
</section>

<style>
  .decorated{
    overflow: hidden;
    text-align: center;
  }
  .decorated > span{
    position: relative;
    display: inline-block;
  }
  .decorated > span:before, .decorated > span:after{
    content: '';
    border-bottom: 0.5px solid gray;
    position: absolute;
    top: 50%;
    width: 300px; /* half of limiter*/
    margin: 2px 20px;
  }
  .decorated > span:before{
    right: 100%;
  }
  .decorated > span:after{
    left: 100%;
  }
  .divider {
    border: 1px solid rgb(160, 160, 160);
    height: 0;
  }
  .button-phone {
    background-color: #0b7978;
    padding: 13px 20px;
    border-radius: 25px;
    text-decoration: none;
    color: white !important;
    transition: 0.3s;
    font-size: x-large;
    margin: 0 auto;
  }

  .button-phone:hover {
    background-color: #0e9b99;
  }
  .text-gold {
    color: #0b7978;
    font-weight: bold;
    text-decoration: underline;
  }

  @media screen and (max-width: 980px) {
    .button-phone {
      font-size: large;
    }
  }

  @media screen and (max-width: 600px) {
    .button-phone {
      font-size:medium;
    }
  }

  @media screen and (max-width: 420px) {
    h3 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 382px) {
    .button-phone {
      width: 100%;
      text-align: center;
    }
  }
</style>