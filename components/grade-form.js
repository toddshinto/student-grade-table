class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.currentGrade = null;
    this.isUpdating = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit);
    // this.formElement.addEventListener('submit', this.handleUpdate);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('wow nice');
    console.log(event);
    var formData = new FormData(event.target);
    var name = formData.get('name');
    var course = formData.get('course');
    var grade = formData.get('grade');
    this.createGrade(name, course, grade);
    event.target.reset();
  }

  // boolean isUpdating = false
  // store grade id of grade being updated (this.currentGrade = null);
  // after edit mode set to current id
  //
  setUpdating(id) {
    this.currentGrade = id;
    this.isUpdating = true;
    this.formElement.removeEventListener('submit', this.handleSubmit);
    this.formElement.addEventListener('submit', this.handleUpdate);
  }
  onUpdate(sendUpdate) {
    this.sendUpdate = sendUpdate;
  }
  handleUpdate(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    console.log('form data at handle update', event.target);
    var name = formData.get('name');
    var course = formData.get('course');
    var grade = formData.get('grade');
    var id = this.currentGrade;
    console.log('handle update etc', name, course, grade, id)
    this.sendUpdate(name, course, grade, id);
    event.target.reset();
  }
}
