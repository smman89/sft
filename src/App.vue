<template>
  <v-app>
    <leftmenu></leftmenu>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <span>&copy; Softex Lab</span>
    </v-footer>
  </v-app>
</template>

<script>
import LeftMenu from './components/LeftMenu';

export default {
  data() {
    return {
    };
  },
  components: {
    leftmenu: LeftMenu
  }
};
</script>