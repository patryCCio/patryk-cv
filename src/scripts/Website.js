import { Listeners } from "./Listeners";

export class Website {
  constructor(window, document) {
    this.window = window;
    this.document = document;

    this.listener = new Listeners(this.window, this.document);
  }
}
