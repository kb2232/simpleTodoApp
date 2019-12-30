import React,{useContext} from 'react';
import { GeneralContext } from '../context/Store';

const Todo = ()=>{
    const info = useContext(GeneralContext);
    return(
        <form onSubmit={(e)=>info.handleSubmit(e)} className="col-E-C">
            <p style={{fontSize:'40px'}}><b><u>Todo App</u></b></p>
            <label>Check console your checked values!!!</label>
            <p>
               <label>
                    Wake Up 4am: <input
                            name="wakeup"
                            type="checkbox"
                            checked={info.wakeup}
                            onChange={(e)=>info.handleInputChange(e)} 
                        />
               </label>
            </p>
            <p>
               <label>
                    Shower: <input
                            name="shower"
                            type="checkbox"
                            checked={info.shower}
                            onChange={(e)=>info.handleInputChange(e)} 
                        />
               </label>
            </p>
            <p>
               <label>
                   Early Study: <input
                            name="earlystudy"
                            type="checkbox"
                            checked={info.earlystudy}
                            onChange={(e)=>info.handleInputChange(e)} 
                        />
               </label>
            </p>
            <p>
               <label>
                    Go Work: <input
                            name="work"
                            type="checkbox"
                            checked={info.work}
                            onChange={(e)=>info.handleInputChange(e)} 
                        />
               </label>
            </p>
            <p>
               <label>
                    night wrap up: <input
                            name="wrapup"
                            type="checkbox"
                            checked={info.wrapup}
                            onChange={(e)=>info.handleInputChange(e)} 
                        />
               </label>
            </p>
            <input type="submit" className="button" value="Submit" />
        </form>
    )
}

export default Todo;