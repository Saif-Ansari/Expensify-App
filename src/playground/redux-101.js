import {createStore} from 'redux';
//Action generators - functions that return an object

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})
const resetCount = () =>({
    type: 'RESET'
})
const setCount = ({count}) =>({
    type: 'SET',
    count

})

//Reducers
//1.Reducers are pure functions
//2.Never change state or action directly 

const countreducer = (state = {count: 0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {
                count:state.count + action.incrementBy
            }
         case 'DECREMENT':
             return {
                 count:state.count - action.decrementBy
             }   
         case 'SET':
             return{
                 count:action.count
             }    
         case 'RESET':
             return {
                 count:state.count =0
             }    
         default:
             return state;   
    }
   
 }

const store = createStore(countreducer);

//store.subscribe() function is called every single time the store changes
// store.subscribe(()=>{
//     console.log(store.getState());
// })
//store.subscribe() returns a method which can be used as unsubscribe to stop

const unsubcribe = store.subscribe(()=>{
    console.log(store.getState());
})
// store.dispatch( {
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch( incrementCount({incrementBy: 5}));
store.dispatch( incrementCount());
// unsubcribe();
store.dispatch(resetCount());
store.dispatch( decrementCount());

store.dispatch( decrementCount({decrementBy: 10}));

 store.dispatch(setCount({count:145}))