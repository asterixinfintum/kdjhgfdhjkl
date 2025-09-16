<template>
  <div class="section text-area">
    <div class="section__area text-area modern-text">
      <h4 class="section__area--h4">Modern trading Infrastructure</h4>
      <h3 class="section__area--h3 section-header">
        Introducing a new way to access and trade DEFI
      </h3>
      <p class="section-paragraph">
        With BSN, your strategies work harder for you. Enjoy unparalleled returns and
        watch your investments flourish as you capitalize on our unique reward programs.
      </p>
      <button
        @click="navigateToPage('register')"
        class="landing-btn landing-btn__curved landing-btn__white"
      >
        <span>sign up</span>
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0.75" y1="12" x2="22.5" y2="12"></line>
            <path d="M12.75 2.25L22.5 12L12.75 21.75"></path>
          </svg>
        </span>
      </button>
    </div>
    <div class="section__area"></div>
  </div>
</template>

<script>
import generalutilities from "@/mixins/generalutilities";

export default {
  mixins: [generalutilities],
  methods: {
    checkDistance() {
      const element = document.getElementById("firstsection");
      const rect = element.getBoundingClientRect();
      console.log("Distance from the top of the screen:", rect.top);

      // Optional: if you want to include the scroll position for absolute distance from top of the page
      const absoluteDistance = rect.top + window.pageYOffset;
      console.log("Absolute distance from the top of the page:", absoluteDistance);
    },
  },
};
</script>

<style scoped lang="scss"></style>
