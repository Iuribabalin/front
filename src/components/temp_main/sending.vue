<template>
    <div class="sending">
        <div class="sending_table">
            <table>
                <tr>
                    <td>
                        <select>
                            <option label="Tag" value="1" disabled selected></option>
                            <option>Programming</option>
                            <option>Science</option>
                            <option>Education</option>
                        </select>
                    <td>

                        <select>
                            <option label="Creation data" value="1" disabled selected>today
                            </option>
                            <option>Раньше</option>
                            <option>Позже</option>
                            <option>Все</option>
                        </select>
                    </td>

                    <td>

                        <select>
                            <option label="members" value="1" disabled selected>количество участников
                            </option>
                            <option>2</option>
                            <option>4</option>
                            <option>>4</option>
                        </select>
                    </td>
<!--                    <td>-->

<!--                        <select>-->
<!--                            <option label="Как с вами связаться" value="1" disabled selected>Господин Электроник-->
<!--                            </option>-->
<!--                            <option>Факс</option>-->
<!--                            <option>Почта</option>-->
<!--                            <option>Звонок</option>-->
<!--                        </select>-->
<!--                    </td>-->

                    <td>
                        <button style="width: 150px; height: 35px;border-color: white;
                          border-radius: 5px; background-color: rgb(255,255,255);font-weight: normal;color: black; font-family:  'Roboto';outline: 0 none !important;box-shadow: red; margin-left: 550%;">
                            Поиск
                        </button>
                    </td>
                </tr>
            </table>
        </div>

    </div>

</template>

<script>
    export default {
        name: "sending"
    }
</script>

<style scoped>
    .sending_table {
        position: absolute;
        margin-left: 5px;

    }

    select {
        border-color: white;
        border-radius: 4px;
        font-size: 20px;
        font-family: Roboto;
        text-align: center;
        width: 100%;
        outline: 0 none !important;
    }

    TD, TR {
        padding-top: 10px;
        padding-left: 30px;
        outline: 0 none !important;
        margin-bottom: 15px;
    }

    .sending {

        height: 60px;

        position: center;
        background: rgb(13, 48, 66);
        outline: 0 none !important;
        margin-bottom: 40px;
        margin-left: -10px;
    }

</style>
