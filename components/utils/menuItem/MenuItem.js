import { MenuItem as menuItem } from "@mui/material/";
import styled from "styled-components";

const StyledMenuItem = styled(menuItem)``;

export const MenuItem = (props) => {
  return <StyledMenuItem {...props} />;
};
