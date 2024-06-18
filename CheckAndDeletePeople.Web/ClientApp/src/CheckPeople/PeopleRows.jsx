import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function PeopleRows(props){
    const {people,startEditing,deletePerson,checkedPeopleIds,onChangeCheck}=props;
    
    const checked=(id)=>{
        return Array.isArray(checkedPeopleIds) && checkedPeopleIds.includes(id);
    }
     return (
    people.map((p, i) =>
        <tr key={i}>
            <td>
                <div className="d-flex justify-content-center align-items-center">
                    <input type="checkbox" className="form-check-input mt-2" style={{ transform: 'scale(1.5)' }} value={p.id} checked={checked(p.id)} onChange={()=>onChangeCheck(p.id)} />
                </div>
            </td>
            <td>{p.firstName}</td>
            <td>{p.lastName}</td>
            <td>{p.age}</td>
            <td>
                <button className="btn btn-warning" onClick={()=>startEditing(p)}>Edit</button>
                <button className="btn btn-danger" style={{ marginLeft: '10px' }} onClick={()=>deletePerson(p.id)}>Delete</button>
            </td>
        </tr>)
    )
}

export default PeopleRows;