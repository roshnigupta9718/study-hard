const joined = () => {
  ++count
  let title = document.getElementById('title')
  console.log(count)
  title.innerText = 'thanks for joining the session!'

  let button = document.getElementById('btn')
  button.remove()
}

let btn = document.getElementById('btn')
let count = 0
btn.addEventListener('click', joined)
