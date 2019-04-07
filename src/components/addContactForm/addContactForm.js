import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import countryList from 'country-list'
import validator from 'email-validator'
import './addContactForm.css'

class addContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '', 
      lastName: '', 
      email: '', 
      country: '',
      redirect: false,
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
    this.props.addContact(this.state)
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
      <form onSubmit={this.handleSubmit} >
        <label>
          First Name:
          <input 
            className={errors.firstName ? "error" : ""} 
            type="text" 
            name='firstName' 
            value={this.state.firstName} 
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last Name:
          <input 
            className={errors.lastName ? "error" : ""} 
            type="text" name='lastName' 
            value={this.state.lastName} 
            onChange={this.handleChange} 
          />
        </label>
        <label>
          Email:
          <input
            className={errors.email ? "error" : ""} 
            type="email" name='email' 
            value={this.state.email} 
            onChange={this.handleChange}
          />
        </label>
        <label>
          Country:
          <select onChange={this.onDropdownSelected}>
            {this.createSelectItems()}
          </select>
        </label>
        <input className='submit-button' disabled={isDisabled} type="submit" value="Submit" />
      </form>
    )
  }
}

export default addContactForm