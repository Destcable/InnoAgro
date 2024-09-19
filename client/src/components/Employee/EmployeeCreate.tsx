import { Create, DateInput, NumberInput, ReferenceInput, required, SimpleForm, TextInput } from "react-admin";

const EmployeeCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="firstName" validate={required()} />
                <TextInput source="lastName" validate={required()} />
                <TextInput source="patronymic" validate={required()} />
                <TextInput source="email" />
                <TextInput source="phone" />
                <DateInput source="employmentDate" />
                <NumberInput source="salary" />

                <ReferenceInput source="roleId" reference="EmployeeRole" />
                <ReferenceInput source="positionId" reference="EmployeePosition" />
                <ReferenceInput source="scheduleId" reference="EmployeeSchedule" />
            </SimpleForm>
        </Create>
    )
};

export default EmployeeCreate;