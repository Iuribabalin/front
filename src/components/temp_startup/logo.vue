<template>
	<header>
        <img id="logo_svg" @click="goTo('main')" src="@/assets/itmo.png" alt="полки" class="i" style="width: 20%; margin-left: 10px"   >
  </header>
</template>

<script>

export default {
  name: 'logo',
  methods: {
    goTo: function (path) {
      this.$router.push({name: path+'-page'});
    },
  }
}

</script>

<style>

  #logo_svg {
    margin-left: 2%;
    margin-top: 2%;

  }

</style>

