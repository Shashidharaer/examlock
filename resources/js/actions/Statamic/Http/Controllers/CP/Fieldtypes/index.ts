import RelationshipFieldtypeController from './RelationshipFieldtypeController'
import MarkdownFieldtypeController from './MarkdownFieldtypeController'
import FilesFieldtypeController from './FilesFieldtypeController'
import DictionaryFieldtypeController from './DictionaryFieldtypeController'
import IconFieldtypeController from './IconFieldtypeController'

const Fieldtypes = {
    RelationshipFieldtypeController: Object.assign(RelationshipFieldtypeController, RelationshipFieldtypeController),
    MarkdownFieldtypeController: Object.assign(MarkdownFieldtypeController, MarkdownFieldtypeController),
    FilesFieldtypeController: Object.assign(FilesFieldtypeController, FilesFieldtypeController),
    DictionaryFieldtypeController: Object.assign(DictionaryFieldtypeController, DictionaryFieldtypeController),
    IconFieldtypeController: Object.assign(IconFieldtypeController, IconFieldtypeController),
}

export default Fieldtypes