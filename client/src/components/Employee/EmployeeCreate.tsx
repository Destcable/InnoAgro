import { Create, DateInput, NumberInput, ReferenceInput, required, SimpleForm, TextInput } from "react-admin";

const EmployeeCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="firstName" validate={required()} label="Имя" />
                <TextInput source="lastName" validate={required()} label="Фамилия" />
                <TextInput source="patronymic" validate={required()} label="Отчество" />
                <TextInput source="email" label="Почта" />
                <TextInput source="phone" label="Телефон" />
                <DateInput source="employmentDate" label="Дата трудоустройства" />
                <NumberInput source="salary" label="Зарплата" />

                <ReferenceInput source="roleId" reference="EmployeeRole" />
                <ReferenceInput source="positionId" reference="EmployeePosition" />
                <ReferenceInput source="scheduleId" reference="EmployeeSchedule" />
            </SimpleForm>
        </Create>
    )
};

export default EmployeeCreate;