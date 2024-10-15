import { createEmployee, deleteEmployee } from "./Employee/Mutation.js"
import { _allEmployeesMeta, allEmployees } from "./Employee/Query.js"
import { createEmployeePosition } from "./EmployeePosition/Mutation.js"
import { _allEmployeePositionsMeta, allEmployeePositions } from "./EmployeePosition/Query.js"
import { createEmployeeRole, deleteEmployeeRole } from "./EmployeeRole/Mutation.js"
import { _allEmployeeRolesMeta, allEmployeeRoles } from "./EmployeeRole/Query.js"
import { createEmployeeSchedule, deleteEmployeeSchedule } from "./EmployeeSchedule/Mutation.js"
import { _allEmployeeSchedulesMeta, allEmployeeSchedules } from "./EmployeeSchedule/Query.js"
import { _allFilesMeta, allFiles } from "./File/Query.js"

export const Query = {
    allEmployeeRoles,
    _allEmployeeRolesMeta,
    allEmployeePositions,
    _allEmployeePositionsMeta,
    allEmployeeSchedules,
    _allEmployeeSchedulesMeta,
    allEmployees,
    _allEmployeesMeta,

    allFiles,
    _allFilesMeta,
}

export const Mutation = {
    createEmployeeRole,
    deleteEmployeeRole,
    createEmployeePosition,
    createEmployeeSchedule,
    deleteEmployeeSchedule,
    createEmployee,
    deleteEmployee
}