import Grid from "@material-ui/core/Grid";
import { useState, useContext } from "react";
import { Context } from "../../context/index";
import { ACTIONS } from "../../reducer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { v4 as uuidv4 } from 'uuid';
import FormControl from "@material-ui/core/FormControl";


export const Input = ({ submitMessage }) => {

  const inputContext = useContext(Context);
  const { inputDispatch } = inputContext;

  const [input, setInput] = useState("");
  const handleChange = (event) => setInput(event.target.value);


  const onSubmit = (event) => {
    event.preventDefault();
    if (input === "") {
      console.log("ftg");
    }

    let data = {    
        id : uuidv4() ,
        message : input,
        pseudo : 'Alex'
    }

    inputDispatch({ type: ACTIONS.SET_INPUT, payload: { input: data } });

    setInput("")
  };

  return (
    <Grid
      container
      xs={12}
      alignItems="flex-end"
      justify="space-between"
      direction="row"
      style={{ marginTop: "12px"}}
    >
      <FormControl onSubmit={onSubmit}>
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </FormControl>
    </Grid>
  );
};
