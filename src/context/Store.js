import React,{Component} from 'react';
export const GeneralContext = React.createContext('');
export class Store extends Component{
    state={
        wakeup:false,
        shower:false,
        earlystudy:false,
        work:false,
        wrapup:false
    }
    handleInputChange=(event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      handleSubmit=(event)=>{
        console.log({state:this.state})
        event.preventDefault();
      }
    render(){
        return(
            <GeneralContext.Provider value={{...this.state, handleInputChange:this.handleInputChange, handleSubmit:this.handleSubmit}}>
                {this.props.children}
            </GeneralContext.Provider>
        )
    }
}
