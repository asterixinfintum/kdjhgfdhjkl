import BASE_VARS from "@/store/base_vars";

export default {
    data() {
        return {
            articles: [],
            current_article: null
        }
    },
    mounted() {
        this.getArticles();
    },
    methods: {
        getArticle(article_id) {
            const { BASE_URL } = BASE_VARS;

            fetch(`${BASE_URL}/article/${article_id}`)
                .then((response) => response.json())
                .then((data) => {
                    this.current_article = data;
                })
                .catch((error) => console.error(error));
        },
        getArticles() {
            const { BASE_URL } = BASE_VARS;
            const type = this.$route.query.type;
            const articleid = this.$route.query.articleid;

            fetch(`${BASE_URL}/article/articles?type=${type}`)
                .then((response) => response.json())
                .then((data) => {
                    this.articles = data;

                    if (articleid !== null && articleid !== undefined) {
                        const currentArticle = data.find(article => article._id === articleid);
                        if (currentArticle) {
                            this.current_article = currentArticle;
                        }
                    } else {
                        if (data[0] !== undefined && data[0] !== null) {
                            this.current_article = data[0];
                        }
                    }
                })
                .catch((error) => console.error(error));
        },
    },
};