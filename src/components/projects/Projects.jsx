import {Table} from "antd";
import {useEffect, useState} from "react";
import Api from "../../api/api";
import AddProjectModal from "./AddProjectModal";
import DeleteProject from "./DeleteProjectModal";

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        width: 15,
    },
    {
        title: 'Название',
        dataIndex: 'projectName',
        width: 150,
    },
    {
        title: 'Задача проекта',
        dataIndex: 'projectTask',
        width: 150,
    },
    {
        title: 'Описание задачи',
        dataIndex: 'projectDescription',
        width: 150,
    },
    {
        title: 'Этап',
        dataIndex: 'projectStageId',
        width: 150,
    },
    {
        title: 'Время выполнения',
        dataIndex: 'projectDurationTime',
        width: 100,
        render: (text, record) => `${text}  ${record.projectDurationTermId}`
    },

];
const Projects = () => {
    const api = new Api()
    const [data, setData] = useState([])
    const getAllProject = () => {

        api.getAllProjects()
            .then(response => {
                setData(response.data)

            })
            .catch(error => {
                console.log("123")
            })
    }
    useEffect(() => {
        getAllProject()
    }, []);
    console.log(data)
    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    pageSize: 50,
                }}

            />
            <AddProjectModal/>
            <br/>
            <DeleteProject/>
        </div>
    );
}

export default Projects;