export default class User {
  user
  age

  constructor(user, age) {
    this.user = user
    this.age = age
  }

  getTemplate() {
    const template = document.createElement('div')
    template.innerHTML = `
      <span>${this.user}</span>
      <span>${this.age}</span>
    `
    return template
  }
}
