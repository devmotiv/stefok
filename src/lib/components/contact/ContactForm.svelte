<section class="form-container container-md p-4 d-flex justify-content-center">
  <section class="form-wrapper p-4">
    <h3>Pošaljite nam e-mail</h3>
    <form class="d-flex flex-column gap-4 mt-4">
      <div class="d-flex flex-column flex-md-row gap-4">
        <input type="text" placeholder="Vaše Ime" class="input" required/>
        <input type="email" placeholder="Vaša Email Adresa" class="input" required/>
      </div>
      <input type="text" placeholder="Vaš broj telefona (Nije obavezno)" required/>
      <input type="text" placeholder="Naslov / Subjekt" required/>
      <textarea placeholder="Poruka" rows="4" required></textarea>
      <div class="d-flex justify-content-end">
        <button class="send-button">
          Pošalji
          <i class="bi bi-send"></i>
        </button>
      </div>
    </form>
    <p class="mt-4">
      <em>
        Na usluzi smo Vam 24 sata dnevno, 7 dana u tjednu!
      </em>
    </p>
  </section>
</section>

<style>
  .form-container {
    position: relative;
    -webkit-box-shadow: 0px 20px 43px -18px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 20px 43px -18px rgba(0,0,0,0.75);
    box-shadow: 0px 20px 43px -18px rgba(0,0,0,0.75);
    bottom: 200px;
    background-color: #fff;
    width: 800px;
  }
  form {
    width: 100%;
  }

  input, textarea {
    padding: 1rem;
  }

  textarea {
    resize: none;
  }

  .send-button {
    width: fit-content;
    padding: 10px 20px;
    border: none;
  }
  
  .input {
    width: 50%;
  }
  .form-wrapper {
    width: 100%;
    color: white;
    background-color: #0c213f;    
  }

  @media screen and (max-width: 768px) {
    .input {
      width: 100%;
    }
    .form-container {
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    form {
      width: 100%;
    }

    .form-container {
      bottom: 0;
    }
  }
</style>