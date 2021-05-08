<template>
    <div class="lala">
        <upper/>
        <hello-card/>
        <filter-card></filter-card>
        <post v-for="el in posts" :key="el.members"
              :post_title=el.title :post_text=el.text :post_members=el.members
              :post_type=el.type></post>

        <div id="footer">
            <downer/>
        </div>
    </div>
</template>



<script>
    import upper from '@/components/temp_main/upper'
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
            downer,

        },


        data() {
            return {
                posts: [
                    {
                        title: "Проект по разработке",
                        text: "Проект для хакатона" +
                            "Проект для хакатона\n" +
                            "Проект для хакатона\n" +
                            "Проект для хакатона\n",
                        members: 2,
                        type: "Биология",
                    },
                    {
                        title: "Проект по разработке",
                        text: "Проект для хакатона" +
                            "Проект для хакатона\n" +
                            "Проект для хакатона\n" +
                            "Проект для хакатона\n",
                        members: 3,
                        type: "Биология",
                    },
                    {
                        title: "Проект по разработке",
                        text: "Проект для хакатона" +
                            "Проект для хакатона\n" +
                            "Проект для хакатона\n" +
                            "Проект для хакатона\n",
                        members: 15,
                        type: "Биология",
                    },
                    {
                        title: "Проект по благоустройству",
                        text: "Проект для хакатона\n" +
                            "Проект для хакатона\n" +
                            "Проект для хакатона" +
                            "Проект для хакатона",
                        members:43,
                        type: "Наука",
                    },
                    {
                        title: "Ищу людей к команду",
                        text: "Проект для хакатона",
                        members: 5,
                        type: "Programming",
                    },
                    {
                        title: "Ищу людей к команду",
                        text: "Проект для хакатона",
                        members: 8,
                        type: "Programming",
                    },{
                        title: "Ищу людей к команду",
                        text: "Проект для хакатона",
                        members: 89,
                        type: "Programming",
                    },{
                        title: "Ищу людей к команду",
                        text: "Проект для хакатона",
                        members: 6,
                        type: "Programming",
                    },{
                        title: "Ищу людей к команду",
                        text: "Проект для хакатона",
                        members: 96,
                        type: "Programming",
                    },{
                        title: "Ищу людей к команду",
                        text: "Проект для хакатона",
                        members: 58,
                        type: "Programming",
                    },
                ]
            }
        }

    }
</script>

<style>
    #footer{

        width: 100%;
        margin-top: 35%;
    }
    .lala {
        background-color: rgba(243, 243, 235, 0.4);
    }
</style>
