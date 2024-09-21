import {
    Datagrid,
    TextField,
    List,
} from "react-admin";
import { BackButton } from "../../core/components/BackButton";

const EmployeeScheduleList = () => {
    return (
        <>
            <BackButton />
            <List>
                <Datagrid>
                    <TextField source="type" />
                    <TextField source="workingDays" />
                </Datagrid>
            </List>
        </>

    )
};

export default EmployeeScheduleList;