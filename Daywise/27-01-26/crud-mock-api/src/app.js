var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// ==============================
// CONFIG
// ==============================
var API_URL = "https://697836b05b9c0aed1e884c84.mockapi.io/api/v1/";
// ==============================
// STATE
// ==============================
var employees = [];
// ==============================
// DOM REFERENCES
// ==============================
var employeeList = document.getElementById("employeeList");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var roleInput = document.getElementById("role");
// ==============================
// READ – Load Employees
// ==============================
function loadEmployees() {
    return __awaiter(this, void 0, void 0, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(API_URL)];
                case 1:
                    res = _a.sent();
                    if (!res.ok)
                        throw new Error("Failed to load employees");
                    return [4 /*yield*/, res.json()];
                case 2:
                    employees = _a.sent();
                    renderEmployees();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error("Failed to load employees", err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// ==============================
// CREATE – Add Employee
// ==============================
function addEmployee() {
    return __awaiter(this, void 0, void 0, function () {
        var name, email, role, res, newEmployee, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = nameInput.value.trim();
                    email = emailInput.value.trim();
                    role = roleInput.value.trim();
                    if (!name || !email || !role) {
                        alert("All fields are required");
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(API_URL, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ name: name, email: email, role: role }),
                        })];
                case 2:
                    res = _a.sent();
                    if (!res.ok)
                        throw new Error("Failed to create employee");
                    return [4 /*yield*/, res.json()];
                case 3:
                    newEmployee = _a.sent();
                    employees.unshift(newEmployee);
                    renderEmployees();
                    nameInput.value = "";
                    emailInput.value = "";
                    roleInput.value = "";
                    return [3 /*break*/, 5];
                case 4:
                    err_2 = _a.sent();
                    console.error("Failed to add employee", err_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// ==============================
// UPDATE – Edit Employee
// ==============================
function editEmployee(id) {
    return __awaiter(this, void 0, void 0, function () {
        var employee, newName, newEmail, newRole, res, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    employee = employees.find(function (e) { return e.id === id; });
                    if (!employee)
                        return [2 /*return*/];
                    newName = prompt("Enter name", employee.name);
                    newEmail = prompt("Enter email", employee.email);
                    newRole = prompt("Enter role", employee.role);
                    if (!newName || !newEmail || !newRole)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(API_URL, "/").concat(id), {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                name: newName,
                                email: newEmail,
                                role: newRole,
                            }),
                        })];
                case 2:
                    res = _a.sent();
                    if (!res.ok)
                        throw new Error("Failed to update employee");
                    return [4 /*yield*/, res.json()];
                case 3:
                    _a.sent();
                    loadEmployees();
                    return [3 /*break*/, 5];
                case 4:
                    err_3 = _a.sent();
                    console.error("Update failed", err_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// ==============================
// DELETE – Remove Employee
// ==============================
function deleteEmployee(id) {
    return __awaiter(this, void 0, void 0, function () {
        var confirmDelete, res, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    confirmDelete = confirm("Are you sure you want to delete?");
                    if (!confirmDelete)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(API_URL, "/").concat(id), {
                            method: "DELETE",
                        })];
                case 2:
                    res = _a.sent();
                    if (!res.ok)
                        throw new Error("Failed to delete employee");
                    employees = employees.filter(function (e) { return e.id !== id; });
                    renderEmployees();
                    return [3 /*break*/, 4];
                case 3:
                    err_4 = _a.sent();
                    console.error("Delete failed", err_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// ==============================
// RENDER – Display Employees
// ==============================
function renderEmployees() {
    employeeList.innerHTML = "";
    employees.forEach(function (emp) {
        var li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-center";
        var info = document.createElement("div");
        info.innerHTML = "\n      <strong>".concat(emp.name, "</strong><br>\n      <small>").concat(emp.email, "</small><br>\n      <small class=\"text-muted\">").concat(emp.role, "</small>\n    ");
        var actions = document.createElement("div");
        var editBtn = document.createElement("button");
        editBtn.className = "btn btn-sm btn-outline-primary me-2";
        editBtn.textContent = "Edit";
        editBtn.onclick = function () { return editEmployee(emp.id); };
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-sm btn-outline-danger";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () { return deleteEmployee(emp.id); };
        actions.append(editBtn, deleteBtn);
        li.append(info, actions);
        employeeList.appendChild(li);
    });
}
// ==============================
// INITIAL LOAD
// ==============================
loadEmployees();
