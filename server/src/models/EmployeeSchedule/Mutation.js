export async function createEmployeeSchedule(_, args, context) {
    const { name } = args;
    return await context.prisma.employeeSchedule.create({ data: { name } })
}