<template>
  <div>
    <div class="assetbuy__togglefocuscontrollers">
      <input class="from-list" ref="fromList" @blur="assetFromListVisible = false" />
      <input class="to-list" ref="toList" @blur="assetToListVisible = false" />
    </div>
    <div class="assetbuy fade-in-up">
      <h3 class="assetbuy__header">Buy {{ "Asset" }}</h3>

      <div class="assetbuy__assetarea assetbuy__assetarea--top">
        <div class="assetbuy__input assetbuy__input--top">
          <div class="assetbuy__input--action">
            <p>You send</p>
          </div>

          <div class="assetbuy__input--content">
            <div class="assetbuy__input--amount">
              <input
                type="number"
                placeholder="0"
                class="no-arrows"
                style="margin: 0; padding: 0"
              />
            </div>

            <div class="assetbuy__input--assettoggle">
              <div class="assetbuy__input--pill" @click="assetFromListVisible_toggle">
                <div class="assetbuy__input--assetdeco">
                  <figure class="assetbuy__input--img">
                    <img src="/imgs/ethereum-eth-logo.png" />
                  </figure>

                  <p class="assetbuy__input--assetsymbol">
                    {{ currentAssetFrom.symbol }}
                  </p>
                </div>

                <div class="assetbuy__input--arrow">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="0"
                      viewBox="0 0 15 15"
                      class="ml-auto h-5 w-5 min-w-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>

                <div class="assetbuy__assetlist" v-if="assetFromListVisible">
                  <div class="assetbuy__assetlist--item" v-for="assetFrom in assetsFrom">
                    <div class="assetbuy__assetlist--itemlogo">
                      <figure class="assetbuy__assetlist--itemimg">
                        <img src="/imgs/ethereum-eth-logo.png" />
                      </figure>
                    </div>

                    <div class="assetbuy__assetlist--itemdetails">
                      <span class="asset-symbol">USDT</span>

                      <span class="asset-balance">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="assetbuy__sidetoggle">
        <span class="assetbuy__sidetoggle--btn">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
            ></path>
          </svg>
        </span>
      </div>

      <div class="assetbuy__assetarea assetbuy__assetarea--bottom">
        <div class="assetbuy__input assetbuy__input--bottom">
          <div class="assetbuy__input--action">
            <p>You receive</p>
          </div>

          <div class="assetbuy__input--content">
            <div class="assetbuy__input--amount">
              <input
                type="number"
                placeholder="0"
                class="no-arrows"
                style="margin: 0; padding: 0"
                disabled
              />
            </div>

            <div class="assetbuy__input--assettoggle">
              <div class="assetbuy__input--pill">
                <div class="assetbuy__input--assetdeco">
                  <figure class="assetbuy__input--img">
                    <img src="/imgs/ethereum-eth-logo.png" />
                  </figure>

                  <p class="assetbuy__input--assetsymbol">{{ currentAssetTo.symbol }}</p>
                </div>

                <div class="assetbuy__input--arrow" v-if="assetsTo.length > 1">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="0"
                      viewBox="0 0 15 15"
                      class="ml-auto h-5 w-5 min-w-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="assetbuy__costs">
        <div class="assetbuy__costs--slippage assetbuy__costs--section">
          <span>Slippage:</span>
          <span>0.10%</span>
        </div>

        <div class="assetbuy__costs--gas assetbuy__costs--section">
          <span>Gas:</span>
          <span>$11.32</span>
        </div>
      </div>

      <div>
        <button class="assetbuy__button">Sign in</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["multiswap"],
  data() {
    return {
      assetFromListVisible: false,
      assetToListVisible: false,
      currentAssetFrom: {
        image: "",
        symbol: "USDT",
        price: "",
      },
      currentAssetTo: {
        image: "",
        symbol: "PengU",
        price: "",
      },
    };
  },
  computed: {
    assetsFrom() {
      return [
        {
          image: "",
          symbol: "USDT",
          price: "",
        },
        {
          image: "",
          symbol: "BTC",
          price: "",
        },
        {
          image: "",
          symbol: "ETH",
          price: "",
        },
      ];
    },
    assetsTo() {
      return [
        {
          image: "",
          symbol: "PengU",
          price: "",
        },
      ];
    },
  },
  methods: {
    assetFromListVisible_toggle() {
      this.assetFromListVisible = !this.assetFromListVisible;

      this.$refs.fromList.focus();
    },
    assetToListVisible_toggle() {
      this.assetToListVisible = !this.assetToListVisible;

      this.$refs.toList.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.assetbuy {
  position: relative;
  background: #161618;
  border-radius: 0.4rem;
  padding: 1.5rem;

  width: 30rem;

  font-family: "Space Grotesk", sans-serif;

  &__header {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  &__assetarea {
    &--top {
      border-bottom: 0.3px solid rgba($primary-orange, 0.2);
    }

    &--bottom {
    }
  }

  &__input {
    padding: 0.7rem;
    background: $black;

    &--top {
      border-radius: 0.4rem 0.4rem 0 0;
    }

    &--bottom {
      border-radius: 0 0 0.4rem 0.4rem;
    }

    &--pill {
      position: relative;
      transition: all 0.5s ease;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      border: 0.3px solid rgba($primary-orange, 0.2);
      border-radius: 0.3rem;
      padding: 0.5rem;
      min-width: 6rem;

      &:hover {
        border: 1px solid rgba($primary-orange, 0.8);
      }
    }

    &--assetdeco {
      display: flex;
      align-items: center;
    }

    &--content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &--amount {
      & input {
        background: transparent;
        border: none;
        outline: none;
        color: rgba($primary-orange, 0.8);
        font-size: 1.5rem;

        &::placeholder {
          color: rgba($primary-orange, 0.8);
        }
      }
    }

    &--arrow {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & span {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    &--action {
      font-size: 0.7rem;
      opacity: 0.6;
      margin-bottom: 1rem;
    }

    &--img {
      height: 1rem;
      width: 1rem;

      & img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    &--assetsymbol {
      margin-right: 0.5rem;
    }
  }

  &__assetlist {
    position: absolute;
    top: 2.3rem;
    left: 0;
    width: 100%;
    height: 5rem;
    background: rgba($background, 1);
    border-radius: 0.3rem;
    border: 0.3px solid rgba($white, 0.2);
    z-index: 1;
    overflow-x: hidden;
    overflow-y: scroll;

    &--item {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      transition: all 0.5s ease;
      cursor: pointer;

      &:hover {
        background: rgba($black, 0.9);
      }
    }

    &--itemlogo {
    }

    &--itemdetails {
      display: flex;
      flex-direction: column;

      & span {
        &.asset-symbol {
          font-size: 0.8rem;
        }

        &.asset-balance {
          opacity: 0.5;
          font-size: 0.7rem;
        }
      }
    }

    &--itemimg {
      height: 1rem;
      width: 1rem;
      margin-right: 0.5rem;

      & img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }

  &__togglefocuscontrollers {
    & input {
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;
      padding: 0;
      margin: 0;
      z-index: -1;
    }
  }

  &__sidetoggle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0;

    &--btn {
      background: $black;
      cursor: pointer;
      border: 0.3px solid rgba($primary-orange, 0.2);
      padding: 0.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.3rem;

      & svg {
        height: 0.6rem;
        width: 0.6rem;
      }
    }
  }

  &__costs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    &--section {
      font-size: 0.7rem;

      & span {
        opacity: 0.5;
      }
    }
  }

  &__button {
    border-radius: 0.5rem;
    width: 100%;

    background: rgba($primary-orange, 0.5);
    cursor: pointer;
    color: $white;
    border: none;
    outline: none;
    font-size: 0.9rem;
    margin-top: 2rem;
    padding: 0.8rem;
    font-family: "Space Grotesk", sans-serif;
  }
}
</style>
