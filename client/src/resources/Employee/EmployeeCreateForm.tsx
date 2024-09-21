import { DateInput, NumberInput, ReferenceInput, required, TextInput } from "react-admin";

export const EmployeeCreateForm = () => (
    <>
        <TextInput source="firstName" validate={required()} />
        <TextInput source="lastName" validate={required()} />
        <TextInput source="patronymic" validate={required()} />
        <DateInput source="dateOfBirth" />
        <TextInput source="adress" />

        <TextInput source="email" />
        <TextInput source="phone" />
        <DateInput source="employmentDate" defaultValue={new Date()} />
        <NumberInput source="salary" />

        <ReferenceInput source="roleId" reference="EmployeeRole" />
        <ReferenceInput source="positionId" reference="EmployeePosition" />
        <ReferenceInput source="scheduleId" reference="EmployeeSchedule" />
    </>
);