<template>
<div>
Name:<h1>{{studentInfo.name}}</h1>
<h2>{{studentInfo.surname}}</h2>
<p>{{variant}}</p>

<a v-bind:href="file">FIle with theory answer:</a>


<ul class="block">
  <li v-for="photo in photos" :key="photo._id" class="blockEl"
  
  > 
      <h1 v-on:click="selectPhoto(photo._id)">{{photo.Name}}</h1>
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

</div>

</template>
<script>
import {mapActions, mapState, mapGetters, mapMutations} from "vuex";

export default {
    data(){
        return {
            
            
            selected: null,
        }
    },
    computed: {
       ...mapState(["studentInfo", "variant","file"]),
       ...mapActions(["loadPhotos"]),
       ...mapGetters(["photos"]),
       
       
    },
    async mounted() {
       await this.$store.dispatch("loadPhotos");
    },
    
    methods: {
      ...mapMutations(["findAuthor"]),
    async selectPhoto(id) {
      this.selected = id;
      console.log(this.selected);
      await this.$store.commit("findAuthor", this.selected);
      
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