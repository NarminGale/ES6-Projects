import fetchFollowers from './modules/fetchFollowers.js'
import displayFollowers from './modules/displayFollowers.js'
import paginate from './modules/paginate.js'
import displayButtons from './modules/displayButtons.js'

const title = document.querySelector('.section-title h1')
const btnContainer = document.querySelector('.btn-container')

let index = 0
let pages = []

const setupUI = () => {
  displayFollowers(pages[index])
  displayButtons(btnContainer, pages, index)
}

const init = async () => {
  const followers = await fetchFollowers()
  title.textContent = 'pagination'
  pages = paginate(followers)
  setupUI()
}

window.addEventListener('load', init)
