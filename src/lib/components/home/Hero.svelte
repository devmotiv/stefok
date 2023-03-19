<script>
  export let 
  h1, 
  h2, 
  shortAbout, 
  shortAboutIconClass, 
  containerClass, 
  buttonText, 
  buttonIcon, 
  anchorHref, 
  displayPhone='true',
  displayCustom='false',
  secondary='false';

  const isMobilePhoneShown = (displayPhone === 'true' && displayCustom === 'false');
  const isCustomTextShown = (displayPhone === 'false' && displayCustom === 'true');
  console.log(isMobilePhoneShown, isCustomTextShown)
</script>

<section class="hero{secondary === 'true' ? '-secondary' : ''} p-4">
  <div class="content-section{secondary==='true' ? '-secondary' : ''} d-flex align-items-center justify-content-center">
    <div class="{containerClass ? containerClass : 'container'} p-4 custom{secondary === 'true' ? '-secondary' : ''}">
      <div class="text">
        <h1>{h1}</h1>
        <h3>{h2}</h3>
        {#if shortAbout}
        <p class="text-center w-50 p-4 about-short m-auto-i mt-4">
          {shortAbout}
          {#if shortAboutIconClass}
            <i class="{shortAboutIconClass}"></i>
          {/if}
        </p>
        {/if}
      </div>
      {#if isMobilePhoneShown}
      <div class="d-flex flex-column p-4 gap-4 mt-4 align-items-center flex-lg-row justify-content-between">
        <div class="w-50 divider"></div>
        <a href="tel:+385098737163" class="button-phone">
          <i class="bi bi-whatsapp"></i>
          <span><span class="mobile-d-none">Nazovite: </span>(+385) 098 737 163</span>
        </a>
      </div>
      {/if}

      {#if isCustomTextShown}
      <div class="d-flex flex-column p-4 gap-4 mt-4 align-items-center flex-lg-row justify-content-between">
        <div class="w-50 divider"></div>
        <a href="{anchorHref}" class="button-phone">
          <i class="{buttonIcon}"></i>
          <span>{buttonText}</span>
        </a>
      </div>
      {/if}
    </div>
  </div>
</section>

<style>

  .m-auto-i {
    margin: 0 auto !important;
  }
  .hero {
    height: 800px;
    width: 100%;
    background-size:cover;
    background-repeat: no-repeat;
    background-image: 
      radial-gradient(circle at top left,rgba(0,79,140,0.34) 50%,rgba(0,56,94,0.75) 100%),
      url($lib/images/heroflowers.jpg) !important;
  }

  .hero-secondary {
    height: 800px;
    width: 100%;
    background-size:cover;
    background-repeat: no-repeat;
    background-image: 
      radial-gradient(circle at top left,rgba(0,79,140,0.34) 50%,rgba(0,56,94,0.75) 100%),
      url($lib/images/roses-white.jpg) !important;
  }

  .content-section {
    width: 100%;
    height: 100%;
    color: #fff;
  }

  .content-section-secondary {
    width: 100%;
    height: 100%;
    color: rgb(4, 61, 69);
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

  .custom {
    background-color: rgba(255,255,255,0.1);
    border-radius: 25px;
  }

  .custom-secondary {
    background-color: rgba(255,255,255,0.5);
    border-radius: 25px;
  }

  @media screen and (max-width: 980px) {
    h1 {
      font-size: 64px;
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

    .hero, .hero-secondary {
      height: auto;
    }
  }

  @media screen and (max-width: 420px) {
    h1 {
      font-size: 32px;
    }

    h3 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 382px) {
    .mobile-d-none {
      display: none;
    }

    .button-phone {
      width: 100%;
      text-align: center;
    }
  }
</style>