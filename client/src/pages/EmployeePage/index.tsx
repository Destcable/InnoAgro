import { lazy } from "react"

const EmployeePageList = lazy(() => import("./EmployeePageList"))


export const EmployeePage = {
    name: "EmployeePage", 
    list: <EmployeePageList />,
}