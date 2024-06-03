import axios from "axios";


class api {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/api/v1/main"
        });
    }


    async getAllProjects() {
        return await this.#axios.get("/all-projects")
    }

    async getAllTask() {
        return await this.#axios.get("/all-task")
    }
    async getAllUsers() {
        return await this.#axios.get("/all-users")
    }

    async getAllProjectStageName() {
        return await this.#axios.get("/all-project-stage-name")
    }

    async getAllTermName() {
        return await this.#axios.get("/all-term-name")
    }

    async getAllPriorityType() {
        return await this.#axios.get("/all-priority-type")
    }

    async getAllTaskStageName() {
        return await this.#axios.get("/all-priority-type")
    }

    async addNewProject(projectItem) {
        return await this.#axios.post("/new-project", projectItem)
    }

    async addNewTask(taskItem) {
        return await this.#axios.post("/new-task", taskItem)
    }
    async deleteProject(id) {
        return  await this.#axios.delete(`/delete-project/${id}`);
    }
    async deleteTask(id) {
        return  await this.#axios.delete(`/delete-task/${id}`);
    }
}

export default api;