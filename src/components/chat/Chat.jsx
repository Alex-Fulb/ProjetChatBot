import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Input } from "./Input";
import { Messages } from "./Messages";

export const Chat = () => {
  const submitMessage = () => {
    console.log("envoyer");
  };
  return (
    <Grid item xs={12} style={{border: '1px solid'}}>
      <Messages />
      <Input submitMessage={submitMessage} />
    </Grid>
  );
};
