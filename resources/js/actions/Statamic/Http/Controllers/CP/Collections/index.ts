import CollectionsController from './CollectionsController'
import ScaffoldCollectionController from './ScaffoldCollectionController'
import CollectionBlueprintsController from './CollectionBlueprintsController'
import ReorderCollectionBlueprintsController from './ReorderCollectionBlueprintsController'
import CollectionTreeController from './CollectionTreeController'
import CollectionActionController from './CollectionActionController'
import EntriesController from './EntriesController'
import EntryActionController from './EntryActionController'
import EntryPreviewController from './EntryPreviewController'
import ReorderEntriesController from './ReorderEntriesController'
import PublishedEntriesController from './PublishedEntriesController'
import LocalizeEntryController from './LocalizeEntryController'
import EntryRevisionsController from './EntryRevisionsController'
import RestoreEntryRevisionController from './RestoreEntryRevisionController'
import EditRedirectController from './EditRedirectController'
const Collections = {
    CollectionsController: Object.assign(CollectionsController, CollectionsController),
ScaffoldCollectionController: Object.assign(ScaffoldCollectionController, ScaffoldCollectionController),
CollectionBlueprintsController: Object.assign(CollectionBlueprintsController, CollectionBlueprintsController),
ReorderCollectionBlueprintsController: Object.assign(ReorderCollectionBlueprintsController, ReorderCollectionBlueprintsController),
CollectionTreeController: Object.assign(CollectionTreeController, CollectionTreeController),
CollectionActionController: Object.assign(CollectionActionController, CollectionActionController),
EntriesController: Object.assign(EntriesController, EntriesController),
EntryActionController: Object.assign(EntryActionController, EntryActionController),
EntryPreviewController: Object.assign(EntryPreviewController, EntryPreviewController),
ReorderEntriesController: Object.assign(ReorderEntriesController, ReorderEntriesController),
PublishedEntriesController: Object.assign(PublishedEntriesController, PublishedEntriesController),
LocalizeEntryController: Object.assign(LocalizeEntryController, LocalizeEntryController),
EntryRevisionsController: Object.assign(EntryRevisionsController, EntryRevisionsController),
RestoreEntryRevisionController: Object.assign(RestoreEntryRevisionController, RestoreEntryRevisionController),
EditRedirectController: Object.assign(EditRedirectController, EditRedirectController),
}

export default Collections