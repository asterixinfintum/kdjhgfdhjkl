<template>
  <div>
    <div class="admincontainer">
      <AdminHeader />

      <h2>Add Article</h2>

      <div class="article__admin--textbuilderbtns">
        <span class="button">
          <button @click="createNewParagraph" class="btn colored-btn padded-btn">
            New paragraph
          </button>
        </span>

        <span class="button">
          <button @click="addSpan('article')" class="btn colored-btn padded-btn">
            article
          </button>
        </span>

        <span class="button">
          <button @click="addSpan('article__margin')" class="btn colored-btn padded-btn">
            article__margin
          </button>
        </span>

        <span class="button">
          <button @click="addSpan('article__main')" class="btn colored-btn padded-btn">
            article__main
          </button>
        </span>

        <span class="button">
          <button @click="addSpan('article__latest')" class="btn colored-btn padded-btn">
            article__latest
          </button>
        </span>

        <span class="button">
          <button @click="addSpan('article__header')" class="btn colored-btn padded-btn">
            article__header
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__sectionheader')"
            class="btn colored-btn padded-btn"
          >
            article__sectionheader
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__paragraph')"
            class="btn colored-btn padded-btn"
          >
            article__paragraph
          </button>
        </span>

        <span class="button">
          <button @click="addSpan('article__faint')" class="btn colored-btn padded-btn">
            article__faint
          </button>
        </span>

        <span class="button">
          <button @click="addSpan('article__link')" class="btn colored-btn padded-btn">
            article__link
          </button>
        </span>

        <span class="button">
          <button @click="addSpan('article__list')" class="btn colored-btn padded-btn">
            article__list
          </button>
        </span>

        <span class="button">
          <button @click="addSpan('article__admin')" class="btn colored-btn padded-btn">
            article__admin
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__adminbtns')"
            class="btn colored-btn padded-btn"
          >
            article__adminbtns
          </button>
        </span>

        <!-- Modifiers -->
        <span class="button">
          <button
            @click="addSpan('article__margin--typicalbottm')"
            class="btn colored-btn padded-btn"
          >
            article__margin--typicalbottm
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__margin--headerbottm')"
            class="btn colored-btn padded-btn"
          >
            article__margin--headerbottm
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__header--small')"
            class="btn colored-btn padded-btn"
          >
            article__header--small
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__paragraph--small')"
            class="btn colored-btn padded-btn"
          >
            article__paragraph--small
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__paragraph--small2')"
            class="btn colored-btn padded-btn"
          >
            article__paragraph--small2
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__paragraph--weight300')"
            class="btn colored-btn padded-btn"
          >
            article__paragraph--weight300
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__paragraph--weight500')"
            class="btn colored-btn padded-btn"
          >
            article__paragraph--weight500
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__paragraph--italic')"
            class="btn colored-btn padded-btn"
          >
            article__paragraph--italic
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__faint--2')"
            class="btn colored-btn padded-btn"
          >
            article__faint--2
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__link--underline')"
            class="btn colored-btn padded-btn"
          >
            article__link--underline
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__list--item')"
            class="btn colored-btn padded-btn"
          >
            article__list--item
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__admin--inputsection')"
            class="btn colored-btn padded-btn"
          >
            article__admin--inputsection
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__admin--textbuilderbtns')"
            class="btn colored-btn padded-btn"
          >
            article__admin--textbuilderbtns
          </button>
        </span>
        <!--<span class="button">
          <button @click="createNewParagraph" class="btn colored-btn padded-btn">
            New paragraph
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__paragraph')"
            class="btn colored-btn padded-btn"
          >
            article__paragraph
          </button>
        </span>

        <span class="button">
          <button @click="addSpan('article__link')" class="btn colored-btn padded-btn">
            article__link
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__link--underline')"
            class="btn colored-btn padded-btn"
          >
            article__link--underline
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__paragraph--small2')"
            class="btn colored-btn padded-btn"
          >
            article__paragraph--small2
          </button>
        </span>

        <span class="button">
          <button @click="addSpan('article__faint')" class="btn colored-btn padded-btn">
            article__faint
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__paragraph--weight500')"
            class="btn colored-btn padded-btn"
          >
            article__paragraph--weight500
          </button>
        </span>

        <span class="button">
          <button
            @click="addSpan('article__paragraph--italic')"
            class="btn colored-btn padded-btn"
          >
            article__paragraph--italic
          </button>
        </span>
        <span class="button">
          <button
            @click="addSpan('article__header--small')"
            class="btn colored-btn padded-btn"
          >
            article__header--small
          </button>
        </span>

        <span class="button">
          <button @click="addSpan('link')" class="btn colored-btn padded-btn">
            Link
          </button>
        </span>
        <span class="button">
          <button @click="addSpan('underlined-link')" class="btn colored-btn padded-btn">
            Underlined Link
          </button>
        </span>
        <span class="button">
          <button @click="addSpan('faint')" class="btn colored-btn padded-btn">
            Faint
          </button>
        </span>
        <span class="button">
          <button @click="addSpan('list-item')" class="btn colored-btn padded-btn">
            List Item
          </button>
        </span>-->
      </div>

      <div class="assetscontainer__listbodyitem">
        <div
          class="auth__inputarea--input user__walletasset--balanceedit article__admin--inputsection"
        >
          <input
            type="text"
            ref="articleheader"
            v-model="articleheader"
            :placeholder="`Article Header`"
          />
        </div>

        <div
          class="auth__inputarea--input user__walletasset--balanceedit article__admin--inputsection"
        >
          <input
            type="text"
            ref="articlesubheader"
            v-model="articlesubheader"
            :placeholder="`Article Sub Header`"
          />
        </div>

        <div
          class="auth__inputarea--input user__walletasset--balanceedit article__admin--inputsection"
        >
          <input
            type="text"
            ref="articletype"
            v-model="articletype"
            :placeholder="`Article Type Example: announcement, news, or blogpost`"
            disabled
          />
          <span>
            <button
              class="btn colored-btn padded-btn"
              @click="setArticleType('announcement')"
            >
              announcement
            </button>
          </span>
          <span>
            <button class="btn colored-btn padded-btn" @click="setArticleType('news')">
              news
            </button>
          </span>
          <span>
            <button
              class="btn colored-btn padded-btn"
              @click="setArticleType('blogpost')"
            >
              blogpost
            </button>
          </span>
          <span>
            <button
              class="btn colored-btn padded-btn"
              @click="setArticleType('projects')"
            >
              projects
            </button>
          </span>
          <span>
            <button
              class="btn colored-btn padded-btn"
              @click="setArticleType('launchprogram')"
            >
              launchprogram
            </button>
          </span>
        </div>

        <div
          class="auth__inputarea--input user__walletasset--balanceedit article__admin--inputsection"
          v-if="articletype === 'launchprogram'"
        >
          <input
            type="text"
            ref="articlesubheader"
            v-model="launchdate"
            :placeholder="`Launch date`"
          />
        </div>

        <div
          class="auth__inputarea--input user__walletasset--balanceedit article__admin--inputsection"
          v-if="articletype === 'launchprogram'"
        >
          <input
            type="text"
            ref="articlesubheader"
            v-model="conclusiondate"
            :placeholder="`Conclusion date`"
          />
        </div>

        <div
          class="auth__inputarea--input user__walletasset--balanceedit article__admin--inputsection"
          v-if="articletype === 'launchprogram'"
        >
          <input
            type="text"
            ref="articlesubheader"
            v-model="airdropdate"
            :placeholder="`Airdrop date`"
          />
        </div>

        <div
          class="auth__inputarea--input user__walletasset--balanceedit article__admin--inputsection"
          v-if="articletype === 'launchprogram'"
        >
          <input
            type="text"
            ref="articlesubheader"
            v-model="totalairdrops"
            :placeholder="`Example $120,000`"
          />
        </div>

        <div
          class="auth__inputarea--input user__walletasset--balanceedit article__admin--inputsection"
          v-if="articletype === 'launchprogram'"
        >
          <input
            type="text"
            ref="articlesubheader"
            v-model="status"
            :placeholder="`Status`"
          />
        </div>

        <div
          class="auth__inputarea--input user__walletasset--balanceedit article__admin--inputsection"
          v-if="articletype === 'launchprogram'"
        >
          <input
            type="text"
            ref="articlesubheader"
            v-model="network_logo"
            :placeholder="`Network logo url`"
          />
        </div>

        <div
          class="auth__inputarea--input user__walletasset--balanceedit article__admin--inputsection"
          v-for="(paragraph, index) in paragraphs"
          :key="index"
        >
          <textarea
            ref="textareas"
            v-model="paragraph.text"
            @focus="setActiveTextarea(index)"
          ></textarea>

          <div v-html="paragraph.text"></div>
        </div>

        <button
          class="btn colored-btn padded-btn"
          :style="{
            opacity: allowsubmit() ? 1 : 0.5,
            pointerEvents: allowsubmit() ? 'auto' : 'none',
          }"
          @click="submitThisArticle"
          v-if="!editable_article"
        >
          Submit This Article
        </button>

        <button
          class="btn colored-btn padded-btn"
          :style="{
            opacity: allowsubmit() ? 1 : 0.5,
            pointerEvents: allowsubmit() ? 'auto' : 'none',
          }"
          @click="updateThisArticle"
          v-if="editable_article"
        >
          Update This Article
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import adminMixin from "@/mixins/admin";

export default {
  mixins: [adminMixin],
  data() {
    return {
      articleheader: "",
      articlesubheader: "",
      articletype: "",
      launchdate: "",
      conclusiondate: "",
      airdropdate: "",
      totalairdrops: "",
      status: "",
      network_logo: "",
      paragraphs: [],
      activeTextareaIndex: null,
      articleid: null,
      editable_article: null,
    };
  },
  mounted() {
    const article_id = this.getArticleId();

    if (article_id) {
      this.articleid = article_id;
      this.getArticleToEdit(this.articleid);
    }
  },
  methods: {
    async getArticleToEdit(article_id) {
      const token = localStorage.getItem("873__jh6bdjktoken");
      const { baseurl } = this;

      try {
        const response = await fetch(`${baseurl}/admin/article/${article_id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const article = await response.json();

        this.editable_article = article;

        console.log(this.editable_article);

        this.articleheader = this.editable_article.header;
        this.articlesubheader = this.editable_article.subheader;
        this.articletype = this.editable_article.type;
        this.paragraphs = this.editable_article.content;
        this.launchdate = this.editable_article.launchdate;
        this.conclusiondate = this.editable_article.conclusiondate;
        this.airdropdate = this.editable_article.airdropdate;
        this.totalairdrops = this.editable_article.totalairdrops;
        this.status = this.editable_article.status;
        this.network_logo = this.editable_article.network_logo;
      } catch (error) {
        console.error("Error:", error);
      }
    },
    getArticleId() {
      return this.$route.query.article;
    },
    setArticleType(articletype) {
      this.articletype = articletype;
    },
    setActiveTextarea(index) {
      this.activeTextareaIndex = index;
    },
    sanitizeHtml(html) {
      //return DOMPurify.sanitize(html);
    },
    createNewParagraph() {
      const arr = this.paragraphs;
      const paragraph = {
        text: '<p class="article__paragraph">paragraph</p>',
      };
      arr.push(paragraph);
      this.paragraphs = arr;
    },
    allowsubmit() {
      const { articleheader, articlesubheader, articletype, paragraphs } = this;
      return (
        articleheader?.length > 0 &&
        articlesubheader?.length > 0 &&
        articletype?.length > 0 &&
        paragraphs?.length > 0
      );
    },
    submitThisArticle() {
      const { baseurl } = this;

      const token = localStorage.getItem("873__jh6bdjktoken");

      if (!this.allowsubmit()) {
        alert("All fields must be filled before submitting.");
        return;
      }

      const articleData = {
        header: this.articleheader,
        subheader: this.articlesubheader,
        type: this.articletype,
        content: this.paragraphs,
        launchdate: this.launchdate,
        conclusiondate: this.conclusiondate,
        airdropdate: this.airdropdate,
        totalairdrops: this.totalairdrops,
        status: this.status,
        network_logo: this.network_logo,
      };

      fetch(`${baseurl}/admin/article/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(articleData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("Article added successfully.");
        })
        .catch((error) => {
          console.error(error);
          alert("There was an error submitting the article.");
        });
    },
    updateThisArticle() {
      const { baseurl } = this;

      const token = localStorage.getItem("873__jh6bdjktoken");

      if (!this.allowsubmit()) {
        alert("All fields must be filled before submitting.");
        return;
      }

      const articleData = {
        header: this.articleheader,
        subheader: this.articlesubheader,
        type: this.articletype,
        content: this.paragraphs,
        launchdate: this.launchdate,
        conclusiondate: this.conclusiondate,
        airdropdate: this.airdropdate,
        totalairdrops: this.totalairdrops,
        status: this.status,
        network_logo: this.network_logo,
      };

      fetch(`${baseurl}/admin/article/update?article_id=${this.articleid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(articleData),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Article updated successfully.");
          this.getArticleToEdit(this.articleid);
        })
        .catch((error) => {
          console.error(error);
          alert("There was an error submitting the article.");
        });
    },
    addSpan(className) {
      if (this.activeTextareaIndex === null) return;

      const textarea = this.$refs.textareas[this.activeTextareaIndex];
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = textarea.value.substring(start, end);

      // Build the span tag with the given class
      const openTag = `<span class="${className}">`;
      const closeTag = `</span>`;

      // Construct the new value
      const before = textarea.value.substring(0, start);
      const after = textarea.value.substring(end);
      const replacement = `${openTag}${selectedText || "Your text"}</span>`;

      // Update the textarea content and Vue state
      this.paragraphs[this.activeTextareaIndex].text = `${before}${replacement}${after}`;

      // Update the textarea cursor position
      this.$nextTick(() => {
        textarea.focus();
        textarea.selectionStart = textarea.selectionEnd =
          before.length + replacement.length;
      });
    },
  },
};
</script>

<style></style>
