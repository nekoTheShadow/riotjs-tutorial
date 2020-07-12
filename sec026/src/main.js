import '@riotjs/hot-reload'
import App from './app.riot'
import {component} from 'riot'
import 'ress'

component(App)(document.getElementById('app'), {
  title: 'Hello Riot.js'
})