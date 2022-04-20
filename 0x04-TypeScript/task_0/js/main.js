var firstSudent = {
    firstName: 'Laura',
    lastName: 'Callejas',
    age: 26,
    location: 'Bogota'
};
var secondSudent = {
    firstName: 'Julian',
    lastName: 'Castro',
    age: 24,
    location: 'Medellin'
};
var studentList = [firstSudent, secondSudent];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
/** <tr> table row, <td> data cell */
studentList.forEach(function (obj) {
    var row = document.createElement('tr');
    var cellName = document.createElement('td');
    var cellLocation = document.createElement('td');
    cellName.textContent = obj.firstName;
    cellLocation.textContent = obj.location;
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
