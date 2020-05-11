class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit);
    this.formElement.addEventListener('click', this.handleUpdate);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('wow nice');
    var formData = new FormData(event.target);
    var name = formData.get('name');
    var course = formData.get('course');
    var grade = formData.get('grade');
    this.createGrade(name, course, grade);
    event.target.reset();
  }
  onUpdate(sendUpdate) {
    this.sendUpdate = sendUpdate;
  }
  handleUpdate(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    console.log('form data at handle update');
    var name = formData.get('name');
    var course = formData.get('course');
    var grade = formData.get('grade');
    var id = formData.get('id');
    console.log('handle update etc', name, course, grade, id)
    this.sendUpdate(name, course, grade, id);
    event.target.reset();
  }
}
