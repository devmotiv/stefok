<script>
  import config from '$lib/config/config.json';
</script>

<footer class="footer text-white">
  <div class="footer-inner-container">
    <div class="footer-info-container">
      <div class="footer-box-container">
        <div class="box box-info-footer">
          <div class="box-info">
            <i class="bi bi-pin-map"></i>
            <a href="https://www.google.com/maps/place/Pogrebno+poduze%C4%87e+Mimoza+%C5%A0tefok/@45.6009359,17.8651103,17z/data=!3m1!4b1!4m6!3m5!1s0x475d65a30ff19ee9:0x523645729471a6e0!8m2!3d45.6009359!4d17.867299!16s%2Fg%2F11h3qssyqy" target="_blank" rel="noreferrer">{config.adress}</a>
          </div>
          <div class="box-info">
            <i class="bi bi-clock"></i>
            <span>Radimo od 0 - 24 sata</span>
          </div>
          <div class="box-info">
            <i class="bi bi-whatsapp"></i>
            <a href="tel:{config.phone}">{config.phone}</a>
            <span> / </span>
            <a href="tel:{config.phoneTwo}">{config.phoneTwo}</a>
          </div>
          <div class="box-info">
            <i class="bi bi-facebook"></i>
            <a href="{config.facebookLink}" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-container">
      <p>Pogrebno poduzeće i cvjećarna još od 1999. godine!</p>
      <hr />
      <p>© Pogrebno Poduzeće Mimoza "ŠTEFOK". Sva prava zadržana.</p>
    </div>
  </div>
</footer>