class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.editGrade = this.editGrade.bind(this);
    this.handleEditGradeError = this.handleEditGradeError.bind(this);
    this.handleEditGradeSuccess = this.handleEditGradeSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    var gradeAverage = 0;
    this.gradeTable.updateGrades(grades);
    for (let i = 0; i < grades.length; i++) {
      gradeAverage = (gradeAverage+grades[i].grade)
    }
    gradeAverage = (gradeAverage / grades.length);
    this.pageHeader.updateAverage(gradeAverage);
  }
  getGrades() {
    $.ajax ({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "xQTXNTY7"
      },
      success: this.handleGetGradesSuccess,
      fail: this.handleGetGradesError,
    })
  }
  createGrade(name, course, grade) {
    console.log('name: ', name, ' course: ', course, ' grade: ', grade);
    $.ajax ({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: {
        "X-Access-Token": "xQTXNTY7"
      },
      success: this.handleCreateGradeSuccess,
      fail: this.handleCreateGradeError
    })
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  editGrade(id) {
    var editIndex = gradesList.findIndex(item => item.id === id);
    document.querySelector('input[name="name"]').value = gradesList[editIndex].name;
    document.querySelector('input[name="course"]').value = gradesList[editIndex].course;
    document.querySelector('input[name="grade"]').value = gradesList[editIndex].grade;
  }
  sendUpdate(name, course, grade, id) {
    console.log('sendupdate n, c, g, i', name, course, grade, id);
    $.ajax ({
      method: "PATCH",
      url: "https://sgt.lfzprototypes.com/api/"+id,
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: {
        "X-Access-Token": "xQTXNTY7"
      },
      success: this.handleEditGradeSuccess,
      fail: this.handleEditGradeError
    })
    document.getElementById('submit-button').classList.remove('hidden');
    document.getElementById('update-button').classList.add('hidden');
  }
  handleEditGradeError(error) {
    console.error(error);
  }
  handleEditGradeSuccess() {
    this.getGrades();
  }
  deleteGrade(id) {
    console.log(id);
    $.ajax ({
      method: "DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/"+id,
      headers: {
        "X-Access-Token": "xQTXNTY7"
      },
      success: this.handleDeleteGradeSuccess,
      fail: this.handleDeleteGradeError
    })
  }
  handleDeleteGradeError(error) {
    console.error(error);
  }
  handleDeleteGradeSuccess() {
    this.getGrades();
  }
  start() {
    this.getGrades();
    this.gradeTable.onDeleteClick(this.deleteGrade);
    this.gradeTable.onEditClick(this.editGrade);
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeForm.onUpdate(this.sendUpdate);
  }
}
