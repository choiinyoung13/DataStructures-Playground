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

  remove(index) {
    // 인덱스가 유효하지 않으면 undefined 반환
    if (index < 0 || index >= this.length) {
      return undefined
    }

    let current = this.head
    let prev = null

    // 인덱스가 0인 경우, 헤드를 다음 노드로 변경
    if (index === 0) {
      this.head = current.next
      this.length--
      return current.value
    }

    // 인덱스가 0이 아닌 경우, 노드를 순회하며 해당 인덱스의 노드 탐색
    let count = 0
    while (count < index) {
      prev = current
      current = current.next
      count++
    }

    // 이전 노드(prev)의 next를 현재 노드(current)의 next로 변경
    prev.next = current.next

    // 리스트 길이 감소
    this.length--

    // 제거된 노드의 값 반환
    return current.value
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

li.search(0)
li.search(1)
li.search(3)
li.search(5)

li.remove(0)
li.remove(3)
li.remove(4)
