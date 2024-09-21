import {
    List,
    DatagridConfigurable,
    ReferenceField,
    ChipField,
    TextField,
    DateField,
    NumberField,
} from "react-admin";
import EmployeeListActions from "./EmployeeListActions";
import { EmployeeNameField } from "./Fields/EmployeeNameField";
import { BackButton } from "../../core/components/BackButton";

const EmployeeList = () => {
    return (
        <>
            <BackButton />
            <List actions={<EmployeeListActions />}>
                <DatagridConfigurable>
                    <EmployeeNameField source="name" />
                    <DateField source="dateOfBirth" />
                    <TextField source="adress" />
                    <TextField source="email" />
                    <TextField source="phone" />
                    <DateField source="employmentDate" />
                    <NumberField source="salary" />
                    <ReferenceField source="role.id" reference="EmployeeRole">
                        <ChipField source="name" />
                    </ReferenceField>
                    <ReferenceField source="position.id" reference="EmployeePosition">
                        <ChipField source="name" />
                    </ReferenceField>
                    <ReferenceField source="schedule.id" reference="EmployeeSchedule">
                        <ChipField source="type" />
                    </ReferenceField>
                </DatagridConfigurable>
            </List>
        </>
    )
};

export default EmployeeList;