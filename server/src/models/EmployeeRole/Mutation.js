export async function createEmployeeRole(_, args, context) {
    const { name } = args;
    return await context.prisma.employeeRole.create({ data: { name } })
}