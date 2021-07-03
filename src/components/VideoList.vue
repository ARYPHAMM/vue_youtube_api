<template>
<div class="col-md-4 col-12">

  <ul class="list-group">
     {{myVideos.length }}
     <!-- <VideoListItem v-for="video in myVideos" v-bind:video ="video" v-bind:key="video.snippet.id" /> #1 -->
     <VideoListItem v-for="video in myVideos" :video ="video" :key="video.etag" @videoSelect="onVideoSelect"  />
     
  </ul>
</div>
</template>

<script>
import VideoListItem from './VideoListItem.vue';
export default {
name:'VideoList',
components:{
    VideoListItem,
},
props:['myVideos'],
methods: {
    onVideoSelect(video){
            this.$emit('videoSelect',video);
    }
},
}
</script>

<style>

</style>