import React from 'react';
import { connect } from 'react-redux';
import {getContact} from '../../redux/contact-reducer'
import Contacts from './Contacts';

class ContactsContainer extends React.Component {

  componentDidMount() {
    this.props.getContact()
  }


  render () {
  return (
  <>
    <Contacts contact={this.props.contact}/>
  </>
  )
}
}

let mapStateToProps = (state) => {
  return {
    contact:state.contactPage.contact
}
}
export default connect (mapStateToProps,{getContact})(ContactsContainer);