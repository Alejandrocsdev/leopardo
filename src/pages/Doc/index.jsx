import { Outlet } from 'react-router-dom'
import DropdownMenu from '../../components/DropdownMenu'
import Styles from './style.module.css'

function Doc() {
  const RoutingItems = [
    { text: 'Route Methods', link: '/routing/#route-methods' },
    { text: 'Route Parameters', link: '/routing/#route-parameters' },
    { text: 'Request Methods', link: '/routing/#request-methods' },
    { text: 'Response Methods', link: '/routing/#response-methods' }
  ]

  const MiddlewaresItems = [
    { text: 'Writing Middleware', link: '/middleware/#writing-middleware' },
    { text: 'Using Middleware', link: '/middleware/#using-middleware' },
    { text: 'Built-In Middlewares', link: '/middleware/#built-in-middlewares' }
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
            <DropdownMenu text="Introduction" showArrow={false} />
            <DropdownMenu items={RoutingItems} text="Routing" />
            <DropdownMenu items={MiddlewaresItems} text="Middlewares" />
            <DropdownMenu items={engineItems} text="Template Engine" />
            <DropdownMenu items={mysqlItems} text="MySQL" />
            <DropdownMenu items={firebaseItems} text="Firebase" />
          </ul>
        </div>
        <div className={Styles.main}>
          <Outlet />
        </div>
      </div>
      <footer className={Styles.footer}>MIT licensed | Copyright &copy; 2024 by Alejandro Chen Santoro</footer>
    </>
  )
}

export default Doc
