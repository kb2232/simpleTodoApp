import React from 'react';
import { Store } from '../context/Store';
import Todo from './Todo'

const App = ()=>{
    return(
        <Store>
            <div className="container">
               <Todo />
            </div>
        </Store>
    )
}

export default App;