import { Create, required, SimpleForm, TextInput } from "react-admin";

const EmployeeScheduleCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" validate={required()} />
            </SimpleForm>
        </Create>
    )
};

export default EmployeeScheduleCreate;