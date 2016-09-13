import {inject, customAttribute} from 'aurelia-framework';
import pikaday from 'pikaday';

@customAttribute('datepicker')
@inject(Element)
export class DatePicker {
  constructor(element) {
    this.element = element;
  }

  attached() {
    // console.log(Pikaday);
    var picker = new pikaday({ field: this.element });
    $(this.element).on('change', e => fireEvent(e.target, 'input'));
  }

  detached() {
    $(this.element).off('change');
  }
}

function createEvent(name) {
  var event = document.createEvent('Event');
  event.initEvent(name, true, true);
  return event;
}

function fireEvent(element, name) {
  var event = createEvent(name);
  element.dispatchEvent(event);
}