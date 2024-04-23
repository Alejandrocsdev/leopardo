import Header from '../components/Header'
import Styles from './style.module.css'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={Styles.main}>{children}</main>
    </>
  )
}

export default Layout
