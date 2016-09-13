import {bindable} from 'aurelia-framework';

export class TreeNode {
  @bindable node;
  @bindable selectedNode;

  get selectedClass() {
    if (this.selectedNode && this.node.id == this.selectedNode.id) {
      return "selected";
    }
    return "";
  }

  selectNode() {
    this.selectedNode = this.node;
    console.log(this.selectedNode.id, this.selectedNode.node_name);
  }
}