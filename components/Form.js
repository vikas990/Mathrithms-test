import { Card } from "./main.styles";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { Button, FormControl, InputField, MenuItem, Select } from "./utils";
export default function Form() {
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
          <InputField
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
