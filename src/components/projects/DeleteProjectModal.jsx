import Api from "../../api/api";
import {useState} from "react";
import {Button, Form, InputNumber, Modal} from "antd";

const DeleteProject = () => {
    const api = new Api();
    const [id, setId] = useState(null);


    const  deleteProject = () => {
        api.deleteProject(id)
            .then(response =>
                console.log(response + "200"))
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        deleteProject();
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" danger onClick={showModal}>
                Удалить
            </Button>
            <Modal title="Удаление.." open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Пожалуйста, введите ID проекта, который хотите удалить:</p>
                <Form>
                <Form.Item
                    label="id"
                    name="id"
                    onChange={event => {
                        setId(event.target.value)
                    }}
                >
                    <InputNumber/>
                </Form.Item>
            </Form>
                <p>После ввода ID нажмите "ОК", чтобы подтвердить удаление.</p>

            </Modal>
        </>
    );
};


export default DeleteProject;