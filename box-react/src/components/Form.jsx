import React, { useState } from 'react'

const Form = (props) => {
    const { clrArray, setClrArray } = props;
    const [state, setState] = useState({
        color:"",
        height:"",
        width:""
    })
    
    const changeHandler = (e) => {
        setState({...state,[e.target.name]: e.target.value})
    }

    const colorValidation = (e) => {
        let isValid = true
        if ( state.color < 2 || state.height == 0 || state.width == 0 || !state.height.includes("px") || !state.width.includes("px") ) {
            isValid = false
            console.log("There in an error")
            return isValid
        }else{
            console.log("No Error")
            return isValid
        }
    }
    const createColor = (e) => {
        e.preventDefault();

        
        let isValid = colorValidation()
        if(isValid){
            console.log(`State ${JSON.stringify(state)}`)
            setClrArray([...clrArray, state])
            setState({
                color:"",
                height:"",
                width:""
            })
        }
    }
  return (
    <div className="container">
        <form onSubmit={createColor}>
            <h1>Type the color you want to see!</h1>
            {
                state.color && state.color.length < 2 ? <p className='text-danger mt-3'>Color must be at least 2 characters long.</p>: ""
            }
            <div className='form-floating mt-3'>
                <input type="text"  name="color" className="form-control" id="floatingInput" placeholder="Color" value={state.color} onChange={changeHandler}/>
                <label htmlFor="floatingInput">Color:</label>
            </div>
            {
                state.height && state.height == 0 ? <p className='text-danger mt-3'>Height must be greater than 0px.</p>: ""
            }
            {
                !state.height.includes("px") ? <p className='text-danger mt-3'>Height must include "px".</p>: ""
            }
            <div className='form-floating mt-3'>
                <input type="text" name="height" className="form-control" id="floatingInput" placeholder="Height" value={state.height} onChange={changeHandler}/>
                <label htmlFor="floatingInput">Height:</label>
            </div>
            {
                state.width && state.width == 0 && !state.width.includes("px") ? <p className='text-danger mt-3'>Width must be greater than 0px.</p>: ""
            }
            {
                !state.width.includes("px") ? <p className='text-danger mt-3'>Width must include "px".</p>: ""
            }
            <div className='form-floating mt-3'>
                <input type="text"  name="width" className="form-control" id="floatingInput" placeholder="Width" value={state.width} onChange={changeHandler}/>
                <label htmlFor="floatingInput">Width:</label>
            </div>
            <button type="submit" className="btn btn-warning mt-3">Submit</button>
        </form>
    </div>
  )
}

export default Form