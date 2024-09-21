import { Create, required, SelectArrayInput, SimpleForm, TextInput } from "react-admin";

const EmployeeScheduleCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="type" validate={required()} />
                <SelectArrayInput source="workingDays" choices={[
                    { id: 'Понедельник', name: 'Понедельник'},
                    { id: 'Вторник', name: 'Вторник' },
                    { id: 'Среда', name: 'Среда' },
                    { id: 'Четверг', name: 'Четверг' },
                    { id: 'Пятница', name: 'Пятница' },
                    { id: 'Суббота', name: 'Суббота' },
                    { id: 'Воскресенье', name: 'Воскресенье' },
                ]} />
            </SimpleForm>
        </Create>
    )
};

export default EmployeeScheduleCreate;