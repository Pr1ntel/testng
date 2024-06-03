import {Table} from "antd";
import {useEffect, useState} from "react";
import Api from "../../api/api";
import AddTaskModel from "./AddTaskModel";

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        width: 15,
    },
    {
        title: 'Название',
        dataIndex: 'taskTitle',
        width: 150,
    },
    {
        title: 'Описание задачи',
        dataIndex: 'taskDescription',
        width: 150,
    },
    {
        title: 'Исполнитель',
        dataIndex: 'executorId',
        width: 150,
    },
    {
        title: 'Этап',
        dataIndex: 'taskStageId',
        width: 150,
    },
    {
        title: 'Время выполнения',
        dataIndex: 'taskDurationTime',
        width: 100,
        render: (text, record) => `${text}  ${record.taskDurationTermId}`
    },
    {
        title: 'Приоритет',
        dataIndex: 'priorityTypeId',
        width: 150,
    },
    {
        title: 'Проект',
        dataIndex: 'projectName',
        width: 150,
    },
];
const Tasks = () => {
    const api = new Api()
    const [data, setData] = useState([])
    const getAllTasks = () => {

        api.getAllTask()
            .then(response => {
                setData(response.data)

            })
            .catch(error => {
                console.log("123")
            })
    }
    useEffect(() => {
        getAllTasks()
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
            <AddTaskModel/>
            <br/>

        </div>
    );
}

export default Tasks;