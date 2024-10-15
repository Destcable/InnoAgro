export async function createEmployeeRole(_, args, context) {
    const { name } = args;
    return await context.prisma.employeeRole.create({ data: { name } })
}

export async function deleteEmployeeRole(_, args, context) {
    const { id } = args;
    return await context.prisma.employeeRole.delete({ where: { id } })
}