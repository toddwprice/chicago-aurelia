import {inject, bindable} from 'aurelia-framework';

export class Tree {
  @bindable selectedNode;
  nodes;

  attached() {
    this.nodes = [
      { id: 1, node_name: 'My Folders', children: [
        { id: 2, node_name: 'Work', children: [
          { id: 4, node_name: 'Projects', children: [
            { id: 10, node_name: 'Area 51', children: []},
            { id: 11, node_name: 'Aquiline', children: []},
            { id: 12, node_name: 'Nutmeg', children: []},
            { id: 13, node_name: 'Dr Freezelove', children: []},
            { id: 14, node_name: 'Operation Morning Light', children: []}
          ]},
          { id: 5, node_name: 'People', children: []},
          { id: 6, node_name: 'Expenses', children: [
            { id: 15, node_name: '2016', children: []},
            { id: 16, node_name: '2015', children: []},
            { id: 17, node_name: '2014', children: []}
          ]}
        ]},
        { id: 3, node_name: 'Home', children: [
          { id: 7, node_name: 'Taxes', children: [
            { id: 18, node_name: '2016', children: []},
            { id: 19, node_name: '2015', children: []},
            { id: 19, node_name: '2014', children: []}
          ]},
          { id: 8, node_name: 'Trips', children: []},
          { id: 9, node_name: 'Receipts', children: []}
        ]},
      ]},

    ];


  }
}