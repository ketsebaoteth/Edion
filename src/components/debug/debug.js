import { state } from "../state/state"

export function debuglog(type, message){
    if(state.value.debugMode){
        console.warn("This is being printed because debug mode is on disable this in production")
        if(type=="error"){
            console.error(message)
        }else if(type=="warn"){
            console.warn(message)
        }else if(type=="log"){
            console.log(message)
        }
    }
}