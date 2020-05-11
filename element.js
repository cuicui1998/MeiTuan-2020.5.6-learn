import Vue from 'vue'
import {
    Button,
    Container,
    Header,
    Main,
    Footer,
    Row,
    Col,
    Icon,
    Input,
    Carousel,
    CarouselItem
} from 'element-ui';




Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);