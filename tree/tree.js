class Tree {
  constructor(value) {
    this.root = new Node(value)
  }
}

class Node {
  children = []

  constructor(value) {
    this.value = value
  }

  push(value) {
    this.children.push(new Node(value))
  }
}

const tree = new Tree(50)

tree.root.push(30)
tree.root.push(20)

tree.root.children[0].push(5)
tree.root.children[0].push(15)
tree.root.children[1].push(10)

console.log(tree)
