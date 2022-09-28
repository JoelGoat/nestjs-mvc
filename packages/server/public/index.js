import Card from './components/Card.js'
// import User from './components/User.js'

const card = new Card('제목')

const body = document.body

body.appendChild(card.getTemplate())
