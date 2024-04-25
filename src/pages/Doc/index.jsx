import { Outlet } from 'react-router-dom'
import DropdownMenu from '../../components/DropdownMenu'
// import ScrollToTop from '../../components/ScrollToTop'
import Styles from './style.module.css'

function Doc() {
  const RoutingItems = [
    { text: 'Route Methods', link: '#route-methods'},
    { text: 'Route Parameters', link: '#route-parameters'},
    { text: 'Request Methods', link: '#request-methods'},
    { text: 'Response Methods', link: '#response-methods'}
  ]

  const MiddlewaresItems = [
    { text: 'Writing Middleware', link: '#writing-middleware'},
    { text: 'Using Middleware', link: '#using-middleware'},
    { text: 'Built-In Middlewares', link: '#built-in-middlewares'}
  ]

  const engineItems = [
    { text: 'body', link: '#body' },
    { text: 'views folder', link: '#views-folder' },
    { text: 'helper', link: '#helper' }
  ]

  const mysqlItems = [
    { text: 'Installation', link: '#installation' },
    { text: 'Commands', link: '#commands' },
    { text: 'Usage', link: '#usage' }
  ]

  const firebaseItems = [
    { text: 'Installation', link: '#installation' },
    { text: 'Commands', link: '#commands' },
    { text: 'Usage', link: '#usage' }
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
