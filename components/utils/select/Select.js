import React from "react";
import { Select as select } from "@mui/material/";
import styled from "styled-components";

const StyledSelect = styled(select)``;

// eslint-disable-next-line react/display-name
export const Select = React.forwardRef(
  ({ onChange, onBlur, name, label }, ref) => {
    return <StyledSelect name={name} ref={ref} onChange={onChange} />;
  }
);

// EXAMPLE

/* <FormControl variant="outlined" size="small">
  <InputLabel>Age</InputLabel>
  <Select
    width="10rem"
    labelId="demo-simple-select-outlined-label"
    id="demo-simple-select-outlined"
    // value={age}
    // onChange={handleChange}
    label="Age"
  >
    <MenuItem>One</MenuItem>
    <MenuItem>Two</MenuItem>
    <MenuItem>Three</MenuItem>
  </Select>
</FormControl> */
