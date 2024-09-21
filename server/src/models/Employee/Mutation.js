export async function createEmployee(_, args, context) {
    const {
        firstName,
        lastName,
        patronymic,
        dateOfBirth,
        adress,
        email,
        phone,
        employmentDate,
        salary,
        roleId,
        positionId,
        scheduleId
    } = args;
    return await context.prisma.employee.create({
        data: {
            firstName,
            lastName,
            patronymic,
            dateOfBirth,
            adress,
            email,
            phone,
            employmentDate,
            salary,
            roleId,
            positionId,
            scheduleId
        },
        include: {
            role: true,
            position: true,
            schedule: true,
        },
    })

}

export async function deleteEmployee(_, args, context) {
    const { id } = args;
    return await context.prisma.employee.delete({
        where: { id }
    })
}