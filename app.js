import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import config from './config'
// import { testuserAddress } from './assets/mongodb.config'
import routes from './src/routes/appRoutes'

const app = express();
const PORT = config.port;

mongoose.Promise = global.Promise
mongoose.connect(config.mongodbUri, (err) => {
  if (err) return console.log('There was a db connection error')
  console.log('Successfully connected to MongoDB Atlas')
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.set('view engine', 'ejs')
// app.use(express.static('public'))

routes(app);

app.get('/', (req, res) =>
  // res.render('index', {
  //   content: `Node and express server is running on port ${PORT}`
  // })  
  res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your server is running on port ${PORT}`)
);