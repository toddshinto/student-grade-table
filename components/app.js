class App {
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    console.log(grades);
  }
  constructor() {
    this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess.bind(this);
  }
  getGrades() {
    $.ajax ({
      method: "GET",
      url: "https://github.com/Learning-Fuze/sgt_api#get-all-grades",
      success: this.handleGetGradesSuccess(grades),
      error: this.handleGetGradesErorr(error)
    })
  }
  start() {
    this.getGrades();
  }
}
