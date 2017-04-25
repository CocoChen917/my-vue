import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Coco from '@/components/Coco'
import Test from '@/components/Test'
import Header from '@/components/Header'
import first from '@/page/first'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(Router)
Vue.use(ElementUI, { locale })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
    	path: '/coco',
    	name: 'Coco',
    	component: Coco
    },{
      path: '/test',
      name: 'Test',
      component: Test
    },{
      path: '/header',
      name: 'Header',
      component: Header
    },{
      path: '/first',
      name: 'first',
      component:first
    }
  ]
})
