<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost v-for="(post, index) in sampleBlogPost" :post="post" :key="index" />
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'

export default {
  name: "Home",
  components: {BlogPost},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles about medicinal plants used in traditional medicine practices since prehistoric times. Plants synthesize hundreds of chemical compounds for functions including defense against insects, fungi, diseases. Register today to receive new post.",
        welcomeScreen: true,
        photo: "herbs"  
      },
      sampleBlogPost: [
        {
          title: "TURMERIC, a spice with promising medicinal properties",
          blogHTML:"Turmeric is traditionally used to treat various gastrointestinal disorders, such as inflammation and stomach ulcers.",
          blogCoverPhoto: "turmeric"
        },
        {
          title: "CHLORELLA: to eliminate heavy metals in the body",
          blogHTML:"Chlorella is recognized as the most effective natural product for naturally eliminating heavy metals from the body.",
          blogCoverPhoto: "chlorella"
        },
      ]
    };
  },
};
</script>

<style lang="scss" scoped></style>
