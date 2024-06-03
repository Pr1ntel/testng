import {Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import MainLayout from "./components/MainLayout";
import Projects from "./components/projects/Projects";
import Tasks from "./components/tasks/Tasks";
import Users from "./components/users/Users";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                <Route path="/main" element={<Main/>}/>
                 <Route path="/main/projects" element={<Projects/>}/>
                 <Route path="/main/tasks" element={<Tasks/>}/>
                 <Route path="/main/users" element={<Users/>}/>


                </Route>
            </Routes>
        </div>

    )
        ;
}

export default App;
