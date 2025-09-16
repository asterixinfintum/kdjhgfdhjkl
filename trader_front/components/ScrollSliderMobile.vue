<template>
  <div class="scrollslidermobile">
    <div class="scrollslidermobile__swiper swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="scrollslider__slideitem">
            <figure></figure>
            <h2 class="scrollslider__slideitem--h2">Account Growth Bonus:</h2>
            <p class="scrollslider__slideitem--p">
              Earn up to 10% interest on deposits when you maintain a minimum account
              balance of $5,000 or more. Tiered bonuses apply, with higher rates available
              for larger balances.
            </p>

            <button class="scrollslider__readmorebtn" @click="navigateToPage('register')">
              <div class="scrollslider__readmorebtn--text">
                <span>Register</span>
                <span>↗</span>
              </div>
            </button>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="scrollslider__slideitem">
            <figure></figure>
            <h2 class="scrollslider__slideitem--h2">Trade Volume Reward:</h2>
            <p class="scrollslider__slideitem--p">
              Receive 2% cashback on monthly trading fees when your trading volume exceeds
              $50,000. Bonuses increase to 5% cashback for volumes over $100,000.
            </p>

            <button class="scrollslider__readmorebtn" @click="navigateToPage('register')">
              <div class="scrollslider__readmorebtn--text">
                <span>Register</span>
                <span>↗</span>
              </div>
            </button>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="scrollslider__slideitem">
            <figure></figure>
            <h2 class="scrollslider__slideitem--h2">New Account Welcome Bonus:</h2>
            <p class="scrollslider__slideitem--p">
              Enjoy a 5% deposit match on initial deposits for new accounts, capped at
              $500. Higher percentages are available for deposits over $10,000, reaching
              up to 8% match.
            </p>

            <button class="scrollslider__readmorebtn" @click="navigateToPage('register')">
              <div class="scrollslider__readmorebtn--text">
                <span>Register</span>
                <span>↗</span>
              </div>
            </button>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="scrollslider__slideitem">
            <figure></figure>
            <h2 class="scrollslider__slideitem--h2">Boost Your Trading Power</h2>
            <p class="scrollslider__slideitem--p">
              Unlock a 25% top-up on your account, giving you more leverage to open
              additional trades and seize market opportunities.
            </p>

            <button class="scrollslider__readmorebtn" @click="navigateToPage('register')">
              <div class="scrollslider__readmorebtn--text">
                <span>Register</span>
                <span>↗</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import generalutilities from "@/mixins/generalutilities";
import { Swiper } from "swiper";

export default {
  mixins: [generalutilities],
  mounted() {
    this.$nextTick(() => {
      const swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        freeMode: true,
      });
    });
  },
};
</script>

<style scoped lang="scss">
.scrollslidermobile {
  display: none;

  @media only screen and (max-width: 1024px) {
    display: block;

    position: relative;

    margin: #{scaleValue(300)} 0;
    padding-left: #{scaleValue(90)};
  }
}

.swiper {
  width: 100vw;
}

.swiper-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}

.swiper-slide {
  flex-shrink: 0;

  @media only screen and (max-width: 1024px) {
    width: 100vw !important;
    flex-shrink: 0;
  }
}
</style>
