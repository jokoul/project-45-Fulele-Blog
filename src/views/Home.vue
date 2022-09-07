<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      v-for="(post, index) in sampleBlogPost"
      :post="post"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCards v-for="(post, index) in sampleBlogCards" :post="post" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCards from "../components/BlogCard.vue";

export default {
  name: "Home",
  components: { BlogPost, BlogCards },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles about medicinal plants used in traditional medicine practices since prehistoric times. Plants synthesize hundreds of chemical compounds for functions including defense against insects, fungi, diseases. Register today to receive new post.",
        welcomeScreen: true,
        photo: "herbs",
      },
      sampleBlogPost: [
        {
          title: "TURMERIC, a spice with promising medicinal properties",
          blogHTML:
            "Turmeric is traditionally used to treat various gastrointestinal disorders, such as inflammation and stomach ulcers.",
          blogCoverPhoto: "turmeric",
        },
        {
          title: "CHLORELLA: to eliminate heavy metals in the body",
          blogHTML:
            "Chlorella is recognized as the most effective natural product for naturally eliminating heavy metals from the body.",
          blogCoverPhoto: "chlorella",
        },
      ],
      sampleBlogCards: [
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "stock-1",
          blogDate: "May 1, 2021",
        },
        {
          blogTitle: "Blog Card #2",
          blogCoverPhoto: "stock-2",
          blogDate: "May 2, 2021",
        },
        {
          blogTitle: "Blog Card #3",
          blogCoverPhoto: "stock-3",
          blogDate: "May 3, 2021",
        },
        {
          blogTitle: "Blog Card #4",
          blogCoverPhoto: "stock-4",
          blogDate: "May 4, 2021",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .blog-card-wrap {
    h3{
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }
</style>