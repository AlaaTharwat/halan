class TreeNode {
    constructor(value) {
        if (!Number.isInteger(value)) {
            throw new Error('Node value must be an integer.');
        }
        this.value = value;
        this.children = [];
    }

    addChild(child) {
        if (!(child instanceof TreeNode)) {
            throw new Error('Child must be an instance of TreeNode.');
        }
        this.children.push(child);
    }

    removeChild(child) {
        this.children = this.children.filter(c => c !== child);
    }
}

class Tree {
  constructor(rootValue) {
    if (!Number.isInteger(rootValue)) {
      throw new Error("Root value must be an integer.");
    }
    this.root = new TreeNode(rootValue);
  }

  findNode(value, node = this.root) {
    if (node.value === value) {
      return node;
    }
    for (const child of node.children) {
      const found = this.findNode(value, child);
      if (found) return found;
    }
    return null;
  }

  addNode(parentValue, childValue) {
    if (!Number.isInteger(childValue)) {
      throw new Error("Child value must be an integer.");
    }

    const parentNode = this.findNode(parentValue);
    if (parentNode) {
      const childNode = new TreeNode(childValue);
      parentNode.addChild(childNode);
    } else {
      console.log(`Parent node with value ${parentValue} not found.`);
    }
  }

  removeNode(value) {
    if (!Number.isInteger(value)) {
      throw new Error("Node value must be an integer.");
    }

    const nodeToRemove = this.findNode(value);
    if (nodeToRemove) {
      if (nodeToRemove === this.root) {
        console.log("Cannot remove the root node.");
        return;
      }
      // Remove the node from its parent
      const parentNode = this.findParentNode(value);
      if (parentNode) {
        parentNode.removeChild(nodeToRemove);
      }
    } else {
      console.log(`Node with value ${value} not found.`);
    }
  }

  findParentNode(value, node = this.root) {
    for (const child of node.children) {
      if (child.value === value) {
        return node;
      }
      const found = this.findParentNode(value, child);
      if (found) return found;
    }
    return null;
  }

  //My code (breadth first search)
  sumTree(node = this.root) {
    if (!node) return [];
    let sum = 0,
      q = [node];

    while (q.length > 0) {
      let len = q.length
      console.log(len)

      for (let i = 0; i < len; i++) {
        let curr = q.shift();
        console.log(curr.value)
        sum += curr.value
        for (let child of curr.children) q.push(child)
      }
    }
    return sum
  }

}

const tree = new Tree(1);
tree.addNode(1, 2);
tree.addNode(1, 3);
tree.addNode(2, 4);
tree.addNode(2, 5);
tree.addNode(3, 6);


var sum = tree.sumTree();


console.log("sum is: ", sum);

