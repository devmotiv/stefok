<script>
  export let h1, h2, shortAbout;
</script>

<section class="hero">
  <div class="content-section d-flex align-items-center justify-content-center">
    <div class="container p-4 custom">
      <div class="text">
        <h1>{h1}</h1>
        <h2>{h2}</h2>
        {#if shortAbout}
        <p class="text-left w-50 p-4 about-short m-auto mt-4">
          Uz veliko iskustvo, specijalizirani smo za obavljanje pogrebnih djelatnosti još od 1999. godine.
          Na usluzi smo Vam 24 sata dnevno, 7 dana u tjednu!
        </p>
        {/if}
      </div>
      <div class="d-flex flex-column p-4 gap-4 mt-4 align-items-center flex-lg-row justify-content-between">
        <div class="w-50 divider"></div>
        <a href="tel:+385098737163" class="button-phone">
          <i class="bi bi-whatsapp"></i>
          <span>Nazovite: +385 098 737 163</span>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    height: 800px;
    width: 100%;
    background-size:cover;
    background-repeat: no-repeat;
    background-image: 
      radial-gradient(circle at top left,rgba(0,79,140,0.34) 50%,rgba(0,56,94,0.75) 100%),
      url($lib/images/biel-morro-kcKiBcDTJt4-unsplash.jpg) !important;
  }

  .content-section {
    width: 100%;
    height: 100%;
    color: white;
  }

  .about-short {
    font-size: larger;
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
  }

  .button-phone:hover {
    background-color: #0e9b99;
  }

  h1 {
    font-size: 84px;
  }

  h2 {
    font-size: 44px;
  }

  .custom {
    background-color: rgba(255,255,255,0.1);
    border-radius: 25px;
  }

  @media screen and (max-width: 980px) {
    h1 {
      font-size: 64px;
    }

    h2 {
      font-size: 34px;
    }
    .about-short {
      width: 75% !important;
    }

    .button-phone {
      font-size: large;
    }
  }

  @media screen and (max-width: 600px) {
    .content-section, .hero {
      height: auto;
    }
    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 28px;
    }

    .about-short {
      width: 100% !important;
    }

    .button-phone {
      font-size:medium;
    }

    .custom {
      background-color: inherit;
      border-radius: 0;
    }
  }
</style>