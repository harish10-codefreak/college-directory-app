import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Login from './Auth/Login';
import StudentDashboard from './Student/StudentDashboard';
import StudentProfile from './Student/StudentProfile';
import SearchStudents from './Student/SearchStudents';
import ContactAdvisors from './Student/ContactAdvisors';
import FacultyDashboard from './Faculty/FacultyDashboard';
import ManageClassList from './Faculty/ManageClassList';
import UpdateProfile from './Faculty/UpdateProfile';
import AdminDashboard from './Admin/AdminDashboard';
import ManageRecords from './Admin/ManageRecords';
import PrivateRoute from './Auth/PrivateRoute';
import './assets/styles.css';

const App = () => {
    const [role, setRole] = useState(localStorage.getItem('role'));

    useEffect(() => {
        setRole(localStorage.getItem('role'));
    }, []);

    return (
        <Router>
            <Header />
            <div className="container">
                <Sidebar role={role} />
                <div className="content">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <PrivateRoute path="/student/dashboard" component={StudentDashboard} />
                        <PrivateRoute path="/student/profile" component={StudentProfile} />
                        <PrivateRoute path="/student/search" component={SearchStudents} />
                        <PrivateRoute path="/student/advisors" component={ContactAdvisors} />
                        <PrivateRoute path="/faculty/dashboard" component={FacultyDashboard} />
                        <PrivateRoute path="/faculty/classlist" component={ManageClassList} />
                        <PrivateRoute path="/faculty/profile" component={UpdateProfile} />
                        <PrivateRoute path="/admin/dashboard" component={AdminDashboard} />
                        <PrivateRoute path="/admin/manage-records" component={ManageRecords} />
                        <Redirect from="/" to="/login" />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
