import FeaturePage from '../../../components/FeaturePage'
import AnchorLink from '../../../components/AnchorLink'
import HighlightedCode from '../../../components/HilightedCode'
import Styles from './style.module.css'

function Firebase() {
  const codeString = `const functions = require('firebase-functions')
const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccount.json')
  
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const leopardo = require('leopardo')
const app = leopardo()
app.use(leopardo.cors())

// database
const db = admin.firestore()

// create
app.post('/api/create', (req, res) => {
  ;(async () => {
    try {
      await db.collection('userDetails').doc('/{Date.now()}/').create({
        id: Date.now(),
        name: req.body.name,
        mobile: req.body.mobile,
        address: req.body.address
      })
      return res.status(200).send({ status: 'Success', msg: 'Data Saved' })
    } catch (err) {
      console.log(err)
      return res.status(500).send({ status: 'Failed', msg: err })
    }
  })()
})

exports.app = functions.https.onRequest(app)
`
  return (
    <>
      <FeaturePage>
        <h1 className={Styles.title}>Firebase</h1>
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
        <AnchorLink className={Styles.title} title="installation" link="installation" />
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
        <AnchorLink className={Styles.title} title="Commands" link="commands" />
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
        <AnchorLink className={Styles.title} title="Usage" link="usage" />
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

export default Firebase
