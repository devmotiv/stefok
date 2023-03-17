<script>
  export let cssClass;
  import data from './data.json';
  import { onMount } from "svelte";  
  import { MasonryGrid } from "@egjs/grid";
  onMount(() => {
     new MasonryGrid(document.querySelector('.container'), {
        gap: 35,
        useResizeObserver: true,
        observeChildren: true,
        align: 'stretch',
        maxStretchColumnSize: 0,
        maxStretchColumnSize: 400,
        column: 0,
        columnSize: 400,
    }).renderItems();
})
let imageFilePath;
const openImageModal = (event) => {
  console.log(event.target.src)
  const modal = document.querySelector('#image_modal');
  modal.style.display = "block";
  imageFilePath = event.target.src;
}

const closeImageModal = (event) => {
  const modal = document.querySelector('#image_modal');
  modal.style.display = "none";
}
</script>

<section class="{cssClass}">
  <div id="container" class="container p-4 mt-4 mb-4">
    {#each data.imageFiles as imageFile}
      <img src="/images/galery/{imageFile}" loading="lazy" data-grid-lazy="true" alt="" data-grid-not-equal-size="true" on:click={openImageModal} on:keyup={openImageModal}/>
    {/each}
  </div>
</section>


<div id="image_modal" class="modal" on:click={closeImageModal} on:keyup={closeImageModal} >
  <button on:click={closeImageModal} class="btn btn-primary rounded-circle modal-button">
    <i class="bi bi-x-lg"></i>
  </button>
  <div class="img-container d-flex justify-content-center align-items-center">
    <img on:click={closeImageModal} on:keyup={closeImageModal} src={imageFilePath} class="modal-content" alt=""/>
  </div>
</div>

<style>
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  padding-top: 20px;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

.img-container {
  height: 100%;
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  max-height: 95vh;
}

/* Add Animation */
.modal-content {  
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

img:hover {
  cursor: pointer;
}

@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)} 
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}

/* The Close Button */
.modal-button {
  position: absolute;
  right: 20px;
  width: 40px;
  transition: 0.3s;
  z-index: 999;
}

.modal-button :hover,
.modal-button :focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}

@media only screen and (max-width: 500px){
  .modal-content {
    width: 100%;
    height: 100%;
  }
}

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