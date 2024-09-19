import {
    Datagrid,
    TextField,
    List,
} from "react-admin";

const EmployeeScheduleList = () => { 
    return(
        <List>
            <Datagrid>
                <TextField source="name"/>
            </Datagrid>
        </List>
    )
};

export default EmployeeScheduleList;