import { Controller } from "stimulus"
import animate from "../animate"

export default class extends Controller {
  connect() {
    this.element.insertAdjacentHTML('beforeend', `
      <div class="dialog__scrim" data-action="click->dialog#close"></div>
    `)
  }

  toggle() {
    if (this.element.classList.contains('dialog--open')) {
      this.close()
    } else {
      this.open()
    }
  }

  open() {
    this.element.classList.add('dialog--open')
    animate(this.element.querySelector('.dialog__scrim'), 'animate--fade-in')
    animate(this.element.querySelector('.dialog__container'), 'animate--zoom-in')
  }

  close() {
    animate(this.element.querySelector('.dialog__scrim'), 'animate--fade-out')
    animate(this.element.querySelector('.dialog__container'), 'animate--zoom-out', () => {
      this.element.classList.remove('dialog--open')
    })
  }
}
