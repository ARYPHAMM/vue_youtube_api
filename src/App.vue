<template>
  <div id="app" class="container">
   <!-- <SearchBar v-on:termChange="onTermChange" />#1 -->
   <SearchBar @termChange="onTermChange" />  
   <div class="row">

   <VideoDetail :video="selectVideo" />
   <!-- <VideoList v-bind:videos="myVideos"/> -->
   <VideoList :myVideos="videos" @videoSelect="onVideoSelect"/>    <!-- send data to props for child component -->
   </div>

   <!-- components cha nhận sự kiện từ components con (1) -->
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import axios from 'axios';
// const API_KEY = 'AIzaSyCV0aFwodXdU9YMHxrAGt9SrvIVHmOLxt8';
const API_KEY = 'AIzaSyA8R0vabvODUuywQZzh0fDgS497-wKY4_U';
export default {
  name: 'App',
  components: {
    // SearchBar:SearchBar; or key and value
    SearchBar,
    VideoList,
    VideoDetail
  },
  data(){
    return {videos: [],selectVideo: null };
  },
  methods:{
    onTermChange(searchTerm){ // sự kiện từ components con đưa lên (1) 
         axios.get('https://www.googleapis.com/youtube/v3/search',{
       params:{
         key: API_KEY,
         type:'video',
         part:'snippet',
         q:searchTerm
       }
         }).then(response => {
           this.videos = response.data.items;
         });
    },
    onVideoSelect(video){
      this.selectVideo = video;
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
  margin-top: 60px;
}
</style>
