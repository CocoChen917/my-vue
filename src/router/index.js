import App from '@/App'

const company_list = r => require.ensure([], () => r(require('@/pages/company_list')), 'company_list')
const company_info = r => require.ensure([], () => r(require('@/pages/company_info')), 'company_info')
const nopage = r => require.ensure([], () => r(require('@/pages/nopage')), 'nopage')
const test = r => require.ensure([], () => r(require('@/pages/test')), 'test')
const test2 = r => require.ensure([], () => r(require('@/pages/test2')), 'test2')
export default [{
	path:'/',
	component: App,
	children: [
		{
			path: '/company_list/:name',
			component: company_list
		},{
			path: '/company_info/:id',
			component: company_info
		},{
			path: '/test/:msg',
			component: test
		},{
			path: '/test2',
			component: test2
		},{
			path: '/*',
			component: nopage
		}
	]
}]