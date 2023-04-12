import {createReducer} from "@reduxjs/toolkit"

const initialState={
    c:1000      //initial state for which c is asigned as 0
}

export const customReducer=createReducer(initialState,{//creating a custom reducers using createReducer and it is easier than the previous redux 
                                                    //here increment decrement and so.... are the reducers which are passed to store
                                                    //and by Configuring the redux store we can add many reducers and by accesssin them using key object
    increment:(state,action)=>{
        state.c+=1
    },
    incrementByvalue:(state,action)=>{
        state.c+=action.payload
    },
    decrement:(state,action)=>{
        state.c-=1
    }
});