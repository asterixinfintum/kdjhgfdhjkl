<template>
  <div class="article__main">
    <h2 class="article__header article__margin--headerbottm">
      {{ current_article !== null ? current_article.header : "" }}
    </h2>

    <p
      class="article__paragraph article__paragraph--small2 article__faint article__margin--typicalbottm"
    >
      {{ current_article !== null ? current_article.date : "" }}
    </p>

    <div v-if="current_article">
      <div
        v-for="content in current_article.content"
        class="article__margin--typicalbottm"
      >
        <div v-html="content.text"></div>
      </div>
    </div>

    <!--<p
      class="article__paragraph article__paragraph--weight500 article__margin--typicalbottm"
    >
      Note: Please do your own research before making any trades for the aforementioned
      token outside BSN to avoid any scams and ensure the safety of your funds.
    </p>

    <p
      class="article__paragraph article__paragraph--italic article__margin--typicalbottm"
    >
      This is a general announcement. Products and services referred to here may not be
      available in your region.
    </p>

    <p
      class="article__paragraph article__paragraph--weight500 article__margin--typicalbottm"
    >
      Fellow Traders,
    </p>

    <p
      class="article__paragraph article__paragraph--italic article__margin--typicalbottm"
    >
      BSN reserves the right in its sole discretion to amend or cancel this announcement
      at any time and for any reasons without prior notice.
    </p>

    <p
      class="article__paragraph article__paragraph--italic article__margin--typicalbottm"
    >
      Digital asset prices are subject to high market risk and price volatility. The value
      of your investment may go down or up, and you may not get back the amount invested.
      You are solely responsible for your investment decisions and BSN is not liable for
      any losses you may incur. Past performance is not a reliable predictor of future
      performance. You should only invest in products you are familiar with and where you
      understand the risks. You should carefully consider your investment experience,
      financial situation, investment objectives and risk tolerance and consult an
      independent financial adviser prior to making any investment. This material should
      not be construed as financial advice. For more information, see our Terms of Use and
      Risk Warning.
    </p>-->
  </div>
</template>

<script>
export default {
  props: ["current_article"],
};
</script>
