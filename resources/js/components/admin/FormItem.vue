<template>
    <h1 class="mt-3">Форма #{{ form.id }}</h1>

    <p>
        <strong>Дата опроса:</strong> {{ form.created_at }}<br>
        <strong>Имя:</strong> Иван Петров<br>
        <strong>Должность:</strong> монтажник<br>
        <strong>Место работы:</strong> отдел №1<br>
    </p>

    <template v-if="form && form.data">
        <div v-for="question in form.data" class="card p-4 mb-2">
            <h5>{{ question.title }}</h5>
            <template v-if="question.type == 'group'">
                <div v-for="subq in question.subquestions">
                    <h6><span class="text-primary">{{ subq.answer }}</span> {{ subq.title }}</h6>
                </div>
            </template>
            <template v-if="question.type == 'single'">
                <p class="text-primary mb-0">{{ question.answer }}</p>
            </template>
        </div>
    </template>
</template>

<script>
export default {
    data() {
        return {
            form: {},
        }
    },
    created() {
        this.loadForm()
    },
    methods: {
        loadForm() {
            axios.get(`/_form/${this.$route.params.id}`)
            .then(response => {
                this.form = response.data
            })
        }
    },
}
</script>