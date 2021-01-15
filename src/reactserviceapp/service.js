import axios from 'axios'
const url="http://localhost:8080"

class EmployeeService {
    getAllEmployees (){
        return axios.get(url)
   }
   createEmployee(employee){
       return axios.post(url,employee)
   }
   getUmployeeById(employeeId){
       return axios.get(url + '/' +employeeId)
   }
   updateEmployee(employee, employeeId){
       return axios.put(url + '/' +employeeId, employee)
   }
   deletUmployeeById(employeeId){
       return axios.delete(url + '/' +employeeId)
   }
}
export default new EmployeeService()

