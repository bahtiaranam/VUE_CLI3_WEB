<template>
    <div>
        <section>
        <form @submit.prevent="save" row wrap>
          <v-flex xs12 sm6>
          <v-text-field
            label="Title"
            v-model="form.title"
            type="text"
          ></v-text-field>
          <v-text-field
            label="Content"
            v-model="form.content"
            type="text"
          ></v-text-field>
        </v-flex>

        <button type="submit">Save</button>
      </form>

        <ul>
            <li v-for="article in articles" :key="article.id">
                {{ article.title }} <br>
                {{ article.content }}
            </li>
        </ul><br>
        <button @click="load">Load</button>

        <button @click="Delete">Delete</button><br>
        <button @click="put">Edit data</button>

      </section>
        
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return{
            form:{
              title:'',
              content:''
            },
            articles:[]
        }
    },

    async mounted() {
      //  this.load
    },
    
    methods: {
      async load(){
        const response = await axios.get('http://localhost:3000/article')
        this.articles = response.data
      },

        async save(){
        try {        
          const response = await axios.post('http://localhost:3000/article', this.form)
          this.load,
          this.title ='',
          this.content =''
        }catch (e) {
          conosole.log(e)
        }
      },

      async Delete(){
        try {
          
          const response = await axios.delete('http://localhost:3000/article/5')
          this.articles = response.data
        } catch (e) {
          console.log(e)         
        }
      },

      async put(){
        try {
          const response = await axios.put('http://localhost:3000/article', this.form)
          this.articles = response.data
        } catch (e) {
          console.log(e)
        }
      }
    }
}
</script>