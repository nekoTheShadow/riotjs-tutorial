import {createStore, createQuery} from '@datorama/akita'
import {install} from 'riot'
import service from './service.js'

const store = createStore({
  isLoggedIn: false
}, {
  name: 'session'
})
const query = createQuery(store)
const serviceInstance = service(store)

install(componentAPI => {
  componentAPI.query = query;
  componentAPI.service = serviceInstance;
  return componentAPI
})