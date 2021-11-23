import { InputLabel as inputLabel } from "@mui/material/";
import styled from "styled-components";

const StyledInputLabel = styled(inputLabel)``;

export const InputLabel = (props) => {
  return <StyledInputLabel {...props} />;
};
