<template>
    <Layout>
        <div class="work-container">
            <aside class="sidebar">
                <b-img :src="$page.themenkatalog.cover_image" fluid></b-img>
                <h5 class="text-white"><br>Themenkataloge<br><small class="text-muted">{{ $page.themenkatalog.full_title
                }}</small></h5>
            </aside>
        </div>
        <div class="content">
            <b-alert show variant="primary">
                <font-awesome-icon icon="fa-solid fa-lightbulb" /> Finde schnell Beispieldatensätze zu Fachthemen, die
                im {{ $page.themenkatalog.title }} liegen.
            </b-alert>
            <b-table-simple dark striped hover>
                <b-thead>
                    <b-tr text-center>
                        <b-th col></b-th>
                        <b-th col text-start><strong>DCAT-AP-Kategorien</strong></b-th>
                        <b-th col><strong><abbr title="Nur nach Datensätzen aus Deutschland suchen">DE</abbr></strong>
                        </b-th>
                        <b-th col><strong><abbr
                                    title="Nur nach Datensätzen aus Europa (ohne Deutschland) suchen">EU</abbr></strong>
                        </b-th>
                        <b-th col><strong><abbr
                                    title="Nach Datensätzen aus Gesamteuropa (inkl. Deutschland) suchen">Gesamt</abbr></strong>
                        </b-th>
                    </b-tr>
                </b-thead>
                <b-tbody group-divider>
                    <b-tr>
                        <b-th col text-center>
                            <font-awesome-icon icon="fa-solid fa-tractor" />
                        </b-th>
                        <b-th col>Landwirtschaft, Fischerei, Forstwirtschaft und Nahrungsmittel</b-th>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&page=1&query=' + $page.themenkatalog.agri + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.agri + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.agri + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                    </b-tr>
                    <b-tr>
                        <b-th col text-center>
                            <font-awesome-icon icon="fa-solid fa-chart-line" />
                        </b-th>
                        <b-th col>Wirtschaft und Finanzen</b-th>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&page=1&query=' + $page.themenkatalog.econ + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.econ + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.econ + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                    </b-tr>
                    <b-tr>
                        <b-th col text-center>
                            <font-awesome-icon icon="fa-solid fa-school" />
                        </b-th>
                        <b-th col>Bildung, Kultur und Sport</b-th>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&page=1&query=' + $page.themenkatalog.educ + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.educ + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.educ + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                    </b-tr>
                    <b-tr>
                        <b-th col text-center>
                            <font-awesome-icon icon="fa-solid fa-lightbulb" />
                        </b-th>
                        <b-th col>Energie</b-th>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&page=1&query=' + $page.themenkatalog.ener + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.ener + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.ener + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                    </b-tr>
                    <b-tr>
                        <b-th col text-center>
                            <font-awesome-icon icon="fa-solid fa-seedling" />
                        </b-th>
                        <b-th col>Umwelt</b-th>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&page=1&query=' + $page.themenkatalog.envi + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.envi + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.envi + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                    </b-tr>
                    <b-tr>
                        <b-th col text-center>
                            <font-awesome-icon icon="fa-solid fa-file-medical" />
                        </b-th>
                        <b-th col>Gesundheit</b-th>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&page=1&query=' + $page.themenkatalog.heal + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.heal + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.heal + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                    </b-tr>
                    <b-tr>
                        <b-th col text-center>
                            <font-awesome-icon icon="fa-solid fa-globe" />
                        </b-th>
                        <b-th col>Internationale Themen</b-th>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&page=1&query=' + $page.themenkatalog.intr + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>

                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.intr + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.intr + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                    </b-tr>
                    <b-tr>
                        <b-th col text-center>
                            <font-awesome-icon icon="fa-solid fa-section" />
                        </b-th>
                        <b-th col>Justiz, Rechtssystem und öffentliche Sicherheit</b-th>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&page=1&query=' + $page.themenkatalog.just + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.just + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.just + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                    </b-tr>
                    <b-tr>
                        <b-th col text-center>
                            <font-awesome-icon icon="fa-solid fa-people-group" />
                        </b-th>
                        <b-th col>Bevölkerung und Gesellschaft</b-th>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&page=1&query=' + $page.themenkatalog.soci + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.soci + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.soci + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                    </b-tr>
                    <b-tr>
                        <b-th col text-center>
                            <font-awesome-icon icon="fa-solid fa-landmark" />
                        </b-th>
                        <b-th col>Regierung und öffentlicher Sektor</b-th>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&page=1&query=' + $page.themenkatalog.gove + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.gove + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.gove + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                    </b-tr>
                    <b-tr>
                        <b-th col text-center>
                            <font-awesome-icon icon="fa-solid fa-tree-city" />
                        </b-th>
                        <b-th col>Regionen und Städte</b-th>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&page=1&query=' + $page.themenkatalog.regi + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.regi + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.regi + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                    </b-tr>
                    <b-tr>
                        <b-th col text-center>
                            <font-awesome-icon icon="fa-solid fa-atom" />
                        </b-th>
                        <b-th col>Wissenschaft und Technologie</b-th>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&page=1&query=' + $page.themenkatalog.tech + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.tech + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.tech + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                    </b-tr>
                    <b-tr>
                        <b-th col text-center>
                            <font-awesome-icon icon="fa-solid fa-bus" />
                        </b-th>
                        <b-th col>Verkehr</b-th>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&page=1&query=' + $page.themenkatalog.tran + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.tran + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                        <b-td><a
                                v-bind:href="'https://data.europa.eu/data/datasets?locale=de&catalog=govdata&catalog=dane-gov-pl&catalog=datos-gob-es&catalog=data-gov-be&catalog=mita&catalog=data-gov-me&catalog=government-open-data-portal-moldova&catalog=geocat-li&catalog=data-gov-ie&catalog=mfgi&catalog=national-open-data-portal-cyprus&catalog=opendata-swiss&catalog=open-data-bulgaria&catalog=ng-ee&catalog=open-data-dk&catalog=data-gov-ua&catalog=open-data-portal-serbia&catalog=dados-gov-pt&catalog=data-gov-lt&catalog=dati-gov-it&catalog=open-data-iceland&catalog=open-data-greece&catalog=data-gov-uk&catalog=data-norge-no&catalog=dataportaal-van-de-nederlandse-overheid&catalog=data-gov-lv&catalog=geoportal-lu&catalog=plateforme-ouverte-des-donnees-publiques-francaises&catalog=data-gv-at&catalog=data-gov-sk&catalog=odprti-podatki-slovenije&catalog=oppnadata&catalog=data-gov-ro&catalog=data-grad-zagreb&catalog=nkod-opendata-cz&page=1&query=' + $page.themenkatalog.tran + '&facetOperator=OR'">
                                <b-button variant="secondary" size="sm">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </b-button>
                            </a></b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
        </div>
    </Layout>
</template>

<page-query>
query themenkatalog($path: String!) {
  themenkatalog: themenkatalog(path: $path) {
    title
    full_title
    cover_image(width: 700, height: 400, blur: 7, fit: cover)
    agri
    econ
    educ
    ener
    envi
    heal
    intr
    just
    soci
    gove
    regi
    tech
    tran
  }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.themenkatalog.title
        };
    },
};
</script>

<style lang="scss">
.sidebar {
    .work-details {
        display: table;
        table-layout: fixed;

        strong {
            width: 150px;
            display: table-cell;
        }

        & a.work-link {
            color: #ffffff;
        }
    }
}

@media screen and (min-width: 1024px) {
    .work-container {
        width: 100%;
        display: flex;
    }

    .sidebar {
        flex-basis: 35%;
        padding-right: 3rem;
    }

    .content {
        flex: 1;
    }
}
</style>