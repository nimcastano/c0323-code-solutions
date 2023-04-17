/* exported student */
const student = {
  firstName: 'Nimrod',
  lastName: 'Castano',
  subject: 'JavaScript',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction() {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
