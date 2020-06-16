class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    console.log(grades);
    gradesList = grades;
    var tbody = this.tableElement.querySelector('tbody');
    while (tbody.firstChild) {
      tbody.removeChild(tbody.lastChild);
    }
    for (let i = 0; i < grades.length; i++) {
      var row = this.renderGradeRow(grades[i], this.editGrade, this.deleteGrade);
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
  onEditClick(editGrade) {
    this.editGrade = editGrade;
  }
  renderGradeRow(data, editGrade, deleteGrade) {
    var row = document.createElement('tr');
    var tdName = document.createElement('td');
    var tdCourse = document.createElement('td');
    var tdGrade = document.createElement('td');
    var tdEdit = document.createElement('td');
    var deleteButton = document.createElement('button');
    var editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList = "btn-sm btn-warning";
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList = "btn-sm btn-danger";
    tdName.textContent = data.name;
    tdCourse.textContent = data.course;
    tdGrade.textContent = data.grade;
    deleteButton.addEventListener('click', function() {
      deleteGrade(data.id);
    });
    editButton.addEventListener('click', function() {
      editGrade(data.id);
      document.getElementById('update-button').classList.remove('hidden');
      document.getElementById('submit-button').classList.add('hidden');
    });
    tdEdit.classList += ('operations');
    tdEdit.append(editButton, deleteButton);
    row.append(tdName, tdCourse, tdGrade, tdEdit);
    return row;
  }
}
