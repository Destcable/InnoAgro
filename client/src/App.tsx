import { Admin, Resource } from "react-admin";
import { dataProvider } from "./core/config/dataProvider.config";
import { EmployeeRoleResource } from "./components/EmployeeRole";
import { EmployeePositionResource } from "./components/EmployeePosition";
import { EmployeeScheduleResource } from "./components/EmployeeSchedule";
import { EmployeeResource } from "./components/Employee";


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource {...EmployeeResource} />
        <Resource {...EmployeeRoleResource} />
        <Resource {...EmployeePositionResource} />
        <Resource {...EmployeeScheduleResource} />
    </Admin>
);

export default App;