const redElemAttr = {
  type: 'div',
  style: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: 'red'
  },
  content: 'This is some red content'
}

const redElem = new Element(redElemAttr)

const yellowElemAttr = {
  type: 'div',
  style: {
    padding: '10px',
    backgroundColor: 'yellow'
  },
  content: 'This is some yellow content',
}

const yellowElem = new Element(yellowElemAttr)

const blueElemAttr = {
  type: 'div',
  elementAttributes: {
    id: 'blue'
  },
  style: {
    padding: '10px',
    backgroundColor: 'blue',
    marginBottom: '10px',
  },
  content: 'This is some blue content',
  children: [
    yellowElem
  ]
}

const blueElem = new Element(blueElemAttr)

const greenElemAttr = {
  type: 'div',
  elementAttributes: {
    class: 'green'
  },
  style: {
    padding: '10px',
    backgroundColor: 'green'
  },
  content: 'This is some green content',
}

const greenElem = new Element(greenElemAttr)


const baseElemAttrs = {
  type: 'section',
  style: {
    padding: '10px',
    backgroundColor: 'black'
  },
  children: [
    redElem,
    blueElem,
    greenElem
  ]
}

const Elem = new Element(baseElemAttrs)

document.body.appendChild(Elem.render())
