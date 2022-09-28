export default class Card {
  title
  content

  constructor(title) {
    this.title = title
  }

  setContent(content) {
    if (!this.content) this.content = document.createElement('div')
    this.content.appendChild(content)
  }

  getTemplate() {
    const template = document.createElement('div')
    template.innerHTML = `
      <span>${this.title}</span>
    `
    template.appendChild(this.content)
    return template
  }
}
