import React from "react";
import PersonForm from "./PersonForm";
import PeopleRows from "./PeopleRows";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

class CheckForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        age: '',
        id: '',
        people: [],
        edit: false,
        currentPerson: '',
        checkedPeopleIds: []
    }
    getAllPeople = () => {
        axios.get('/api/people/getall').then(res => {
            this.setState({ people: res.data });
        });
    }
    componentDidMount = () => {
        this.getAllPeople();
    }

    onFirstNameChange = (e) => {
        this.setState({ firstName: e.target.value })
    }
    onLastNameChange = (e) => {
        this.setState({ lastName: e.target.value })
    }
    onAgeChange = (e) => {
        this.setState({ age: e.target.value })
    }
    onAddClick = () => {
        const person = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        }
        axios.post('/api/people/addperson', person).then(() => {
            this.getAllPeople();
            this.setState({ firstName: '', lastName: '', age: '', id: '' })
        });
        // const copy = [...this.state.people];
        // copy.push(person);
    }
    startEditing = (person) => {
        this.getAllPeople();
        this.setState({ edit: true, firstName: person.firstName, lastName: person.lastName, age: person.age, id: person.id, currentPerson: person })
    }
    deletePerson = (id) => {
        const person = this.state.people.find(p => p.id == id);
        axios.post('/api/people/deleteperson', person).then(() => {
            this.getAllPeople();
        })

    }
    onCancelClick = () => {
        this.setState({ edit: false, firstName: '', lastName: '', age: '' })
    }
    onUpdateClick = () => {
        const {currentPerson} = this.state;
        const person = {
            id: currentPerson.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        }
        axios.post('/api/people/updateperson', person).then(() => {
            this.getAllPeople();
        })
        this.setState({ firstName: '', lastName: '', age: '', currentPerson: '', edit: false })
    }
    onChangeCheck = (id) => {
        const copy = [...this.state.checkedPeopleIds];
        let filteredCopy;
        if (copy.length && copy.includes(id)) {
            filteredCopy = copy.filter(c => c !== id);
        }
        else {
            copy.push(id);
            filteredCopy = copy;
        }
        this.setState({ checkedPeopleIds: filteredCopy });
    }
    onCheckAll = () => {
        const allIds = this.state.people.map(p => p.id);
        this.setState({ checkedPeopleIds: allIds })
    }
    onUncheckAll = () => {
        this.setState({ checkedPeopleIds: '' })
    }
    onDeleteAll = () => {
        const{checkedPeopleIds}=this.state;
        axios.post('/api/people/deleteselected',{ids:[...checkedPeopleIds]}).then(()=>{
            this.getAllPeople();
        })
    }

    render() {
        return (<>
            <PersonForm
                onFirstNameChange={this.onFirstNameChange}
                onLastNameChange={this.onLastNameChange}
                onAgeChange={this.onAgeChange}
                onAddClick={this.onAddClick}
                onUpdateClick={this.onUpdateClick}
                onCancelClick={this.onCancelClick}
                edit={this.state.edit}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                age={this.state.age}
            />
            <div className="container" style={{ marginTop: '60px' }}>
                <div className='row' style={{ marginBottom: '20px' }}>
                    <table className="table table-hover table-border table-striped">
                        <thead>
                            <tr>
                                <th style={{ width: '15%' }}>
                                    <button className="btn btn-danger w-100" onClick={this.onDeleteAll}>Delete All</button>
                                    <button className="btn btn-outline-danger w-100" onClick={this.onCheckAll}>Check All</button>
                                    <button className="btn btn-outline-danger w-100" onClick={this.onUncheckAll}>Uncheck All</button>
                                </th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Edit / Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <PeopleRows
                                people={this.state.people}
                                startEditing={this.startEditing}
                                deletePerson={this.deletePerson}
                                checkedPeopleIds={this.state.checkedPeopleIds}
                                onChangeCheck={this.onChangeCheck}
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        </>)
    }
}
export default CheckForm;
