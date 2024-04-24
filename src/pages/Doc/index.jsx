import { Outlet } from 'react-router-dom'
import DropdownMenu from '../../components/DropdownMenu'
import Styles from './style.module.css'

function Doc() {
  const RoutingItems = [
    { text: 'Option 1', link: '/routing' },
    { text: 'Option 2', link: '#' },
    { text: 'Option 3', link: '#' }
  ]

  const MiddlewaresItems = [
    { text: 'Option 1', link: '#' },
    { text: 'Option 2', link: '#' },
    { text: 'Option 3', link: '#' }
  ]

  const HelpersItems = [
    { text: 'Option 1', link: '#' },
    { text: 'Option 2', link: '#' },
    { text: 'Option 3', link: '#' }
  ]

  const engineItems = [
    { text: 'Option 1', link: '#' },
    { text: 'Option 2', link: '#' },
    { text: 'Option 3', link: '#' }
  ]

  const mysqlItems = [
    { text: 'Option 1', link: '#' },
    { text: 'Option 2', link: '#' },
    { text: 'Option 3', link: '#' }
  ]

  const irebaseItems = [
    { text: 'Option 1', link: '#' },
    { text: 'Option 2', link: '#' },
    { text: 'Option 3', link: '#' }
  ]

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.sidebar}>
          <ul className={Styles.list}>
            <DropdownMenu text="Introduction" showArrow={false} />
            <DropdownMenu items={RoutingItems} text="Routing" />
            <DropdownMenu items={MiddlewaresItems} text="Middlewares" />
            <DropdownMenu items={HelpersItems} text="HTTP Helpers" />
            <DropdownMenu items={engineItems} text="Template Engine" />
            <DropdownMenu items={mysqlItems} text="MySQL" />
            <DropdownMenu items={irebaseItems} text="Firebase" />
          </ul>
        </div>
        <div className={Styles.main}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Doc
