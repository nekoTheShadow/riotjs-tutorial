import '@riotjs/hot-reload'
import {component, register} from 'riot'
import {Router, Route} from '@riotjs/route'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-riot'
import App from './app.riot'

register('router', Router)
register('route', Route)

component(App)(document.getElementById('app'))