import { Controller } from "stimulus"
import animate from "../animate"

export default class extends Controller {
  connect() {
    this.element[this.identifier] = this;
  }

  toggle() {
    if (this.element.classList.contains('sheet--open')) {
      this.close()
    } else {
      this.open()
    }
  }

  open() {
    this.element.classList.add('sheet--open')
    animate(this.element.querySelector('.sheet__scrim'), 'animate--fade-in')
    animate(this.element.querySelector('.sheet__container'), 'animate--sheet-in')
  }

  close() {
    animate(this.element.querySelector('.sheet__scrim'), 'animate--fade-out')
    animate(this.element.querySelector('.sheet__container'), 'animate--sheet-out', () => {
      this.element.classList.remove('sheet--open')
    })
  }
}
