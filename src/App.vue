<template>
  <v-app>
    <div id="app">
      <v-navigation-drawer v-model="sideNav" absolute temporary>
        <v-list>
          <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
            <v-list-tile-action>
              <v-icon left>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ item.title  }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar flat color="#180D5B">
      <v-toolbar-side-icon id="tb" dark
        @click.native.stop="sideNav = !sideNav" 
          class="hidden-sm-and-up"></v-toolbar-side-icon>
          <router-link to="/home" tag="span" style="cursor:pointer">
            <img width="120px" v-for="img in images" v-bind:src="img"/>
          </router-link>
      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only" slider-color="white">
          <v-btn flat dark v-for="item in menuItems" :key="item.title" router :to="item.link">  
            <v-icon left dark>{{ item.icon }}</v-icon>
            {{  item.title }}
          </v-btn>
        </v-toolbar-items>
          <v-btn href="/login" label outline color="white">Login</v-btn>
    </v-toolbar>
      <router-view></router-view>
    </div>
    </v-app>
</template>

<script>

import axios from 'axios'

export default {
    data() {
      return {
        sideNav: false,
        menuItems:[
          { icon: 'place', title:  'Lowongan Kerja', link: '/loker'},
          { icon: 'school', title:  'Pelatihan', link: '/pelatihan'},
          { icon: 'person', title:  'Pengguna', link: '/pengguna'},
        ],
        images:[
          'http://sekampus.id/wp-content/uploads/2018/11/logo-putih.png'
          ]
    }
  }
}
</script>

<style lang="css">
  #app{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }
</style>