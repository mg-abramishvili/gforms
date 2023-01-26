<template>
    <h1 v-if="$route.params.id">Опрос #{{ $route.params.id }}</h1>
    <h1 v-else>Новый опрос</h1>
</template>