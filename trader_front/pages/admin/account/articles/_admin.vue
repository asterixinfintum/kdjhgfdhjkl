<template>
  <div>
    <div class="admincontainer">
      <AdminHeader />

      <h2>Articles</h2>

      <div class="assetscontainer__searcharea">
        <input placeholder="Search" v-model="search" />
      </div>

      <div class="assetscontainer__header">
        <div
          class="assetscontainer__headeritm"
          @click="getArticlesForAdmin('blogpost')"
          :class="{ current: current_article_type === 'blogpost' }"
        >
          Blog posts
        </div>
        <div
          class="assetscontainer__headeritm"
          @click="getArticlesForAdmin('announcement')"
          :class="{ current: current_article_type === 'announcement' }"
        >
          Announcements
        </div>
        <div
          class="assetscontainer__headeritm"
          @click="getArticlesForAdmin('news')"
          :class="{ current: current_article_type === 'news' }"
        >
          News
        </div>
        <div
          class="assetscontainer__headeritm"
          @click="getArticlesForAdmin('projects')"
          :class="{ current: current_article_type === 'projects' }"
        >
          Projects
        </div>
        <div
          class="assetscontainer__headeritm"
          @click="getArticlesForAdmin('launchprogram')"
          :class="{ current: current_article_type === 'launchprogram' }"
        >
          Launch Program
        </div>

        <div
          class="assetscontainer__headeritm btn colored-btn padded-btn"
          @click="adminrouter('addarticle')"
        >
          Add Article
        </div>
      </div>

      <div class="assetscontainer__list" v-if="!loading">
        <div class="assetscontainer__listbody">
          <div
            class="assetscontainer__listbodyitem"
            v-for="{ _id, header, subheader, content, type, hidden } in articles"
          >
            <div class="assetscontainer__listbodyitem--top">
              <div class="assetscontainer__listbodyitem--name">
                {{ limitTextLength(header, 30) }}
              </div>
            </div>
            <div class="assetscontainer__listbodyitem--bottom">
              <div class="assetscontainer__listbodyitem--coin">
                Subheader: {{ limitTextLength(subheader, 30) }}
              </div>
            </div>
            <div class="assetscontainer__listbodyitem--bottom">
              <div class="assetscontainer__listbodyitem--coin">
                Type: {{ limitTextLength(type, 30) }}
              </div>
            </div>
            <div class="assetscontainer__listbodyitem--buttons">
              <button class="btn neon-blue padded-btn" @click="editArticle(_id)">
                Edit
              </button>

              <button
                class="btn neon-blue padded-btn"
                @click="hideArticle(_id)"
                v-if="!hidden"
              >
                Hide
              </button>

              <button
                class="btn neon-blue padded-btn"
                @click="unhideArticle(_id)"
                v-if="hidden"
              >
                UnHide
              </button>
            </div>
          </div>

          <div v-if="!articles.length && !loading">
            There are no {{ current_article_type }} articles to display
          </div>
        </div>
      </div>

      <div class="assetscontainer__list" v-if="loading">
        <div class="assetscontainer__listbody">Loading...</div>
      </div>
    </div>
  </div>
</template>

<script>
import adminMixin from "@/mixins/admin";

export default {
  data() {
    return {
      current_article_type: "blogpost",
      search: "",
      loading: false,
      articles: [],
    };
  },
  mixins: [adminMixin],
  mounted() {
    this.getArticlesForAdmin(this.current_article_type);
  },
  methods: {
    limitTextLength(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.substring(0, maxLength) + "...";
      }
    },
    async getArticlesForAdmin(article_type) {
      const token = localStorage.getItem("873__jh6bdjktoken");
      const { baseurl } = this;

      if (token) {
        let getUrl;
        this.loading = true;

        if (!article_type) {
          getUrl = `${baseurl}/admin/articles/get`;
        } else {
          getUrl = `${baseurl}/admin/articles/get?article_type=${article_type}`;
        }

        const response = await fetch(getUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();

          this.articles = data;

          this.loading = false;

          if (article_type) {
            this.current_article_type = article_type;
          }
        }
      }
    },
    async hideArticle(articleId) {
      const token = localStorage.getItem("873__jh6bdjktoken");
      const { baseurl } = this;

      if (token && baseurl && articleId) {
        try {
          let getUrl = `${baseurl}/admin/articles/hide?article_id=${articleId}`;
          const response = await fetch(getUrl, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            alert("Article hidden successfully");
            this.getArticlesForAdmin(this.current_article_type);
          }
        } catch (error) {
          console.error(error);
        }
      }
    },
    async unhideArticle(articleId) {
      const token = localStorage.getItem("873__jh6bdjktoken");
      const { baseurl } = this;

      if (token && baseurl && articleId) {
        try {
          let getUrl = `${baseurl}/admin/articles/unhide?article_id=${articleId}`;
          const response = await fetch(getUrl, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            alert("Article unhidden successfully");
            this.getArticlesForAdmin(this.current_article_type);
          }
        } catch (error) {
          console.error(error);
        }
      }
    },
    async editArticle(article_id) {
      this.$router.push(
        `/admin/account/addarticle/${this.$route.params.admin}/?article=${article_id}`
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
