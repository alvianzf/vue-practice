<template>
    <div>
        <button @click="clickMe()">Click Me!</button>
        Jumlah klik: {{ count }}
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            count: 0
        }
    },
    methods: {
        clickMe () {
            this.count++;
        }
    }
}
</script>

<style scoped>

</style>