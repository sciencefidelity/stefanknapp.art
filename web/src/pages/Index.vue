<template>
  <Layout>

    <section id="site-main">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 logo">
            <div class="knapp-image">
              <VideoEmbed />
            </div>
            <div class="circle">
              <div class="title"><h1>Knapp</h1></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="spacer"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 footer">
            <p class="footer-text">
              <span class="top-row">
                Galerie Günther Franke München &bull; Maximilianstraße 22, Telefon 226420
              </span><br />
              <span class="bottom-row">
                2. Februar bis Ende Februar 1968, geöffnet Montag mit Samstag 9 bis 17 Uhr
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>

  </Layout>
</template>

<static-query>
  query {
    sanityPhotography(id: "de115ee8-e847-45f1-a4b9-e1d0fc69dffe") {
      title {
        en
        pl
      }
      mainImage {
        asset {
          _id
          url
        }
      }
    }
  }
</static-query>

<script>
  import SanityImage from '../components/SanityImage'
  import VideoEmbed from '../components/VideoEmbed'

  export default {
    name: 'Index',
    components: {
      SanityImage,
      VideoEmbed,
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    position: relative;
    padding-left: 0px;
    padding-right: 0px;
  }

  .circle {
    width: 100%;
    background: var(--transparent);
    border-radius: 50%;
    position: relative;
    &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }

  .knapp-image {
    position: absolute;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    video {
      width: 100%;
      height: auto;
      border-radius: 50%;
    }
  }

  .spacer {
    position: relative;
    width: 100%;
    &::after {
      content: "";
      display: block;
      padding-bottom: 40%;
    }
  }

  .title {
    text-transform: uppercase;
    text-align: right;
    position: absolute;
    right: 0;
    bottom: 50%;
    line-height: 0;
    h1 {
       margin-bottom: 0px;
       font-size: 3.65vw;
       font-family: Futura;
       font-weight: 700;
      }
  }

  .footer-text {
    font-size: 1.35vw;
    line-height: 1.5;
  }

  .top-row {
    letter-spacing: 0.029em;
  }

  .footer {
    text-align: center;
    p {
      margin: 0;
    }
  }

  @media (max-width: 991px) {
    .knapp-image {
      width: 96%;
    }
    .footer-text {
      font-size: 1.9vw;
    }
    .title h1 {
      font-size: 5.5vw;
    }
    .row {
      margin-right: 0px;
      margin-left: 0px;
    }
    .logo {
      padding-top: 4%;
      padding-right: 2%;
      padding-left: 2%;
      padding-bottom: 0;
    }
    .container-fluid {
      padding-left: 0;
      padding-right: 0;
    }
    .footer {
      padding-bottom: 1%;
    }
  }
</style>
