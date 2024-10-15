import { Create, FileField, FileInput, SimpleForm } from "react-admin";

const FileCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <FileInput source="attachments">
                    <FileField source="src" title="title" />
                </FileInput>
            </SimpleForm>
        </Create>
    )
};

export default FileCreate;