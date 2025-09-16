<template>
  <div class="dataconsensus" id="dataconsensus">
    <h3 class="section__area--h4">Cross Chain Trading Infrastructure</h3>
    <p class="section__area--h3 section-header">
      Industry-standard Trading infra & service solutions on a single platform
    </p>

    <div class="dataconsensus__slider swiper">
      <div class="dataconsensus__swiperswiperwrapper swiper-wrapper">
        <div class="swiper-slide">
          <div class="dataconsensus__areabox">
            <div class="dataconsensus__areabox--asset">
              <figure>
                <img
                  src="@/assets/imgs/featureslogos/Screenshot__85_-removebg-preview.png"
                />
              </figure>
            </div>
            <div class="dataconsensus__areabox--parea">
              <h4 class="dataconsensus__areabox--h4">Yearly rewards up to 4%</h4>
              <p class="dataconsensus__areabox--p">
                Earn up to 4% annual rewards on your Bitcoin holdings with our reliable
                and secure staking platform.
              </p>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="dataconsensus__areabox">
            <div class="dataconsensus__areabox--asset">
              <figure>
                <img
                  src="@/assets/imgs/featureslogos/Screenshot__86_-removebg-preview.png"
                />
              </figure>
            </div>
            <div class="dataconsensus__areabox--parea">
              <h4 class="dataconsensus__areabox--h4">Yearly rewards up to 6%</h4>
              <p class="dataconsensus__areabox--p">
                Maximize your crypto earnings with annual rewards of up to 6% for selected
                digital assets.
              </p>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="dataconsensus__areabox">
            <div class="dataconsensus__areabox--asset">
              <figure>
                <img
                  src="@/assets/imgs/featureslogos/Screenshot__87_-removebg-preview.png"
                />
              </figure>
            </div>
            <div class="dataconsensus__areabox--parea">
              <h4 class="dataconsensus__areabox--h4">Yearly rewards up to 8%</h4>
              <p class="dataconsensus__areabox--p">
                Enjoy competitive staking opportunities offering up to 8% yearly rewards
                on diversified asset portfolios.
              </p>
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="dataconsensus__areabox">
            <div class="dataconsensus__areabox--asset">
              <figure>
                <img
                  src="@/assets/imgs/featureslogos/Screenshot__88_-removebg-preview.png"
                />
              </figure>
            </div>
            <div class="dataconsensus__areabox--parea">
              <h4 class="dataconsensus__areabox--h4">Yearly rewards up to 14%</h4>
              <p class="dataconsensus__areabox--p">
                Unlock high-yield rewards of up to 14% annually by investing in premium
                staking plans tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dataconsensus__attributes">
      <div class="dataconsensus__area" :class="{ right: direction === 'right' }">
        <div class="dataconsensus__areabox">
          <div class="dataconsensus__areabox--asset">
            <figure>
              <img
                src="@/assets/imgs/featureslogos/Screenshot__85_-removebg-preview.png"
              />
            </figure>
          </div>
          <div class="dataconsensus__areabox--parea">
            <h4 class="dataconsensus__areabox--h4">Yearly rewards up to 5%</h4>
            <p class="dataconsensus__areabox--p">
              Grow your wealth with consistent rewards of up to 5% per year on your
              preferred assets.
            </p>
          </div>
        </div>

        <div class="dataconsensus__areabox">
          <div class="dataconsensus__areabox--asset">
            <figure>
              <img
                src="@/assets/imgs/featureslogos/Screenshot__88_-removebg-preview.png"
              />
            </figure>
          </div>
          <div class="dataconsensus__areabox--parea">
            <h4 class="dataconsensus__areabox--h4">Yearly rewards up to 10%</h4>
            <p class="dataconsensus__areabox--p">
              Take advantage of high-growth staking options and earn up to 10% annually on
              your investments.
            </p>
          </div>
        </div>

        <div class="dataconsensus__areabox">
          <div class="dataconsensus__areabox--asset">
            <figure>
              <img
                src="@/assets/imgs/featureslogos/Screenshot__87_-removebg-preview.png"
              />
            </figure>
          </div>
          <div class="dataconsensus__areabox--parea">
            <h4 class="dataconsensus__areabox--h4">Yearly rewards up to 4%</h4>
            <p class="dataconsensus__areabox--p">
              Secure and grow your assets with steady rewards of up to 4% per year,
              designed for long-term investors.
            </p>
          </div>
        </div>

        <div class="dataconsensus__areabox">
          <div class="dataconsensus__areabox--asset">
            <figure>
              <img
                src="@/assets/imgs/featureslogos/Screenshot__86_-removebg-preview.png"
              />
            </figure>
          </div>
          <div class="dataconsensus__areabox--parea">
            <h4 class="dataconsensus__areabox--h4">Yearly rewards up to 12%</h4>
            <p class="dataconsensus__areabox--p">
              Boost your returns with premium annual rewards of up to 12% across diverse
              investment opportunities.
            </p>
          </div>
        </div>

        <div class="dataconsensus__areabox">
          <div class="dataconsensus__areabox--asset">
            <figure>
              <img
                src="@/assets/imgs/featureslogos/Screenshot__85_-removebg-preview.png"
              />
            </figure>
          </div>
          <div class="dataconsensus__areabox--parea">
            <h4 class="dataconsensus__areabox--h4">Yearly rewards up to 14%</h4>
            <p class="dataconsensus__areabox--p">
              Achieve maximum growth potential with exclusive rewards of up to 14% per
              year on select high-performance assets.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="dataconsensus__navigator">
      <figure
        class="dataconsensus__navigator--navigator left"
        @click="toggleslideprogress('left')"
        :class="{ on: direction === 'left' }"
      >
        <img src="@/assets/imgs/svgs/navButton-e4cddf5b.svg" />
      </figure>
      <figure
        class="dataconsensus__navigator--navigator right"
        @click="toggleslideprogress('right')"
        :class="{ on: direction === 'right' }"
      >
        <img src="@/assets/imgs/svgs/navButton-e4cddf5b.svg" />
      </figure>
    </div>
  </div>
</template>

<script>
import generalutilities from "@/mixins/generalutilities";

import { Swiper } from "swiper";

export default {
  data() {
    return {
      direction: "left",
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        freeMode: true,
      });
    });
  },
  mixins: [generalutilities],
  methods: {
    toggleslideprogress(direction) {
      this.direction = direction;
    },
  },
};
</script>

<style scoped lang="scss">
.dataconsensus {
  padding: $paddingside;
  color: $white;
  height: #{scaleValue(900)};
  position: relative;
  @include topbottompadding;
  z-index: 4;
  position: relative;

  &__swiper {
    width: 100vw;
    overflow: hidden;
  }

  &__swiperswiperwrapper {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
  }

  @media only screen and (max-width: 1024px) {
    padding: $paddingsidem;
    height: auto;
    padding-top: #{scaleValue(300)};
    padding-bottom: #{scaleValue(300)};
  }

  &__h3 {
    font-size: 2rem;
  }

  &__area {
    display: flex;
    transition: all 0.5s ease;

    &.right {
      transform: translateX(#{scaleValue(-390)});
    }
  }

  &__areabox {
    border-radius: 1rem;
    border: 0.1px solid rgba($white, 0.2);
    margin-right: #{scaleValue(30)};
    flex-shrink: 0;
    width: #{scaleValue(400)};
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    @media only screen and (max-width: 1024px) {
      width: #{scaleValue(1000)};
    }

    @media only screen and (max-width: 430px) {
      width: 86vw;
    }

    &--asset {
      height: #{scaleValue(250)};
      background: linear-gradient(
        to right,
        rgba(247, 146, 54, 0.1),
        rgba(205, 83, 34, 0.4)
      );
      transition: all 0.5s ease;

      &:hover {
        background: linear-gradient(
          to right,
          rgba(247, 146, 54, 0.5),
          rgba(205, 83, 34, 0.4)
        );
      }

      @media only screen and (max-width: 1024px) {
        height: #{scaleValue(800)};
      }

      & figure {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        & img {
          object-fit: contain;
          height: 50%;
          width: 50%;
        }
      }
    }

    &--h4 {
      font-size: 1.3rem;
      font-weight: 400;
      margin-bottom: #{scaleValue(30)};
      font-family: "Space Grotesk", sans-serif;

      @media only screen and (max-width: 1024px) {
        font-size: 2.3rem;
        margin-bottom: #{scaleValue(80)};
      }

      @media only screen and (max-width: 430px) {
        font-size: 1.3rem;
      }
    }

    &--parea {
      height: #{scaleValue(250)};
      overflow: hidden;
      padding: #{scaleValue(30)};

      @media only screen and (max-width: 1024px) {
        height: #{scaleValue(900)};
        padding: #{scaleValue(80)};
      }

      @media only screen and (max-width: 430px) {
        height: #{scaleValue(1200)};
        padding: #{scaleValue(80)};
      }
    }

    &--p {
      font-size: 1.2rem;
      line-height: 1.9rem;
      font-weight: 300;
      color: rgba($white, 0.7);

      @media only screen and (max-width: 1024px) {
        font-size: #{scaleValue(50)};
        line-height: #{scaleValue(70)};
      }

      @media only screen and (max-width: 430px) {
        font-size: 1.2rem;
        line-height: 1.9rem;
      }
    }
  }

  &__attributes {
    overflow: hidden;

    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }

  &__navigator {
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    width: 100%;
    top: #{scaleValue(400)};
    padding: 0 #{scaleValue(50)};

    @media only screen and (max-width: 1024px) {
      top: #{scaleValue(1000)};

      display: none;
    }

    @media only screen and (max-width: 430px) {
      top: #{scaleValue(1600)};
    }

    &--navigator {
      height: #{scaleValue(45)};
      width: #{scaleValue(45)};
      cursor: pointer;
      border-radius: 100%;
      border: 2px solid transparent;
      transition: all 0.5s ease;

      @media only screen and (max-width: 1024px) {
        height: #{scaleValue(100)};
        width: #{scaleValue(100)};
      }

      @media only screen and (max-width: 430px) {
        height: #{scaleValue(180)};
        width: #{scaleValue(180)};
      }

      & img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      &.left {
        transform: rotate(180deg);
      }

      &.right {
      }

      &.on {
        border: 2px solid $primary-orange;
        box-shadow: 0 0 15px 5px $primary-orange;
      }
    }
  }
}

.swiper {
  height: 100%;
  display: none;

  @media only screen and (max-width: 1024px) {
    width: #{scaleValue(1000)} !important;
    display: block;
  }

  @media only screen and (max-width: 430px) {
    width: #{scaleValue(1430)} !important;
  }
}

.swiper-slide {
  flex-shrink: 0;

  @media only screen and (max-width: 1024px) {
    width: #{scaleValue(1000)} !important;
    flex-shrink: 0;
  }

  @media only screen and (max-width: 430px) {
    width: #{scaleValue(1430)} !important;
    flex-shrink: 0;
  }

  @media only screen and (max-width: 320px) {
    width: #{scaleValue(1300)} !important;
    flex-shrink: 0;
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
