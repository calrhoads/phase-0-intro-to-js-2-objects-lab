let employee = {
    name:"Cal",
    streetAdress:"123 Main st"
}
function updateEmployeeWithKeyAndValue(employee,name,streetAddress) {
    const newEmployee = {...employee};
    newEmployee[name] = streetAddress;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,name,streetAddress) {
    employee[name] = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee,key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee;
}