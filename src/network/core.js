import res from './index.js'
import config from './config'
var wsx={
    login(params={}){
        return res({
            url:config.dl,
            method:'post',
            params
        })
    }
}
export default wsx;