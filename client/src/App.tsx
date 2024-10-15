import { Admin, Layout, Menu, Resource } from "react-admin";
import { dataProvider } from "./core/config/dataProvider.config";
import { EmployeeRoleResource } from "./resources/EmployeeRole";
import { EmployeePositionResource } from "./resources/EmployeePosition";
import { EmployeeScheduleResource } from "./resources/EmployeeSchedule";
import { EmployeeResource } from "./resources/Employee";
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from './core/config/i18n/ru';
import englishMessages from './core/config/i18n/en';
import { EmployeePage } from "./pages/EmployeePage";
import { FC, ReactNode } from "react";
import { FileResource } from "./resources/File";


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

export const SidebarMenu = () => (
    <Menu   >
        <Menu.ResourceItem name="EmployeePage" />
        <Menu.ResourceItem name="File" />
    </Menu>
);

interface AdminLayoutProps { 
    children?: ReactNode
}

export const AdminLayout: FC<AdminLayoutProps> = ({ children }) => (
    <Layout menu={SidebarMenu}>
        {children}
    </Layout>
);

const App = () => (
    <Admin 
        dataProvider={dataProvider} 
        i18nProvider={i18nProvider}
        layout={AdminLayout}
    >
        {/* Page's */}
        <Resource {...EmployeePage} />
        <Resource {...FileResource} />

        {/* data */}
        <Resource {...EmployeeResource} />
        <Resource {...EmployeeRoleResource} />
        <Resource {...EmployeePositionResource} />
        <Resource {...EmployeeScheduleResource} />
    </Admin>
);

export default App;