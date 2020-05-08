class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    console.log(grades);
    var tbody = this.tableElement.querySelector('tbody');
    while (tbody.firstChild) {
      tbody.removeChild(tbody.lastChild);
    }
    for (let i = 0; i < grades.length; i++) {
      var row = this.renderGradeRow(grades[i], this.deleteGrade);
      tbody.append(row);
    }
    if (tbody.firstChild) {
      document.getElementById('no-grades').classList = 'hidden';
    } else {
      document.getElementById('no-grades').classList = '';
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
    deleteButton.textContent = "DELETE";
    deleteButton.classList = "btn-sm btn-danger";
    tdName.textContent = data.name;
    tdCourse.textContent = data.course;
    tdGrade.textContent = data.grade;
    deleteButton.addEventListener('click', function() {
      deleteGrade(data.id);
    });
    tdDelete.append(deleteButton);
    row.append(tdName, tdCourse, tdGrade, tdDelete);
    return row;
  }
}
