<template>
  <div>
    <page/>
  </div>
</template>

<script>
import page from "../temp_main/page";

export default {
  name: 'page_container',
  components: {
    page,
  },
  data: function() {
    return {
      accessTokenName: 'accessToken',
      refreshTokenName: 'refreshToken',
    };
  },
  computed: {
    access: function() {
      return localStorage.getItem("accessToken");
    },
    refresh: function() {
      return localStorage.getItem("refreshToken");
    },
    isAuthorized: function() {
      return !((this.access === undefined) || (this.access === null) || (this.access === ''));
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Jost", serif;
  font-weight: normal;
}


@media only all and (min-width: 1256px) {
  #wrap {
    width: 1245px;
    font-size: 16px;
  }

}

@media only all and (min-width: 882px) and (max-width: 1255px) {
  #wrap {
    width: 643px;
    font-size: 12px;
  }
}

@media only all and (max-width: 881px) {
  #wrap {
    width: 320px;
    font-size: 8px;
  }
}
</style>
