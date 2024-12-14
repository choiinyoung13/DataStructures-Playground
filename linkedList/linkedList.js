class LinkedList {
  length = 0
  head = null

  add(value) {
    if (this.head) {
      let current = this.head

      while (current.next) {
        current = current.next
      }
      current.next = new Node(value)
    } else {
      this.head = new Node(value)
    }
    return this.length++
  }

  search(index) {
    let current = this.head

    let count = 0
    while (count < index) {
      current = current?.next
      count++
    }
    return current?.value
  }
}

class Node {
  next = null
  constructor(value) {
    this.value = value
  }
}

const li = new LinkedList()

li.add(1)
li.add(2)
li.add(3)
li.add(4)

console.log(li.search(0))
console.log(li.search(1))
console.log(li.search(3))
console.log(li.search(5))
