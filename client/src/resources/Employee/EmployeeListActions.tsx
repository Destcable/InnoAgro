import { CreateButton, SelectColumnsButton, TopToolbar } from "react-admin";

const EmployeeListActions = () => {
    return (
        <TopToolbar>
            <SelectColumnsButton />
            <CreateButton />
        </TopToolbar>
    )
};

export default EmployeeListActions;