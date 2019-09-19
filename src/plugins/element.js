import Vue from 'vue'

import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import ElementUI from 'element-ui'

// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(CollapseTransition)
Vue.use(ElementUI)
