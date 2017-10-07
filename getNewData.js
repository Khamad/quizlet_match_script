// Execute this on page with all flash cards
function getNewData() {
  const tileTextDescMatch = /(?:adj\.)|(?:n\.)|(?:v\.)/g

  const terms = document.querySelectorAll('.SetPageTerm-wordText')
  const descs = document.querySelectorAll('.SetPageTerm-definitionText')
  let tiles = {},
    exceptions = []

  terms.forEach((termTile, ind) => {
    let term = termTile.textContent
    let desc = descs[ind].textContent

    tiles[term] = desc
    ;!desc.match(tileTextDescMatch) ? exceptions.push(desc) : null
  })

  return JSON.stringify({...tiles, exceptions})
}