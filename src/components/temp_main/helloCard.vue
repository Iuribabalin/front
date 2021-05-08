<template>
    <div>
        <div class="filtercard" >
            <img src="@/assets/icon2.png" class="imageicon">
            <p class="name ">User Name</p>
            <p class="logo2" >My projects</p>
            <p class="logo2" >Status</p>
            <p class="logo2" >important</p>

        </div>
    </div>
</template>

<script>
    export default {
        name: "helloCard"
    }
</script>

<style scoped>
    .filtercard{
        font-family: Roboto;
        font-weight: bold;
        margin-top: 25px;
        width: 210px;
        height: 180px;
        margin-left: 12px;


        margin-bottom:100px;
        padding: 10px 10px 10px;
        box-shadow: 0 0 5px rgba(0,0,0,0.5);
        position: fixed;
        left: 5px ;
        border-radius: 10px;
        transition: opacity 0.6s;
    }
    .imageicon{
        width: 50px;
        display: block;
        float: left;
    }
    .filtercard:hover {
        opacity: 0.9;
        transition: opacity 0.6s;
        box-shadow: 4px 4px 5px rgba(7, 66, 241,0.4);
    }
</style>
