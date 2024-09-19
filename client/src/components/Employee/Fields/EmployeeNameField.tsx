import { FunctionField } from "react-admin";

export const EmployeeNameField = ({ source }: { source: string}) => <FunctionField 
    source={source} 
    render={record => `${record.lastName} ${record.firstName} ${record.patronymic}`}
/>