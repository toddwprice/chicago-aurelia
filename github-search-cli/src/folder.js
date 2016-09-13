import {inject, bindable} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {TreeDialog} from './tree-dialog';

@inject(DialogService)
export class Folder {
  @bindable selectedFolder;

  constructor(dialogService) {
    this.dialogService = dialogService;
  }

  showDialog() {
    this.dialogService.open({ viewModel: TreeDialog, model: this.selectedFolder }).then((result) => {
      if (!result.wasCancelled) {
        console.log('result', result);
        this.selectedFolder = result.output;
        console.log('selectedFolder', this.selectedFolder);
      }
    });
  }
}
