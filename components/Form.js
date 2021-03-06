import { Card } from "./main.styles";
import { useForm, useWatch } from "react-hook-form";
import { Button, FormControl, InputField, MenuItem, Select } from "./utils";
const Controller = ({ control, register, name, rules, render }) => {
  const value = useWatch({
    control,
    name,
  });
  const props = register(name);
  return render({
    value,
    onChange: (e) =>
      props.onChange({
        target: {
          name,
          value: e.target.value,
        },
      }),

    onBlur: props.onBlur,
    name: props.name,
  });
};
export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  // console.log(errors);
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
            register={register}
          />
          <p style={{ color: "red" }}>{errors?.name?.message}</p>
          <br />
          <br />
          <Controller
            {...{
              control,
              register,
              name: "dropdown",
              rules: {},
              render: (props) => (
                <FormControl fullWidth>
                  <Select {...props}>
                    <MenuItem value="one">one</MenuItem>
                    <MenuItem value="two">Two</MenuItem>
                    <MenuItem value="three">Three</MenuItem>
                  </Select>
                </FormControl>
              ),
            }}
          />

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
