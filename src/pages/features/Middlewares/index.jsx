import FeaturePage from '../../../components/FeaturePage'
import AnchorLink from '../../../components/AnchorLink'
import HighlightedCode from '../../../components/HilightedCode'
import Styles from './style.module.css'

function Middlewares() {
  const codeString = `const leopardo = require('leopardo')
const cors = require'cors'
const app = leopardo()
const port = 3000

// external
app.use(cors())
// internal
app.use(leopardo.static('public'))
  
app.listen(port, () => {
  console.log(\`Server listening on http://localhost:\${port}\`)
})
`
  return (
    <>
      <FeaturePage>
        <h1 className={Styles.title}>Middlewares</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia architecto quia
          dolores quas quod aut, beatae officiis assumenda eligendi soluta necessitatibus molestiae?
          Porro, blanditiis. Perferendis veritatis reprehenderit ducimus quia. Quisquam hic nulla
          quos dolorum ullam consequuntur nobis consectetur iste doloribus aliquid, distinctio quo
          itaque enim minima suscipit. Eligendi facere harum recusandae ad quis vero fugit
          voluptatibus pariatur eum placeat! Quod, aspernatur iste atque in accusantium vero omnis
          odit ipsum labore beatae, eius expedita architecto nam ullam qui. Inventore, quis sit!
          Provident sit, illo dolorem veritatis voluptates aliquam corrupti corporis. Vitae
          reprehenderit, aperiam quo maiores possimus dolorem voluptatum officia nemo non
          consequuntur eligendi rem, cum quis, deserunt sed quisquam autem molestias amet quibusdam
          impedit. Praesentium doloremque error laborum consequuntur blanditiis. Reiciendis
          assumenda cum dolore molestiae, reprehenderit sint commodi aut debitis laboriosam ducimus
          similique! Dolorem quasi hic, alias at eos quaerat eius ab voluptate in. Corrupti possimus
          dolores consequatur facere. Dignissimos!
        </p>
        <HighlightedCode codeString={codeString} />
        <AnchorLink className={Styles.title} title="Writing Middleware" link="writing-middleware" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia architecto quia
          dolores quas quod aut, beatae officiis assumenda eligendi soluta necessitatibus molestiae?
          Porro, blanditiis. Perferendis veritatis reprehenderit ducimus quia. Quisquam hic nulla
          quos dolorum ullam consequuntur nobis consectetur iste doloribus aliquid, distinctio quo
          itaque enim minima suscipit. Eligendi facere harum recusandae ad quis vero fugit
          voluptatibus pariatur eum placeat! Quod, aspernatur iste atque in accusantium vero omnis
          odit ipsum labore beatae, eius expedita architecto nam ullam qui. Inventore, quis sit!
          Provident sit, illo dolorem veritatis voluptates aliquam corrupti corporis. Vitae
          reprehenderit, aperiam quo maiores possimus dolorem voluptatum officia nemo non
          consequuntur eligendi rem, cum quis, deserunt sed quisquam autem molestias amet quibusdam
          impedit. Praesentium doloremque error laborum consequuntur blanditiis. Reiciendis
          assumenda cum dolore molestiae, reprehenderit sint commodi aut debitis laboriosam ducimus
          similique! Dolorem quasi hic, alias at eos quaerat eius ab voluptate in. Corrupti possimus
          dolores consequatur facere. Dignissimos!
        </p>
        <AnchorLink className={Styles.title} title="Using Middleware" link="using-middleware" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia architecto quia
          dolores quas quod aut, beatae officiis assumenda eligendi soluta necessitatibus molestiae?
          Porro, blanditiis. Perferendis veritatis reprehenderit ducimus quia. Quisquam hic nulla
          quos dolorum ullam consequuntur nobis consectetur iste doloribus aliquid, distinctio quo
          itaque enim minima suscipit. Eligendi facere harum recusandae ad quis vero fugit
          voluptatibus pariatur eum placeat! Quod, aspernatur iste atque in accusantium vero omnis
          odit ipsum labore beatae, eius expedita architecto nam ullam qui. Inventore, quis sit!
          Provident sit, illo dolorem veritatis voluptates aliquam corrupti corporis. Vitae
          reprehenderit, aperiam quo maiores possimus dolorem voluptatum officia nemo non
          consequuntur eligendi rem, cum quis, deserunt sed quisquam autem molestias amet quibusdam
          impedit. Praesentium doloremque error laborum consequuntur blanditiis. Reiciendis
          assumenda cum dolore molestiae, reprehenderit sint commodi aut debitis laboriosam ducimus
          similique! Dolorem quasi hic, alias at eos quaerat eius ab voluptate in. Corrupti possimus
          dolores consequatur facere. Dignissimos!
        </p>
        <AnchorLink
          className={Styles.title}
          title="Built-In Middlewares"
          link="built-in-middlewares"
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia architecto quia
          dolores quas quod aut, beatae officiis assumenda eligendi soluta necessitatibus molestiae?
          Porro, blanditiis. Perferendis veritatis reprehenderit ducimus quia. Quisquam hic nulla
          quos dolorum ullam consequuntur nobis consectetur iste doloribus aliquid, distinctio quo
          itaque enim minima suscipit. Eligendi facere harum recusandae ad quis vero fugit
          voluptatibus pariatur eum placeat! Quod, aspernatur iste atque in accusantium vero omnis
          odit ipsum labore beatae, eius expedita architecto nam ullam qui. Inventore, quis sit!
          Provident sit, illo dolorem veritatis voluptates aliquam corrupti corporis. Vitae
          reprehenderit, aperiam quo maiores possimus dolorem voluptatum officia nemo non
          consequuntur eligendi rem, cum quis, deserunt sed quisquam autem molestias amet quibusdam
          impedit. Praesentium doloremque error laborum consequuntur blanditiis. Reiciendis
          assumenda cum dolore molestiae, reprehenderit sint commodi aut debitis laboriosam ducimus
          similique! Dolorem quasi hic, alias at eos quaerat eius ab voluptate in. Corrupti possimus
          dolores consequatur facere. Dignissimos!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia architecto quia
          dolores quas quod aut, beatae officiis assumenda eligendi soluta necessitatibus molestiae?
          Porro, blanditiis. Perferendis veritatis reprehenderit ducimus quia. Quisquam hic nulla
          quos dolorum ullam consequuntur nobis consectetur iste doloribus aliquid, distinctio quo
          itaque enim minima suscipit. Eligendi facere harum recusandae ad quis vero fugit
          voluptatibus pariatur eum placeat! Quod, aspernatur iste atque in accusantium vero omnis
          odit ipsum labore beatae, eius expedita architecto nam ullam qui. Inventore, quis sit!
          Provident sit, illo dolorem veritatis voluptates aliquam corrupti corporis. Vitae
          reprehenderit, aperiam quo maiores possimus dolorem voluptatum officia nemo non
          consequuntur eligendi rem, cum quis, deserunt sed quisquam autem molestias amet quibusdam
          impedit. Praesentium doloremque error laborum consequuntur blanditiis. Reiciendis
          assumenda cum dolore molestiae, reprehenderit sint commodi aut debitis laboriosam ducimus
          similique! Dolorem quasi hic, alias at eos quaerat eius ab voluptate in. Corrupti possimus
          dolores consequatur facere. Dignissimos!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia architecto quia
          dolores quas quod aut, beatae officiis assumenda eligendi soluta necessitatibus molestiae?
          Porro, blanditiis. Perferendis veritatis reprehenderit ducimus quia. Quisquam hic nulla
          quos dolorum ullam consequuntur nobis consectetur iste doloribus aliquid, distinctio quo
          itaque enim minima suscipit. Eligendi facere harum recusandae ad quis vero fugit
          voluptatibus pariatur eum placeat! Quod, aspernatur iste atque in accusantium vero omnis
          odit ipsum labore beatae, eius expedita architecto nam ullam qui. Inventore, quis sit!
          Provident sit, illo dolorem veritatis voluptates aliquam corrupti corporis. Vitae
          reprehenderit, aperiam quo maiores possimus dolorem voluptatum officia nemo non
          consequuntur eligendi rem, cum quis, deserunt sed quisquam autem molestias amet quibusdam
          impedit. Praesentium doloremque error laborum consequuntur blanditiis. Reiciendis
          assumenda cum dolore molestiae, reprehenderit sint commodi aut debitis laboriosam ducimus
          similique! Dolorem quasi hic, alias at eos quaerat eius ab voluptate in. Corrupti possimus
          dolores consequatur facere. Dignissimos!
        </p>
      </FeaturePage>
    </>
  )
}

export default Middlewares
