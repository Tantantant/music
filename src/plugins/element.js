import Vue from 'vue'
import { Button, Pagination, InputNumber, MessageBox, Message, Tabs } from 'element-ui'

Vue.use(Button)
Vue.use(Pagination)
Vue.use(InputNumber)
Vue.use(Tabs)
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;

