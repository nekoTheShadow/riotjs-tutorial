import '@riotjs/hot-reload'
import App from './app.riot'
import {component} from 'riot'

component(App)(document.getElementById('app'), {
  title: 'Riot.js with Animore'
})