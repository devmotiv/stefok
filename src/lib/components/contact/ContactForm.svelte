<script>
  import { onMount } from 'svelte';
  import Alert from './Alert.svelte';
  let formData = {
    name: undefined,
    email: undefined,
    subject: undefined,
    message: undefined,
    phone: undefined,
  }
  let form;
  let showAlert = false;
  let isEmailSuccessfullCheck = false;
  let alertMessage;
  const isEmailSuccessfull = (responseStatus) => {
    if (responseStatus === 'success') {
      return true;
    }
    return false;
  }

  const resetform = () => {
    formData = {
      name: undefined,
      email: undefined,
      subject: undefined,
      message: undefined,
      phone: undefined,
    }
  }

  const closeAlert = () => {
    setTimeout(() => {
      showAlert = false;
    }, 5000);
  }

  onMount(() => {
    form = document.getElementById('contact_form');
  });

  const isFormDataValid = () => {
    if (formData.name && formData.name.length > 0
    && formData.email && formData.email.length > 0
    && formData.subject && formData.subject.length > 0
    && formData.message && formData.message.length > 0
    && formData.phone && formData.phone.length > 0) {
      return true;
    }

    return false;
  }
  const local = false;
  const workerApi = local ? ' https://stefok-email-sender-dev.w-discordbot.workers.dev/' : 'https://stefok-email-sender.w-discordbot.workers.dev/';


  const sendEmailHandler = (e) => {
    if (isFormDataValid()) {
      const request = fetch(workerApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formData)
      }).then(result => {
        return result.json();
      }).then(data => {
        console.log(data)
        const statusSuccessfull = isEmailSuccessfull(data.body.Messages[0].Status);
        if(statusSuccessfull) {
          isEmailSuccessfullCheck = true;
          alertMessage = 'Vaša poruka je poslana!';
        } else {
          isEmailSuccessfullCheck = false;
          alertMessage = 'Nešto je pošlo po krivu. Nismo uspjeli poslati Vašu poruku. Pokušajte ponovno kasnije ili nazovite naš telefonski broj.';
        }
        showAlert = true;
        resetform();
        closeAlert();
      }).catch(error => {
        isEmailSuccessfullCheck = false;
        alertMessage = 'Nešto je pošlo po krivu. Nismo uspjeli poslati Vašu poruku. Pokušajte ponovno kasnije ili nazovite naš telefonski broj.';
        showAlert = true;
        console.log(error)
        resetform();
        closeAlert();
      });
    }

  }
</script>
<section class="form-container container-md p-4 d-flex justify-content-center">
  <section class="form-wrapper p-4">
    <h3>Pošaljite nam e-mail</h3>
    <form on:submit|preventDefault={sendEmailHandler} id="contact_form" class="d-flex flex-column gap-4 mt-4" autocomplete="on">
      <div class="d-flex flex-column flex-md-row gap-4">
        <input type="text" placeholder="Vaše Ime" class="input" bind:value="{formData.name}" required/>
        <input type="email" placeholder="Vaša Email Adresa" class="input" bind:value="{formData.email}" required/>
      </div>
      <input type="text" placeholder="Vaš broj telefona (Kako bi smo vas mogli kontaktirati)" bind:value="{formData.phone}" required/>
      <input type="text" placeholder="Naslov / Subjekt" bind:value="{formData.subject}" required/>
      <textarea placeholder="Poruka" rows="4" bind:value="{formData.message}" required></textarea>
      <div class="d-flex justify-content-end">
        <button type="submit" class="send-button">
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
    <div>
      {#if showAlert}
        <Alert success={isEmailSuccessfullCheck} message={alertMessage} />
      {/if}
    </div>
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