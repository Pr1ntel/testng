import {Table} from "antd";
import {useEffect, useState} from "react";
import Api from "../../api/api";


const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        width: 15,
    },
    {
        title: 'Имя',
        dataIndex: 'firstName',
        width: 150,
    },
    {
        title: 'Фамилия',
        dataIndex: 'lastName',
        width: 150,
    },
    {
        title: 'Логин',
        dataIndex: 'login',
        width: 150,
    },
    {
        title: 'Роль',
        dataIndex: 'roleName',
        width: 150,
    },
];
const Users = () => {
    const api = new Api()
    const [data, setData] = useState([])
    const getAllTasks = () => {

        api.getAllUsers()
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
        </div>
    );
}

export default Users;