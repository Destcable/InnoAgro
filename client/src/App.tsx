import { Admin, Resource } from "react-admin";
import { dataProvider } from "./core/config/dataProvider.config";
import { EmployeeRoleResource } from "./resources/EmployeeRole";
import { EmployeePositionResource } from "./resources/EmployeePosition";
import { EmployeeScheduleResource } from "./resources/EmployeeSchedule";
import { EmployeeResource } from "./resources/Employee";
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from './core/config/i18n/ru';
import englishMessages from './core/config/i18n/en';
import { EmployeePage } from "./pages/EmployeePage";


const translations = {
    en: englishMessages,
    ru: russianMessages,
};

const i18nProvider = polyglotI18nProvider(
    locale => translations[locale],
    'en',
    [
        { locale: 'en', name: 'English' },
        { locale: 'ru', name: 'Русский' }
    ],
);

const App = () => (
    <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
        {/* app */}
        <Resource {...EmployeePage} />
        {/* data */}
        <Resource {...EmployeeResource} />
        <Resource {...EmployeeRoleResource} />
        <Resource {...EmployeePositionResource} />
        <Resource {...EmployeeScheduleResource} />
    </Admin>
);

export default App;