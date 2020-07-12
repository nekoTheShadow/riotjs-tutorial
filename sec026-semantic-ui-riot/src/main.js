import '@riotjs/hot-reload'
import App from './app.riot'
import 'semantic-ui-riot'
import {component} from 'riot'

component(App)(document.getElementById('app'), {
  title: 'Semantic UI Riot Demo'
})