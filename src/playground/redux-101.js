import { createStore } from "redux";

//action generators -funciones que regresan action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
//{} = {} el primero es la destrucción del objeto payload que el argumento que 
//se pasa por el action generator
//el segundo es por default un objeto vacío
//y todavía dentro del primero donde está la deconstrucción al valor 
//de incremenBy o decrementBy se le da un valor por default de 1
const decrementCount = ( { decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET',
});

const setCount = ({count = 1} = {}) => ({
    type: 'SET',
    count
});

//reducer es lo que va a definir que hacer con cada accion
//son Pure functions - solo depende de los parametros que recibe y no modifica nada fuera de su scope
//ni interactua con nada fuera de su scope
//Nunca cambia el state or action


const countReducer = ( state = { count : 0 }, action ) => {
    // console.log(action);
    // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
    switch (action.type) {
        case "INCREMENT":
            return {
                //count: incrementBy ? state.count + incrementBy : state.count + 1
                count: state.count + action.incrementBy 
            };
        
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        
        case "RESET":
            return {
                count: 0
            }; 
        case "SET":
            return {
                count: action.count
            };        

        default:
            return state;
            
    }  
    
};

//createStores tiene como único parametro una función
//en la función coomo no hay un state antes, se setea uno por default a 0
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


//increment count
//esto es una acción
// store.dispatch({
//     type:"INCREMENT",
//     incrementBy: 5
// });

//unsubscribe();
//actions pero manuales
//type es de a fuerza no puede ser undefined 
// store.dispatch({
//     type:"INCREMENT"
// });


store.dispatch(incrementCount({ incrementBy:5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

// store.dispatch({
//     type:"DECREMENT",
//     decrementBy: 10
// });

store.dispatch(decrementCount( { decrementBy: 10 } ));

store.dispatch( decrementCount() );


// store.dispatch({
//     type:"DECREMENT"
// });

store.dispatch(setCount( {count: 1024} ));



