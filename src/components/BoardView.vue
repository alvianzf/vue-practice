<template>
    <div>
        <table class="table table-collapse table-condensed table-hover">
            <thead>
                <th>Creator_id</th>
                <th>Name</th>
            </thead>
            <tbody v-if="dataTable">
                <tr v-for="item in dataTable" v-bind:key="item.id">
                    <td>{{ item.creator_id }}</td>
                    <td>{{ item.name }}</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td>No data to show!</td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {


    mounted () {
        axios.get('http://backend.local/api/board').then(res => {
            this.dataTable = res.data.result;
        });
    },
    data: () => {
        return {
            dataTable: [],
        }
    }
}
</script>