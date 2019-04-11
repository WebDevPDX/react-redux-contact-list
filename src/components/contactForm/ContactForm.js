import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import countryList from 'country-list'
import validator from 'email-validator'

class addContactForm extends Component {
  constructor(props) {
    super(props)
    const isEdit = props.match.path === '/user/edit/:id'
    this.state = {
      _id: isEdit && props.contact ? props.contact._id : '',
      firstName: isEdit && props.contact ? props.contact.firstName : '',
      lastName: isEdit && props.contact ? props.contact.lastName: '',
      email: isEdit && props.contact ? props.contact.email: '',
      country: isEdit && props.contact ? props.contact.country: '',
      isEdit: isEdit,
      redirect: isEdit && !props.contact,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onDropdownSelected = this.onDropdownSelected.bind(this)
  }

  validateInputs(firstName, lastName, email) {
    return {
      firstName: firstName.length === 0,
      lastName: lastName.length === 0,
      email: !validator.validate(email)
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onDropdownSelected(event) {
    this.setState({country: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()
    this.state.isEdit ? this.props.editContact(this.state) : this.props.addContact(this.state)
    this.setState({redirect: true})
  }

  createSelectItems() {
    const countryNameList = countryList.getNameList()
    let selectItems = []
    for (let key in countryNameList) {          
      selectItems.push(<option key={countryNameList[key]} value={countryNameList[key]}>{key}</option>);   
    }
    return selectItems;
  }

  render() {
    const errors = this.validateInputs(this.state.firstName, this.state.lastName, this.state.email)
    const isDisabled = Object.keys(errors).some(x => errors[x])
    if (this.state.redirect === true) {
      return <Redirect to='/' />
    }
    return (
      <div className='column'>
        <form onSubmit={this.handleSubmit}>
          <div className='field'>
            <label className='label'>First Name:</label>
            <div className='control'>
              <input
                className={`input ${errors.firstName ? 'is-danger' : 'is-success'}`}
                type="text" 
                name='firstName'
                placeholder='First Name' 
                value={this.state.firstName} 
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Last Name:</label>
            <div className='control'>
              <input
                className={`input ${errors.lastName ? 'is-danger' : 'is-success'}`}
                type="text" 
                name='lastName'
                placeholder='Last Name'  
                value={this.state.lastName} 
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Email:</label>
            <div className='control'>
              <input
                className={`input ${errors.email ? 'is-danger' : 'is-success'}`}
                type="text" 
                name='email' 
                placeholder='Email' 
                value={this.state.email} 
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Country:</label>
            <div className='control'>
              <div className='select is-fullwidth'>
                <select onChange={this.onDropdownSelected} value={this.state.country} className='is-capitalized'>
                  {this.createSelectItems()}
                </select>
              </div>
            </div>
          </div>
          <input 
            className={`button is-outlined is-fullwidth ${isDisabled ? 'is-danger' : 'is-success'}`} 
            disabled={isDisabled} 
            type="submit" 
            value="Submit" 
          />
        </form>
      </div>
    )
  }
}

export default addContactForm