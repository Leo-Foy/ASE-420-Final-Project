<template>
    <div>
        <h1>Welcome to Results</h1>
        <h2>{{ correctAnswers() }} / {{ totalQuestions() }}</h2>
        <h2> {{ percentCorrect() }}%</h2>
    </div>
</template>

<script>
    export default {
        name: 'Results',
        data() {
            return {
                userAnswers: [],
                questionList: [],
                totalCorrect: 0,
            };
        },
        mounted() {
            const userAnswers = this.$route.query.userAnswers;
            if (userAnswers) {
                this.userAnswers = JSON.parse(userAnswers); 
            }

            const questionList = this.$route.query.questionList;
            if (questionList) {
                this.questionList = JSON.parse(questionList);
            }

            this.calculateCorrectAnswers();
        },

        methods: {
            calculateCorrectAnswers() {
                this.totalCorrect = 0; 

                this.questionList.forEach((question, index) => {
                    console.log(this.userAnswers[index]);
                    console.log(question.answer);
                    if (this.userAnswers[index] === question.answer) {
                        this.totalCorrect++;
                    }
                });
            },

            correctAnswers() {
                return this.totalCorrect;
            },
            totalQuestions() {
                return this.questionList.length;
            },
            percentCorrect() {
                let total = this.totalQuestions();
                if (total === 0) 
                    return 0;

                let percent = (this.totalCorrect / total).toFixed(2) * 100;
                return percent;
            }

            
        }
    }
</script>