import Styles from './style.module.css'

function FeaturePage({ children }) {
  return <div className={Styles.container}>{children}</div>
}

export default FeaturePage
