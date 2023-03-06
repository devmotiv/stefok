<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
  <nav class="navbar navbar-ligh navbar-expand-lg bg-light px-1 px-md-4">
  <div class="container-fluid-md container-lg">
    <a class="navbar-brand" href="/">
      <img class="logo" src="{logo}" loading="lazy" alt="Logo"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
          <a class="navbar-brand" href="/">
            <img class="logo-mobile" src="{logo}" loading="lazy" alt="Logo"/>
          </a>
        </h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 text-center ul-font">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">POČETNA</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/o-nama">O NAMA</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="/usluge">
              USLUGE
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/galerija">GALERIJA</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="/smrtni-slucaj">
              SMRTNI SLUČAJ
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/kontakt">KONTAKT</a>
          </li>
        </ul>
        <div class="mobile-990 hr mt-3"></div>
         <div class="footer-info-container mobile-990 text-black">
          <div class="footer-box-container">
            <div class="box">
              <h4>O NAMA</h4>
              <p>Pogrebno poduzeće i cvjećarna još od 1999. godine! </p>
              <div class="box-info">
                <i class="bi bi-pin-map"></i>
                <a href="https://www.google.com/maps/place/Pogrebno+poduze%C4%87e+Mimoza+%C5%A0tefok/@45.6009359,17.8651103,17z/data=!3m1!4b1!4m6!3m5!1s0x475d65a30ff19ee9:0x523645729471a6e0!8m2!3d45.6009359!4d17.867299!16s%2Fg%2F11h3qssyqy" target="_blank" rel="noreferrer">Trg dr. F. Tuđmana 1F, ČAČINCI</a>
              </div>
              <div class="box-info">
                <i class="bi bi-clock"></i>
                <span>Radimo od 0 - 24 sata</span>
              </div>
              <div class="box-info">
                <i class="bi bi-whatsapp"></i>
                <a href="tel:+385098737163">+385 098 737 163</a>
              </div>
              <div class="box-info">
                <i class="bi bi-facebook"></i>
                <a href="https://www.facebook.com/profile.php?id=100090347345110" target="_blank" rel="noreferrer">Facebook</a>
              </div>
            </div>
            <div class="copyright-container">
              © Pogrebno Poduzeće Mimoza. Sva prava zadržana.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</header>

<style>

</style>
