<template>
  <div class="bitcoinpromo" :class="{ dashboard }">
    <div class="bitcoinpromo__content">
      <h4 class="bitcoinpromo__content--h4">Bitcoin Christmas and New Year Blast!</h4>

      <div class="bitcoinpromo__box">
        <div class="bitcoinpromo__box--text">
          <p>
            Don't miss out on our biggest Bitcoin leverage trade of the year. From December 1st
            to February 24th, slash your trading fees, take advantage of this arbitrage,
            and stack more sats for less.
          </p>

          <p class="">
            Get Bitcoin at lowest rates for as low as 60,000 usd. Zero fees on BTC
            purchases and swaps
          </p>

          <div class="landingpage__jumbotron--area buttons" v-if="!dashboard">
            <button class="btn left" @click="$router.push('/register')">
              Open an account
            </button>
            <button class="btn right" @click="$router.push('/login')">Sign in</button>
          </div>
        </div>

        <figure class="bitcoinpromo__box--image">
          <img src="@/assets/imgs/christmas-tree.png" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dashboard"],
};
</script>

<style lang="scss">
$landing-textcolor: #141d22;

.bitcoinpromo {
  position: relative;
  display: flex;
  flex-direction: column;
  //width: #{scaleValue(400)};
  padding-bottom: #{scaleValue(30)};
  color: rgba($white, 0.9);
  //margin-bottom: #{scaleValue(30)};
  padding: $basic-landing-area-padding;
  padding-top: #{scaleValue(80)};
  padding-bottom: #{scaleValue(30)};
  //width: 100vw;

  &__dashboard {
    //margin-bottom: #{scaleValue(30)};
  }

  background: linear-gradient(
    to bottom,
    rgba($landing-primary, 1),
    rgba($landing-primary, 0.8)
  );

  &.dashboard {
    background: transparent;
    padding-top: #{scaleValue(0)};
    padding-bottom: #{scaleValue(0)};
  }

  @media only screen and (max-width: $breakpoint-mobile-large) {
    width: auto;
    margin-bottom: #{scaleValue(100)};
  }

  &__content {
    &--h4 {
      position: relative;
      color: $landing-green;
      font-weight: 600;
      font-size: #{scaleValue(20)};
      margin-bottom: #{scaleValue(10)};

      z-index: 3;

      @media only screen and (max-width: $breakpoint-mobile-large) {
        font-size: #{scaleValue(70)};
        line-height: #{scaleValue(90)};
        margin-bottom: #{scaleValue(60)};
      }
    }
  }

  &__box {
    width: 100%;
    border-radius: 3rem;
    min-height: #{scaleValue(120)};
    padding: #{scaleValue(30)};
    display: flex;
    justify-content: space-between;

    &--text {
      width: 80%;
      font-size: #{scaleValue(15)};
      line-height: #{scaleValue(32)};

      position: relative;
      z-index: 3;

      @media only screen and (max-width: $breakpoint-mobile-large) {
        font-size: #{scaleValue(70)};
        line-height: #{scaleValue(100)};
        width: 100%;
      }

      & p {
        &:nth-child(1) {
        }

        &:nth-child(2) {
          font-size: #{scaleValue(13)};
          color: $bitcoin-orange;

          @media only screen and (max-width: $breakpoint-mobile-large) {
            font-size: #{scaleValue(50)};
            line-height: #{scaleValue(70)};
            margin-top: #{scaleValue(70)};
          }
        }
      }
    }

    &--image {
      position: relative;
      height: #{scaleValue(400)};
      width: #{scaleValue(500)};
      overflow: hidden;

      z-index: 2;

      @media only screen and (max-width: $breakpoint-mobile-large) {
        overflow: hidden;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 100%;

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          content: "";
          background: rgba(0, 0, 0, 0.7);
        }
      }

      & img {
        height: 100%;
        width: 100%;
        object-fit: cover;

        @media only screen and (max-width: $breakpoint-mobile-large) {
          width: 60%;
        }
      }
    }
  }
}
</style>
