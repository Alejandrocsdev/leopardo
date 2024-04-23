import Styles from './style.module.css'

function Home() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.indexMain}>
          <img src="./leoStare.jpg" className={Styles.logoImg} />
          <div className={Styles.textContainer}>
            <h1>Leopardo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo, velit minima
              commodi ipsam reiciendis. Tempora omnis accusantium doloremque molestiae est, fugiat
              odit soluta, error ducimus ea nam suscipit nobis.
            </p>
          </div>
        </div>
        <div className={Styles.gettingStarted}>
          <button>Getting Started</button>
        </div>
        <div className={Styles.categories}>
          <div>
            <h1>Number One</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque deleniti
              aspernatur deserunt, nostrum fuga quae! Fugit aliquam mollitia possimus soluta sint
              error culpa necessitatibus cumque, reiciendis sit maxime eligendi.
            </p>
          </div>
          <div>
            <h1>Number Two</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque deleniti
              aspernatur deserunt, nostrum fuga quae! Fugit aliquam mollitia possimus soluta sint
              error culpa necessitatibus cumque, reiciendis sit maxime eligendi.
            </p>
          </div>
          <div>
            <h1>Number Three</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque deleniti
              aspernatur deserunt, nostrum fuga quae! Fugit aliquam mollitia possimus soluta sint
              error culpa necessitatibus cumque, reiciendis sit maxime eligendi.
            </p>
          </div>
          <div>
            <h1>Number Four</h1>
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
