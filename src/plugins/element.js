import Vue from 'vue'
import {
    Button, Pagination, InputNumber, MessageBox, Message, Tabs, TabPane, Carousel,
    CarouselItem, Table,
    TableColumn
} from 'element-ui'

Vue.use(Button)
Vue.use(Pagination)
Vue.use(InputNumber)
Vue.use(Tabs)
Vue.use(CarouselItem)
Vue.use(TabPane)
Vue.use(Carousel)
Vue.use(Table)
Vue.use(TableColumn)
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;

