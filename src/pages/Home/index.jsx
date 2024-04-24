import { useDarkMode } from '../../components/DarkMode'
import { useNavigate } from 'react-router-dom'
import Styles from './style.module.css'

const whiteBanner = 'https://alejandrocsdev.github.io/leopardo/banner-white.png'
const blackBanner = 'https://alejandrocsdev.github.io/leopardo/banner-black.png'

function Home() {
  // redirect
  const navigate = useNavigate()

  function handleClick() {
    navigate('/doc')
  }
  const { isDark, toggleDarkMode } = useDarkMode()
  return (
    <>
      <div className={Styles.container} data-theme={isDark ? 'dark' : 'light'}>
        <div className={Styles.top}>
          <img src={isDark ? whiteBanner : blackBanner} className={Styles.banner} />
        </div>
        <div className={Styles.middle}>
          <button onClick={handleClick} className={Styles.startBtn}>
            Getting Started
          </button>
        </div>
        <div className={Styles.bottom}>
          <div className={Styles.feature}>
            <h1>Routing</h1>
            <p>
              Leopardo offers 5 powerful routing methods (get, post, put, patch, delete) along with
              a suite of HTTP helpers. Easily define and manage your API routes with simplicity and
              clarity.
            </p>
          </div>
          <div className={Styles.feature}>
            <h1>Middlewares</h1>
            <p>
              Leopardo includes a range of built-in middlewares for common tasks and seamlessly
              integrates with external middlewares. Enhance your application's functionality with
              ease.
            </p>
          </div>
          <div className={Styles.feature}>
            <h1>Template Engine</h1>
            <p>
              Leopardo comes equipped with its own efficient and intuitive template engine,
              simplifying the process of creating dynamic views for your application.
            </p>
          </div>
          <div className={Styles.feature}>
            <h1>MySQL / Firebase</h1>
            <p>
              Leopardo provides seamless integration with MySQL databases for traditional relational
              data needs. Additionally, it offers easy integration with Firebase for real-time,
              scalable applications.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
