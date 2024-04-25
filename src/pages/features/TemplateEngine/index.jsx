import FeaturePage from '../../../components/FeaturePage'
import AnchorLink from '../../../components/AnchorLink'
import HighlightedCode from '../../../components/HilightedCode'
import Styles from './style.module.css'

function TemplateEngine() {
  const codeString = `const leopardo = require('leopardo')
const app = leopardo()
const port = 3000
  
app.get('/index', (req, res) => {
  res.render('index', { users })
})
  
app.listen(port, () => {
  console.log(\`Server listening on http://localhost:\${port}\`)
})
`
  return (
    <>
      <FeaturePage>
        <h1 className={Styles.title}>Template Engine</h1>
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
        <AnchorLink className={Styles.title} title="body" link="body" />
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
        <AnchorLink className={Styles.title} title="Views Folder" link="views-folder" />
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
        <AnchorLink className={Styles.title} title="Helper" link="helper" />
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

export default TemplateEngine
