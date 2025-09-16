<template>
  <div class="container">
    <!--<div class="container__main" id="main">
      <figure class="container__backgroundimg">
        <img src="@/assets/gifs/Comp-1_3.gif" alt="My cool gif" />
      </figure>
      <div class="container__header">
        <HeaderLanding />
      </div>
      <div class="container__top">
        <Jumbotron />
      </div>
      <div class="container__content">

        <SectionOne />

        <HeroAnnounce />

        <DataConsensus />

        <SectionTwo />

        <AccountTypes />

        <Faq />

        <ScrollSlider :swipenumber="swipenumber" />

        <ScrollSliderMobile />

        <Footer />
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      swipenumber: "noswipe",
    };
  },
  mounted() {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    if (mediaQuery.matches) {
      window.addEventListener("scroll", this.handleScrollM);
    } else {
      window.addEventListener("scroll", this.handleScroll);
    }

    document.documentElement.style.setProperty("font-size", "100%");
  },
  methods: {
    handleScroll() {
      const firstsection = document.getElementById("firstsection");
      const rect = firstsection.getBoundingClientRect();
      //const absoluteDistance = rect.top + window.pageYOffset;

      const jumbotron = document.getElementById("jumbotron");
      const curvedarea = document.getElementById("curvedarea");

      if (rect.top <= -13) {
        curvedarea.classList.add("coloredbackground");
      } else {
        curvedarea.classList.remove("coloredbackground");
      }

      if (rect.top <= 400) {
        jumbotron.style.opacity = `0`;
      } else if (rect.top <= 700) {
        jumbotron.style.opacity = `.5`;
      } else {
        jumbotron.style.opacity = `1`;
      }

      const slidemarkerone = document.getElementById("slidemarkerone");
      const slidemarkertwo = document.getElementById("slidemarkertwo");
      const slidemarkerthree = document.getElementById("slidemarkerthree");

      const sliderpart = document.getElementById("sliderpart");
      const slidebody = document.getElementById("slidebody");

      const footer = document.getElementById("footer");

      const smrectone = slidemarkerone.getBoundingClientRect();
      const smrecttwo = slidemarkertwo.getBoundingClientRect();
      const smrectthree = slidemarkerthree.getBoundingClientRect();

      if (smrectone.top <= 159) {
        sliderpart.classList.add("fixed");
      } else if (smrectone.top > 159) {
        sliderpart.classList.remove("fixed");
      }

      /* console.log(smrectone.top, "one");
      console.log("=====================");
      console.log(smrecttwo.top, "two");
      console.log("=====================");
      console.log(smrectthree.top, "three");
      console.log("=====================");*/

      if (smrectone.top <= 75 && smrecttwo.top > 484) {
        this.scrollslidermove("oneswipe");
      } else if (smrecttwo.top <= 484 && smrectone.top <= 75) {
        this.scrollslidermove("twoswipe");
      } else {
        this.scrollslidermove("noswipe");
      }

      if (smrecttwo.top <= 54) {
        footer.style.opacity = "1";
      } else {
        footer.style.opacity = "0";
      }
    },
    handleScrollM() {
      const firstsection = document.getElementById("firstsection");
      const rect = firstsection.getBoundingClientRect();

      const jumbotron = document.getElementById("jumbotron");

      if (rect.top <= 471) {
        jumbotron.style.opacity = `0`;
      } else if (rect.top <= 497.5) {
        jumbotron.style.opacity = `.5`;
      } else {
        jumbotron.style.opacity = `1`;
      }
    },
    scrollslidermoveM() {},
    scrollslidermove(swipenumber) {
      this.swipenumber = swipenumber;
    },
  },
};
</script>

<style lang="scss">
body {
  font-size: 100% !important;

  @media (max-width: 576px) {
    font-size: 100% !important;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (max-width: 768px) {
    html {
      font-size: 100% !important;
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media (max-width: 992px) {
    html {
      font-size: 100% !important;
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (max-width: 1200px) {
    html {
     font-size: 100% !important;
    }
  }

  /* XXL devices (larger desktops, 1400px and up) */
  @media (max-width: 1400px) {
    html {
      font-size: 100% !important;
    }
  }
}

.container {
  background: $background;
  width: 100vw;
  overflow-x: hidden;

  &__main {
    opacity: 1;
    transition: all 0.5s ease;
  }

  &::before {
    position: fixed;
    height: 100vh;
    content: "";
    background: $black;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
  }

  &__backgroundimg {
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;

    & img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  &__header {
    position: relative;
    z-index: 7;
  }

  &__top {
    position: relative;
    z-index: 4;
  }

  &__content {
    position: relative;
    z-index: 5;

    width: 100vw;
  }
}
</style>
