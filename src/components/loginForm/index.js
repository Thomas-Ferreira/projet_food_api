import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const LoginForm = () => {
  return (
    <FormContainer>
      <StyledForm>
        <StyledInput name="username" type="text"></StyledInput>
        <StyledInput type="password"></StyledInput>
        <StyledInput type="submit"></StyledInput>
      </StyledForm>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  margin-top: 10%;
  padding: 12px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  height: 30px;
  margin-bottom: 12px;
  border-radius: 4px;
  outline: none;
`;

LoginForm.propTypes = {};

export default LoginForm;
