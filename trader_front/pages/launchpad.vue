<template>
  <div>
    <div class="launchpad">
      <HeaderLanding :coloredbackground="true" />

      <div class="container__content">
        <div class="launchpad__jumbotron">
          <div class="launchpad__jumbotron--header fade-in-up">
            <h2 class="launchpad__jumbotron--h2">Engage Our Token Launch Program</h2>
            <p class="launchpad__jumbotron--p">Lock assets and get airdrops on BSN Finance</p>
          </div>

          <div class="launchpad__jumbogrid">
            <div class="launchpad__jumbogrid--item fade-in-up">
              <span>$ 729,000</span>
              <span>Currently Locked</span>
            </div>

            <div class="launchpad__jumbogrid--item fade-in-up">
              <span>$ 137,576,034</span>
              <span>Funds Raised</span>
            </div>

            <div class="launchpad__jumbogrid--item fade-in-up">
              <span>72</span>
              <span>Projects Launched/Funded</span>
            </div>

            <div class="launchpad__jumbogrid--item fade-in-up">
              <span>Over 80,000</span>
              <span>participants</span>
            </div>
          </div>
        </div>

        <div class="launchpad__boxes">
          <div
            class="launchpad__box"
            v-for="(launchpadItem, launchpadItemindex) in launchpadItems"
          >
            <div class="launchpad__box--header">
              <div class="launchpad__box--details">
                <figure>
                  <img :src="launchpadItem.network_logo" />
                </figure>

                <h2>{{ launchpadItem.header }}</h2>

                <span class="status">{{ launchpadItem.status }}</span>
              </div>

              <div class="launchpad__box--threedot" @click="openOptions">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>

                <div class="launchpad__box--threedotoptions">
                  <span
                    class="menuoption"
                    @click="
                      $router.push({
                        path: '/launchpage/buy',
                        query: {
                          type: 'launchprogram',
                          launchprogramid: launchpadItem._id,
                        },
                      })
                    "
                    >Join Launchpad</span
                  >
                  <span
                    class="menuoption"
                    @click="
                      $router.push({
                        path: '/articles/launchprograms',
                        query: {
                          type: 'launchprogram',
                          articleid: launchpadItem._id,
                        },
                      })
                    "
                    >Learn more</span
                  >
                </div>
              </div>
            </div>

            <div class="launchpad__box--grid">
              <div class="launchpad__box--detail">
                <span>Launch Date</span>
                <span>{{ launchpadItem.launchdate }}</span>
              </div>

              <div class="launchpad__box--detail">
                <span>Conclusion Date</span>
                <span>{{ launchpadItem.conclusiondate }}</span>
              </div>

              <div class="launchpad__box--detail">
                <span>Airdrop Date</span>
                <span>{{ launchpadItem.airdropdate }}</span>
              </div>

              <div class="launchpad__box--detail">
                <span>Total Airdrops</span>
                <span>{{ launchpadItem.totalairdrops }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BASE_VARS from "@/store/base_vars";

export default {
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      launchpadItems: [],
    };
  },
  methods: {
    openOptions() {},
    getArticles() {
      const { BASE_URL } = BASE_VARS;
      const type = this.$route.query.type;

      fetch(`${BASE_URL}/article/articles?type=launchprogram`)
        .then((response) => response.json())
        .then((data) => {
          this.launchpadItems = data;
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>

<style lang="scss" scoped>
.launchpad {
  padding: $paddingside;
  @include topbottompadding;
  padding-bottom: 0;

  &__jumbotron {
    &--h2 {
      font-size: #{scaleValue(60)};
      font-weight: 400;

      @media only screen and (max-width: 1024px) {
        font-size: #{scaleValue(100)};
      }
    }

    &--p {
      font-size: #{scaleValue(20)};
      font-weight: 400;

      @media only screen and (max-width: 1024px) {
        font-size: #{scaleValue(70)};
      }
    }

    &--header {
      line-height: #{scaleValue(70)};
      margin-bottom: #{scaleValue(30)};

      @media only screen and (max-width: 1024px) {
        line-height: #{scaleValue(160)};
        margin-top: #{scaleValue(200)};
        margin-bottom: #{scaleValue(200)};
      }
    }
  }

  &__jumbogrid {
    &--item {
      margin-bottom: #{scaleValue(30)};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      line-height: #{scaleValue(40)};

      @media only screen and (max-width: 1024px) {
        line-height: #{scaleValue(100)};
        margin-bottom: #{scaleValue(80)};
      }

      & span {
        &:nth-child(1) {
          font-size: #{scaleValue(30)};
          font-weight: 700;

          @media only screen and (max-width: 1024px) {
            font-size: #{scaleValue(70)};
          }
        }

        &:nth-child(2) {
          font-size: #{scaleValue(15)};
          color: rgba($primary-orange, 0.8);

          @media only screen and (max-width: 1024px) {
            font-size: #{scaleValue(70)};
          }
        }
      }
    }
  }

  &__boxes {
  }

  &__box {
    border: 0.4px solid rgba($white, 0.4);
    border-radius: 0.7rem;
    padding: 1.5rem;
    margin-bottom: 2rem;
    position: relative;

    &--header {
      display: flex;
      justify-content: space-between;
      margin-bottom: #{scaleValue(30)};

      @media only screen and (max-width: 1024px) {
        margin-bottom: #{scaleValue(120)};
      }

      & h2 {
        font-weight: 300;
        margin-right: #{scaleValue(20)};
      }
    }

    &--details {
      display: flex;
      align-items: center;

      & h2 {
        font-size: #{scaleValue(20)};

        @media only screen and (max-width: 1024px) {
          font-size: #{scaleValue(60)};
        }
      }

      & figure {
        height: #{scaleValue(20)};
        width: #{scaleValue(20)};
        margin-right: #{scaleValue(10)};

        @media only screen and (max-width: 1024px) {
          height: #{scaleValue(80)};
          width: #{scaleValue(80)};
          margin-right: #{scaleValue(40)};
        }

        & img {
          object-fit: contain;
          height: 100%;
          width: 100%;
        }
      }

      & span {
        &.status {
          font-size: #{scaleValue(11)};
          background: rgba($bitcoin-orange, 0.1);
          padding: #{scaleValue(10)};
          border-radius: 1rem;
        }
      }
    }

    &--detail {
      display: flex;
      flex-direction: column;
      line-height: #{scaleValue(30)};

      @media only screen and (max-width: 1024px) {
        line-height: #{scaleValue(80)};
      }

      & span {
        &:nth-child(1) {
          font-size: #{scaleValue(15)};
          color: rgba($white, 0.5);

          @media only screen and (max-width: 1024px) {
            font-size: #{scaleValue(50)};
          }
        }

        &:nth-child(2) {
          font-size: #{scaleValue(15)};
          font-weight: 600;

          @media only screen and (max-width: 1024px) {
            font-size: #{scaleValue(50)};
          }
        }
      }
    }

    &--threedot {
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover .launchpad__box--threedotoptions {
        display: flex;
      }

      & span {
        &.dot {
          display: inline-block;
          border-radius: 100%;
          background: rgba($white, 0.5);
          height: 0.3rem;
          width: 0.3rem;
          margin-left: 0.3rem;
        }
      }
    }

    &--threedotoptions {
      position: absolute;
      background: $faded-black;
      border-radius: 0.2rem;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      border-radius: 0.7rem;
      display: none;

      &:hover {
        display: flex;
      }

      & span {
        &.menuoption {
          display: flex;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.5s ease;
          padding: 1rem;

          &:hover {
            background: $defipopup-body;
          }
        }
      }
    }

    &--grid {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);

      @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
</style>
