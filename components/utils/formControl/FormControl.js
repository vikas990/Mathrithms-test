import { FormControl as formControl } from "@mui/material/";
import styled from "styled-components";

const StyledForm = styled(formControl)``;

export const FormControl = (props) => {
  return <StyledForm {...props} />;
};
