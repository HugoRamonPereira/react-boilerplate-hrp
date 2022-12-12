import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';

export const FormBody = styled.form`
  font-family: PlayRegular;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  transform: translateY(25%);
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled(TextField)`
  && {
    font-family: PlayRegular;
    margin-botton: .5rem;
  }
`;

export const SubmitBtn = styled(Button)`
  && {
    background-color: #61DBFB;
    font-family: PlayRegular;
    font-size: 1.1rem;
    color: black;
    padding: 1rem;

    &:hover {
      background-color: #48d5fa;
    }
  }
`;

export const BoxContainer = styled(Box)`
  && {
    width: 600px;
    height: 600px;
    margin: 8.5rem auto;
    background-color: rgba(97, 219, 251, 0.3);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(19px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: .5rem;
  }
`;
