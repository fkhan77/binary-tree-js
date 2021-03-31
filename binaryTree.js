class BinaryNode {
  constructor(value, depth = 1) {
    this.nodeValue = value;
    this.leftNode = null;
    this.rightNode = null;
    this.depth = depth;
  }

  addValue(value) {
    if (typeof value !== "number") {
      console.log(
        `Invalid input ${value} of type ${typeof value}, please input a number.`
      );
      return;
    }
    if (value <= this.nodeValue) {
      if (this.leftNode === null) {
        this.leftNode = new BinaryNode(value, this.depth + 1);
      } else {
        this.leftNode.addValue(value);
      }
    } else {
      if (this.rightNode === null) {
        this.rightNode = new BinaryNode(value, this.depth + 1);
      } else {
        this.rightNode.addValue(value);
      }
    }
  }

  findNode(value) {
    if (value === this.nodeValue) {
      return this;
    }
    if (this.leftNode !== null) {
      if (value === this.leftNode.nodeValue) {
        return this.leftNode;
      }
    }
    if (this.rightNode !== null) {
      if (value === this.rightNode.nodeValue) {
        return this.rightNode;
      }
    }
    if (value < this.nodeValue && this.leftNode !== null) {
      return this.leftNode.findNode(value);
    }
    if (value > this.nodeValue && this.rightNode !== null) {
      return this.rightNode.findNode(value);
    }
    return "No matching node found";
  }

  //TODO
  removeNode(value) {}

  getCurrentValue() {
    return this.nodeValue;
  }

  getLeftNode() {
    return this.leftNode;
  }

  getRightNode() {
    return this.rightNode;
  }

  getDepth() {
    return this.depth;
  }
}

const myBinaryTree = new BinaryNode(10);
myBinaryTree.addValue(5);
myBinaryTree.addValue(15);
myBinaryTree.addValue(3);
myBinaryTree.addValue("7");
myBinaryTree.addValue(null);
myBinaryTree.addValue(undefined);

console.log(myBinaryTree);
