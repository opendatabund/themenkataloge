<template>
  <div>
    <header class="header">
      <div class="navigation-bar">
          <g-link class="nav__link" to="/"><font-awesome-icon icon="fa-solid fa-book" /> {{$static.metadata.siteName}}</g-link>
        <nav v-if="showNav" class="nav">
          <g-link class="nav__link" to="/about/">Warum Themenkataloge?</g-link>
        </nav>
      </div>
    </header>
    <div class="wrapper">
      <div class="layout">
        <slot />
      </div>
    </div>
    <footer class="footer">
      <div class="navigation-bar">
        <nav v-if="showNav" class="nav">
        <p class="text-white">Built with ❤️ by <a target="_blank" href="//opendata.bund.de">Kompetenzzentrum Open Data</a></p>
        <g-link class="nav__link" to="/impressum/"><font-awesome-icon icon="fa-solid fa-circle-info" /> Impressum</g-link>
        <g-link class="nav__link" to="/datenschutz/"><font-awesome-icon icon="fa-solid fa-shield" /> Datenschutz</g-link>
        <g-link class="nav__link" to="//github.com/opendatabund"><font-awesome-icon icon="fa-brands fa-github" /> GitHub</g-link>
        <g-link class="nav__link" to="//twitter.com/OpenDataBundDe"><font-awesome-icon icon="fa-brands fa-twitter" /> Twitter</g-link>        
        </nav>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  props: {
    showNav: {
      default: true
    }
  }
};
</script>


<style lang='scss'>
.wrapper {
  background-color: var(--bg-color);
  min-height: 80vh;
  padding-top: 40px;
}
.layout {
  max-width: 960px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
}
.header {
  background: var(--bg-header);
}
.navigation-bar {
  max-width: 960px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  a {
    color: #ffffff;
  }

  .nav {
    .active--exact {
      color: var(--link-color);
    }

    &__link {
      margin-left: 20px;

      &:hover {
        color: var(--link-color);
      }
    }
  }
}

.footer {
  background: var(--bg-footer);
  height: 100px;
  display: flex;
  	flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    a {
      color: currentColor;
      text-decoration: underline;
    }
  }
}
@media screen and (max-width: 650px) {
  .header {
    height: 65px;
  }
}
@media screen and (min-width: 760px) {
  .header {
    position: sticky;
    top: 0px;
    z-index: 1000;
  }
}
@media screen and (min-width: 1024px) {
  .layout,
  .navigation-bar {
    max-width: 1000px;
  }
}
</style>
