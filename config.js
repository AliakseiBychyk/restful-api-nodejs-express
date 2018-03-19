import { testuserAddress } from './assets/mongodb.config'
const env = process.env

export let nodeEnv = env.NODE_ENV || 'development'

export default {
  mongodbUri: testuserAddress || 'mongodb://localhost/RESTdb',
  port: env.PORT || 8000,
  host: env.HOST || 'localhost',
  get serverUrl() {
    return `http://${this.host}:${this.port}`
  }
}