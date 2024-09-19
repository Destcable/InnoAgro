export async function allEmployeePositions(_, args, context) {
    return await context.prisma.employeePosition.findMany();
};

export async function _allEmployeePositionsMeta(_, args, context) {
    return { count: await context.prisma.employeePosition.count() }
}