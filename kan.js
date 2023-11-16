// lets create entry for the kanerika from dlf

function onboard() {
    return new Promise(function(resolve,reject) {
        setTimeout(()=> {
            const idcard = "picture and name"
           
            resolve(idcard)
        },2000)
    })
}

function authboard(idcard) {
    return new Promise(function(resolve,reject) {
        setTimeout(()=> {
            const auth = idcard + " authenthication"
           
            resolve(auth)
        },2000)
    })
}
function Dlf(auth) {
    return new Promise(function(resolve,reject) {
        setTimeout(()=> {
            const Dlfentry = auth + " authenthication of dlf"
            // resolve(Dlfentry)
            reject(' invalid credentials');
        },2000)
    })
}
function kan(Dlfentry) {
    return new Promise(function(resolve,reject) {
        setTimeout(()=> {
            const kanentry = Dlfentry + " zoho timer"
            
            resolve(kanentry)
        },2000)
    })
}

onboard().then((idcard)=> {
    console.log('this is your ', idcard)
   return authboard(idcard)
}).then((auth)=> {
    console.log('this is authenticated ', auth)
    return Dlf(auth)
}).then((Dlfentry)=> {
    console.log('this is authenticated  dlf entry', Dlfentry)
    return kan(Dlfentry) 
}).then((kanentry)=> {
    console.log('congrats your zoho timer has started.. ')
}).catch((Error)=> {
    console.log('your onboarding process has not done yet ...!!',Error)
}).finally((give)=> {
    console.log('please give your feedback in onboarding process');
})