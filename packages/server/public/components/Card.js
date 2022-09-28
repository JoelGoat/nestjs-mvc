export default class Card {
  title
  content

  constructor(title) {
    this.title = title
  }

  getTemplate() {
    const template = document.createElement('div')
    template.innerHTML = `<span>${this.title}</span>`
    // template.appendChild(this.content)
    return template
  }
}
