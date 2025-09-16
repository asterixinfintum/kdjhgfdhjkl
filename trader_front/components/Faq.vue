<template>
  <div>
    <div class="faq" id="landing-faq">
      <h3 class="section__area--h4">Frequently Asked Questions</h3>
      <p class="section__area--h3 section-header"></p>

      <div v-if="faq_list && faq_list.length > 0">
        <article class="faq__item" v-for="(faq, index) in faq_list" :key="`faq-${index}`">
          <h3 class="faq__question">{{ faq.question }}</h3>
          <section class="faq__answers" v-if="faq.answers && faq.answers.length > 0">
            <p
              class="faq__answer"
              v-for="(answer, answerIndex) in faq.answers"
              :key="`faq-${index}-answer-${answerIndex}`"
            >
              {{ faq.answers.length > 1 ? answerIndex + 1 : "" }} {{ answer }}
            </p>
          </section>
        </article>
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
      faq_list: [
        {
          question: "What is BSN Automatic Trader",
          answers: [
            "BSN Automatic Trader is a powerful software designed to eliminate emotion from your trading decisions. It achieves this by leveraging market insights and analyzing your trading data to make objective, data-driven choices.",
          ],
        },
        {
          question: "Where does BSN Automatic Trader get its data from?",
          answers: [
            "BSN Automatic Trader sources its data from decentralized blockchains and curated web data, updated every second. The platform is designed to deliver the most current and accurate information, enabling world-class insights and informed decision-making.",
          ],
        },
        {
          question: "What products does BSN Automatic Trader provide",
          answers: [
            "Real time market analysis and defi exposure",
            "Automated Trades",
            "Managed Trades",
            "Portfolio consultations and management",
            "White lists market exposure",
            "Early access into exclusive defi projects and opportunities",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.faq {
  padding: $paddingside;
  @include topbottompadding;
  padding-bottom: 0;

  &__list {
  }

  &__item {
    margin-bottom: #{scaleValue(50)};

    & h3 {
      margin-bottom: #{scaleValue(20)};
      color: $white;
      font-size: #{scaleValue(20)};

      @media only screen and (max-width: 1024px) {
        font-size: #{scaleValue(65)};
        line-height: #{scaleValue(130)};
        margin-bottom: #{scaleValue(40)};
      }
    }

    & p {
      margin-bottom: #{scaleValue(10)};
      color: rgba($white, 0.7);
      font-size: #{scaleValue(15)};

      @media only screen and (max-width: 1024px) {
        font-size: #{scaleValue(65)};
        line-height: #{scaleValue(130)};
        margin-bottom: #{scaleValue(40)};
      }
    }
  }
}
</style>
