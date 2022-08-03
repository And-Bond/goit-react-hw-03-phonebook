import React, { Component } from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';

class Contacts extends Component {
  shouldComponentUpdate(prevProps, prevState){
    if(prevProps !== this.props || prevState !== this.state){
      return true
    }
    return false
  }
  onDeleteClick =(e) => {
    this.props.onDeleteClick(e, e.target.name)
  }
  render() {
    const { contacts, filterValue} = this.props;
    
    return (
      <>
        {contacts.map(contact => {
          if (filterValue) {
            return null;
          }
          return (
            <li key={contact.name + contact.number}>
              {contact.name}: {contact.number}
              <ButtonStyled onClick={this.onDeleteClick} type='click' name={contact.name}>Delete</ButtonStyled>
            </li>
          );
        })}
      </>
    );
  }
}

const ButtonStyled = styled.button`
  width: 100px;
  border: 1px solid gray;
  border-radius: 15%;
  height: 35px;
  margin-left: 10px;
  color: black;
  font-weight: 800;
  background-color: #fff;
`
Contacts.propTypes = {
  contacts: proptypes.object,
  filterValue: proptypes.string
}

export default Contacts;
