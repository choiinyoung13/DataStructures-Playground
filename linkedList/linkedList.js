// 연결리스트 (linkedList)

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
    this.length++
    return this.length
  }
}

class Node {
  next = null

  constructor(value) {
    this.value = value
  }
}

const li = new linkedList()
li.add(1)
li.add(2)
li.add(3)
console.log(li)
