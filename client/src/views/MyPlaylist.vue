<template>
  <div>
    <h1>My Al-Qur'an Playlist</h1>
    <button @click="addItem()">+</button>
    <div v-for="playlist in playlists" :key="playlist.id">
      {{ playlist.nama }}
      <button @click="$router.push({ name: 'edit', params: { id: playlist.nama } })">Edit</button>
    </div>
  </div>
</template>

<script>
import Playlist from '@/services/PlaylistServices'
export default {
  data() {
    return {
      playlists:[
        { nama: "My Playlist" }
      ]
    };
  },
  async mounted(){
    this.playlist = await Playlist.index();
  },
  methods: {
    async register() {
      const response = await Playlist.getData({
        playlist: this.playlist
      })
      console.log(response.data)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
