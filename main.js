var tableElement = document.getElementById('table');
var noGrades = document.getElementById('no-grades');
var newGradeTable = new GradeTable(tableElement, noGrades);
var gradesList = [];
var header = document.querySelector('header');
var pageHeader = new PageHeader(header);
var form = document.querySelector('form');

var gradeForm = new GradeForm(form);

var app = new App(newGradeTable, pageHeader, gradeForm);
app.start();
