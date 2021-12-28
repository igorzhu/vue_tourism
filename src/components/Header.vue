<template>
    <header class="header">
        <div class="header__text">
            <h1 class="header__title">Пора ехать!</h1>
            <div class="header__posttitle">Мифы и реальность о путешествиях по стране</div>
        </div>
        <div class="header__socials">
            <Socials></Socials>
        </div>
    </header>
</template>

<script>
    import Socials from './Socials.vue'
    export default {
        name: "page-header",
        components: {
            Socials
        },
    }
</script>

<style>
    .header {
        background-color: #304053;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        padding: 0 50px 0 60px;
        color: #fff;
    }

    .header__title {
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 40px;
        text-transform: uppercase;
    }

    .header__posttitle {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
    }

    @media (min-width: 900px) and (orientation: landscape) and (min-aspect-ratio: 2.05/1){
        .header {
            height: 90px;
        }

        .header__title {
            font-size: 28px;
            line-height: 36px;
        }

        .header__posttitle {
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
        }
    }
</style>