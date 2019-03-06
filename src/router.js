import pageIndex from './components/page/index'
import pageDoc from './components/page/doc'
import pageCategory from './components/page/category'
import pageAbout from './components/page/about'
import pageDetail from './components/page/detail'
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
]