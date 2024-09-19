export async function allEmployees(_, args, context) {
    return await context.prisma.employee.findMany({ 
        include: {
            role: true,
            position: true,
            schedule: true,
        },
    });
};

export async function _allEmployeesMeta(_, args, context) {
    return { count: await context.prisma.employee.count({ }) }
}