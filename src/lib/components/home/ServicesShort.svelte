<script>
  import ServiceMiniCard from '$lib/components/home/ServiceMiniCard.svelte';
</script>

<section class="mt-4 p-4">
  <div>
    <h2 class="decorated"><span>S vama smo na svakom koraku</span></h2>
    <p class="text-center">U Vašim najtežim trenutcima pružamo Vam kompletnu organizaciju pogreba i ispračaj vaših najmilijih. </p>
  </div>
  <div class="container d-flex flex-wrap mt-4 mb-4 ">
    <ServiceMiniCard 
      cssClasses="flex-md-shrink-1"
      icon="bi bi-layout-text-window-reverse"
      title="Planiranje"
      text="Dogovaramo termin za ispračaj, odabir pogrebne opreme u našem salonu, organizaciju glazbe, izradu osmrtnice, objavljivanje u javnim glasilima."
    />
    <ServiceMiniCard
      cssClasses="py-30"
      svg='<svg xmlns="http://www.w3.org/2000/svg" width="35" height="60" fill="currentColor" class="bi bi-taxi-front-fill" viewBox="0 0 16 16">
        <path d="M6 1a1 1 0 0 0-1 1v1h-.181A2.5 2.5 0 0 0 2.52 4.515l-.792 1.848a.807.807 0 0 1-.38.404c-.5.25-.855.715-.965 1.262L.05 9.708a2.5 2.5 0 0 0-.049.49v.413c0 .814.39 1.543 1 1.997V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.338c1.292.048 2.745.088 4 .088s2.708-.04 4-.088V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.892c.61-.454 1-1.183 1-1.997v-.413c0-.165-.016-.329-.049-.49l-.335-1.68a1.807 1.807 0 0 0-.964-1.261.807.807 0 0 1-.381-.404l-.792-1.848A2.5 2.5 0 0 0 11.181 3H11V2a1 1 0 0 0-1-1H6ZM4.309 4h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 0 1-.497-.731l.956-1.913A.5.5 0 0 1 4.309 4ZM4 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-9 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"/>
      </svg>'
      title="Prijevoz"
      text="Odrađujemo preuzimanje prijevoz pokojnika u Republici Hrvatskoj i inozemstvu, iz privatnog doma, te privatnih ili javnih ustanova."
    />
    <ServiceMiniCard 
      cssClasses="py-30"
      icon="bi bi-archive-fill"
      title="Kremiranje"
      text="Uz druge pogrebne usluge dogovaramo i kremiranje pokojnika. Uslugu kremiranja pokojnika obavlja krematorij u Osijeku."
    />
    <ServiceMiniCard ,
      cssClasses=""
      icon="bi bi-people-fill"
      title="Rad & Suradnja"
      text="Surađujemo s raznim javnim institucijama poput Ministarstva Branitelja te Socijalnom Službom."
    />
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
</style>