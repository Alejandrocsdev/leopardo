import Styles from './style.module.css'
import FeaturePage from '../../../components/FeaturePage'
import HighlightedCode from '../../../components/HilightedCode'

function Introduction() {
  const codeString = `<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{#noop}}{{body}}{{/noop}}
  </div>
</div>`

  return (
    <>
      <FeaturePage>
        {/* <div className={Styles.container}> */}
          <h1 className={Styles.h1}>Introduction</h1>
          <h2>Discover the Power of Multi-Tasking</h2>
          <p>Leopardo is a versatile module designed for handling complex tasks efficiently.</p>
          <p>
            With a primary focus on robust routing and flexible middleware support, Leopardo
            empowers developers to build sophisticated back-end servers with ease. It provides
            useful HTTP helpers, making it easier to handle various tasks in your server
            application.
          </p>
          <p>
            Leopardo also comes equipped with its own template engine, simplifying the process of
            creating dynamic content.
          </p>
          <p>
            It seamlessly integrates with MySQL and Firebase, allowing you to manage your database
            operations effortlessly. Additionally, Leopardo provides a set of commands that enable
            users to easily create, update, and delete tables in MySQL. It also supports migrations,
            seeders, and other database management tasks, streamlining the development process.
          </p>
          <HighlightedCode codeString={codeString} />
          <HighlightedCode codeString={codeString} />
          <HighlightedCode codeString={codeString} />
          <HighlightedCode codeString={codeString} />
        {/* </div> */}
      </FeaturePage>
    </>
  )
}

export default Introduction
