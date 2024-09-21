import {
    Datagrid,
    TextField,
    List,
} from "react-admin";
import { BackButton } from "../../core/components/BackButton";

const EmployeePositionList = () => {
    return (
        <>
            <BackButton />
            <List>
                <Datagrid>
                    <TextField source="name" />
                </Datagrid>
            </List>
        </>
    )
};

export default EmployeePositionList;