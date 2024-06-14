import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return await fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return await response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение

// Создайте Vue приложение
const Root = defineComponent({
  name: 'Root',
  // Реактивные данные приложения, его локальное состояние
  data() {
    return {
      select: null,
    };
  },
  watch: {
    
    select(newValue, oldValue) {
      let newArray = fetchMeetupById(newValue);
      
console.log(newArray)
    },
  },
  
});

// Создаём новое приложение по корневому компоненту
const app = createApp(Root);

// Монтируем приложение на странице
// Возвращается публичный экземпляр корневого компонента
const vm = app.mount('#app');

// Добавляем vm в глобальные переменные для простой отладки в консоли браузера
window.vm = vm;
