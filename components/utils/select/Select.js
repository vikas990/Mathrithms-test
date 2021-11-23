import { Select as select } from "@mui/material/";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const StyledSelect = styled(select)``;

export const Select = (props) => {
  const [value, setValue] = useState(props.value || "");
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);
  return (
    <StyledSelect
      {...props}
      name={props.name}
      onChange={(e) => {
        setValue(e.target.value);
        props.onChange && props.onChange(e);
      }}
      value={value}
    />
  );
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
