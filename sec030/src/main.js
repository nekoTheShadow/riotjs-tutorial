import '@riotjs/hot-reload'
import {component} from 'riot'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-riot'
import App from './app.riot'

component(App)(document.getElementById('app'), {
  title: 'CMS'
})