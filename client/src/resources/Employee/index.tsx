import { lazy } from "react"

const EmployeeList = lazy(() => import("./EmployeeList"))
const EmployeeCreate = lazy(() => import("./EmployeeCreate"))


export const EmployeeResource = {
    name: "Employee", 
    list: <EmployeeList />,
    create: <EmployeeCreate />
}