<template>
  <div>
    <div class="accountversions" id="accountversions">
      <h3 class="section__area--h4">Master the markets</h3>
      <p class="section__area--h3 section-header">
        Industry-standard Web3 infra & service solutions on a single platform
      </p>

      <div class="accountversions__grid">
        <div
          v-for="(account, index) in accountTypes"
          :key="index"
          class="accountversions__griditem"
        >
          <h2 class="accountversions__griditem--h2">{{ account.tier }}</h2>
          <p class="accountversions__griditem--desc">{{ account.description }}</p>

          <!--<div class="accountversions__griditem--label">
            <span>Minimum Balance:</span>
            <span>${{ formatNumber(account.minimumBalance) }}</span>
          </div>-->

          <!--<div class="accountversions__griditem--label">
            <span>Monthly Fee:</span>
            <span>${{ account.maintenanceFee }}</span>
          </div>-->

         <!-- <div class="accountversions__griditem--label">
            <span>Features:</span>
          </div>

          <div class="accountversions__griditem--list">
            <ul>
              <li v-for="(feature, i) in account.features" :key="i">
                {{ feature }}
              </li>
            </ul>
          </div>-->

          <button
            @click="navigateToPage('register')"
            class="landing-btn landing-btn__curved landing-btn__white landing-btn__accounttypes"
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
  </div>
</template>

<script>
import generalutilities from "@/mixins/generalutilities";

export default {
  mixins: [generalutilities],
  data() {
    return {
      accountTypes: [
        {
          tier: "Maximise Your Earnings with Liquidity Rewards",
          description:
            "Put your assets to work amd earn competitive returns by providing liquidity. Take advantage of the opportunity to grow your portfolio while supporting decentralized finance",
          minimumBalance: 1000,
          maintenanceFee: 5,
          features: [
            "Liquidity management",
            "Liquidity optimization",
            "Liquidity pool management"
          ],
        },
        {
          tier: "Access Exclusive Asset Launchpad Programs",
          description:
            "Unlock new investment opportunities with our Asset Launchpad programs. Tailored for forward-thinking investors, these programs provide early access to high-potential assets, including emerging cryptocurrencies, tokenized stocks, and commodities.",
          minimumBalance: 5000,
          maintenanceFee: 15,
          features: [
            "Advanced market access",
            "Real-time quotes",
            "Technical analysis tools",
            "Priority email support",
          ],
        },
        {
          tier: "Boost Your Returns with Specialized Asset combinations",
          description:
            "Unlock the power of strategic asset pairing to maximise chances of profit. Choose tailored combinantions designed for optimal performance and diversify your portfolio like never before.",
          minimumBalance: 10000,
          maintenanceFee: 25,
          features: [
            "Full market access",
            "Advanced charting",
            "Research reports",
            "24/7 phone support",
          ],
        },
        {
          tier: "State of the art market indicators",
          description:
            "Stay ahead of the curve with cutting-egde market insights. Our advanced indicators provide real time analysis, precision trends, and actionable data to empower your trading decisions. Navigate the markets with confidence-powered by innovation.",
          minimumBalance: 25000,
          maintenanceFee: 50,
          features: [
            "Global market access",
            "Premium research",
            "Dedicated advisor",
            "Exclusive events",
          ],
        },
        {
          tier: "Access New and Emerging Markets",
          description:
            "Stay ahead of the curve with exclusive opportunities in high-growth markets. Discover untapped potential, diversify your portfolio, and capitalize on the next big trends before the rest. Don’t follow the market—lead it",
          minimumBalance: 100000,
          maintenanceFee: 100,
          features: [
            "Private banking services",
            "Wealth management",
            "Custom portfolio",
            "Concierge service",
          ],
        },
        {
          tier: "AI-Powered Risk Management and Rebalancing",
          description:
            "Optimize your portfolio with AI-driven strategies that manage risk, adapt to market shifts, and ensure sustainable growth. Effortlessly align investments with your goals for smarter, faster decision-making.",
          minimumBalance: 500000,
          maintenanceFee: 250,
          features: [
            "Institutional access",
            "Private equity options",
            "Family office services",
            "Bespoke solutions",
          ],
        },
      ],
    };
  },
  methods: {
    formatNumber(num) {
      return num.toLocaleString();
    },
  },
};
</script>

<style scoped lang="scss">
.accountversions {
  padding: $paddingside;
  @include topbottompadding;
  padding-bottom: 0;

  @media only screen and (max-width: 1024px) {
    padding: $paddingsidem;
    height: auto;
    padding-top: #{scaleValue(300)};
    padding-bottom: #{scaleValue(300)};
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: #{scaleValue(20)};

    @media only screen and (max-width: 1024px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: #{scaleValue(100)};
    }
  }

  &__griditem {
    color: $white;
    border: 0.5px solid $primary-orange;
    border-radius: 1.1rem;
    padding: #{scaleValue(30)};
    padding-bottom: #{scaleValue(50)};
    position: relative;

    @media only screen and (max-width: 1024px) {
      padding: #{scaleValue(100)};
      padding-bottom: #{scaleValue(190)};
    }

    &--h2 {
      color: $primary-orange;
      margin-bottom: #{scaleValue(30)};
      font-weight: 500;

      @media only screen and (max-width: 1024px) {
        font-size: #{scaleValue(80)};
        margin-bottom: #{scaleValue(100)};
      }
    }

    &--desc {
      font-size: #{scaleValue(18)};
      line-height: #{scaleValue(25)};
      margin-bottom: #{scaleValue(30)};
      min-height: 14rem;

      @media only screen and (max-width: 1024px) {
        font-size: #{scaleValue(80)};
        line-height: #{scaleValue(130)};
        margin-bottom: #{scaleValue(100)};
        min-height: 20rem;
      }
    }

    &--label {
      margin-bottom: #{scaleValue(20)};

      @media only screen and (max-width: 1024px) {
        font-size: #{scaleValue(65)};
        line-height: #{scaleValue(130)};
        margin-bottom: #{scaleValue(40)};
      }

      & span {
        &:nth-child(1) {
          color: $primary-orange;
        }

        &:nth-child(2) {
        }
      }
    }

    &--list {
      margin-bottom: #{scaleValue(50)};

      @media only screen and (max-width: 1024px) {
        margin-bottom: #{scaleValue(150)};
      }

      & li {
        margin-bottom: #{scaleValue(15)};

        @media only screen and (max-width: 1024px) {
          font-size: #{scaleValue(65)};
          line-height: #{scaleValue(130)};
          margin-bottom: #{scaleValue(40)};
        }
      }
    }
  }
}
</style>
