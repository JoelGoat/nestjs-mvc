import Card from './components/Card.js'
import User from './components/User.js'

const card = new Card('제목')
const user1 = new User('이름1', '나이1')
const user2 = new User('이름2', '나이2')
const user3 = new User('이름3', '나이3')

const body = document.body

card.setContent(user1.getTemplate())
card.setContent(user2.getTemplate())
card.setContent(user3.getTemplate())
body.appendChild(card.getTemplate())
