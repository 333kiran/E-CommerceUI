
import { ButtonGroup, Button,styled } from "@mui/material";

const Component = styled(ButtonGroup)`
  margin-top:30px;
`
const Buttonstyle = styled(Button)`
  border-radius:50%;
`

const Buttongroup = () => {
    return (

        <Component >
            <Buttonstyle>-</Buttonstyle>
            <Button>1</Button>
            <Buttonstyle>+</Buttonstyle>
        </Component >
    )
}

export default Buttongroup;