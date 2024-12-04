<template>
    <div>
        <h1>Welcome to Quiz</h1>
        <div v-if="QandA.length > 0">
            <h1>{{ setTitle }}</h1>
            <ul>
                <li v-for="(qa, index) in QandA" class="question-box">
                    <div >
                        <h2>{{ qa.question }}</h2>
                        <input v-model="answers[index]" required />
                    </div>
                </li>
            </ul>

            <button @click="turnIn()" class="transparent-button">Submit</button>

        </div>
        <div v-else>
            <p>Loading Questions and Answers...</p>
        </div>
    </div>
</template>

<script>
import { fetchFlashcards } from '../api';
    export default {
        
        name: 'Quiz',
        data() {
            return {
                setTitle: this.$route.params.setTitle, 
                QandA: [],
                answers: [],
            };
        },
        async mounted() {
            const setId = this.$route.params.setId;
            console.log('Request URL:', `/api/flashcardData?setId=${setId}`);

            if (!setId) {
                console.error("setId is missing in the URL");
                return;
            }

            try {
                const response = await fetchFlashcards(setId); 
                console.log("Fetched QA set:", response);
                this.QandA = response.data.data;
                if (this.QandA.length === 0) {
                    console.warn("No Q and A's found for this set.");
                }
            } catch (error) {
                console.error("Error fetching Questions and Asnwers:", error);
            }
        },
        methods: {
            turnIn() {
                console.log(JSON.stringify(this.answers));
                this.$router.push({ name: 'Results', query: {userAnswers: JSON.stringify(this.answers), questionList: JSON.stringify(this.QandA)} });
            }
        }
        
        
    };
</script>