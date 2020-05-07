class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
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
  start() {
    this.getGrades();
  }
}
