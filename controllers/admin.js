const Admin = require('../models/admin');
const fs = require('fs');
// const path = require('path');

// const config = require('../config/twilio');
// const client = require('twilio')(config.accountSID, config.authToken);

module.exports.Activities = (req, res) => {
    return res.render('activities', {
        title: 'Activities '
    })
}
module.exports.Expenses = (req, res) => {
    return res.render('expenses', {
        title: 'Expenses '
    })
}
module.exports.addAppointment = (req, res) => {
    return res.render('add-appointment', {
        title: 'Add Appointment '
    })
}
module.exports.Enteries = (req, res) => {
    return res.render('enteries', {
        title: 'Enteries '
    })
}
module.exports.phoneLogin = (req, res) => {
    return res.render('phone_login', {
        title: 'Phone Login '
    })
}
module.exports.addAsset = (req, res) => {
    return res.render('add-asset', {
        title: 'Add Asset '
    })
}
module.exports.verifyOtp = (req, res) => {
    return res.render('verify_otp', {
        title: 'Verify Otp '
    })
}
module.exports.addBlog = (req, res) => {
    return res.render('add-blog', {
        title: 'Add Blog '
    })
}
module.exports.addDepartment = (req, res) => {
    return res.render('add-department', {
        title: 'Add Department'
    })
}
module.exports.addDoctor = (req, res) => {
    return res.render('add-doctor', {
        title: 'Add Doctor '
    })
}
module.exports.addEmployee = (req, res) => {
    return res.render('add-employee', {
        title: 'Add Employee '
    })
}
module.exports.addExpense = (req, res) => {
    return res.render('add-expense', {
        title: 'Add Expense '
    })
}
module.exports.addHoliday = (req, res) => {
    return res.render('add-holiday', {
        title: 'Add Holiday '
    })
}
module.exports.addLeavetype = (req, res) => {
    return res.render('add-leave-type', {
        title: 'Add Leave Type '
    })
}
module.exports.addLeave = (req, res) => {
    return res.render('add-leave', {
        title: 'Add Leave '
    })
}
module.exports.addPatient = (req, res) => {
    return res.render('add-patient', {
        title: 'Add Patient '
    })
}
module.exports.addProvidentFund = (req, res) => {
    return res.render('add-provident-fund', {
        title: 'Add ProvidentFund '
    })
}
module.exports.addRole = (req, res) => {
    return res.render('add-role', {
        title: 'Add Role '
    })
}
module.exports.addSalary = (req, res) => {
    return res.render('add-salary', {
        title: 'Add Salary '
    })
}
module.exports.addSehedule = (req, res) => {
    return res.render('add-salary', {
        title: 'Add Sehedule '
    })
}
module.exports.addTax = (req, res) => {
    return res.render('add-tax', {
        title: 'Add Tax '
    })
}
module.exports.Appointments = (req, res) => {
    return res.render('appointments', {
        title: ' Appointments '
    })
}
module.exports.Asset = (req, res) => {
    return res.render('assets', {
        title: ' Asset '
    })
}
module.exports.Attendance = (req, res) => {
    return res.render('attendance', {
        title: 'Attendance'
    })
}
module.exports.blankPage = (req, res) => {
    return res.render('blank-page', {
        title: ' Blank Page '
    })
}
module.exports.blogDetails = (req, res) => {
    return res.render('blog-details', {
        title: ' blog Details '
    })
}
module.exports.Blog = (req, res) => {
    return res.render('blog', {
        title: ' Blog '
    })
}
module.exports.Calender = (req, res) => {
    return res.render('calender', {
        title: ' Calender '
    })
}
module.exports.Calender = (req, res) => {
    return res.render('calender', {
        title: ' Calender '
    })
}
module.exports.changePassword = (req, res) => {
    return res.render('change-Password', {
        title: ' Change Password '
    })
}
module.exports.changePassword2 = (req, res) => {
    return res.render('change-Password2', {
        title: ' Change Password 2 '
    })
}
module.exports.Chat = (req, res) => {
    return res.render('chat', {
        title: 'Chat '
    })
}
module.exports.Compose = (req, res) => {
    return res.render('compose', {
        title: 'Compose '
    })
}
module.exports.createInvoice = (req, res) => {
    return res.render('create-invoice', {
        title: 'Create Invoice '
    })
}


module.exports.Departments = (req, res) => {
    return res.render('departments', {
        title: 'Departments '
    })
}
module.exports.Doctors = (req, res) => {
    return res.render('doctors', {
        title: 'Doctors '
    })
}
module.exports.EditAppointment = (req, res) => {
    return res.render('edit-appointment', {
        title: 'Edit Appointment '
    })
}
module.exports.EditAsset = (req, res) => {
    return res.render('edit-asset', {
        title: 'Edit Asset'
    })
}
module.exports.EditDoctor = (req, res) => {
    return res.render('edit-doctor', {
        title: 'Edit Doctor '
    })
}
module.exports.EditExpense = (req, res) => {
    return res.render('edit-expense', {
        title: 'Edit Expense '
    })
}
module.exports.EditHoliday = (req, res) => {
    return res.render('edit-holiday', {
        title: 'Edit Holiday '
    })
}

module.exports.EditEmployee = (req, res) => {
    return res.render('edit-employee', {
        title: 'Edit Employee '
    })
}
module.exports.EditInvoice = (req, res) => {
    return res.render('edit-invoice', {
        title: 'Edit Invoice '
    })
}
module.exports.EditLeaveType = (req, res) => {
    return res.render('edit-leave-type', {
        title: 'Edit Leave Type '
    })
}
module.exports.EditLeave = (req, res) => {
    return res.render('edit-leave', {
        title: 'Edit Leave '
    })
}
module.exports.EditPatient = (req, res) => {
    return res.render('edit-patient', {
        title: 'Edit Patient '
    })
}
module.exports.EditProfile = (req, res) => {
    return res.render('edit-profile', {
        title: 'Edit Profile '
    })
}
module.exports.EditProvidentFund = (req, res) => {
    return res.render('edit-provident-fund', {
        title: 'Edit Provident Fund '
    })
}
module.exports.EditRole = (req, res) => {
    return res.render('edit-role', {
        title: 'Edit Role '
    })
}
module.exports.EditSalary = (req, res) => {
    return res.render('edit-salary', {
        title: 'Edit Salary '
    })
}
module.exports.EditSchedule = (req, res) => {
    return res.render('edit-schedule', {
        title: 'Edit Schedule '
    })
}
module.exports.EditTax = (req, res) => {
    return res.render('edit-tax', {
        title: 'Edit Tax '
    })
}
module.exports.emailSettings = (req, res) => {
    return res.render('email-settings', {
        title: ' Email Settings '
    })
}
module.exports.Employees = (req, res) => {
    return res.render('employees', {
        title: 'Employees'
    })
}
module.exports.Error404 = (req, res) => {
    return res.render('error-404', {
        title: 'Error 404'
    })
}
module.exports.Error505 = (req, res) => {
    return res.render('error-505', {
        title: 'Error 505'
    })
}
module.exports.ExpenseReports = (req, res) => {
    return res.render('expense-reports', {
        title: 'Expense Reports'
    })
}
module.exports.Expense = (req, res) => {
    return res.render('expense', {
        title: 'Expense '
    })
}
module.exports.ForgotPassword = (req, res) => {
    return res.render('forgot-password', {
        title: 'Forgot Password'
    })
}
module.exports.FormBasicInputs = (req, res) => {
    return res.render('form-basic-inputs', {
        title: 'Form Basic Inputs'
    })
}
module.exports.Formhorizontal = (req, res) => {
    return res.render('form-horizontal', {
        title: 'Form horizontal'
    })
}
module.exports.FormInputGroup = (req, res) => {
    return res.render('form-input-groups', {
        title: 'Form Input Group'
    })
}
module.exports.formVerticals = (req, res) => {
    return res.render('form-verticals', {
        title: 'form Verticals'
    })
}
module.exports.Gallery = (req, res) => {
    return res.render('gallery', {
        title: 'Gallery'
    })
}
module.exports.Holidays = (req, res) => {
    return res.render('holidays', {
        title: 'Holidays'
    })
}
module.exports.Inbox = (req, res) => {
    return res.render('inbox', {
        title: 'Inbox'
    })
}
module.exports.Index2 = (req, res) => {
    return res.render('index-2', {
        title: 'Index2'
    })
}
module.exports.Index = (req, res) => {
    return res.render('index', {
        title: 'Index'
    })
}
module.exports.InvoiceReports = (req, res) => {
    return res.render('invoice-reports', {
        title: 'Invoice Reports'
    })
}
module.exports.InvoiceSettings = (req, res) => {
    return res.render('invoice-settings', {
        title: 'Invoice Settings'
    })
}
module.exports.InvoiceView = (req, res) => {
    return res.render('invoice-view', {
        title: 'Invoice View'
    })
}
module.exports.Invoices = (req, res) => {
    return res.render('invoices', {
        title: 'Invoices'
    })
}
module.exports.LeaveType = (req, res) => {
    return res.render('leave-type', {
        title: 'Leave Type'
    })
}
module.exports.Leaves = (req, res) => {
    return res.render('leave', {
        title: 'Leaves'
    })
}
module.exports.Localization = (req, res) => {
    return res.render('localization', {
        title: 'Localization'
    })
}
module.exports.Login = (req, res) => {
    return res.render('login', {
        title: 'Login'
    })
}
module.exports.MailView = (req, res) => {
    return res.render('mail-view', {
        title: 'Mail View'
    })
}
module.exports.NotificationSetting = (req, res) => {
    return res.render('notification-settings', {
        title: 'Notification Setting'
    })
}
module.exports.Patients = (req, res) => {
    return res.render('patients', {
        title: 'Patients'
    })
}
module.exports.Patients = (req, res) => {
    return res.render('patients', {
        title: 'Patients'
    })
}
module.exports.Register = (req, res) => {
    return res.render('register', {
        title: 'Register'
    })
}
module.exports.Paymets = (req, res) => {
    return res.render('payments', {
        title: 'Payments'
    })
}
module.exports.Profile = (req, res) => {
    return res.render('profile', {
        title: 'Profile'
    })
}
module.exports.ProvidentFund = (req, res) => {
    return res.render('provident-fund', {
        title: 'Provident Fund'
    })
}
module.exports.RolesPermission = (req, res) => {
    return res.render('roles-permissions', {
        title: 'Roles Permission'
    })
}
module.exports.Roles = (req, res) => {
    return res.render('roles', {
        title: 'Roles'
    })
}
module.exports.SalarySetting = (req, res) => {
    return res.render('salary-settings', {
        title: 'Salary Setting'
    })
}
module.exports.salaryView = (req, res) => {
    return res.render('salary-view', {
        title: 'Salary View'
    })
}
module.exports.Salary = (req, res) => {
    return res.render('salary', {
        title: 'Salary '
    })
}
module.exports.Schedule = (req, res) => {
    return res.render('schedule', {
        title: 'Schedule '
    })
}
module.exports.Settings = (req, res) => {
    return res.render('settings', {
        title: 'Settings '
    })
}
module.exports.TableBasic = (req, res) => {
    return res.render('table-basic', {
        title: 'Table Basic '
    })
}
module.exports.Tabs = (req, res) => {
    return res.render('tabs', {
        title: 'Tabs '
    })
}