import ComponentList from './Component/componentList'
import FrontendHeaderComponent from './Component/FrontendHeaderComponent'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import AddEmployessFormComponent from './Component/addFormComponent'
import ViewEmployeeComponent from './Component/ViewEmployeeComponent'
function App() {
  return (<div>
           <Router>
                <FrontendHeaderComponent> </FrontendHeaderComponent>
                <Switch>
                       <Route path="/"   exact component={ComponentList}></Route>
                       <Route path="/emloyees" component={ComponentList}></Route>
                       <Route path="/add_employee/:id" component={AddEmployessFormComponent}></Route>
                       <Route path="/view_employee/:id" component={ViewEmployeeComponent}></Route>
                       
                     <ComponentList></ComponentList>
                </Switch>
                
          </Router> 
         
        </div>
          
  );
}

export default App;
