<template>
  <div class="headerlanding">
    <div
      class="headerlanding__curvearea"
      id="curvedarea"
      :class="coloredbackground ? 'coloredbackground' : ''"
    >
      <div class="headerlanding__logo" @click="$router.push('/')">
        <figure>
          
        </figure>
        <span>BSN</span>
      </div>

      <div class="headerlanding__menu" :class="{ mmenuopen }">
        <div class="headerlanding__menu--xclose" @click="openmmenu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M26.0429 27.4571c.3905.3905 1.0237.3905 1.4142 0 .3905-.3905.3905-1.0237 0-1.4142L17.4142 16 27.4571 5.95711c.3905-.39053.3905-1.02369 0-1.41422-.3905-.39052-1.0237-.39052-1.4142 0L16 14.5858 5.95711 4.54289c-.39053-.39052-1.02369-.39052-1.41422 0-.39052.39053-.39052 1.02369 0 1.41422L14.5858 16 4.54289 26.0429c-.39052.3905-.39052 1.0237 0 1.4142.39053.3905 1.02369.3905 1.41422 0L16 17.4142l10.0429 10.0429Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="headerlanding__menu--item" @click="scrollToTarget('footer')">
          <span>About</span>
        </div>
        <div class="headerlanding__menu--item" @click="scrollToTarget('dataconsensus')">
          <span>Rewards and Benefits</span>
        </div>
        <!-- <div class="headerlanding__menu--item">
          <span>Community</span>
          <span class="svg">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="down"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
              ></path>
            </svg>
          </span>
        </div>-->

        <!-- <div class="headerlanding__menudropdown">
          <div class="headerlanding__menudropdown--body">
            <div class="headerlanding__menudropdown--item">
              <span>
                <img src="@/assets/imgs/socials/xtwitter.png" />
              </span>
              <span>Twitter</span>
            </div>
            <div class="headerlanding__menudropdown--item">
              <span>
                <img src="@/assets/imgs/socials/telegram.png" />
              </span>
              <span>Telegram</span>
            </div>
            <div class="headerlanding__menudropdown--item">
              <span>
                <img src="@/assets/imgs/socials/discord.svg" />
              </span>
              <span>Discord</span>
            </div>
          </div>
        </div>-->

        <div class="headerlanding__menu--item" @click="scrollToTarget('accountversions')">
          <span>Account Features</span>
        </div>

        <div class="headerlanding__menu--item" @click="$router.push('/launchpad')">
          <span>Launch Program</span>
        </div>

        <div class="headerlanding__menu--item headerlanding__menu--itemdropdown">
          <div class="basic-flex">
            <span>More</span>
            <span>
              <svg
                class="bn-svg header-menu-item_dropdown-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>

          <div class="headerlanding__menu--dropdown">
            <div class="headerlanding__dropdown headerlanding__dropdown--grid">
              <div class="headerlanding__dropdown--content">
                <!-- <div class="headerlanding__dropdown--item">
                  <h3>Markets</h3>
                  <p>
                    Access detailed insights into global markets, including stocks,
                    cryptocurrencies, commodities, and forex. Stay ahead with market
                    trends and real-time data analysis.
                  </p>
                </div>
                <div class="headerlanding__dropdown--item">
                  <h3>NFTs</h3>
                  <p>
                    Dive into the world of non-fungible tokens (NFTs), where art,
                    collectibles, and digital assets meet blockchain technology. Discover
                    top collections and emerging creators.
                  </p>
                </div>
                <div class="headerlanding__dropdown--item">
                  <h3>Airdrops</h3>
                  <p>
                    Explore opportunities to receive free cryptocurrency through airdrop
                    events. Learn how to participate, stay informed on upcoming campaigns,
                    and maximize your rewards.
                  </p>
                </div>-->
                <div
                  class="headerlanding__dropdown--item"
                  @click="
                    $router.push({
                      path: '/articles/projects',
                      query: { type: 'projects' },
                    })
                  "
                >
                  <h3>Projects</h3>
                  <p>
                    Discover cutting-edge blockchain projects and initiatives shaping the
                    future of technology. Gain insights into their goals, features, and
                    potential impact.
                  </p>
                </div>
                <div
                  class="headerlanding__dropdown--item"
                  @click="
                    $router.push({
                      path: '/articles/news',
                      query: { type: 'news' },
                    })
                  "
                >
                  <h3>News</h3>
                  <p>
                    Explore opportunities to receive free cryptocurrency through airdrop
                    events. Learn how to participate, stay informed on upcoming campaigns,
                    and maximize your rewards.
                  </p>
                </div>
              </div>
              <div class="headerlanding__dropdown--content">
                <div
                  class="headerlanding__dropdown--item"
                  @click="
                    $router.push({
                      path: '/articles/announcements',
                      query: { type: 'announcement' },
                    })
                  "
                >
                  <h3>Announcements</h3>
                  <p>
                    Get the latest updates on platform developments, new features, and
                    important industry news. Stay informed about what’s happening in the
                    crypto and blockchain ecosystem.
                  </p>
                </div>
                <div
                  class="headerlanding__dropdown--item"
                  @click="
                    $router.push({
                      path: '/articles/ourblog',
                      query: { type: 'blogpost' },
                    })
                  "
                >
                  <h3>Blogs</h3>
                  <p>
                    Read in-depth articles, tutorials, and thought leadership pieces. Our
                    blogs cover trading strategies, blockchain innovation, market
                    analysis, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="headerlanding__menu--item header__testnet mobile">
          <button
            @click="navigateToPage('login')"
            class="landing-btn landing-btn__transparent landing-btn__curved landing-btn__header"
          >
            LOGIN IN
          </button>
        </div>
        <div class="headerlanding__testnet mobile">
          <button
            @click="navigateToPage('register')"
            class="landing-btn landing-btn__orange landing-btn__curved landing-btn__header"
          >
            OPEN AN ACCOUNT
          </button>
        </div>
      </div>

      <div class="headerlanding__testnet">
        <button
          @click="navigateToPage('register')"
          class="landing-btn landing-btn__orange landing-btn__curved landing-btn__header"
        >
          OPEN AN ACCOUNT
        </button>
      </div>

      <div class="headerlanding__mburger" @click="openmmenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16h24M4 8h24M4 24h24"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import generalutilities from "@/mixins/generalutilities";

export default {
  props: {
    coloredbackground: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      mmenuopen: false,
      current_div: "header",
    };
  },
  mixins: [generalutilities],
  methods: {
    scrollToTarget(id) {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Element with ID '${id}' not found.`);
      }

      this.current_div = id;
      this.mmenuopen = false;
    },
    openmmenu() {
      this.mmenuopen ? (this.mmenuopen = false) : (this.mmenuopen = true);
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

.headerlanding {
  color: $white;
  padding: $paddingside;
  padding-top: #{scaleValue(20)};
  padding-bottom: #{scaleValue(20)};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 8;

  @media only screen and (max-width: 1024px) {
    background: transparent;
    padding-top: #{scaleValue(100)};
  }

  &__curvearea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    border-radius: 3rem;
    padding: #{scaleValue(15)} #{scaleValue(30)};
    transition: all 0.5s ease;

    &.coloredbackground {
      background: $black;
    }
  }

  &__logo {
    color: $primary-orange;
    font-weight: 500;
    font-size: #{scaleValue(30)};
    cursor: pointer;
    display: flex;
    align-items: center;

    & figure {
      display: flex;
      align-items: center;
      height: 2rem;
      width: 2rem;
      margin-right: 0.5rem;

      & img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }

    & span {
      display: flex;
      align-items: center;
    }

    @media only screen and (max-width: $breakpoint-tablet) {
      font-size: #{scaleValue(120)};
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    background: transparent;
    position: relative;

    @media only screen and (max-width: 1024px) {
      flex-direction: column;
      position: fixed;
      top: 0;
      width: 100vw;
      left: 0;
      background: $black-opacity;
      height: 100vh;
      padding: #{scaleValue(100)};
      align-items: flex-start;
      padding-top: #{scaleValue(500)};

      overflow: hidden;
      overflow-y: scroll;

      display: none;

      &.mmenuopen {
        display: flex;
      }
    }

    &--xclose {
      display: none;

      @media only screen and (max-width: 1024px) {
        display: block;
        position: absolute;
        top: #{scaleValue(100)};
        right: #{scaleValue(100)};

        & svg {
          fill: rgba($white, 0.5);
          height: #{scaleValue(200)};
          width: #{scaleValue(200)};
        }
      }
    }

    &--item {
      position: relative;
      color: rgba(230, 231, 242, 0.7);
      font-family: "Space Grotesk", sans-serif;
      margin: 0 #{scaleValue(30)};
      cursor: pointer;
      font-size: 0.83rem;
      font-weight: 400;
      color: $primary-orange;
      transition: all 0.2s ease;

      display: flex;
      align-items: center;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      @media only screen and (max-width: 1024px) {
        margin: 0;
        margin-bottom: #{scaleValue(130)};
        font-size: 2.88rem;

        flex-direction: column;
        align-items: flex-start;
      }

      @media only screen and (max-width: 430px) {
        margin: 0;
        margin-bottom: #{scaleValue(130)};
        font-size: 1.88rem;
      }

      & span {
        display: flex;
        align-items: center;

        &.svg {
          margin-left: #{scaleValue(10)};

          @media only screen and (max-width: 1024px) {
            margin-left: #{scaleValue(30)};
          }
        }

        & svg {
          width: #{scaleValue(10)};
          height: #{scaleValue(10)};

          @media only screen and (max-width: 1024px) {
            width: #{scaleValue(50)};
            height: #{scaleValue(50)};
          }

          @media only screen and (max-width: 430px) {
            width: #{scaleValue(90)};
            height: #{scaleValue(90)};
          }
        }
      }

      &:hover {
        transform: translateY(#{scaleValue(-2)});

        & + .header__menudropdown {
          display: block;
        }
      }
    }

    &--itemdropdown {
      position: relative;
      z-index: 20;

      &:hover {
        & .headerlanding__menu--dropdown {
          //background: red;
          display: block;
        }
      }
    }

    &--dropdown {
      position: absolute;
      background: #1e2329;
      min-width: 5rem;
      min-height: 5rem;
      transition: all 0.5s ease;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 0.2rem;

      z-index: 20;
      display: none;

      &:hover {
        display: block;
      }

      @media only screen and (max-width: 1024px) {
        position: relative;
        background: transparent;
        transform: translateX(0);
        width: 100vw;
        left: 0;
        top: 0;
      }
    }
  }

  &__dropdown {
    &--grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    &--content {
      padding: 1rem;

      @media only screen and (max-width: 1024px) {
        padding: 0;

        &:nth-child(1) {
          //margin-top: 5rem;
        }
      }
    }

    &--item {
      width: 30rem;
      margin-bottom: 1rem;
      transition: all 0.5s ease;
      padding: 0.8rem;
      border-radius: 0.5rem;

      @media only screen and (max-width: 1024px) {
        padding: 1rem;
        width: auto;
      }

      &:hover {
        background: rgba($black, 0.6);
      }

      & h3 {
        margin-bottom: 0.5rem;
        font-size: 1rem;
      }

      & p {
        line-height: 1.3rem;
        font-size: 0.8rem;

        color: rgba($white, 0.5);
      }
    }
  }

  &__menudropdown {
    position: absolute;
    width: 100%;
    top: #{scaleValue(12)};
    padding-top: #{scaleValue(10)};
    display: none;

    @media only screen and (max-width: 1024px) {
      position: relative;
      margin-bottom: #{scaleValue(130)};
    }

    &:hover {
      display: block;
    }

    &--body {
      padding: #{scaleValue(20)};
      background: $background;
      border-radius: 1rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: #{scaleValue(30)};

      @media only screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        background: transparent;
      }
    }

    &--item {
      cursor: pointer;
      color: rgba($white, 0.7);
      font-weight: 500;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;

      @media only screen and (max-width: 1024px) {
        font-size: 2.5rem;
        margin-bottom: #{scaleValue(130)};
        font-weight: 400;
      }

      @media only screen and (max-width: 430px) {
        font-size: 1.3rem;
        margin-bottom: #{scaleValue(130)};
        font-weight: 400;
      }

      & span {
        display: flex;
        align-items: center;

        &:first-child {
          margin-right: #{scaleValue(6)};

          @media only screen and (max-width: 1024px) {
            margin-right: #{scaleValue(60)};
          }
        }

        & img {
          height: #{scaleValue(15)};
          width: #{scaleValue(15)};
          object-fit: contain;

          @media only screen and (max-width: 1024px) {
            height: #{scaleValue(100)};
            width: #{scaleValue(100)};
          }
        }
      }

      &:hover {
        color: $primary-orange;
      }
    }
  }

  &__testnet {
    display: none;

    &.mobile {
      display: block;
    }
  }

  &__mburger {
    display: none;

    @media only screen and (max-width: 1024px) {
      display: block;

      & svg {
        height: #{scaleValue(100)};
        width: #{scaleValue(100)};
      }
    }

    @media only screen and (max-width: 430px) {
      display: block;

      & svg {
        height: #{scaleValue(150)};
        width: #{scaleValue(150)};
      }
    }
  }
}
</style>
