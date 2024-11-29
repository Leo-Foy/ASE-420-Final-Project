<template>
    <div>
        <h1>Data from SQLite</h1>
        <ul>
            <li v-for="user in data" :key="user.id">{{ user.name }}</li>
        </ul>
    </div>
</template>

<script>
import { fetchData } from '../api';

export default {
    data() {
        return {
            data: [],
        };
    },
    async created() {
        try {
            const response = await fetchData();
            this.data = response.data.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
};
</script>