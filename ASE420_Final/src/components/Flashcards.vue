<template>
    <div class="flashcard-container">
      <h2>Flashcards</h2>
      
      <div v-if="flashcards.length === 0">Loading...</div>
      
      <div v-else class="flashcard" @click="toggleFlashcard">
        <h2 v-if="showQuestion">{{ currentFlashcard.question }}</h2>
        <h2 v-else>{{ currentFlashcard.answer }}</h2>
      </div>
      
      <div class="controls">
        <button @click="previousFlashcard" :disabled="currentIndex === 0">Back</button>
        <button @click="nextFlashcard" :disabled="currentIndex === flashcards.length - 1">Next</button>
      </div>
    </div>
  </template>

<script>
import { fetchFlashcards } from '../api';
export default {
    name: 'Flashcards',
    data() {
        return {
            flashcards: [],
            currentIndex: 0,
            showQuestion: true
        };
    },
    computed: {
        currentFlashcard() {
            return this.flashcards[this.currentIndex];
        }
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
            console.log("Fetched flashcard set:", response);
            this.flashcards = response.data.data;
            if (this.flashcards.length === 0) {
                console.warn("No flashcards found for this set.");
            }
        } catch (error) {
            console.error("Error fetching flashcards:", error);
        }
    },
    methods: {
        nextFlashcard() {
            if (this.currentIndex < this.flashcards.length - 1) {
                this.currentIndex++;
                this.showQuestion = true;
            }
        },
        previousFlashcard() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.showQuestion = true;
            }
        },
        toggleFlashcard() {
            this.showQuestion = !this.showQuestion;
        }
    }
};
</script>