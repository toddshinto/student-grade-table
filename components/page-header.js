class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    console.log(newAverage);
    var gradeBadge = this.headerElement.querySelector('span');
    if (!newAverage) {
      gradeBadge.textContent = "N/A"
    } else {
      gradeBadge.textContent = Math.trunc(newAverage);
    }
  }
}
