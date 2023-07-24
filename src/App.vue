<template>
  <div id="app">
    <div>
      <button v-for="language in languages" :key="language.title" @click="changeLocale(language.language)">
          <flag :iso="language.flag" v-bind:squared=false /> {{language.title}}
      </button>
  </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <BanlgWord msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import BanlgWord from './components/BanlgWord.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    BanlgWord
  },

  data() {
    return {
        languages: [
            { flag: 'us', language: 'en', title: 'English' },
            { flag: 'bd', language: 'bd', title: 'বাংলা' },
            { flag: 'qa', language: 'qa', title: 'Arabic' }
        ]
    };
},
methods: {
    changeLocale(localee) {
        i18n.locale = localee;
        console.log("i18n.locale")
        
        console.log(i18n.locale)
    }
},
}


</script>

<style>
button {
  padding: 15px;
  border: 1px solid green;
  font-size: 18px;
  margin: 15px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
