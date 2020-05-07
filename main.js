var tableElement = document.getElementById('table');
var newGradeTable = new GradeTable(tableElement);

var header = document.querySelector('header');
var pageHeader = new PageHeader(header);

var app = new App(newGradeTable, pageHeader);
app.start();
