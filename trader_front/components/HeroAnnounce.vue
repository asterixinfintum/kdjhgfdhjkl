<template>
  <div>
    <div class="heroannounce">
      <div class="heroannounce__content">
        <h3 class="section__area--h4">
          Get Bitcoin at lowest rates for as low as 60,000 usd. Zero fees on BTC purchases
          and swaps
        </h3>
        <p class="section__area--h3 section-header">
          Don't miss our Christmas and Newyears holiday Bitcoin trading plan
        </p>

        <p class="heroannounce__content--desc">
          Don't miss out on our biggest Bitcoin leverage trade of the year. From December
          1st to February 24th, slash your trading fees, take advantage of this arbitrage,
          and stack more sats for less.
        </p>

        <button
          @click="navigateToPage('register')"
          class="landing-btn landing-btn__curved landing-btn__white"
        >
          <span>get started</span>
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
              <line x1="0.75" y1="12" x2="22.5" y2="12" />
              <path d="M12.75 2.25L22.5 12L12.75 21.75" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import generalutilities from "@/mixins/generalutilities";
export default {
  mixins: [generalutilities],
};
</script>

<style scoped lang="scss">
.heroannounce {
  padding: $paddingside;
  @include topbottompadding;
  padding-bottom: 0;
  position: relative;

  &__content {
    transition: all 0.5s ease;
    border: 0.5px solid $primary-orange;
    border-radius: 1.1rem;
    padding: #{scaleValue(30)};
    color: rgba($white, 1);
    min-height: #{scaleValue(300)};
    position: relative;

    background: linear-gradient(
      to right bottom,
      rgba($primary-orange, 0.1),
      rgba(255, 96, 0, 0.3)
    );

    animation: gradientShift 1s linear infinite;
    background-size: 200% 200%;

    &:hover {
      background: linear-gradient(
        to right bottom,
        rgba(255, 96, 0, 0.3),
        rgba($primary-orange, 0.1)
      );
    }

    &--desc {
      font-size: #{scaleValue(18)};
      line-height: #{scaleValue(30)};

      margin-bottom: #{scaleValue(60)};

      @media only screen and (max-width: 1024px) {
        font-size: #{scaleValue(80)};
        line-height: #{scaleValue(130)};
        margin-bottom: #{scaleValue(200)};
      }
    }

    @media only screen and (max-width: 1024px) {
      padding: $paddingsidem;
      height: auto;
      padding-top: #{scaleValue(300)};
      padding-bottom: #{scaleValue(300)};
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: $paddingsidem;
    height: auto;
    padding-top: #{scaleValue(300)};
    padding-bottom: #{scaleValue(300)};
  }
}
</style>
