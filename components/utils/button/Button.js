import React from "react";
import { Button as button } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(button)``;

// const StyledSearchButton = styled(Button)`
//   width: 10rem;
//   font-size: 0.9rem;
// `;

export const Button = (props) => {
  return <StyledButton {...props} variant="contained" />;
};

// export const SearchButton = (props) => {
//   return <StyledSearchButton {...props} />;
// };

const StyledBigButton = styled(button)`
  width: ${(props) => props.width} !important;
  height: ${(props) => props.height} !important;
  text-transform: none !important;
  font-weight: 600 !important;
  color: hsl(191, 31%, 20%) !important;
  background-color: #ffea4f !important;
  &:hover {
    background-color: #e6d347 !important;
  }
`;

export const BigButton = (props) => {
  return <StyledBigButton {...props} />;
};

const StyledOutlineButton = styled(button)`
  color: #2f454a !important;
  border: 0.1rem solid #2f454a !important;
  border-radius: ${(props) => props.borderradius} !important;

  &:hover {
    color: #fff !important;
    background-color: #2f454a !important;
  }
`;

export const OutlinedButton = (props) => {
  return <StyledOutlineButton {...props} variant="outlined" />;
};

const StyledLinkButton = styled(button)`
  color: #2f454a !important;
  text-transform: none !important;
  &:hover {
    text-decoration: underline !important;
  }
`;

export const LinkButton = (props) => {
  return <StyledLinkButton {...props} />;
};

const StyledColorButton = styled(button)`
  color: ${(props) => props.txtcolor} !important;
  background-color: ${(props) => props.bgcolor} !important;
  border-radius: ${(props) => props.borderradius} !important;
  width: ${(props) => props.width} !important;
  margin-bottom: 0.5rem !important;
`;

export const ColorButton = (props) => {
  return <StyledColorButton {...props} variant="contained" />;
};
