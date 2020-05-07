class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    console.log(newAverage);
    var gradeBadge = this.headerElement.querySelector('span');
    gradeBadge.textContent = newAverage;
  }
}
