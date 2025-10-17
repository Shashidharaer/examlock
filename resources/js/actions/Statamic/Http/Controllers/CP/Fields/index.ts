import FieldsController from './FieldsController'
import MetaController from './MetaController'
import FieldsetController from './FieldsetController'
import BlueprintController from './BlueprintController'
import FieldtypesController from './FieldtypesController'
const Fields = {
    FieldsController: Object.assign(FieldsController, FieldsController),
MetaController: Object.assign(MetaController, MetaController),
FieldsetController: Object.assign(FieldsetController, FieldsetController),
BlueprintController: Object.assign(BlueprintController, BlueprintController),
FieldtypesController: Object.assign(FieldtypesController, FieldtypesController),
}

export default Fields