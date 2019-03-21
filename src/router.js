
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
    component: pageIndex
  },
  {
    path: '/index',
    component: pageIndex,
  },
  {
    path: '/doc',
    component: pageDoc
  },
  {
    path: '/category',
    component: pageCategory
  },
  {
    path: '/about',
    component: pageAbout
  },
  {
    path: '/article/:id',
    component: pageDetail
  },
  {
    path: '/search/:searchValue',
    component: pageValue
  },
  {
    path: '/category/:value',
    component: pageCvalue
  },
  {
    path: '/publish',
    component: pagePublish
  }
]