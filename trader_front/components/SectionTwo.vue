<template>
  <div class="section">
    <div class="section__area"></div>
    <div class="section__area text-area">
      <h4 class="section__area--h4">Vetted Security Infrastructure</h4>
      <h3 class="section__area--h3 section-header">
        Safety First: Uncompromised Security
      </h3>
      <p class="section-paragraph">
        Trust in BSN's robust security measures that prioritize your assets and
        information. Our state-of-the-art protection ensures you trade with peace of mind,
        every step of the way.
      </p>
      <button
        @click="navigateToPage('register')"
        class="landing-btn landing-btn__curved landing-btn__white"
      >
        <span>Sign up</span>
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
  </div>
</template>

<script>
import generalutilities from "@/mixins/generalutilities";
export default {
  mixins: [generalutilities],
};
</script>
