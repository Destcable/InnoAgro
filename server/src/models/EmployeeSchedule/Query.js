export async function allEmployeeSchedules(_, args, context) {
    return await context.prisma.employeeSchedule.findMany();
};

export async function _allEmployeeSchedulesMeta(_, args, context) {
    return { count: await context.prisma.employeeSchedule.count() }
}