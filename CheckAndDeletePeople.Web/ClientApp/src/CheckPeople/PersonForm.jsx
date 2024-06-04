import React from 'react'


function PersonForm({ onFirstNameChange, onLastNameChange, onAgeChange, onAddClick, edit, firstName, lastName, age }) {
    
    const editIsTrue = ()=>{
        if(!edit){
            return (<button type='button' className='btn btn-primary w-100' onClick={onAddClick}>Add</button>)
        }
        return(<><button type='button' className='btn btn-warning w-100' onClick={onAddClick}>Update</button>
        <button type='button' className='btn btn-dark w-100 mt-2' onClick={onAddClick}>Cancel</button></>)
    }
    
    return (
        <div className="container" style={{ marginTop: '60px' }}>
            <div className='row' style={{ marginBottom: '20px' }}>
                <div className='col-md-3'>
                    <input type='text' name='firstName' placeholder='First Name' className='form-control' onChange={onFirstNameChange} value={firstName}></input>
                </div>
                <div className='col-md-3'>
                    <input type='text' name='lastName' placeholder='Last Name' className='form-control' onChange={onLastNameChange} value={lastName}></input>
                </div>
                <div className='col-md-3'>
                    <input type='text' name='age' placeholder='Age' className='form-control' onChange={onAgeChange} value={age}></input>
                </div>
                <div className='col-md-3'>
                    {editIsTrue()}
                </div>
            </div>
        </div>
    )
}

export default PersonForm;
