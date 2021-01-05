
import Vue from 'vue';


import {
    Button, Pagination, InputNumber, MessageBox, Message, Tabs, TabPane, Carousel,
    CarouselItem, autocomplete, Row, Col, Popover 
} from 'element-ui'

Vue.use(Button)
Vue.use(Pagination)
Vue.use(InputNumber)
Vue.use(Tabs)
Vue.use(CarouselItem)
Vue.use(TabPane)
Vue.use(Carousel)
Vue.use(autocomplete);
Vue.use(Row);
Vue.use(Col);
Vue.use(Popover)
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;

