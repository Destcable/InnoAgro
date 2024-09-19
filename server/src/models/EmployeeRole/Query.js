export async function allEmployeeRoles(_, args, context) {
    return await context.prisma.employeeRole.findMany();
};

export async function _allEmployeeRolesMeta(_, args, context) {
    return { count: await context.prisma.employeeRole.count() }
}