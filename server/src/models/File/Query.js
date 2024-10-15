export async function allFiles(_, args, context) {
    return await context.prisma.file.findMany({ });
};

export async function _allFilesMeta(_, args, context) {
    return { count: await context.prisma.file.count({ }) }
}