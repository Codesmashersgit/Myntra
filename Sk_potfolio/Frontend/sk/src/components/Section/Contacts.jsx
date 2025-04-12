import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  text-align: center;
  margin-top:60px;
  @media(max-width: 768px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  
`;

const ContactDetails = styled.div`
  padding: 10px;
`;

const Title = styled.div`
  color: white;
  font-size: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  outline:none;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  resize: none;
  outline:none;
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  &:hover {
    background-color: #138496;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  padding:40px;
`;

function Contacts() {
  
  const [state, handleSubmit] = useForm("xgvojjlk");


  if (state.succeeded) {
    return <SuccessMessage>Thanks for your submission!</SuccessMessage>;
  }

  return (
    <Container id="Contacts">
      <ContactContainer>
        <Title>Contact</Title>
        <form onSubmit={handleSubmit}>
        
          <ContactDetails>
            <label htmlFor="firstName">First Name:</label>
            <InputField
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name.."
              required
            />
            <ValidationError 
              prefix="First Name" 
              field="firstName"
              errors={state.errors}
            />
          </ContactDetails>

          
          <ContactDetails>
            <label htmlFor="lastName">Last Name:</label>
            <InputField
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name.."
              required
            />
            <ValidationError 
              prefix="Last Name" 
              field="lastName"
              errors={state.errors}
            />
          </ContactDetails>

          
          <ContactDetails>
            <label htmlFor="email">Email:</label>
            <InputField
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email.."
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </ContactDetails>


          <ContactDetails>
            <label htmlFor="message">Message:</label>
            <TextAreaField
              id="message"
              name="message"
              placeholder="Enter your message.."
              rows="4"
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </ContactDetails>

          
          <ContactDetails>
            <SubmitButton type="submit" disabled={state.submitting}>
              Submit
            </SubmitButton>
          </ContactDetails>
        </form>
      </ContactContainer>
    </Container>
  );
}

export default Contacts;
