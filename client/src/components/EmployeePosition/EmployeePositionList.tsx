import {
    Datagrid,
    TextField,
    List,
} from "react-admin";

const EmployeePositionList = () => { 
    return(
        <List>
            <Datagrid>
                <TextField source="name"/>
            </Datagrid>
        </List>
    )
};

export default EmployeePositionList;