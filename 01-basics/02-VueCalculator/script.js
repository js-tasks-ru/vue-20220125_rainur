import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const Root = defineComponent({
  name: 'Root',
  // Реактивные данные приложения, его локальное состояние
  data() {
    return {
      operand1: 0,
      operand2: 0,
      operator: null,
      calculate:0,
    };
  },
  computed: {
    calculate: function () {
      let result = 0;
      if (this.operator == 'sum') {
        result = this.operand1 + this.operand2;
      } else if (this.operator == 'subtract') {
        result = this.operand1 - this.operand2;
      } else if (this.operator == 'multiply') {
        result = this.operand1 * this.operand2;
      } else if (this.operator == 'divide') {
        result = this.operand1 / this.operand2;
      }
      return result;
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
