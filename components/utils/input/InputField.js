import { InputAdornment as inputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

const StyledInputField = styled(TextField)``;

export const InputField = (props) => {
  return (
    <StyledInputField
      {...props}
      // {...props.register(props.name)}
      variant="outlined"
    />
  );
};

export const StyledInputAdornment = styled(inputAdornment)``;

export const InputAdornment = (props) => {
  return <StyledInputAdornment {...props} />;
};
