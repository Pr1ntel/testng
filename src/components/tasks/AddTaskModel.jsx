import {useState} from "react";
import Api from "../../api/api";
import {Button, Form, Input, InputNumber, Modal, Select} from "antd";

const AddTaskModel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        addNewTask()
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const changePriority = (value) => {
        setPriorityTypeId(value)
    }
    const changeTerm = (value) => {
        setTaskDurationTermId(value);
    }
    const changeProject = (value) => {
        setProjectId(value);
    }
    const changeStage = (value) => {
        setTaskStageId(value);
    }
    const api = new Api();

    let [taskTitle, setTaskTitle] = useState('');
    let [taskDescription, setTaskDescription] = useState('');
    let [executorId, setExecutorId] = useState('');
    let [taskDurationTime, setTaskDurationTime] = useState(0);
    let [priorityTypeId, setPriorityTypeId] = useState(0);
    let[taskDurationTermId, setTaskDurationTermId] =useState(0)
    let [projectId, setProjectId] = useState(0);
    let [taskStageId, setTaskStageId] =useState()


    const addNewTask = () => {
        let taskItem = {
            taskTitle,
            taskDescription,
            executorId,
            taskDurationTime,
            priorityTypeId,
            taskDurationTermId,
            projectId,
            taskStageId
        }

        api.addNewTask(taskItem)
            .then(response => {
                console.log(response)
            })

    }
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Новая задача
            </Button>
            <Modal title="Создание.." open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        label="Название"
                        name="taskTitle"
                        onChange={event => {
                            setTaskTitle(event.target.value)
                        }}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Описание задачи"
                        name="taskDescription"
                        onChange={event => {
                            setTaskDescription(event.target.value)
                        }}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Ответственный"
                        name="executorId"
                        onChange={event => {
                            setExecutorId(event.target.value)
                        }}
                    >
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item
                        label="Этап"
                        name="taskStageId"
                    >
                        <Select
                            onChange={changeStage}
                            options={[
                                {
                                    value: '1',
                                    label: 'Разработка',
                                },
                                {
                                    value: '2',
                                    label: 'Тестирование',
                                },
                                {
                                    value: '3',
                                    label: 'Готово',
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Время"
                        name="taskDurationTime"
                        onChange={event => {
                            setTaskDurationTime(event.target.value)
                        }}
                    >
                        <InputNumber/>
                        <Form.Item style={{width: '90px'}}
                                   name="taskDurationTermId"
                        >
                            <Select
                                onChange={changeTerm}
                                options={[
                                    {
                                        value: '1',
                                        label: 'Минут',
                                    },
                                    {
                                        value: '2',
                                        label: 'Часов',
                                    },
                                    {
                                        value: '3',
                                        label: 'Дней',
                                    },
                                    {
                                        value: '4',
                                        label: 'Недель',
                                    },
                                    {
                                        value: '5',
                                        label: 'Месяцев',
                                    },
                                    {
                                        value: '6',
                                        label: 'Лет',
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Form.Item>
                    <Form.Item
                        label="Приоритет задачи"
                        name="priorityTypeId"
                    >
                        <Select

                            onChange={changePriority}
                            options={[
                                {
                                    value: '1',
                                    label: 'Обычная',
                                },
                                {
                                    value: '2',
                                    label: 'Критическия',
                                },
                                {
                                    value: '3',
                                    label: 'Незначительная',
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="id"
                        name="projectId"
                        onChange={event => {
                            setProjectId(event.target.value)
                        }}
                    >
                        <InputNumber/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
};
export default AddTaskModel;