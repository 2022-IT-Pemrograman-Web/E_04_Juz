<template>
  <div>
    <h1>Playlist</h1><button @click="addSurat()">+</button>
    <h1>{{this.playlist}}</h1>
    <button @click="$router.go(-1)">Back</button>
    <div v-for="playlis in playlist" :key="playlis.id">


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playlist:this.$route.params.id
    };
  },
  mounted(){
    
  },
  methods:{
    addSurat(){

    }
  }
};
</script>
