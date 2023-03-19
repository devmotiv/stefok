<script>

</script>

<section class="mt-4 mb-4 p-4">
  <div>
    <h2 class="decorated"><span>O nama</span></h2>
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
        <span><span class="mobile-d-none">Nazovite: </span>(+385) 098 737 163</span>
      </a>
      <span class="text-center mt-4 mb-4 display-6"> ili </span>
      <a href="tel:+385033684109" class="button-phone m-auto">
        <i class="bi bi-whatsapp"></i>
        <span><span class="mobile-d-none">Nazovite: </span>(+385) 033 684 109</span>
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

  @media screen and (max-width: 382px) {
    .mobile-d-none {
      display: none;
    }

    .button-phone {
      width: 80%;
      text-align: center;
    }
  }
</style>