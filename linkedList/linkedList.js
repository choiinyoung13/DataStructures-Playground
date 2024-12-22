class LinkedList {
  head = null
  tail = null

  add(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
  }
}

class Node {
  prev = null
  next = null

  constructor(value) {
    this.value = value
  }
}

const list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)

console.log(list.head.value) // 1
console.log(list.tail.value) // 3
console.log(list.head.next.value) // 2
console.log(list.tail.prev.value) // 2
