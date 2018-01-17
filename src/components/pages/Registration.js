import React, { Component } from 'react';
import '../../App.css';
import {
  Form,
  StyledText,
  StyledTextArea,
  StyledRadio,
  StyledRadioGroup,
  StyledSelect,
  StyledCheckbox
} from 'react-form';
import ValidationService from '../../services/ValidationService';

const statusOptions = [
  {
    label: 'Single',
    value: 'single'
  },
  {
    label: 'In a Relationship',
    value: 'relationship'
  },
  {
    label: "Confused",
    value: 'confused'
  }
];

class Registration extends Component {
  
  constructor( props ) {
    super( props );
    this.state = {
      submittedValues: []
    };
  }

  errorValidator = ( values ) => {
    const validateFirstName = ( firstName ) => {
      return firstName && firstName.length < 2 ? 'Last name must be longer than 2 characters.' : null;
    };
    const validateLastName = ( lastName ) => {
      return lastName && lastName.length < 2 ? 'Last name must be longer than 2 characters.' : null;
    };
    const validateGender = ( gender ) => {
      return !gender ? 'Gender is required.' : null;
    };
    const validateBio = ( bio ) => {
      return bio && bio.replace(/s+/g, ' ').trim().split(' ').length < 5 ? 'Bio should be more than 5 characters.' : null;
    };

    const validateEmail = (email) => {
      if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(email)) {
        return null;
      }
      return 'Please enter valid email.';
    }
    const validateAuthorize = ( authorize ) => {
      return !authorize ? 'Please check authorize.' : null;
    };
    const validateStatus = ( status ) => {
      return !status ? 'Status is required.' : null;
    };
    return {
      firstName: validateFirstName( values.firstName ),
      lastName: validateLastName( values.lastName ),
      email: validateEmail(values.email),
      gender: validateGender( values.gender ),
      bio: validateBio( values.bio ),
      authorize: validateAuthorize( values.authorize ),
      status: validateStatus( values.status )
    };
  }
  
  successValidator = ( values, errors ) => {
    const validateFirstName = ( ) => {
      return !errors.firstName ? 'Nice name brah!' : null;
    };
    const validateLastName = ( ) => {
      return !errors.lastName ? 'Your last name is sick!' : null;
    };
    const validateGender = ( ) => {
      return !errors.gender ? 'Having a gender is tight.' : null;
    };

    const validateEmail = () => {
      return !errors.email ? 'dope email!' : null;
    }
    const validateBio = ( ) => {
      return !errors.bio ? 'Cool Bio!' : null;
    };
    const validateAuthorize = ( ) => {
      return !errors.authorize ? 'You are now authorized.' : null;
    };
    const validateStatus = ( ) => {
      return !errors.status ? 'Thanks for entering your status.' : null;
    };
    return {
      firstName: validateFirstName( values.firstName ),
      lastName: validateLastName( values.lastName ),
      email: validateEmail(values.email),
      gender: validateGender( values.gender ),
      bio: validateBio( values.bio ),
      authorize: validateAuthorize( values.authorize ),
      status: validateStatus( values.status )
    };
  }

  render() {
    return (
      <Form
      dontValidateOnMount={true}
      validateOnSubmit={true}
      validateError={this.errorValidator}
      validateSuccess={this.successValidator}
      onSubmit={submittedValues => this.setState( { submittedValues } )}>
      { formApi => (
        <form onSubmit={formApi.submitForm} id="form2">
          <label htmlFor="firstName">First name:</label>
          <StyledText field="firstName" id="firstName" />
          <label htmlFor="lastName">Last name:</label>
          <StyledText field="lastName" id="lastName" />
          <label htmlFor="lastName">Email:</label>
          <StyledText field="email" id="email" />
          <label>Choose Gender:</label>
          <StyledRadioGroup field="gender">
            { group => (
              <div>
                <StyledRadio group={group} value="male" id="male" label="Male" />
                <StyledRadio group={group} value="female" id="female" label="Female" />
              </div>
            )}
          </StyledRadioGroup>
          <label htmlFor="bio">Bio</label>
          <StyledTextArea field="bio" id="bio" />
          <StyledCheckbox field="authorize" id="authorize" label="Authorize" />
          <label htmlFor="status" className="d-block">Relationship status</label>
          <StyledSelect field="status" id="status" options={statusOptions} />
          <button type="submit" >Submit</button>
        </form>
      )}
    </Form>
    );
  }
}

export default Registration;
