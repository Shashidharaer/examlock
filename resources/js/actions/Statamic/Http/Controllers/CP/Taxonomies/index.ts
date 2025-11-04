import TaxonomiesController from './TaxonomiesController'
import TaxonomyBlueprintsController from './TaxonomyBlueprintsController'
import ReorderTaxonomyBlueprintsController from './ReorderTaxonomyBlueprintsController'
import TermsController from './TermsController'
import TermActionController from './TermActionController'
import TermPreviewController from './TermPreviewController'
import PublishedTermsController from './PublishedTermsController'
import TermRevisionsController from './TermRevisionsController'
import RestoreTermRevisionController from './RestoreTermRevisionController'

const Taxonomies = {
    TaxonomiesController: Object.assign(TaxonomiesController, TaxonomiesController),
    TaxonomyBlueprintsController: Object.assign(TaxonomyBlueprintsController, TaxonomyBlueprintsController),
    ReorderTaxonomyBlueprintsController: Object.assign(ReorderTaxonomyBlueprintsController, ReorderTaxonomyBlueprintsController),
    TermsController: Object.assign(TermsController, TermsController),
    TermActionController: Object.assign(TermActionController, TermActionController),
    TermPreviewController: Object.assign(TermPreviewController, TermPreviewController),
    PublishedTermsController: Object.assign(PublishedTermsController, PublishedTermsController),
    TermRevisionsController: Object.assign(TermRevisionsController, TermRevisionsController),
    RestoreTermRevisionController: Object.assign(RestoreTermRevisionController, RestoreTermRevisionController),
}

export default Taxonomies