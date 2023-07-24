import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcomeMsg: 'Welcome to Your Vue.js App'
    },
    'bd': {
        welcomeMsg: 'আপনাদেরকে আমাদের ওয়েবসাইটে স্বাগতম'
    },
    'qa': {
        welcomeMsg: 'أهلا في موقعنا'
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'bd', // set fallback locale
    messages, // set locale messages
});

export default i18n;