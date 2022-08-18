<template>
  <Layout>
    <div class="about text-white">
      <div class="about-text">
        <div v-html="$page.docs.content"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  docs(id: "2") {
    content
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'About Me'
  }
};
</script>

<style lang="scss" scoped>
.about {
  &-text {
    text-align: left;
  }
}
@media screen and (min-width: 768px) {
  .about {
    display: flex;
    flex-wrap: wrap;
    &-text {
      margin-right: 30px;
      max-width: 350px;
    }
  }
}
@media screen and (min-width: 1024px) {
  .about-text {
    margin-right: 50px;
    max-width: 600px;
  }
}
</style>

