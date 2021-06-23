import fetchFollowers from './modules/fetchFollowers.js'
import displayFollowers from './modules/displayFollowers.js'
import paginate from './modules/paginate.js'

const title = document.querySelector('.section-title h1')

const init = async () => {
  const followers = await fetchFollowers()
  displayFollowers(paginate(followers)[0])
  title.textContent = 'pagination'
  const pages = paginate(followers)
  console.log(pages)
}

window.addEventListener('load', init)
