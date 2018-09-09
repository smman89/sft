<template>
<div>
 <v-navigation-drawer
    fixed
    :mini-variant="nav.miniVariant"
    :clipped="nav.clipped"
    v-model="nav.drawer" app>
    <v-list>
        <v-list-tile v-for="menu in menus" :key="menu.id" :to="menu.link">
            <v-list-tile-content>
              <v-list-tile-title v-text="menu.title"></v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
  </v-navigation-drawer>
<v-toolbar fixed app :clipped-left="nav.clipped">
      <v-toolbar-side-icon @click.stop="nav.drawer = !nav.drawer"></v-toolbar-side-icon>
      <v-toolbar-title >{{ this.$route.name}}</v-toolbar-title>
    </v-toolbar>
</div>
</template>

<script>
import storage from "../store/storage.json";

export default {
  data() {
    return {
      menus: storage.menus,
      nav: {
        rightDrawer: false,
        clipped: false,
        drawer: false,
        fixed: false
      }
    };
  }
};
</script>
