class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement
  }
  updateGrades(grades) {
    console.log(grades);
    var tbody = this.tableElement.querySelector('tbody');
    while (tbody.firstChild) {
      tbody.removeChild(tbody.lastChild);
    }
    for (let i = 0; i < grades.length; i++) {
      var row = document.createElement('tr');
      var name = document.createElement('td');
      var course = document.createElement('td');
      var grade = document.createElement('td');
      name.textContent = grades[i].name;
      course.textContent = grades[i].course;
      grade.textContent = grades[i].grade;
      row.append(name, course, grade);
      tbody.appendChild(row);
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var row = document.createElement('tr');
    var tdName = document.createElement('td');
    var tdCourse = document.createElement('td');
    var tdGrade = document.createElement('td');
    var tdDelete = document.createElement('td');
    var deleteButton = document.createElement('button');
    tdName.textContent = data.name;
    tdCourse.textContent = data.course;
    tdGrade.textContent = data.grade;
    deleteButton.addEventListener('click', this.deleteGrade(data.id));
    tdDelete.append(deleteButton);
    row.append(tdName, tdCourse, tdGrade, tdDelete);
    return row;
  }
}
