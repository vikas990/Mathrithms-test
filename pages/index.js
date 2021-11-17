import { Card } from "./main.styles";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect } from "react";

export default function Home() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "test",
      dropdown: "test2",
    },
  });
  useEffect(() => {
    reset({
      name: "test2",
      dropdown: "test3",
    });
    // if (companyData) {
    //   setValue("name", companyData?.name, "about", companyData?.about);
    // }
  }, [reset]);
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Card>
        <h1>Form</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <TextField
            fullWidth
            placeholder="name"
            name="name"
            {...register("name")}
          />
          <br />
          <br />
          <FormControl fullWidth>
            <Select name="dropdown" {...register("dropdown")}>
              <MenuItem>one</MenuItem>
              <MenuItem>Two</MenuItem>
              <MenuItem>Three</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <Button fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}
