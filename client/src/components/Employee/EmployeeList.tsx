import {
    List,
    DatagridConfigurable,
    ReferenceField,
    ChipField,
} from "react-admin";
import EmployeeListActions from "./EmployeeListActions";
import { EmployeeNameField } from "./Fields/EmployeeNameField";

const EmployeeList = () => {
    return (
        <List actions={<EmployeeListActions />}>    
            <DatagridConfigurable>
                <EmployeeNameField source="name"/>
                <ReferenceField source="role.id" reference="EmployeeRole">
                    <ChipField source="name" />
                </ReferenceField>
                <ReferenceField source="position.id" reference="EmployeePosition">
                    <ChipField source="name" />
                </ReferenceField>
                <ReferenceField source="schedule.id" reference="EmployeeSchedule">
                    <ChipField source="name" />
                </ReferenceField>
            </DatagridConfigurable>
        </List>
    )
};

export default EmployeeList;