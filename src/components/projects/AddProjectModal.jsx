import {useState} from "react";
import Api from "../../api/api";
import {Button, Form, Input, InputNumber, Modal, Select} from "antd";

const AddProjectModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        addNewProject()
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const changeStage = (value) => {
        setProjectStageId(value)
    }
    const changeTerm = (value) => {
        setProjectDurationTermId(value);
    }
    const api = new Api();

    let [projectName, setProjectName] = useState('');
    let [projectTask, setProjectTask] = useState('');
    let [projectDescription, setProjectDescription] = useState('');
    let [projectStageId, setProjectStageId] = useState(0);
    let [projectDurationTime, setProjectDurationTime] = useState(0);
    let [projectDurationTermId, setProjectDurationTermId] = useState(0);


    const addNewProject = () => {
        let projectItem = {
            projectName,
            projectTask,
            projectDescription,
            projectStageId,
            projectDurationTime,
            projectDurationTermId
        }

        api.addNewProject(projectItem)
            .then(response => {
                console.log(response)
            })

    }
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Новый проект
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
                        name="projectName"
                        onChange={event => {
                            setProjectName(event.target.value)
                        }}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Задача проекта"
                        name="projectTask"
                        onChange={event => {
                            setProjectTask(event.target.value)
                        }}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Описание задачи"
                        name="projectDescription"
                        onChange={event => {
                            setProjectDescription(event.target.value)
                        }}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Время"
                        name="projectDurationTime"
                        onChange={event => {
                            setProjectDurationTime(event.target.value)
                        }}
                    >
                        <InputNumber/>
                        <Form.Item style={{width: '90px'}}
                                   name="projectDurationTermId"
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
                        label="Этап проекта"
                        name="projectStageId"
                    >
                        <Select

                            onChange={changeStage}
                            options={[
                                {
                                    value: '1',
                                    label: 'Подготовка',
                                },
                                {
                                    value: '2',
                                    label: 'Проектирование',
                                },
                                {
                                    value: '3',
                                    label: 'Разработка',
                                },
                                {
                                    value: '4',
                                    label: 'Сдача проекта',
                                },
                                {
                                    value: '5',
                                    label: 'Проект готов',
                                },
                            ]}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
};
export default AddProjectModal;