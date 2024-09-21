export async function createEmployeeSchedule(_, args, context) {
    const { type, workingDays } = args;
    return await context.prisma.employeeSchedule.create({ data: { type, workingDays } })
}

export async function deleteEmployeeSchedule(_, args, context) {
    const { id } = args;
    return await context.prisma.employeeSchedule.delete({
        where: { id }
    })
}