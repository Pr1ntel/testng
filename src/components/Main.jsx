import React, {useEffect, useState} from 'react';
import Api from "../api/api";

const Main = () => {
    const api = new Api();

    const [dataProjects, setDataProjects] = useState([]);
    const [dataTasks, setDataTasks] = useState([]);

    const getAllProjects = () => {
        api.getAllProjects()
            .then(response => {
                setDataProjects(response.data);
            })
    }
    const getAllTasks = () => {
        api.getAllTask()
            .then(response => {
                setDataTasks(response.data)
            })
    }
    useEffect(() => {
        getAllProjects();
        getAllTasks();
    }, []);

    return (
        <div>
            <h1>Количество проектов: {dataProjects.length} <p/> Количество задач: {dataTasks.length}</h1>
        </div>

    );
};

export default Main;