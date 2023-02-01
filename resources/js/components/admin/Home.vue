<template>
    <h1 class="mt-3">Результаты</h1>

    <table class="table table-striped">
        <tbody>
            <tr v-for="form in forms">
                <td>{{ form.created_at }}</td>
                <td>Иван Петров</td>
                <td>монтажник</td>
                <td>отдел №1</td>
                <td><router-link :to="{name: 'FormItem', params: {id: form.id} }" class="btn btn-outline-primary">Посмотреть</router-link></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data() {
        return {
            forms: [],
        }
    },
    created() {
        this.loadForms()
    },
    methods: {
        loadForms() {
            axios.get('/_forms')
            .then(response => {
                this.forms = response.data
            })
        }
    },
}
</script>