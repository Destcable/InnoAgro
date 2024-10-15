import NestedList from "../../core/components/NestedList"
import { NestedListItem } from "../../core/components/NestedListItem"
import { FileListFilterWrapper } from "./components/FileListFilterWrapper"
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';

export const FileListFilter = () => { 
    return(
        <FileListFilterWrapper>
            <NestedList>
                <NestedListItem icon={<DatasetOutlinedIcon />} text="Все файлы" />
                <NestedListItem
                            text="Создать папку"
                            icon={<CreateNewFolderOutlinedIcon color="secondary" />}
                            typographyProps={{
                                color: 'primary',
                            }}
                        />
            </NestedList>
        </FileListFilterWrapper>
    )
};