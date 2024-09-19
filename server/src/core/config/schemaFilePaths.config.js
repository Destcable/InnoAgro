import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = process.cwd();

export const schemaFilePaths = [
    path.join(rootDir, 'customTypes.graphql'),
    path.join(rootDir, 'src/models/EmployeeRole/schema.graphql'),
    path.join(rootDir, 'src/models/EmployeePosition/schema.graphql'),
    path.join(rootDir, 'src/models/EmployeeSchedule/schema.graphql'),
    path.join(rootDir, 'src/models/Employee/schema.graphql'),
];
