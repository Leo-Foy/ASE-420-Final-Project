<template>
    <div>
        <div>
            <h1>Welcome to the Dashboard</h1>
        </div>
        <div class="center-container">
            <button class="transparent-button">+ Create Set</button>
        </div>

        <ul>
            <li v-for="set in QA_Sets" :key="set.id" class="set-card">
                <div class="set-card-content">
                    <p>{{ set.Title }}</p>
                    <div class="button-container">
                        <button @click="toFlashcard" class="transparent-button">Flashcards</button>
                        <button @click="toQuiz" class="transparent-button">Quiz</button>
                    </div>
                </div>
            </li>
        </ul>
  </div>
</template>

<script>
    import { fetchData } from '../api';
    export default {
        name: 'Dashboard',
        data() {
            return {
            QA_Sets: [] 
            };
        },
        async created() {
            try {
                const response = await fetchData();
                console.log('Fetched data:', response);
                this.QA_Sets = response.data.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },

        methods: {
            toFlashcard(){
                this.$router.push({ name: 'Flashcards' });
            },

            toQuiz() {
                this.$router.push({ name: 'Quiz' });
            },
        }
    }
</script>