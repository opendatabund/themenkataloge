<template>
  <Layout>
    <div class="about text-white">
      <div class="about-text">
        <h3>Impressum</h3>
        <p><br><strong>Anbieter</strong>
<br>Bundesverwaltungsamt
<br>Barbarastr. 1
<br>50735 Köln 
<br><br><strong>Kontakt</strong>
<br>opendata@bva.bund.de

<br><br><strong>Postanschrift</strong>
<br>Bundesverwaltungsamt
<br>50728 Köln 

<br><br><strong>Verantwortlich</strong>
<br>Thilak Mahendran, Leiter des Kompetenzzentrums Open Data

<br><br><strong>Redaktion</strong>
<br>Thilak Mahendran, Jonas Schmitz

<br><br><strong>Bildnachweis:</strong>
<br> Lizenzfrei oder CC-0 soweit nicht anders direkt bei Bildern vermerkt.

<br><br><strong>Realisierung</strong>
<br>Thilak Mahendran, Kompetenzzentrum Open Data

<br><br><strong>Hosting</strong>
<br>Github via Github Pages

<br><br><strong>Design</strong>
<br>Gridsome Portfolio Story - angepasst durch Thilak Mahendran

<br><br><strong>Content Management System</strong>
<br>Die Realisierung erfolgt mit Gridsome.</p>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  docs(id: "1") {
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

