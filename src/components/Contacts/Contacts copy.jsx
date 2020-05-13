import React from 'react';
import { connect } from 'react-redux';
import {getContact} from '../../redux/contact-reducer'
import Contacts from './Contacts';
import {unfollow} from '../../redux/contact-reducer'

class ContactsContainer extends React.Component {

  componentDidMount() {
    this.props.getContact()
  }

  render () {
  return (
  <>
    <Contacts contact={this.props.contact} unfollow={this.props.unfollow} users={this.props.users} renderPage={this.props.renderPage}/>
  </>
  )
}
}

let mapStateToProps = (state) => {
  return {
    contact:state.contactPage.contact,
    users:state.userPage.users,
}
}
export default connect (mapStateToProps,{getContact, unfollow})(ContactsContainer);