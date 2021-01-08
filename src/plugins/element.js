import Vue from 'vue';
import {
	autocomplete,
	Row,
	Col,
	Dialog,
	Button,
	Form,
	FormItem,
	Input,
	Select,
	Option,
	Pagination,
	InputNumber,
	MessageBox,
	Message,
	Tabs,
	TabPane,
	Carousel,
	CarouselItem,
	Popover
} from 'element-ui';

Vue.use(Button);
Vue.use(Pagination);
Vue.use(InputNumber);
Vue.use(Tabs);
Vue.use(CarouselItem);
Vue.use(TabPane);
Vue.use(Carousel);
Vue.use(autocomplete);
Vue.use(Row);
Vue.use(Col);
Vue.use(Dialog);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Popover);
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;

import Vue from 'vue';

