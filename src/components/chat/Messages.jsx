import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Input } from "./Input";
import { Context } from "../../context/index";
import { useContext } from "react";
import Grid from "@material-ui/core/Grid";

export const Messages = () => {
  const inputContext = useContext(Context);
  const { inputState } = inputContext;
  console.log(`input -->`, inputState.input);
  console.log(`inputState`, inputState);
  return (
    <>
      <div style={{ height : '250px', border: "2px solid", overflow: "scroll" }}>
        {inputState.input &&
          inputState.input.map((msg) => (
            <div>
              {msg.pseudo} : {msg.message}
            </div>
          ))}
      </div>
    </>
  );
};
