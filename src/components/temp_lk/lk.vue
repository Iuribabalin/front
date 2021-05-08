<template>
    <div class="lk">
        <upper/>
        <img src="@/assets/icon2.png" class="imageicon3">
        <div class="right"><h1>Личный кабинет</h1></div>
        <div style="margin-left: 20px; width: 550px; margin-top: 100px; position:absolute;">

                <div >
                    <table>
                        <tr>
                            <th><label for="text-input">___ Имя ___    </label>
                                <input class="input" id="text-input" type="text" /></th>
                            <th><label for="date-input">Дата рождения</label>
                                <input class="input" id="date-input" type="date" /></th>
                        </tr>
                        <tr>
                            <th><label for="text-input">Фамилия</label>
                                <input class="input" id="text-input2" type="text" /></th>
                            <th> <label for="readonly-input">__Email__</label>
                                <input class="input" id="readonly-input" type="text" readonly value="This can only be copied" /></th>
                        </tr>
                        <tr>
                            <th><label for="disabled-input">Учебная группа</label>
                                <input class="input" id="disabled-input" type="text"  /></th>
                            <th><label for="textarea">О себе(стек)</label>
                                <textarea class="input" id="textarea"></textarea></th>
                        </tr>
                    </table>

                    <label for="textarea-disabled">О себе(стек)</label>
                    <textarea class="input" id="textarea-disabled" ></textarea>
                </div>

            <div>
            </div>

        </div>

        <div style="height: 420px">
            <a>    </a>
        </div>
        <downer/>
    </div>
</template>

<script>
    import upper from "@/components/temp_main/upper";
    import downer from "@/components/temp_main/downer";
    import Inputs from "./inputs";

    export default {
        name: "lk",
        components: {
            Inputs,
            upper,
            downer,

        },
        computed: {
            isAvailable: function () {
                return (localStorage.getItem('login') !== null) && (localStorage.getItem('login') !== undefined) && (localStorage.getItem('login') !== '');
            },
        },
    }
</script>

<style scoped>
    .clear {
        clear: left;
    }


    table {

        width: 100%; /* Ширина таблицы */
        background: white; /* Цвет фона таблицы */
        color: white; /* Цвет текста */
        border-spacing: 1px; /* Расстояние между ячейками */
    }
    td, th {
        background: #615d5d; /* Цвет фона ячеек */
        padding: 5px; /* Поля вокруг текста */
    }

    .imageicon3{
        width: 70px;
        display: block;
        float: left;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {
        --input-border: #8b8a8b;
        --input-focus-h: 245;
        --input-focus-s: 100%;
        --input-focus-l: 42%;
    }

    .input {
        margin-left: 10px;
        margin-right: 20px;
        margin-top: 20px;
        font-size: 16px;
        font-family: inherit;
        padding: 0.25em 0.5em;
        background-color: #fff;
        border: 2px solid var(--input-border);
        border-radius: 4px;
        transition: 180ms box-shadow ease-in-out;
    }

    .input:focus {
        border-color: hsl(
                var(--input-focus-h),
                var(--input-focus-s),
                var(--input-focus-l)
        );
        box-shadow: 0 0 0 3px
        hsla(
                var(--input-focus-h),
                var(--input-focus-s),
                calc(var(--input-focus-l) + 40%),
                0.8
        );
        outline: 3px solid transparent;
    }

    .input:not(textarea) {
        line-height: 1;
        height: 2.25rem;
    }

    input[type="file"] {
        font-size: 0.9em;
        padding-top: 0.35rem;
    }

    textarea.input {
        resize: vertical;
    }

    .input[readonly] {
        border-style: dotted;
        cursor: not-allowed;
        color: #777;
    }

    .input[disabled] {
        --input-border: #ccc;

        background-color: #eee;
        cursor: not-allowed;
    }

    label {
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1;
    }

    .input + label {
        margin-top: 2rem;
    }


    .right {
        float: left; /* Обтекание по правому краю */
        width: 500px;
        margin-left: -7px;
    }

    .rightt {
        float: right; /* Обтекание по правому краю */

        margin-right: 0;

    }
</style>
