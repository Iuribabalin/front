<template>
<div class="downer">
  <div class="downer__column">
    <br>
    <h1>ITMO Team search</h1>
    <h3>Ищите команду проще</h3>
  </div>
  <div class="downer__column">
    <div v-if="flag">
      <br>
      <h2>Навигация</h2>
      <br>
      <a href="/lk">Личный кабинет</a>
      <br>
      <a class="trouble_link" @click="signout">Выход</a>
    </div>
    <div v-else>
      <br>
      <h2>Навигация</h2>
      <br>
      <a class="trouble_link" @click="$router.push('/reg')">Регистрация</a>
      <br>
      <a class="trouble_link" @click="$router.push('/login')">Вход</a>
    </div>
  </div>
  <div class="downer__column">
    <br>
    <h2>Поддержка</h2>
    <br>
    <a href="#">Видео разработки</a>
    <br>
    <a href="#">Оставить сообщение</a>
    <br>
    <a href="#">Регламент</a>
    <br>
    <a href="#">Дополнительные материалы</a>
    <br>
    <br>
    <br>
    <br>

  </div>
</div>
</template>

<script>
import Vue from "vue";

export default {
  name: "downer",
  computed: {
    flag:  function () {
      return Vue.$cookies.get('FlagLog') === "true"
    }
  },
  methods:{
    signout(){
      Vue.$cookies.set('FlagLog','false');
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.trouble_link {
  float: left;
  text-decoration: underline;
  margin: 0 0 0 0px;
}

*{
  background: black;
  color: white;
}
h1,h2,h3 {
  margin: 0;
  text-align: center;
}
.downer {
  clear: both;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  display: table;
  z-index: 1;
  font-family: Roboto;
}
.downer__column {

  display: table-cell;
  text-align: left;
  margin-bottom: 10px;
}

.downer__column  h2{

  display: table-cell;
  text-align: left;
  margin-bottom: 10px;
}

</style>
