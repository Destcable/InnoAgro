import { lazy } from "react"

const EmployeeScheduleList = lazy(() => import("./EmployeeScheduleList"))
const EmployeeScheduleCreate = lazy(() => import("./EmployeeScheduleCreate"))


export const EmployeeScheduleResource = {
    name: "EmployeeSchedule", 
    list: <EmployeeScheduleList />,
    create: <EmployeeScheduleCreate />,
    recordRepresentation: "type"
}