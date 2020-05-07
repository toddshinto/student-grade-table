var tableElement = document.getElementById('table');
var newGradeTable = new GradeTable(tableElement);

var header = document.querySelector('header');
var pageHeader = new PageHeader(header);
var form = document.querySelector('form');

var gradeForm = new GradeForm(form);

var app = new App(newGradeTable, pageHeader, gradeForm);
app.start();
