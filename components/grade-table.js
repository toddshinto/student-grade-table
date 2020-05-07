class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement
  }
  updateGrades(grades) {
    console.log(grades);
    this.tableElement.querySelector('tbody').innerHTML = '';
  }
}
