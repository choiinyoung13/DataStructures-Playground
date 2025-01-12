class Node {
  constructor(value) {
    this.value = value // 현재 노드의 값
    this.left = null // 왼쪽 자식 노드
    this.right = null // 오른쪽 자식 노드
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null // 트리의 루트 노드
  }

  // 값 삽입
  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode // 트리가 비어 있으면 루트로 설정
      return
    }

    let current = this.root
    while (true) {
      if (value < current.value) {
        // 왼쪽으로 이동
        if (!current.left) {
          current.left = newNode // 왼쪽 자식이 비어 있으면 삽입
          return
        }
        current = current.left
      } else {
        // 오른쪽으로 이동
        if (!current.right) {
          current.right = newNode // 오른쪽 자식이 비어 있으면 삽입
          return
        }
        current = current.right
      }
    }
  }

  // 값 탐색
  find(value) {
    let current = this.root
    while (current) {
      if (value === current.value) return true // 값을 찾으면 true 반환
      current = value < current.value ? current.left : current.right // 왼쪽 또는 오른쪽으로 이동
    }
    return false // 값을 찾지 못하면 false 반환
  }
}
