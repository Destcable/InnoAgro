export async function createEmployeePosition(_, args, context) {
    const { name } = args;
    return await context.prisma.employeePosition.create({ data: { name } })
}

export async function deleteEmployeePosition(_, args, context) {
    const { id } = args;
    return await context.prisma.employeePosition.delete({
        where: { id }
    })
}