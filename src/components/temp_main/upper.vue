<template>
  <header class="header">
    <div class="container">

      <div class="header__inner">

<!--          <img src="@/assets/itmo.png" alt="полки" class="i" style="width: 20%; margin-left: 10px"   >-->
          <h1 style="font-size: 40px; font-family: Roboto; font-weight: bold" >ITMO Team search</h1>
    <nav class="nav">
      <a class="nav__link" :class=" this.$route.name === 'main-page' ? 'active' : ''" @click="goTo('main')">Главная</a>
      <a class="nav__link" :class=" this.$route.name === 'lk-page' ? 'active' : ''" @click="goTo('lk')">Личный кабинет</a>
<!--      <a class="nav__link" :class=" this.$route.name === 'sklad-page' ? 'active' : ''" @click="goTo('sklad')">Склад</a>-->
<!--      <a class="nav__link" :class=" this.$route.name === 'schedule-page' ? 'active' : ''">Расписание</a>-->
<!--      <a class="nav__link" :class=" this.$route.name === 'video-page' ? 'active' : ''" @click="goTo('video')">Видеопоток</a>-->
<!--      <a class="nav__link" :class=" this.$route.name === 'phones-page' ? 'active' : ''" @click="goTo('phones')">О нас</a>-->
      <a class="nav__link" :class=" this.$route.name === 'lk-page' ? 'active' : ''" @click="goTo('lk')">{{ user.login }}</a>
      <a class="nav__link" @click="signout" style="margin-right: 50px" v-if="isAvailable">Выйти</a>
      <a class="nav__link" @click="goTo('auth')" style="margin-right: 50px" v-else>Войти</a>

    </nav>
      </div>
    </div>
  </header>
</template>

<script>
import logo from '@/components/temp_startup/logo'

export default {
  name: "upper",
  components: {
    logo,
  },
  data: function () {
    return {
      user: {
        login: '',
      },
      queries: {
        add: 'main/app/add',
        refresh: 'api/refresh/token',
        retrieve: 'main/app/dots/all',
      },

    }
  },
  mounted() {
    if (localStorage.getItem('login') !== null || localStorage.getItem('login') !== undefined) this.user.login = localStorage.getItem("login")
  },
  computed: {
    isAvailable: function () {
      return (localStorage.getItem('login') !== null) && (localStorage.getItem('login') !== undefined) && (localStorage.getItem('login') !== '');
    },
  },
  methods: {
    signout: function(event) {
      console.log('close current session...');
      localStorage.clear();
      this.$router.push({name: 'auth-page'});
      window.scrollTo(0,0);
    },
    goTo: function (path) {
    this.$router.push({name: path+'-page'});
    },
  },

  fetchToken: async function(repeat, ...args) {

    console.log('fetching tokens from server...');
    let response = await fetch(baseURL + this.queries.refresh, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      //body: JSON.stringify({ refreshToken : this.$session.get(this.refresh)}),
      body: JSON.stringify({ refreshToken : localStorage.getItem("refreshToken")}),
    }).catch(function (){
      alert("Error while getting token. Check your connection")
    });

    console.log('check if response is ok');
    if (response.ok) {

      console.log('successful fetching new token');
      console.log('getting json object...');
      let json = await response.json();
      if (json) {
        //this.$session.set(this.access, json.accessToken);
        localStorage.setItem("accessToken", json.accessToken);
        window.location.reload();
        repeat = repeat.bind(this);
        console.log('repeating losed operation...');
        repeat(args);
      } else console.error('empty response body');

    } else {
      console.error(`bad response ${response.status} ${response.statusText}`);

      console.log('redirecting to login-page...');

      this.signout();
    }
  },
}
</script>


<style>
@import "../../assets/css/style.css";
.header{
  margin-top: -30px;
}
a{
  cursor: pointer;
}

svg {
  cursor: pointer;
}

h1,h2,h3 {
  margin-top: 0;
  margin-right: 0;
  margin-left: 50px;
  margin-bottom: 0;
}

.header__logo {
  margin-top: 0;
  margin-right: 0;
  margin-left: 40px;
  margin-bottom: 0;
}

</style>
