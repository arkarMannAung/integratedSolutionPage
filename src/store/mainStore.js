// Mini Function For Redux
// Create By Arkar Mann Aung with Ko Kyaw Gyi
// Jun 30 17:00

export function mainStore({state,actions}){
    let cache = localStorage.getItem('integratedSolution');
    if(cache){
        let stateFromCache = JSON.parse(cache)
        // initialized for dark
        let html = document.getElementById('html');
        if (stateFromCache.dark == 1) {
            html.setAttribute('class', 'dark');
        } else {
            html.setAttribute('class', '');
        }
        // initialized for dark
        return {state:reBuild(stateFromCache),actions}
    }else{
        localStorage.setItem('integratedSolution',JSON.stringify(state));
    }
    // console.log('hello world');
    return {state,actions}
}
export function reBuild(state){
    let newState={};
    for(let key in state) newState[key]=state[key];
    localStorage.setItem('integratedSolution',JSON.stringify(newState));
    return newState;
};

