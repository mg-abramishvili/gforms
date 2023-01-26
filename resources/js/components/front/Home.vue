<template>
    <div class="logo">
        <img src="/img/logo.svg" alt="">
    </div>

    <div class="index-button">
        <button @click="views.gform = true">Пройти <br>анкетирование</button>
    </div>

    <div class="index-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam totam ullam consequatur amet, facilis rem.</p>
    </div>

    <GForm v-if="views.gform" />
</template>

<script>
import GForm from './Form.vue'

export default {
    data() {
        return {
            views: {
                gform: false,
            }
        }
    },
    methods: {
        closeGForm() {
            document.getElementsByClassName('gform')[0].classList.add('gform-close')

            setTimeout(() => {
                this.views.gform = false
            }, 500)
        }
    },
    components: {
        GForm
    }
}
</script>
