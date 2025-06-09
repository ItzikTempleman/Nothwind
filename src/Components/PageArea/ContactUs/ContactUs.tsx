import "./ContactUs.css";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {Button, ButtonGroup, Checkbox, FormControlLabel, TextField} from "@mui/material";

export default function ContactUs() {
    useTitle("Contact us")

    return (
        <div className="ContactUs">
            <form>
                <TextField label="Name" fullWidth/>
                <TextField label="Email" fullWidth type="email"/>
                <TextField label="Phone" fullWidth type="tel"/>
                <TextField label="Message" fullWidth multiline rows={4}/>
                <FormControlLabel control={<Checkbox/>} label={"Send me promotional emails"}/>

                <ButtonGroup fullWidth variant="contained">
                <Button color="primary">Send</Button>
                <Button color="secondary">Clear</Button>
                </ButtonGroup>
            </form>
        </div>
    );
}
