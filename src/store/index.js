import { mainStore, reBuild } from "./mainStore";

let store = mainStore({
    state: {
        dark: 0,
        name: 'arkarMannAung',
    },
    actions: {
        changeName: (state,val)=>{
            state.name=val;
            return reBuild(state);
        },
        setDark: (state,dark)=>{
            state.dark=dark;
            let html = document.getElementById('html');
            if (dark == 1) {
                html.setAttribute('class', 'dark');
            } else {
                html.setAttribute('class', '');
            }
            return reBuild(state);
        }
    },
})

export function reducer(state=store.state,action){
    if(action.value!=null) {
        return store.actions[action.type](state,action.value);
    }
    return state;
}