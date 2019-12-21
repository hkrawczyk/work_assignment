import { UUID } from 'angular2-uuid';

export class Bookmark {
  constructor() {
    this.uuid = UUID.UUID();
  }

  uuid: String = '';
  name: String = '';
  url: String = '';
  group: String = '';
}
