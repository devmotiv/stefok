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
      cssClasses=""
      icon="bi bi-layout-text-window-reverse"
      title="Planiranje"
    />
    <ServiceMiniCard
      cssClasses="py-40"
      icon="bi bi-truck"
      title="Prijevoz"
    />
    <ServiceMiniCard 
      cssClasses=""
      icon="bi bi-plus-circle"
      title="Pogrebne Usluge"
    />
    <ServiceMiniCard 
      cssClasses="py-40"
      icon="bi bi-archive-fill"
      title="Kremiranje"
    />
    <ServiceMiniCard
      cssClasses=""
      icon="bi bi-music-note-beamed"
      title="Glazba"
    />

  </div>
  <div class="d-flex flex-column p-4 gap-4 mt-4 align-items-center flex-lg-row justify-content-around container">
    <div class="divider"></div>
    <a href="/usluge" class="button-phone d-flex gap-2 align-items-center justify-content-center">
      <span>Saznajte više o našim uslugama</span>
      <i class="bi bi-arrow-right-circle-fill"></i>
    </a>
  </div>
</section>

<style>

  .divider {
    border: 1px solid rgb(160, 160, 160);
    height: 0;
    width: 60%;
  }

  .button-phone {
    background-color: #0b7978;
    padding: 13px 20px;
    border-radius: 25px;
    text-decoration: none;
    color: white !important;
    transition: 0.3s;
    font-size: large;
  }

  .button-phone:hover {
    background-color: #0e9b99;
  }
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