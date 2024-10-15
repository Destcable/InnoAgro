import { lazy } from "react"

const FileList = lazy(() => import("./FileList"))
const FileCreate = lazy(() => import("./FileCreate"))

export const FileResource = {
    name: "File", 
    list: <FileList />,
    create: <FileCreate />
}