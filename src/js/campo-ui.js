import { Application } from 'stimulus'
import DialogController from './controllers/dialog_controller'
import DrawerController from './controllers/drawer_controller'
import DropdownController from './controllers/dropdown_controller'
import FloatingActionController from './controllers/floating_action_controller'
import SnackbarController from './controllers/snackbar_controller'
import ToggleController from './controllers/toggle_controller'
import SheetController from './controllers/sheet_controller'
import ChipController from './controllers/chip_controller'

const application = Application.start()
application.register("dialog", DialogController)
application.register("drawer", DrawerController)
application.register("dropdown", DropdownController)
application.register("floating-action", FloatingActionController)
application.register("snackbar", SnackbarController)
application.register("toggle", ToggleController)
application.register("sheet", SheetController)
application.register("chip", ChipController)

export { application }
