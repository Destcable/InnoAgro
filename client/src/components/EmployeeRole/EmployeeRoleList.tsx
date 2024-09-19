import {
    Datagrid,
    TextField,
    List,
} from "react-admin";

const EmployeeRoleList = () => { 
    return(
        <List>
            <Datagrid>
                <TextField source="name"/>
            </Datagrid>
        </List>
    )
};

export default EmployeeRoleList;