import React from "react";
import PersonForm from "./PersonForm";
import PeopleRows from "./PeopleRows";


class CheckForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        age: '',
        people: [],
        edit: false
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
        const copy = [...this.state.people];
        copy.push(person);
        this.setState({ people: copy, firstName: '', lastName: '', age: '' })
    }
    startEditing = (person) => {
        this.setState({edit:true,firstName:person.firstName,lastName:person.lastName,age:person.age})
    }

    render() {
        return (<>
            <PersonForm
                onFirstNameChange={this.onFirstNameChange}
                onLastNameChange={this.onLastNameChange}
                onAgeChange={this.onAgeChange}
                onAddClick={this.onAddClick}
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
                                    <button className="btn btn-danger w-100">Delete All</button>
                                    <button className="btn btn-outline-danger w-100">Check All</button>
                                    <button className="btn btn-outline-danger w-100">Uncheck All</button>
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
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        </>)
    }
}
export default CheckForm;
