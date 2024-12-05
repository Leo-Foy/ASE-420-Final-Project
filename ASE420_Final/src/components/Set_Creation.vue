<template>
    <div>
        <div>
            <h1>Welcome to Set Creation</h1>
            <input class="transparent-button" style="width: 500px;" v-model="setTitle" required placeholder="Enter Set Title" />
        </div>

        <div>
            <ul>
                <li v-for="(question, index) in questions" :key="index" style="list-style: none;">
                    <div>
                        <input class="transparent-button" style="width: 400px; height: 60px;" placeholder="Enter Question" v-model="questions[index]" required />
                        <input class="transparent-button" style="width: 400px; height: 60px;" placeholder="Enter Answer" v-model="answers[index]" required />
                    </div>
                </li>
            </ul>
            
        </div>

        <div>
            <button @click="addTerm()" class="transparent-button">+ Add Term</button>
            <button @click="Submit()" class="transparent-button">Submit</button>
        </div>

  </div>
</template>

<script>
import { fetchSetId, addQASet } from '../api';
    export default {
        name: "Set_Creation",
        data() {
            return {
                setTitle: "",
                questions: [""],
                answers: [""],

            };
        },


        methods: {
            addTerm() {
                console.log(this.questions[0])
                this.questions.push(""); 
                this.answers.push("");   
            },


            async Submit() {
                //send set title variable to database, forget about populating userId
                console.log('Submission triggered');
                try {
                    const response = await fetch('http://localhost:3000/createSet', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        setTitle: this.setTitle,
                    }),
                    });

                    const result = await response.json();
                    if (result.success) {
                        alert(result.message);
                        //then do two functions, 

                        //one for getting the setId of the title
                        let setId = await this.getSetId();

                        //one for adding each question answer element and mapping it to the setId
                        await this.mapToSet(setId)
                    
                    } else {
                        alert('Set Creation failed: ' + result.message);
                    }
                } catch (error) {
                    console.error('Error creating set:', error);
                    alert('An error occurred while creating the set.');
                }                

                //go back to dashboard
                this.$router.push({ name: 'Dashboard'});
            },

            async getSetId() {
                let setId = 0;

                try {
                    const response = await fetchSetId(this.setTitle); 
                    setId = parseInt(response.data.data, 10);
                    
                } catch (error) {
                    console.error("Error fetching setId:", error);
                }
                console.log("getting setId:" + setId)
                return setId;
            },

            mapToSet(id) {
                console.log(id);
                this.questions.forEach((question, index) => {
                    try{
                        addQASet(id, question, this.answers[index]);
                    } catch (error) {
                        console.error(error);
                    }

                });

            },


        }
    }
</script>