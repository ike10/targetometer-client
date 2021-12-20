module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/*! exports provided: useAuth, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\USER\\Desktop\\targetometer-client-main\\context\\AuthContext.js";



const AuthContextDefaultValues = {
  user: []
};
const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(AuthContextDefaultValues);
const BASE_URL = 'https://targetometer-server.herokuapp.com/api/v1/auth';
const USER_URL = 'https://targetometer-server.herokuapp.com/api/v1/users';
function useAuth() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AuthContext);
}
function AuthProvider({
  children
}) {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: userInfo,
    1: setUserInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // const [single_route, setSingle_route] = useState([])

  const {
    0: serverMessage,
    1: setServerMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const sign_up = async (email, password, firstname, lastname, confirmpassword) => {
    try {
      setIsLoading(true);
      let response = await fetch(`${BASE_URL}/createaccount`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',

        },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          password: password,
          email: email
        })
      });
      const result = await response.json(); // console.log(result)

      setServerMessage("Account Created Successfully, please verify email");
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(`/verifyuser`);
    } catch (err) {
      setServerMessage("Welcome");
      setIsLoading(false);
      console.log(err.message);
    } //     fetch(`${BASE_URL}/createaccount`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //           },
    //         body: JSON.stringify({
    //             firstname: firstname,
    //             lastname: lastname,
    //             password: password,
    //             email:email, 
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //     setServerMessage("Account Created Successfully, please login to access dashboard")
    //     setTimeout(()=>{
    //         router.push(`/`)
    //     }, 30000)
    //    })
    //     .catch(err=>{
    //         setServerMessage(err.message)
    //    })

  }; // verify account


  const verify_user = async otp => {
    setServerMessage("Email has been verified please login");
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/'); // try{
    //    setIsLoading(true)
    //    let response = await fetch(`${BASE_URL}/verifyaccount`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json'
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //     body: JSON.stringify({
    //         token: otp,
    //    })
    // })
    // setServerMessage('Email Verified Please Login')
    //     router.push(`/`)
    // }catch(error){
    //     console.log(error.message)
    //     setServerMessage("Error verifiying token") 
    //    setIsLoading(false) 
    // }
  };

  const sign_in = async (email, password) => {
    try {
      setIsLoading(true);
      let response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',

        },
        body: JSON.stringify({
          password: password,
          email: email
        })
      });
      const result = await response.json(); // console.log(result)

      localStorage.setItem('token', result.token);
      setUser(result.data);
      localStorage.setItem('userinfo', JSON.stringify(result.data));
      localStorage.setItem('firstname', result.data.firstname);
      localStorage.setItem('lastname', result.data.lastname);
      localStorage.setItem('userID', result.data.userID);
      const firstname = localStorage.getItem('firstname');
      const lastname = localStorage.getItem('lastname');
      setServerMessage(result.message);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(`/${firstname}_${lastname}`);
    } catch (err) {
      setServerMessage('error signing in');
      setIsLoading(false);
      setServerMessage(err.message);
    }
  };

  const get_user = () => {
    // console 
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');
    fetch(`${USER_URL}/${userID}/`, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // 'Content-Type': 'application/x-www-form-urlencoded',

      }
    }).then(response => response.json()).then(result => {
      console.log(result.result);
      setUser([...result.result]);
    }).catch(error => {
      console.log(error.message);
      setServerMessage('');
    });
  };

  const delete_user = () => {
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');
    fetch(`${USER_URL}/${userID}/`, {
      method: 'DELETE',
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // 'Content-Type': 'application/x-www-form-urlencoded',

      }
    }).then(response => response.json()).then(result => {
      setServerMessage("user deleted");
    }).catch(error => {
      setServerMessage("user deleted");
    });
  };

  const update_user = (profileimage, address, email, contact, occupation, password) => {
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');
    fetch(`${USER_URL}/${userID}/`, {
      method: 'PUT',
      // mode: "no-cors",
      headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}` // 'Content-Type': 'application/x-www-form-urlencoded',

      },
      body: {
        email: email,
        profileimage: profileimage,
        address: address,
        contact: contact,
        occupation: occupation,
        password: password
      }
    }) // .then(response => response.json())
    .then(result => {
      setServerMessage("user profile updated");
      console.log(result.result);
      console.log("user profile updated");
    }).catch(error => {
      console.log(error.message);
      setServerMessage('error updating user profile, please try again');
    });
  };

  const value = {
    user,
    sign_in,
    sign_up,
    serverMessage,
    isLoading,
    verify_user,
    setIsLoading,
    setServerMessage,
    get_user,
    update_user,
    delete_user // delete_user,

  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
      value: value,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./context/ProjectContext.js":
/*!***********************************!*\
  !*** ./context/ProjectContext.js ***!
  \***********************************/
/*! exports provided: useProject, ProjectProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProject", function() { return useProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectProvider", function() { return ProjectProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/gi */ "react-icons/gi");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthContext */ "./context/AuthContext.js");

var _jsxFileName = "C:\\Users\\USER\\Desktop\\targetometer-client-main\\context\\ProjectContext.js";



const ProjectContextDefaultValues = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  projects: [],
  singleproject: []
});
const ProjectContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(ProjectContextDefaultValues);
const BASE_URL = 'https://targetometer-server.herokuapp.com/api/v1/users';
function useProject() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ProjectContext);
}
const ProjectProvider = ({
  children
}) => {
  const {
    user
  } = Object(_AuthContext__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();
  const {
    0: projects,
    1: setProject
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: singleproject,
    1: setSingleProject
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: serverMessage,
    1: setServerMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: projectID,
    1: setProjectID
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const get_all_projects = () => {
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');
    fetch(`${BASE_URL}/${userID}/projects`, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // 'Content-Type': 'application/x-www-form-urlencoded',

      }
    }).then(response => response.json()).then(result => {
      console.log('projects');
      console.log(result.result);
      setProject([...result.result]);
    }).catch(error => {
      setServerMessage(error.message);
    });
  };

  const get_single_project = () => {
    const projectID = localStorage.getItem('selectedProjectID');
    const token = localStorage.getItem('token');
    const userID = localStorage.getItem('userID');
    fetch(`${BASE_URL}/${userID}/projects/${projectID}/`, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // 'Content-Type': 'application/x-www-form-urlencoded',

      }
    }).then(response => response.json()).then(result => {
      console.log(result.result);
      setProjects(...result.result);
    }).catch(error => {
      setServerMessage(error.message);
    });
  };

  const create_single_project = (title, description, startdate, enddate) => {
    const token = localStorage.getItem('token');
    const userID = localStorage.getItem('userID');
    const firstname = localStorage.getItem('firstname');
    const lastname = localStorage.getItem('lastname');
    fetch(`${BASE_URL}/${userID}/projects`, {
      method: 'POST',
      // mode: "no-cors",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // 'Content-Type': 'application/x-www-form-urlencoded',

      },
      body: JSON.stringify({
        title: title,
        description: description,
        startdate: startdate,
        enddate: enddate
      })
    }).then(response => response.json()).then(result => {
      setServerMessage(result.message);
      location.reload(true);
    }).catch(error => {
      setServerMessage(error.message);
    });
  };

  const set_project_to_working = projectID => {
    const token = localStorage.getItem('token');
    const userID = localStorage.getItem('userID');
    fetch(`${BASE_URL}/${userID}/projects/${projectID}/working`, {
      method: 'PUT',
      // mode: "no-cors",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // 'Content-Type': 'application/x-www-form-urlencoded',

      },
      body: JSON.stringify({})
    }).then(response => response.json()).then(result => {
      location.reload(true); // setServerMessage(result.message)
    }).catch(error => {
      setServerMessage(error.message);
    });
  };

  const set_project_to_completed = projectID => {
    const token = localStorage.getItem('token');
    const userID = localStorage.getItem('userID');
    fetch(`${BASE_URL}/${userID}/projects/${projectID}/completed`, {
      method: 'PUT',
      // mode: "no-cors",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // 'Content-Type': 'application/x-www-form-urlencoded',

      },
      body: JSON.stringify({})
    }).then(response => response.json()).then(result => {
      // setServerMessage(result.message)
      location.reload(true);
    }).catch(error => {
      setServerMessage(error.message);
    });
  };

  const value = {
    projects,
    singleproject,
    serverMessage,
    setServerMessage,
    get_all_projects,
    get_single_project,
    create_single_project,
    projectID,
    setProjectID,
    set_project_to_working,
    set_project_to_completed
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProjectContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 175,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectContext);

/***/ }),

/***/ "./context/TaskContext.js":
/*!********************************!*\
  !*** ./context/TaskContext.js ***!
  \********************************/
/*! exports provided: useTask, TaskProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTask", function() { return useTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskProvider", function() { return TaskProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/gi */ "react-icons/gi");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthContext */ "./context/AuthContext.js");

var _jsxFileName = "C:\\Users\\USER\\Desktop\\targetometer-client-main\\context\\TaskContext.js";



const TaskContextDefaultValues = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  tasks: [],
  singleTask: []
});
const TaskContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(TaskContextDefaultValues);
const BASE_URL = 'https://targetometer-server.herokuapp.com/api/v1/users';
function useTask() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(TaskContext);
}
const TaskProvider = ({
  children
}) => {
  const {
    user
  } = Object(_AuthContext__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();
  const {
    0: tasks,
    1: setTask
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: singleTask,
    1: setSingleTask
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: taskServerMessage,
    1: settaskServerMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const get_all_tasks = () => {
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');
    const projectID = localStorage.getItem('selectedProjectID');
    console.log(`${BASE_URL}/${userID}/projects/${projectID}/tasks`);
    fetch(`${BASE_URL}/${userID}/projects/${projectID}/tasks`, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // 'Content-Type': 'application/x-www-form-urlencoded',

      }
    }).then(response => response.json()).then(result => {
      console.log(result.result);
      setTask([...result.result]);
      localStorage.setItem('taskInfo', JSON.stringify(result.result));
    }).catch(error => {
      settaskServerMessage(error.message);
    });
  };

  const get_single_task = taskID => {
    const projectID = localStorage.getItem('selectedProjectID');
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');
    fetch(`${BASE_URL}/${userID}/projects/${projectID}/tasks/${taskID}`, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // 'Content-Type': 'application/x-www-form-urlencoded',

      }
    }).then(response => response.json()).then(result => {
      console.log(result);
      localStorage.setItem('tasks', JSON.stringify(result.result));
      setTask([...result.result]);
    }).catch(error => {
      settaskServerMessage(error.message);
    });
  };

  const create_single_task = (title, description, startdate, enddate) => {
    const token = localStorage.getItem('token');
    const projectID = localStorage.getItem('selectedProjectID');
    const userID = localStorage.getItem('userID');
    fetch(`${BASE_URL}/${userID}/projects/${projectID}/tasks/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // 'Content-Type': 'application/x-www-form-urlencoded',

      },
      body: JSON.stringify({
        title: title,
        description: description,
        startdate: startdate,
        enddate: enddate
      })
    }).then(() => {
      settaskServerMessage("Task Created Successfully");
      location.reload(true);
    }).catch(error => {
      settaskServerMessage(error.message);
    });
  };

  const set_task_to_working = taskID => {
    const token = localStorage.getItem('token');
    const userID = localStorage.getItem('userID');
    const projectID = localStorage.getItem('selectedProjectID');
    fetch(`${BASE_URL}/${userID}/projects/${projectID}/tasks/${taskID}/working`, {
      method: 'PUT',
      // mode: "no-cors",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // 'Content-Type': 'application/x-www-form-urlencoded',

      },
      body: JSON.stringify({})
    }).then(response => response.json()).then(result => {
      console.log(result.message);
      location.reload(true);
    }).catch(error => {
      console.log(error.message);
    });
  };

  const set_task_to_completed = taskID => {
    const token = localStorage.getItem('token');
    const userID = localStorage.getItem('userID');
    const projectID = localStorage.getItem('selectedProjectID');
    fetch(`${BASE_URL}/${userID}/projects/${projectID}/tasks/${taskID}/completed`, {
      method: 'PUT',
      // mode: "no-cors",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // 'Content-Type': 'application/x-www-form-urlencoded',

      },
      body: JSON.stringify({})
    }).then(response => response.json()).then(result => {
      console.log(result.message);
      location.reload(true);
    }).catch(error => {
      console.log(error.message);
    });
  };

  const value = {
    tasks,
    singleTask,
    taskServerMessage,
    get_all_tasks,
    get_single_task,
    create_single_task,
    set_task_to_completed,
    set_task_to_working,
    settaskServerMessage
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TaskContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (TaskContext);

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/app.css */ "./styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _context_ProjectContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/ProjectContext */ "./context/ProjectContext.js");
/* harmony import */ var _context_TaskContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/TaskContext */ "./context/TaskContext.js");


var _jsxFileName = "C:\\Users\\USER\\Desktop\\targetometer-client-main\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_ProjectContext__WEBPACK_IMPORTED_MODULE_5__["ProjectProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_TaskContext__WEBPACK_IMPORTED_MODULE_6__["TaskProvider"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/app.css":
/*!************************!*\
  !*** ./styles/app.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/gi":
/*!*********************************!*\
  !*** external "react-icons/gi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/gi");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1Byb2plY3RDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVGFza0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9naVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0RGVmYXVsdFZhbHVlcyIsInVzZXIiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJCQVNFX1VSTCIsIlVTRVJfVVJMIiwidXNlQXV0aCIsInVzZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZXJ2ZXJNZXNzYWdlIiwic2V0U2VydmVyTWVzc2FnZSIsInNpZ25fdXAiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJjb25maXJtcGFzc3dvcmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0IiwianNvbiIsInJvdXRlciIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInZlcmlmeV91c2VyIiwib3RwIiwic2lnbl9pbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsImRhdGEiLCJ1c2VySUQiLCJnZXRJdGVtIiwiZ2V0X3VzZXIiLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciIsImRlbGV0ZV91c2VyIiwidXBkYXRlX3VzZXIiLCJwcm9maWxlaW1hZ2UiLCJhZGRyZXNzIiwiY29udGFjdCIsIm9jY3VwYXRpb24iLCJ2YWx1ZSIsIlByb2plY3RDb250ZXh0RGVmYXVsdFZhbHVlcyIsInByb2plY3RzIiwic2luZ2xlcHJvamVjdCIsIlByb2plY3RDb250ZXh0IiwidXNlUHJvamVjdCIsIlByb2plY3RQcm92aWRlciIsInNldFByb2plY3QiLCJzZXRTaW5nbGVQcm9qZWN0IiwicHJvamVjdElEIiwic2V0UHJvamVjdElEIiwiZ2V0X2FsbF9wcm9qZWN0cyIsImdldF9zaW5nbGVfcHJvamVjdCIsInNldFByb2plY3RzIiwiY3JlYXRlX3NpbmdsZV9wcm9qZWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXJ0ZGF0ZSIsImVuZGRhdGUiLCJsb2NhdGlvbiIsInJlbG9hZCIsInNldF9wcm9qZWN0X3RvX3dvcmtpbmciLCJzZXRfcHJvamVjdF90b19jb21wbGV0ZWQiLCJUYXNrQ29udGV4dERlZmF1bHRWYWx1ZXMiLCJ0YXNrcyIsInNpbmdsZVRhc2siLCJUYXNrQ29udGV4dCIsInVzZVRhc2siLCJUYXNrUHJvdmlkZXIiLCJzZXRUYXNrIiwic2V0U2luZ2xlVGFzayIsInRhc2tTZXJ2ZXJNZXNzYWdlIiwic2V0dGFza1NlcnZlck1lc3NhZ2UiLCJnZXRfYWxsX3Rhc2tzIiwiZ2V0X3NpbmdsZV90YXNrIiwidGFza0lEIiwiY3JlYXRlX3NpbmdsZV90YXNrIiwic2V0X3Rhc2tfdG9fd29ya2luZyIsInNldF90YXNrX3RvX2NvbXBsZXRlZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtR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U0FBSyxFQUFFaEMsS0FBN0I7QUFBQSxjQUNLakQ7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQTNKTTtBQTZKUTJFLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU2EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFO0FBQUEsMkJBQ0EscUVBQUMsaUVBQUQ7QUFBQSw2QkFDRSxxRUFBQyx1RUFBRDtBQUFBLCtCQUNFLHFFQUFDLGlFQUFEO0FBQUEsaUNBQ0EscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREY7QUFZRDs7QUFFY0Ysb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHJvdXRlciwge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5jb25zdCBBdXRoQ29udGV4dERlZmF1bHRWYWx1ZXM9e1xuICAgIHVzZXI6W10sXG4gXG4gICBcbn1cblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KEF1dGhDb250ZXh0RGVmYXVsdFZhbHVlcylcblxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly90YXJnZXRvbWV0ZXItc2VydmVyLmhlcm9rdWFwcC5jb20vYXBpL3YxL2F1dGgnXG5jb25zdCBVU0VSX1VSTCA9ICdodHRwczovL3RhcmdldG9tZXRlci1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdXNlcnMnXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpe1xuICAgIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtjaGlsZHJlbn0pe1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFtdKVxuICAgIFxuICAgIGNvbnN0IFt1c2VySW5mbywgc2V0VXNlckluZm9dID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIC8vIGNvbnN0IFtzaW5nbGVfcm91dGUsIHNldFNpbmdsZV9yb3V0ZV0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbc2VydmVyTWVzc2FnZSwgc2V0U2VydmVyTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBzaWduX3VwID0gIGFzeW5jKGVtYWlsLCBwYXNzd29yZCwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgY29uZmlybXBhc3N3b3JkKSA9PntcbiAgICAgICBcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vY3JlYXRlYWNjb3VudGAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0bmFtZTogbGFzdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6ZW1haWwsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VydmVyTWVzc2FnZShcIkFjY291bnQgQ3JlYXRlZCBTdWNjZXNzZnVsbHksIHBsZWFzZSB2ZXJpZnkgZW1haWxcIilcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvdmVyaWZ5dXNlcmApXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgICAgICBzZXRTZXJ2ZXJNZXNzYWdlKFwiV2VsY29tZVwiKVxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcblxuICAgIC8vICAgICBmZXRjaChgJHtCQVNFX1VSTH0vY3JlYXRlYWNjb3VudGAsIHtcbiAgICAvLyAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIC8vICAgICAgICAgaGVhZGVyczoge1xuICAgIC8vICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAvLyAgICAgICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgLy8gICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgLy8gICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWUsXG4gICAgLy8gICAgICAgICAgICAgbGFzdG5hbWU6IGxhc3RuYW1lLFxuICAgIC8vICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAvLyAgICAgICAgICAgICBlbWFpbDplbWFpbCwgXG4gICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLy8gICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICBcbiAgICAvLyAgICAgc2V0U2VydmVyTWVzc2FnZShcIkFjY291bnQgQ3JlYXRlZCBTdWNjZXNzZnVsbHksIHBsZWFzZSBsb2dpbiB0byBhY2Nlc3MgZGFzaGJvYXJkXCIpXG4gICAgLy8gICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAvLyAgICAgICAgIHJvdXRlci5wdXNoKGAvYClcbiAgICAvLyAgICAgfSwgMzAwMDApXG4gICAgICAgIFxuICAgIC8vICAgIH0pXG4gICAgLy8gICAgIC5jYXRjaChlcnI9PntcbiAgICAvLyAgICAgICAgIHNldFNlcnZlck1lc3NhZ2UoZXJyLm1lc3NhZ2UpXG4gICAgLy8gICAgfSlcbiAgICB9XG4vLyB2ZXJpZnkgYWNjb3VudFxuICAgIGNvbnN0IHZlcmlmeV91c2VyID0gYXN5bmMgKG90cCkgPT4ge1xuICAgICAgICBzZXRTZXJ2ZXJNZXNzYWdlKFwiRW1haWwgaGFzIGJlZW4gdmVyaWZpZWQgcGxlYXNlIGxvZ2luXCIpXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgLy8gdHJ5e1xuICAgICAgICAvLyAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgICAgICAgLy8gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L3ZlcmlmeWFjY291bnRgLCB7XG4gICAgICAgIC8vICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAvLyAgICAgaGVhZGVyczoge1xuICAgICAgICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgLy8gICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgdG9rZW46IG90cCxcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgIH0pXG4gICAgICAgIC8vIH0pXG4gICAgICAgIFxuICAgICAgICAvLyBzZXRTZXJ2ZXJNZXNzYWdlKCdFbWFpbCBWZXJpZmllZCBQbGVhc2UgTG9naW4nKVxuICAgICAgICBcbiAgICAgICAgLy8gICAgIHJvdXRlci5wdXNoKGAvYClcbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIH1jYXRjaChlcnJvcil7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxuICAgICAgICAvLyAgICAgc2V0U2VydmVyTWVzc2FnZShcIkVycm9yIHZlcmlmaXlpbmcgdG9rZW5cIikgXG4gICAgICAgIC8vICAgIHNldElzTG9hZGluZyhmYWxzZSkgXG4gICAgICAgICAgIFxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbl9pbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+e1xuXG4gICAgICAgdHJ5e1xuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS9sb2dpbmAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOmVtYWlsLCBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXN1bHQudG9rZW4pXG4gICAgICAgIFxuICAgICAgICAgICAgc2V0VXNlcihyZXN1bHQuZGF0YSlcbiAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEpKVxuICAgICAgICBcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaXJzdG5hbWUnLCByZXN1bHQuZGF0YS5maXJzdG5hbWUgKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RuYW1lJyxyZXN1bHQuZGF0YS5sYXN0bmFtZSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySUQnLCByZXN1bHQuZGF0YS51c2VySUQpXG4gICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0bmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdG5hbWUnKVxuICAgICAgICAgICAgY29uc3QgbGFzdG5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdG5hbWUnKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRTZXJ2ZXJNZXNzYWdlKHJlc3VsdC5tZXNzYWdlKVxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC8ke2ZpcnN0bmFtZX1fJHtsYXN0bmFtZX1gKVxuICAgICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICAgICAgc2V0U2VydmVyTWVzc2FnZSgnZXJyb3Igc2lnbmluZyBpbicpXG4gICAgICAgIFxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICAgIHNldFNlcnZlck1lc3NhZ2UoZXJyLm1lc3NhZ2UpIFxuICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRfdXNlciA9ICgpPT57XG4gICAgICAgIC8vIGNvbnNvbGUgXG4gICAgICAgIGNvbnN0IHVzZXJJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySUQnKVxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgICAgIFxuICAgICAgICBmZXRjaChgJHtVU0VSX1VSTH0vJHt1c2VySUR9L2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT5yZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQucmVzdWx0KVxuICAgICAgICAgICAgc2V0VXNlcihbLi4ucmVzdWx0LnJlc3VsdF0pXG4gICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgIHNldFNlcnZlck1lc3NhZ2UoJycpXG4gICAgfSlcbn1cbmNvbnN0IGRlbGV0ZV91c2VyID0gKCk9PntcbiAgICBjb25zdCB1c2VySUQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklEJylcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgXG4gICAgZmV0Y2goYCR7VVNFUl9VUkx9LyR7dXNlcklEfS9gLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2U9PnJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgIHNldFNlcnZlck1lc3NhZ2UoXCJ1c2VyIGRlbGV0ZWRcIilcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHNldFNlcnZlck1lc3NhZ2UoXCJ1c2VyIGRlbGV0ZWRcIilcbn0pXG59XG5cbmNvbnN0IHVwZGF0ZV91c2VyID0gKHByb2ZpbGVpbWFnZSwgYWRkcmVzcyxlbWFpbCwgY29udGFjdCwgb2NjdXBhdGlvbiwgcGFzc3dvcmQpID0+e1xuICAgIGNvbnN0IHVzZXJJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySUQnKVxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICBcbiAgICBmZXRjaChgJHtVU0VSX1VSTH0vJHt1c2VySUR9L2AsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgLy8gbW9kZTogXCJuby1jb3JzXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzonbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgIHByb2ZpbGVpbWFnZTogcHJvZmlsZWltYWdlLFxuICAgICAgICAgICAgYWRkcmVzczphZGRyZXNzLCBcbiAgICAgICAgICAgIGNvbnRhY3Q6IGNvbnRhY3QsXG4gICAgICAgICAgICBvY2N1cGF0aW9uOiBvY2N1cGF0aW9uLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzdWx0KT0+e1xuICAgICAgICBzZXRTZXJ2ZXJNZXNzYWdlKFwidXNlciBwcm9maWxlIHVwZGF0ZWRcIilcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlc3VsdClcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIHByb2ZpbGUgdXBkYXRlZFwiKVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcbiAgICAgICAgc2V0U2VydmVyTWVzc2FnZSgnZXJyb3IgdXBkYXRpbmcgdXNlciBwcm9maWxlLCBwbGVhc2UgdHJ5IGFnYWluJylcbiAgICB9KVxufVxuXG5cblxuICBcblxuICAgIGNvbnN0IHZhbHVlID0ge1xuICAgICAgICB1c2VyLFxuICAgICAgICBzaWduX2luLFxuICAgICAgICBzaWduX3VwLFxuICAgICAgICBzZXJ2ZXJNZXNzYWdlLFxuICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgdmVyaWZ5X3VzZXIsXG4gICAgICAgIHNldElzTG9hZGluZyxcbiAgICAgICAgc2V0U2VydmVyTWVzc2FnZSxcbiAgICAgICAgZ2V0X3VzZXIsXG4gICAgICAgIHVwZGF0ZV91c2VyLFxuICAgICAgICBkZWxldGVfdXNlclxuICAgICAgICAvLyBkZWxldGVfdXNlcixcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiXG5pbXBvcnQgeyAgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdpVG9rZW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi9BdXRoQ29udGV4dFwiO1xuXG5jb25zdCBQcm9qZWN0Q29udGV4dERlZmF1bHRWYWx1ZXMgPSBjcmVhdGVDb250ZXh0KHtcbiAgICBwcm9qZWN0czogW10sXG4gICAgc2luZ2xlcHJvamVjdDogW10sXG4gICBcbn0pXG5cblxuXG5jb25zdCBQcm9qZWN0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoUHJvamVjdENvbnRleHREZWZhdWx0VmFsdWVzKVxuXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3RhcmdldG9tZXRlci1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdXNlcnMnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm9qZWN0KCl7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoUHJvamVjdENvbnRleHQpXG59XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0UHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT57XG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlQXV0aCgpXG4gICAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtzaW5nbGVwcm9qZWN0LCBzZXRTaW5nbGVQcm9qZWN0XSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtzZXJ2ZXJNZXNzYWdlLCBzZXRTZXJ2ZXJNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtwcm9qZWN0SUQsIHNldFByb2plY3RJRF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBnZXRfYWxsX3Byb2plY3RzID0gKCkgPT57XG4gICAgICAgIGNvbnN0IHVzZXJJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySUQnKVxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgICBcbiAgICAgICAgZmV0Y2goYCR7QkFTRV9VUkx9LyR7dXNlcklEfS9wcm9qZWN0c2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT5yZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdHMnKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlc3VsdClcbiAgICAgICAgICAgIHNldFByb2plY3QoWy4uLnJlc3VsdC5yZXN1bHRdKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgc2V0U2VydmVyTWVzc2FnZShlcnJvci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIFxuICAgIGNvbnN0IGdldF9zaW5nbGVfcHJvamVjdCA9KCk9PntcbiAgICAgICAgY29uc3QgcHJvamVjdElEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdGVkUHJvamVjdElEJylcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgICAgICBjb25zdCB1c2VySUQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklEJylcbiAgICAgICAgZmV0Y2goYCR7QkFTRV9VUkx9LyR7dXNlcklEfS9wcm9qZWN0cy8ke3Byb2plY3RJRH0vYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQucmVzdWx0KVxuICAgICAgICAgICAgc2V0UHJvamVjdHMoLi4ucmVzdWx0LnJlc3VsdClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldFNlcnZlck1lc3NhZ2UoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVfc2luZ2xlX3Byb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBzdGFydGRhdGUsIGVuZGRhdGUpID0+e1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgICAgIGNvbnN0IHVzZXJJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySUQnKVxuICAgICAgICBjb25zdCBmaXJzdG5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RuYW1lJylcbiAgICAgICAgY29uc3QgbGFzdG5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdG5hbWUnKVxuICAgICAgICBmZXRjaChgJHtCQVNFX1VSTH0vJHt1c2VySUR9L3Byb2plY3RzYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAvLyBtb2RlOiBcIm5vLWNvcnNcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpkZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgc3RhcnRkYXRlOiBzdGFydGRhdGUsXG4gICAgICAgICAgICAgICAgZW5kZGF0ZTogZW5kZGF0ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgc2V0U2VydmVyTWVzc2FnZShyZXN1bHQubWVzc2FnZSlcbiAgICAgICAgICAgXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBzZXRTZXJ2ZXJNZXNzYWdlKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfVxuICAgY29uc3Qgc2V0X3Byb2plY3RfdG9fd29ya2luZyA9KHByb2plY3RJRCk9PntcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgICAgICBjb25zdCB1c2VySUQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklEJylcbiAgICAgICAgXG4gICAgICAgIGZldGNoKGAke0JBU0VfVVJMfS8ke3VzZXJJRH0vcHJvamVjdHMvJHtwcm9qZWN0SUR9L3dvcmtpbmdgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgLy8gbW9kZTogXCJuby1jb3JzXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgICAgICAgLy8gc2V0U2VydmVyTWVzc2FnZShyZXN1bHQubWVzc2FnZSlcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgc2V0U2VydmVyTWVzc2FnZShlcnJvci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNldF9wcm9qZWN0X3RvX2NvbXBsZXRlZCA9IChwcm9qZWN0SUQpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgICAgICBjb25zdCB1c2VySUQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklEJylcbiAgICAgICAgXG4gICAgICAgIGZldGNoKGAke0JBU0VfVVJMfS8ke3VzZXJJRH0vcHJvamVjdHMvJHtwcm9qZWN0SUR9L2NvbXBsZXRlZGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICAvLyBtb2RlOiBcIm5vLWNvcnNcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICAgIC8vIHNldFNlcnZlck1lc3NhZ2UocmVzdWx0Lm1lc3NhZ2UpXG4gICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldFNlcnZlck1lc3NhZ2UoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgcHJvamVjdHMsXG4gICAgICAgIHNpbmdsZXByb2plY3QsXG4gICAgICAgIHNlcnZlck1lc3NhZ2UsXG4gICAgICAgIHNldFNlcnZlck1lc3NhZ2UsXG4gICAgICAgIGdldF9hbGxfcHJvamVjdHMsXG4gICAgICAgIGdldF9zaW5nbGVfcHJvamVjdCxcbiAgICAgICBjcmVhdGVfc2luZ2xlX3Byb2plY3QsXG4gICAgICAgIHByb2plY3RJRCxcbiAgICAgICAgc2V0UHJvamVjdElELFxuICAgICAgICBzZXRfcHJvamVjdF90b193b3JraW5nLFxuICAgICAgICBzZXRfcHJvamVjdF90b19jb21wbGV0ZWRcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UHJvamVjdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Qcm9qZWN0Q29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDb250ZXh0IiwiXG5pbXBvcnQgeyAgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdpVG9rZW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi9BdXRoQ29udGV4dFwiO1xuXG5jb25zdCBUYXNrQ29udGV4dERlZmF1bHRWYWx1ZXMgPSBjcmVhdGVDb250ZXh0KHtcbiAgICB0YXNrczogW10sXG4gICAgc2luZ2xlVGFzazogW10sXG4gICBcbn0pXG5cbmNvbnN0IFRhc2tDb250ZXh0ID0gY3JlYXRlQ29udGV4dChUYXNrQ29udGV4dERlZmF1bHRWYWx1ZXMpXG5cbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vdGFyZ2V0b21ldGVyLXNlcnZlci5oZXJva3VhcHAuY29tL2FwaS92MS91c2VycydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhc2soKXtcbiAgICByZXR1cm4gdXNlQ29udGV4dChUYXNrQ29udGV4dClcbn1cblxuZXhwb3J0IGNvbnN0IFRhc2tQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PntcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VBdXRoKClcbiAgICBjb25zdCBbdGFza3MsIHNldFRhc2tdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3NpbmdsZVRhc2ssIHNldFNpbmdsZVRhc2tdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3Rhc2tTZXJ2ZXJNZXNzYWdlLCBzZXR0YXNrU2VydmVyTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IGdldF9hbGxfdGFza3MgPSAoKSA9PntcbiAgICAgICAgY29uc3QgdXNlcklEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJRCcpXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICAgICAgY29uc3QgcHJvamVjdElEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdGVkUHJvamVjdElEJylcbiAgICAgICAgY29uc29sZS5sb2coYCR7QkFTRV9VUkx9LyR7dXNlcklEfS9wcm9qZWN0cy8ke3Byb2plY3RJRH0vdGFza3NgIClcbiAgICAgICAgZmV0Y2goYCR7QkFTRV9VUkx9LyR7dXNlcklEfS9wcm9qZWN0cy8ke3Byb2plY3RJRH0vdGFza3NgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZT0+cmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlc3VsdClcbiAgICAgICAgICAgIHNldFRhc2soWy4uLnJlc3VsdC5yZXN1bHRdKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tJbmZvJyxKU09OLnN0cmluZ2lmeShyZXN1bHQucmVzdWx0KSApXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBzZXR0YXNrU2VydmVyTWVzc2FnZShlcnJvci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGdldF9zaW5nbGVfdGFzayA9KCB0YXNrSUQpPT57XG4gICAgICAgIGNvbnN0IHByb2plY3RJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZFByb2plY3RJRCcpXG4gICAgICAgIGNvbnN0IHVzZXJJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySUQnKVxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgICAgZmV0Y2goYCR7QkFTRV9VUkx9LyR7dXNlcklEfS9wcm9qZWN0cy8ke3Byb2plY3RJRH0vdGFza3MvJHt0YXNrSUR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJyxKU09OLnN0cmluZ2lmeShyZXN1bHQucmVzdWx0KSlcbiAgICAgICAgICAgIHNldFRhc2soWy4uLnJlc3VsdC5yZXN1bHRdKVxuICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBzZXR0YXNrU2VydmVyTWVzc2FnZShlcnJvci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZV9zaW5nbGVfdGFzayA9ICggdGl0bGUsIGRlc2NyaXB0aW9uLCBzdGFydGRhdGUsIGVuZGRhdGUpID0+e1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgICAgIGNvbnN0IHByb2plY3RJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZFByb2plY3RJRCcpXG4gICAgICAgIGNvbnN0IHVzZXJJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySUQnKVxuICAgICBcbiAgICAgICAgZmV0Y2goYCR7QkFTRV9VUkx9LyR7dXNlcklEfS9wcm9qZWN0cy8ke3Byb2plY3RJRH0vdGFza3MvYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpkZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgc3RhcnRkYXRlOiBzdGFydGRhdGUsXG4gICAgICAgICAgICAgICAgZW5kZGF0ZTogZW5kZGF0ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCk9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICBzZXR0YXNrU2VydmVyTWVzc2FnZShcIlRhc2sgQ3JlYXRlZCBTdWNjZXNzZnVsbHlcIilcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldHRhc2tTZXJ2ZXJNZXNzYWdlKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0X3Rhc2tfdG9fd29ya2luZyA9KHRhc2tJRCk9PntcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgICAgICBjb25zdCB1c2VySUQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklEJylcbiAgICAgICAgY29uc3QgcHJvamVjdElEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdGVkUHJvamVjdElEJylcbiAgICAgICAgZmV0Y2goYCR7QkFTRV9VUkx9LyR7dXNlcklEfS9wcm9qZWN0cy8ke3Byb2plY3RJRH0vdGFza3MvJHt0YXNrSUR9L3dvcmtpbmdgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgLy8gbW9kZTogXCJuby1jb3JzXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0Lm1lc3NhZ2UpXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNldF90YXNrX3RvX2NvbXBsZXRlZCA9ICh0YXNrSUQpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgICAgICBjb25zdCB1c2VySUQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklEJylcbiAgICAgICAgY29uc3QgcHJvamVjdElEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdGVkUHJvamVjdElEJylcbiAgICAgICAgZmV0Y2goYCR7QkFTRV9VUkx9LyR7dXNlcklEfS9wcm9qZWN0cy8ke3Byb2plY3RJRH0vdGFza3MvJHt0YXNrSUR9L2NvbXBsZXRlZGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICAvLyBtb2RlOiBcIm5vLWNvcnNcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5tZXNzYWdlKVxuICAgICAgICAgXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0ge1xuICAgICAgICB0YXNrcyxcbiAgICAgICAgc2luZ2xlVGFzayxcbiAgICAgICAgdGFza1NlcnZlck1lc3NhZ2UsXG4gICAgICAgIGdldF9hbGxfdGFza3MsXG4gICAgICAgIGdldF9zaW5nbGVfdGFzayxcbiAgICAgICAgY3JlYXRlX3NpbmdsZV90YXNrLFxuICAgICAgICBzZXRfdGFza190b19jb21wbGV0ZWQsXG4gICAgICAgIHNldF90YXNrX3RvX3dvcmtpbmcsXG4gICAgICAgIHNldHRhc2tTZXJ2ZXJNZXNzYWdlXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRhc2tDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVGFza0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrQ29udGV4dCIsImltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2FwcC5jc3MnXG5pbXBvcnQge0F1dGhQcm92aWRlcn0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCdcbmltcG9ydCB7IFByb2plY3RDb250ZXh0UHJvdmlkZXIsIFByb2plY3RQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L1Byb2plY3RDb250ZXh0XCJcbmltcG9ydCB7IFRhc2tDb250ZXh0UHJvdmlkZXIsIFRhc2tQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L1Rhc2tDb250ZXh0XCJcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPFByb2plY3RQcm92aWRlcj5cbiAgICAgICAgPFRhc2tQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1Rhc2tQcm92aWRlcj5cbiAgICAgIDwvUHJvamVjdFByb3ZpZGVyPlxuICAgIFxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2dpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9