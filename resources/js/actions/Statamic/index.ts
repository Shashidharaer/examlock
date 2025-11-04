import Http from './Http'
import Auth from './Auth'
import StaticCaching from './StaticCaching'

const Statamic = {
    Http: Object.assign(Http, Http),
    Auth: Object.assign(Auth, Auth),
    StaticCaching: Object.assign(StaticCaching, StaticCaching),
}

export default Statamic