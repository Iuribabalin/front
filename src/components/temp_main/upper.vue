<template>
    <header class="header">
        <div class="container">

            <div class="header__inner">

                <!--          <img src="@/assets/itmo.png" alt="полки" class="i" style="width: 20%; margin-left: 10px"   >-->
                <h1 style="font-size: 40px; font-family: Roboto; font-weight: bold">ITMO Team search</h1>
                <nav class="nav">
                    <a class="nav__link" :class=" this.$route.name === 'main-page' ? 'active' : ''"
                       @click="$router.push('main')">Главная</a>

                    <a class="nav__link" @click="$router.push('lk')" v-if="flag">Личный кабинет</a>
                    <a class="nav__link" v-else></a>

                    <a class="nav__link" @click="signout" style="margin-right: 50px" v-if="flag">Выйти</a>
                    <a class="nav__link" @click="$router.push('login')" style="margin-right: 50px" v-else>Войти</a>

                </nav>
            </div>
        </div>
    </header>
</template>


<script>
    import logo from '@/components/temp_startup/logo'
    import Vue from "vue";

    export default {
        name: "upper",
        components: {
            logo,
        },
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


<style>
    @import "../../assets/css/style.css";

    .header {
        margin-top: -30px;
    }

    a {
        cursor: pointer;
    }

    svg {
        cursor: pointer;
    }

    h1, h2, h3 {
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
