import { Datagrid, List, TextField } from "react-admin";
import { FileListFilter } from "./FileListFilter";

const FileList = () => { 
    return(
        <List aside={<FileListFilter />}>
            <Datagrid>
                <TextField source="name" />
            </Datagrid>
        </List>
    )
};

export default FileList;