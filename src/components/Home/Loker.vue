<template>
    <div>
        <section id="masuk">
        <v-parallax src="assets/sekampus.png" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img width="800px" v-for="img in images" v-bind:src="img"/>
            <h1 class="white--text mb-2 display-1 text-xs-center"></h1>
            <div class="subheading mb-3 text-xs-center"></div>
            <!-- <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Cari Lowongan
            </v-btn> -->
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to start developing</h2>
              <span class="subheading">
                 
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <router-link to=""><img width="250px" v-for="img in gojek" v-bind:src="img"/></router-link>
                    </v-card-text>
                    <!-- <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Tokopedia</div>
                    </v-card-title> -->
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">                     
                      <router-link to=""><img width="260px" v-for="img in tokped" v-bind:src="img"/></router-link>
                    </v-card-text>
                    <!-- <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast development</div>
                    </v-card-title> -->
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <router-link to=""><img width="260px" v-for="img in traveloka" v-bind:src="img"/></router-link>
                    </v-card-text>
                    <!-- <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Completely Open Sourced</div>
                    </v-card-title> -->
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
    </div>
</template>

<script>
export default {
    data() {
      return {
        images:[
          'https://images.glints.com/unsafe/1024x0/glints-dashboard.s3.amazonaws.com/company-banner-pic/95de5e329d1a484852bf06763212ec9f.png'
          ],
          tokped:[
              'https://vignette.wikia.nocookie.net/logopedia/images/d/d6/Tokopedia_baru.png/revision/latest?cb=20160621120508'
          ],
          gojek:[
              'https://imgee.s3.amazonaws.com/imgee/638b26370a794db38dfef92fa2bfe60f.png'
          ],
          traveloka:[
             'https://blog.traveloka.com/wp-content/uploads/2012/11/Traveloka_Primary_Logo.png'
          ]
    }
  }
}
</script>

<style lang="css">
    #masuk{
        background: white
    }
</style>