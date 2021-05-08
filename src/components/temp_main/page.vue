<template>
 <div class="lala">
   <upper/>
     <hello-card/>
     <filter-card></filter-card>
     <post/>
     <post/>
     <post/>
     <post/>
     <post/>

     <downer/>
 </div>
</template>

<script>
import upper from '@/components/temp_main/upper'

import sending from '@/components/temp_main/sending'
import downer from "@/components/temp_main/downer";
import Post from "./post";
import HelloCard from "./helloCard";
import FilterCard from "./filterCard";

export default {
  name: 'page',
  props: [],
  components: {
      FilterCard,
      HelloCard,
      Post,
    upper,
    sending,
    downer,

  },
}
</script>

<style>
.lala{
    background-color: rgba(243, 243, 235, 0.4);
}
</style>
