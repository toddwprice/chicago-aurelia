import {DialogController} from 'aurelia-dialog';

export class TreeDialog {
  static inject = [DialogController];
  folder;
  constructor(controller){
    this.controller = controller;
    this.controller.settings.lock = false;
  }
  activate(folder){
    this.folder = folder;
  }
}