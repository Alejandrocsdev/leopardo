import { Outlet } from 'react-router-dom'
import DropdownMenu from '../../components/DropdownMenu'
// import ScrollToTop from '../../components/ScrollToTop'
import Styles from './style.module.css'

function Doc() {
  const RoutingItems = [
    { text: 'Route Methods', link: '#route-methods', path: '/routing' },
    { text: 'Route Parameters', link: '#route-parameters', path: '/routing' },
    { text: 'Request Methods', link: '#request-methods', path: '/routing' },
    { text: 'Response Methods', link: '#response-methods', path: '/routing' }
  ]

  const MiddlewaresItems = [
    { text: 'Writing Middleware', link: '#writing-middleware', path: '/middlewares' },
    { text: 'Using Middleware', link: '#using-middleware', path: '/middlewares' },
    { text: 'Built-In Middlewares', link: '#built-in-middlewares', path: '/middlewares' }
  ]

  const engineItems = [
    { text: '{{{body}}}', link: '#' },
    { text: 'views folder', link: '#' },
    { text: 'helper', link: '#' }
  ]

  const mysqlItems = [
    { text: 'Installation', link: '#' },
    { text: 'Commands', link: '#' },
    { text: 'Usage', link: '#' }
  ]

  const firebaseItems = [
    { text: 'Installation', link: '#' },
    { text: 'Commands', link: '#' },
    { text: 'Usage', link: '#' }
  ]

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.sidebar}>
          <ul className={Styles.list}>
            <DropdownMenu text="Introduction" showArrow={false} titleLink="" />
            <DropdownMenu items={RoutingItems} text="Routing" titleLink="/routing" />
            <DropdownMenu items={MiddlewaresItems} text="Middlewares" titleLink="/middlewares" />
            <DropdownMenu items={engineItems} text="Template Engine" titleLink="/template-engine" />
            <DropdownMenu items={mysqlItems} text="MySQL" titleLink="/mysql" />
            <DropdownMenu items={firebaseItems} text="Firebase" titleLink="/firebase" />
          </ul>
        </div>
        <div className={Styles.main}>
          <Outlet />
        </div>
      </div>
      <footer className={Styles.footer}>
        MIT licensed | Copyright &copy; 2024 by Alejandro Chen Santoro
      </footer>
    </>
  )
}

export default Doc
