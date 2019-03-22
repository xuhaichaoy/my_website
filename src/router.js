
const pageIndex = () => import ('./components/page/index')
const pageDoc = () => import ('./components/page/doc')
const pageCategory = () => import ('./components/page/category')
const pageAbout = () => import ( './components/page/about')
const pageDetail = () => import ( './components/page/detail')
const pageValue = () => import ('./components/page/searchValue')
const pagePublish = () => import ('./components/page/publish')
const pageCvalue = () => import ('./components/page/cvalue')

export default [{
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: pageIndex,
    meta: {
      title: '主页',
    }
  },
  {
    path: '/doc',
    name: 'pageDoc',
    component: pageDoc
  },
  {
    path: '/category',
    name: 'category',
    component: pageCategory
  },
  {
    path: '/about',
    name: 'about',
    component: pageAbout
  },
  {
    path: '/article/:id',
    name: 'article',
    component: pageDetail
  },
  {
    path: '/search/:searchValue',
    name:'pageValue',
    component: pageValue
  },
  {
    path: '/category/:value',
    name: 'pageCvalue',
    component: pageCvalue
  },
  {
    path: '/publish',
    name: 'publish',
    component: pagePublish
  }
]