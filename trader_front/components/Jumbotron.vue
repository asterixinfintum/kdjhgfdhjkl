<template>
  <div class="jumbotron" data-scroll data-scroll-speed="-5" id="jumbotron">
    <div class="jumbotron__grid">
      <div v-for="(grid, index) in grids" :key="index" class="jumbotron__grid--box"></div>
    </div>

    <div class="jumbotron__headers">
      <h1>
        <span class="orange">Optimise</span>
        <span>Your Trades</span>
      </h1>
      <h2>
        <span
          >Leverage advanced trading tools and support that analyzes market trends in
          real-time,</span
        >
        <span>making split-second decisions to maximize your profits.</span>
      </h2>
      <div class="jumbotron__btnarea">
        <button @click="navigateToPage('register')">OPEN AN ACCOUNT</button>
      </div>

      <div class="jumbotron__logos">
        <div class="jumbotron__logos--slide">
          <figure>
            <img src="@/assets/imgs/ecosystem/ethereum-eth-logo-colored.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/1inch-1inch-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/arbitrum-arb-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/avalanche-avax-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/bnb-bnb-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/chainlink-link-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/cosmos-atom-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/filecoin-fil-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/monero-xmr-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/pepe-pepe-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/Linea-f3c65cba.jpeg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/polygon-matic-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/pyth-network-pyth-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/solana-sol-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/thorchain-rune-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/uniswap-uni-logo.svg" />
          </figure>
        </div>
        <div class="jumbotron__logos--slide">
          <figure>
            <img src="@/assets/imgs/ecosystem/bitcoin-btc-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/1inch-1inch-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/arbitrum-arb-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/avalanche-avax-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/bnb-bnb-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/chainlink-link-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/cosmos-atom-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/filecoin-fil-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/monero-xmr-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/pepe-pepe-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/Linea-f3c65cba.jpeg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/polygon-matic-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/pyth-network-pyth-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/solana-sol-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/thorchain-rune-logo.svg" />
          </figure>
          <figure>
            <img src="@/assets/imgs/ecosystem/uniswap-uni-logo.svg" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import generalutilities from "@/mixins/generalutilities";

export default {
  data() {
    return {
      gridslength: 300,
    };
  },
  mixins: [generalutilities],
  mounted() {},
  computed: {
    grids() {
      const array = [];
      for (let i = 1; i <= this.gridslength; i++) {
        array.push(i);
      }

      return array;
    },
  },
};
</script>

<style scoped lang="scss">
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

.jumbotron {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  height: #{scaleValue(1000)};
  width: 100vw;
  transition: all 0.5s ease;
  padding-top: #{scaleValue(250)};
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    height: #{scaleValue(1400)};
  }

  @media only screen and (max-width: 430px) {
    height: #{scaleValue(2300)};
  }

  &__grid {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(17, #{scaleValue(120)});
    grid-template-rows: repeat(10, #{scaleValue(111)});

    @media only screen and (max-width: 1024px) {
      grid-template-columns: repeat(17, 1fr);
      grid-template-rows: repeat(16, 1fr);
    }

    &--box {
      background: rgba($black, 0.4);
      border: 0.05px solid rgba($primary-orange, 0.1);
      transition: all 0.5s ease;

      &:hover {
        background: rgba($primary-orange, 0.2);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25), 0px 5px 10px rgba(0, 0, 0, 0.22);
      }
    }
  }

  &__headers {
    padding: $paddingside;
    position: absolute;
    width: 100%;
    top: #{scaleValue(250)};
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: $white;
    font-family: "Space Grotesk", sans-serif;

    @media only screen and (max-width: 1024px) {
      top: #{scaleValue(300)};
    }

    @media only screen and (max-width: 430px) {
      padding: $paddingsidem;
      top: #{scaleValue(500)};
      justify-content: flex-start;
    }

    & h1 {
      font-size: 5rem;
      font-weight: 500;
      margin-bottom: #{scaleValue(20)};

      @media only screen and (max-width: 1024px) {
        font-size: 4rem;
        margin-bottom: #{scaleValue(50)};
      }

      @media only screen and (max-width: 430px) {
        font-size: 2rem;
        text-align: left;
      }

      & span {
        &.orange {
          color: $primary-orange;
        }
      }
    }

    & h2 {
      font-weight: 300;
      font-size: 1.8rem;
      display: flex;
      flex-direction: column;
      margin-bottom: #{scaleValue(30)};

      @media only screen and (max-width: 1024px) {
        font-size: 2rem;
        margin-bottom: #{scaleValue(140)};
      }

      @media only screen and (max-width: 430px) {
        font-size: 1.6rem;
        text-align: left;
        margin-bottom: #{scaleValue(140)};
      }
    }

    & button {
      border: none;
      border-radius: 1rem;
      cursor: pointer;
      font-family: "Space Grotesk", sans-serif;
      font-size: 1.3rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.5rem;
      overflow: hidden;
      padding: #{scaleValue(15)} #{scaleValue(35)};
      position: relative;
      transition-duration: 0.15s;

      box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.5), -2px -2px 6px rgba($primary-orange, 0.5);

      @media only screen and (max-width: 1024px) {
        padding: #{scaleValue(60)} #{scaleValue(100)};
        border-radius: 3rem;
        font-size: 2rem;
      }

      @media only screen and (max-width: 430px) {
        padding: #{scaleValue(60)} #{scaleValue(100)};
        font-size: 1.3rem;
      }
    }
  }

  &__logos {
    overflow: hidden;
    display: flex;
    align-items: center;

    &--slide {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: #{scaleValue(220)};
      overflow: hidden;
      white-space: nowrap;
      animation: move 10s linear infinite;
      flex-shrink: 0;
      width: 100%;

      display: grid;
      grid-template-columns: repeat(16, 1fr);

      @media only screen and (max-width: 1024px) {
      }
    }

    & figure {
      height: #{scaleValue(40)};
      width: #{scaleValue(40)};
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      @media only screen and (max-width: 1024px) {
        height: #{scaleValue(120)};
        width: #{scaleValue(120)};
      }

      @media only screen and (max-width: 430px) {
        height: #{scaleValue(200)};
        width: #{scaleValue(200)};
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      & img {
        object-fit: cover;
        height: 70%;
        width: 70%;
        border-radius: 100%;
      }
    }
  }

  &__btnarea {
    @media only screen and (max-width: 430px) {
      display: flex;
    }
  }
}
</style>
