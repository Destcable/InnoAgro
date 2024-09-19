import { lazy } from "react"

const EmployeeRoleList = lazy(() => import("./EmployeeRoleList"))
const EmployeeRoleCreate = lazy(() => import("./EmployeeRoleCreate"))


export const EmployeeRoleResource = {
    name: "EmployeeRole", 
    list: <EmployeeRoleList />,
    create: <EmployeeRoleCreate />
}