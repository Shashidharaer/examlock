import ActionController from './ActionController'
import SubmissionActionController from './SubmissionActionController'
import FormsController from './FormsController'
import FormSubmissionsController from './FormSubmissionsController'
import FormExportController from './FormExportController'
import FormBlueprintController from './FormBlueprintController'
const Forms = {
    ActionController: Object.assign(ActionController, ActionController),
SubmissionActionController: Object.assign(SubmissionActionController, SubmissionActionController),
FormsController: Object.assign(FormsController, FormsController),
FormSubmissionsController: Object.assign(FormSubmissionsController, FormSubmissionsController),
FormExportController: Object.assign(FormExportController, FormExportController),
FormBlueprintController: Object.assign(FormBlueprintController, FormBlueprintController),
}

export default Forms