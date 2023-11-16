// lets create entry for the kanerika from dlf with async and await conditiions

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

// just to get the resolved values ....and we have any rejection on any promises then 
//...we have to use the try catch blocks 

  async function onboarding() {
    try {
        const idcard = await  onboard();
        console.log('this is your ', idcard)
        const auth = await authboard(idcard);
        console.log('this is authenticated ', auth);
        const Dlfentry = await Dlf(auth);
        console.log('this is authenticated  dlf entry', Dlfentry);
        const kanentry = await kan(Dlfentry);
        console.log('congrats your zoho timer has started.. ');
    } catch(err) {
        console.log(' ohh no ...your oboarding has stopped. the reason is :-',err);
    }
  
}
onboarding();