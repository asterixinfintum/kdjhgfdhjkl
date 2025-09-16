<template>
  <div class="article__latest">
    <h2 class="article__header--small article__margin--headerbottm">Latest</h2>

    <div class="article__latest--content">
      <p
        class="article__paragraph--small article__paragraph--weight300 article__faint article__margin--typicalbottm pointer"
        v-for="article in articles"
        @click="getArticle(article._id)"
      >
        {{ article.header }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["articles", "getArticle"],
};
</script>
