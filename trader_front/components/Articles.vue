<template>
  <div>
    <div class="launchpage">
      <HeaderLanding :coloredbackground="true" />

      <div class="launchpage__content">
        <div class="article">
          <CurrentArticle :current_article="current_article" />

          <ArticlesLatest :articles="articles" :getArticle="getArticle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articlesMixin from "@/mixins/articles";
export default {
  mixins: [articlesMixin],
};
</script>

<style lang="scss" scoped>
.launchpage {
  &__content {
    min-height: 100vh;
    padding-top: #{scaleValue(170)};
    padding-left: #{scaleValue(170)};
    padding-right: #{scaleValue(170)};

    @media only screen and (max-width: 1024px) {
      padding-top: #{scaleValue(600)};
    }
  }
}
</style>
