<template>
  <Layout>
    <div class="work-cards">
      <WorkCard v-for="edge in $page.Themenkatalog.edges" :key="edge.node.id" :work="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query{
  Themenkatalog: allThemenkatalog( sortBy: "name", order: ASC){
    edges{
      node{
        title
        path
        cover_image
      }
    }
  }
}

</page-query>

<script>
import WorkCard from '~/components/WorkCard.vue';
export default {
  components: {
    WorkCard
  },
  metaInfo: {
    title: 'Themenkataloge'
  }
};
</script>

<style lang="scss">
</style>
