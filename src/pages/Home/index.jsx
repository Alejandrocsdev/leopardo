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
          <img
            src={isDark ? whiteBanner : blackBanner}
            className={Styles.banner}
          />
        </div>
        <div className={Styles.middle}>
          <button onClick={handleClick} className={Styles.startBtn}>
            Getting Started
          </button>
        </div>
        <div className={Styles.bottom}>
          <div className={Styles.feature}>
            <h1>Robust Routing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque deleniti
              aspernatur deserunt, nostrum fuga quae! Fugit aliquam mollitia possimus soluta sint
              error culpa necessitatibus cumque, reiciendis sit maxime eligendi.
            </p>
          </div>
          <div className={Styles.feature}>
            <h1>Template Engine</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque deleniti
              aspernatur deserunt, nostrum fuga quae! Fugit aliquam mollitia possimus soluta sint
              error culpa necessitatibus cumque, reiciendis sit maxime eligendi.
            </p>
          </div>
          <div className={Styles.feature}>
            <h1>Sequelize</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque deleniti
              aspernatur deserunt, nostrum fuga quae! Fugit aliquam mollitia possimus soluta sint
              error culpa necessitatibus cumque, reiciendis sit maxime eligendi.
            </p>
          </div>
          <div className={Styles.feature}>
            <h1>Firebase</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque deleniti
              aspernatur deserunt, nostrum fuga quae! Fugit aliquam mollitia possimus soluta sint
              error culpa necessitatibus cumque, reiciendis sit maxime eligendi.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
