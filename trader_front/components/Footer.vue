<template>
  <div class="footer" id="footer">
    <div class="footer__toparea">
      <figure class="footer__logo">BSN</figure>
      <div class="footer__links">
        <div class="footer__linksarea">
          <h3 class="footer__linksarea--h3"></h3>
          <span class="footer__linksarea--link"></span>
          <span class="footer__linksarea--link"></span>
          <span class="footer__linksarea--link"></span>
        </div>
        <div class="footer__linksarea">
          <h3 class="footer__linksarea--h3"></h3>
          <span class="footer__linksarea--link"></span>
          <span class="footer__linksarea--link"></span>
          <span class="footer__linksarea--link"></span>
        </div>
      </div>
    </div>
    <div class="footer__disclaimers">
      <div class="footer__disclaimers--content">
        <p>
          BSN offerings are intricate tools that carry a high risk of rapid financial loss
          due to leverage. 77.1% of retail investor accounts incur financial losses when
          trading. It is essential to carefully consider whether you fully understand how
          the markets operate and whether you can afford to take on the substantial risk
          of losing your funds. Please ensure you have a thorough understanding of the
          risks involved by consulting our detailed risk warning. BSN might provide
          third-party content on this website, including information about financial
          market conditions.
        </p>

        <p>
          This content is strictly for informational purposes and should not be
          interpreted as financial advice, investment recommendations, investment
          analysis, or an invitation to engage in transactions involving financial
          instruments. Any financial decisions should be made independently by the client
          after their personal evaluation. BSN does not guarantee the accuracy or
          completeness of the provided information or accept responsibility for financial
          losses resulting from investments based on recommendations, projections, or
          other information supplied. Always seek independent advice to assess your
          suitability for speculative activities in these markets and your ability to
          assume the associated risks.
        </p>

        <p>
          BSN has no obligation to update the content provided. Opinions expressed may be
          personal to the contributor and do not necessarily reflect the views of BSN. By
          leveraging passporting, BSN can provide its services and offerings to the
          following European Economic Area (EEA) countries: Austria, Bulgaria, Croatia,
          Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy,
          Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway,
          Poland, Portugal, Romania, Slovakia, Slovenia, Spain, and Sweden
        </p>

        <div class="margin-up-down">
          <p>
            Contact: <span class="primary-color-font-color">support@bsn.finance</span>
          </p>
        </div>
      </div>
    </div>
    <!---<div class="footer__namearea">
      <h2 class="footer__name">
        <span>G</span>
        <span>e</span>
        <span>p</span>
        <span>p</span>
        <span>e</span>
        <span>t</span>
        <span>t</span>
        <span>0</span>
      </h2>
    </div>--->
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  z-index: 2;
  padding: $paddingside;
  padding-top: #{scaleValue(70)};
  padding-bottom: #{scaleValue(70)};
  background: rgba($black, 0.8);
  background: $black-opacity;
  font-family: "Space Grotesk", sans-serif;
  color: $white;
  transition: all 0.5s ease;
  opacity: 0;

  &__logo {
    color: $primary-orange;
    font-weight: 500;
    font-size: #{scaleValue(30)};

    @media only screen and (max-width: $breakpoint-tablet) {
      font-size: #{scaleValue(120)};
    }
  }

  @media only screen and (max-width: 1024px) {
    opacity: 1;
    padding: $paddingsidem;
    padding-top: #{scaleValue(200)};
    padding-bottom: #{scaleValue(200)};
  }

  @media only screen and (max-width: 430px) {
    opacity: 1;
    padding: $paddingsidem;
    padding-top: #{scaleValue(200)};
    padding-bottom: #{scaleValue(200)};
  }

  &__toparea {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media only screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }

  &__links {
    display: flex;

    @media only screen and (max-width: 430px) {
      flex-direction: column;
    }
  }

  &__linksarea {
    display: flex;
    flex-direction: column;
    margin-left: #{scaleValue(100)};

    @media only screen and (max-width: 1024px) {
      margin-left: 0;
      margin-right: #{scaleValue(100)};
      margin-top: #{scaleValue(100)};
    }

    &--h3 {
      font-size: 1.3rem;
      margin-bottom: #{scaleValue(20)};
      font-weight: 700;

      @media only screen and (max-width: 1025px) {
        font-size: 2rem;
        margin-bottom: #{scaleValue(100)};
      }

      @media only screen and (max-width: 430px) {
        margin-bottom: #{scaleValue(100)};
      }
    }

    &--link {
      font-size: 1rem;
      margin-bottom: #{scaleValue(20)};
      font-weight: 500;
      cursor: pointer;
      color: $primary-orange;

      @media only screen and (max-width: 1024px) {
        font-size: 2rem;
        margin-bottom: #{scaleValue(100)};
      }

      @media only screen and (max-width: 430px) {
        font-size: 1rem;
        margin-bottom: #{scaleValue(70)};
      }
    }
  }

  &__namearea {
    display: flex;
    justify-content: center;
    align-content: center;

    @media only screen and (max-width: 1024px) {
      margin-top: #{scaleValue(200)};
    }
  }

  &__name {
    color: $primary-orange;
    text-transform: uppercase;
    width: 100%;
    font-size: 13rem;
    font-weight: 500;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Space Grotesk", sans-serif;

    @media only screen and (max-width: 430px) {
      font-size: 3rem;
    }

    @media only screen and (max-width: 1024px) {
      font-size: 4rem;
    }
  }

  &__disclaimers {
    font-size: 1rem;
    line-height: 1.3rem;
  }
}
</style>
