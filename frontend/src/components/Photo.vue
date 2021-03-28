<template>
<input type ="text" placeholder="Author" v-model="selectedAuthor">
<input type="button" value="Знайти за автором" @click="findByAuthor"/>
<ul class="block" v-if="photos.length>0">
  <li v-for="(photo, i) in photos" :key="i" class="blockEl"> 
      <h1>{{photo.Name}}</h1>
      <h3>Автор:{{photo.Author}}</h3>
      <p>Опис зробленого фото:{{photo.Description}}</p>
      <img alt="Cover" :src="photo.UrlFile" class="photoClass"/>
      <p>Дата:{{photo.DateofPublishing}}</p>
      <span>Кількість вподобань:{{photo.NumberofLikes}}</span>
      <br>
     Hashtags:
     <ul class="hashtagsStyle">
        <li v-for="hashtag in photo.Hashtags" :key="hashtag">{{hashtag}}</li>
      </ul>
      Коментарі:<br>
      <ul>
        <li v-for="comment in photo.CommentsList" :key="comment">{{comment}}</li>
      </ul>
    </li>
</ul>
<div v-else>Wait...</div>
</template>
<script>
import axios from "axios";
export default{
    data(){
        return{
            photos:[],
            selectedAuthor:"",
        }
    },
    async mounted() {
      try {
         this.photos = (await axios.get("http://localhost:4000/api/photo")).data;
      }catch(err) {
        console.log(err);
      }
    },
    methods: {
    async findByAuthor() {
      try {
       this.photos = (await axios.get("http://localhost:4000/api/photo")).data.filter(photo => photo.Author === this.selectedAuthor);
      }catch(err) {
        console.log(err);
      }
    },
  }
}
</script>
<style scoped>
body{
    position:relative;
}
.hashtagsStyle{
    display:flex;
    list-style-type:none;
    color:blue;
}
.photoClass{
    height:300px;
    width:300px;
}
.block{
    
    list-style-type:none;
    position:absolute;
}
.blockEl{
    background-color:#FFBE33;
    position:relative;
    float:left;
    width:350px;
    margin:5px;
    height:700px;
}
</style>