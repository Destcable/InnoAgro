import { lazy } from "react"

const EmployeePositionList = lazy(() => import("./EmployeePositionList"))
const EmployeePositionCreate = lazy(() => import("./EmployeePositionCreate"))


export const EmployeePositionResource = {
    name: "EmployeePosition", 
    list: <EmployeePositionList />,
    create: <EmployeePositionCreate />
}