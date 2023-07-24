import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcomeMsg: 'Welcome to Your Vue.js App',
        home: 'Home',
        about: 'About',
        people: 'People',
        settings: 'Settings',
        reports: 'Reports',
    },
    'bd': {
        welcomeMsg: 'আপনাদেরকে আমাদের ওয়েবসাইটে স্বাগতম',
        home: 'হোম',
        about: 'সম্পর্কে',
        people: 'মানুষ',
        settings: 'সেটিংস',
        reports: 'রিপোর্ট',
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