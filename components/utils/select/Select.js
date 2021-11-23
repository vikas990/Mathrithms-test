import { Select as select } from "@mui/material/";
import styled from "styled-components";

const StyledSelect = styled(select)``;

export const Select = (props) => {
  return <StyledSelect {...props} />;
};

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
