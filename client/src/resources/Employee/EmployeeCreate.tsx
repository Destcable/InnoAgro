import { Create, SimpleForm } from "react-admin";
import { EmployeeCreateForm } from "./EmployeeCreateForm";

const EmployeeCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <EmployeeCreateForm />
            </SimpleForm>
        </Create>
    )
};

export default EmployeeCreate;