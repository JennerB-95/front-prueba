import { createWebHistory, createRouter } from "vue-router";

// views
import Login from './views/Login.vue'; 
import Home from './views/Home.vue'
//Unit
import UnitList from './views/units/UnitList.vue'
import CreateUnit from './views/units/CreateUnit.vue'
import EditUnit from './views/units/EditUnit.vue'
//Department
import DepartmentList from './views/departments/DepartmentList.vue'
import CreateDepartment from './views/departments/CreateDepartment.vue'
import EditDepartment from './views/departments/EditDepartment.vue'
//Employee
import EmployeeList from './views/employees/EmployeeList.vue'
import CreateEmployee from './views/employees/CreateEmployee.vue'
import EditEmployee from './views/employees/EditEmployee.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/unit-list',
    name: 'UnitList',
    component: UnitList,
  },

  {
    path: '/create-unit',
    name: 'CreateUnit',
    component: CreateUnit,
  },
  {
    path: '/edit-unit/uni-:unit',
    name: 'EditUnit',
    component: EditUnit,
  },
  {
    path: '/department-list',
    name: 'DepartmentList',
    component: DepartmentList,
  },

  {
    path: '/create-department',
    name: 'CreateDepartment',
    component: CreateDepartment,
  },
  {
    path: '/edit-department/dep-:unit',
    name: 'EditDepartment',
    component: EditDepartment,
  },
  {
    path: '/employee-list',
    name: 'EmployeeList',
    component: EmployeeList,
  },

  {
    path: '/create-employee',
    name: 'CreateEmployee',
    component: CreateEmployee,
  },
  {
    path: '/edit-employee/dep-:unit',
    name: 'EditEmployee',
    component: EditEmployee,
  },

  {
    path: '/',
    name: 'Login',
    component: Login,
  },      
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;