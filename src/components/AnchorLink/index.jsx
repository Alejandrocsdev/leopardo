import Styles from './style.module.css'

function AnchorLink({className, title, link}) {
  return (
    <div className={Styles.container}>
      <a className={Styles.anchor} id={link}></a>
      <h1 className={className}>{title}</h1>
    </div>
  )
}

export default AnchorLink
