class Element {
  constructor(attributes) {

    if (!attributes) {
      throw `Could not create Element. Attributes are not defined`
      return
    }

    if (!attributes.type) {
      throw `Could not create Element. Type is not defined`
      return
    }

    this.attributes = attributes

    this.createElem = function(){
      this.elem = document.createElement(attributes.type)
    }

    this.createElem()
  }

  hasAttributes() {
    if (this.attributes) {
      return true
    }
    console.log(`No attributes have been defined`)
    return false
  }

  hasStyles() {
    if (this.hasAttributes() && this.attributes.style) {
      return true
    }
    console.log(`No styles have been defined`)
    return false
  }

  hasElementAttributes() {
    if (this.hasAttributes() && this.attributes.elementAttributes) {
      return true
    }
    console.log(`No element attributes defined`)
  }

  hasElementContent() {
    if (this.hasAttributes() && this.attributes.content) {
      return true
    }
    console.log(`No element content defined`)
  }

  hasChildren() {
    if (this.hasAttributes() && this.attributes.children) {
      return true
    }
    return false
  }

  getStyles() {
    if (this.hasStyles()) {
      return this.attributes.style
    }
    return false
  }

  getElementAttributes() {
    if (this.hasAttributes() && this.hasElementAttributes()) {
      return this.attributes.elementAttributes
    }
    return false
  }

  getElementContent() {
    if (this.hasAttributes() && this.hasElementContent()) {
      return this.attributes.content
    }
    return false
  }

  getChildren() {
    if (this.hasChildren()) {
      return this.attributes.children
    }
    return false
  }

  renderChildren() {
    if (this.hasChildren()) {
      const children = this.getChildren()
      for (var child in children) {
        this.elem.appendChild(children[child].render())
      }
    }
  }

  setElementStyle(style, value) {
    this.elem.style[style] = value
  }

  setElementAttribute(attr, value) {
    this.elem.setAttribute(attr, value)
  }

  setElementContent(content) {
    this.elem.innerHTML = content + this.elem.innerHTML
  }

  applyStyles() {
    if (this.hasAttributes() && this.hasStyles()) {
      const styles = this.getStyles()
      for (var style in styles) {
        this.setElementStyle(style, styles[style])
      }
      return
    }
  }

  applyElementAttributes() {
    if (this.hasAttributes() && this.hasElementAttributes()) {
      const elemAttrs = this.getElementAttributes()
      for (var attr in elemAttrs) {
        this.setElementAttribute(attr, elemAttrs[attr])
      }
      return
    }
  }

  applyElementContent() {
    if (this.hasAttributes() && this.hasElementContent()) {
      this.setElementContent(this.getElementContent())
      return
    }
  }

  applyAttributes() {
    for (var attribute in this.attributes) {
      if (attribute === 'style' && this.hasStyles()) {
        this.applyStyles()
      }
      if (attribute === 'elementAttributes' && this.hasElementAttributes()) {
        this.applyElementAttributes()
      }
      if (attribute === 'content' && this.hasElementContent()) {
        this.applyElementContent()
      }
    }
    return
  }

  render() {
    this.renderChildren()
    this.applyAttributes()
    return this.elem
  }
}
