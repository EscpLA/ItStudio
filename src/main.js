import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'

import axios from 'axios'

import swal from 'sweetalert'

// import 'lib-flexible'
// import ElementUI from 'element-ui'

// // 样式文件
// import 'element-ui/lib/theme-chalk/index.css'

// import installElementPlus from './plugins/element'

axios.defaults.baseURL = 'https://api.ruabbit.top';


const app = createApp(App)
installElementPlus(app)
app.use(router).mount('#app')