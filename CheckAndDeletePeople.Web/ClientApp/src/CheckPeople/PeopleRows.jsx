import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function PeopleRows(props){
    const {people,startEditing}=props;
    return (
    people.map((p, i) =>
        <tr key={i}>
            <td>
                <div className="d-flex justify-content-center align-items-center">
                    <input type="checkbox" className="form-check-input mt-2" style={{ transform: 'scale(1.5)' }} />
                </div>
            </td>
            <td>{p.firstName}</td>
            <td>{p.lastName}</td>
            <td>{p.age}</td>
            <td>
                <button className="btn btn-warning" onClick={()=>startEditing(p)}>Edit</button>
                <button className="btn btn-danger" style={{ marginLeft: '10px' }}>Delete</button>
            </td>
        </tr>)
    )
}
// class PeopleRows extends React.Component {
// showEditOptions = (person)=>{
//     this.props.startEditing(person)
// }
//     render() {
//         //const { startEditing } = this.props;
//         return (<>
//             {this.props.people.map((p, i) =>
//                 <tr key={i}>
//                     <td>
//                         <div className="d-flex justify-content-center align-items-center">
//                             <input type="checkbox" className="form-check-input mt-2" style={{ transform: 'scale(1.5)' }} />
//                         </div>
//                     </td>
//                     <td>{p.firstName}</td>
//                     <td>{p.lastName}</td>
//                     <td>{p.age}</td>
//                     <td>
//                         <button className="btn btn-warning" onClick={()=>this.showEditOptions(p)}>Edit</button>
//                         <button className="btn btn-danger" style={{ marginLeft: '10px' }}>Delete</button>
//                     </td>
//                 </tr>)}
//         </>)
//     }

export default PeopleRows;