<template>
    <div>
        <button @click="clickMe()">Click Me!</button>
        Jumlah klik: {{ count }}
    </div>
</template>

<script>
export default {
    name: 'custom-button',
    data: () => {
        return {
            count: 0
        }
    },
    methods: {
        clickMe () {
            this.count++;
            window.console.log(this.count);
        }
    }
}
</script>

<style scoped>

</style>