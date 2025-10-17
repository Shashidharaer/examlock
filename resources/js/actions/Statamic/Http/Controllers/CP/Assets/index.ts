import AssetContainersController from './AssetContainersController'
import FoldersController from './FoldersController'
import AssetContainerBlueprintController from './AssetContainerBlueprintController'
import ActionController from './ActionController'
import BrowserController from './BrowserController'
import FolderActionController from './FolderActionController'
import FieldtypeController from './FieldtypeController'
import AssetsController from './AssetsController'
import ThumbnailController from './ThumbnailController'
import SvgController from './SvgController'
import PdfController from './PdfController'
const Assets = {
    AssetContainersController: Object.assign(AssetContainersController, AssetContainersController),
FoldersController: Object.assign(FoldersController, FoldersController),
AssetContainerBlueprintController: Object.assign(AssetContainerBlueprintController, AssetContainerBlueprintController),
ActionController: Object.assign(ActionController, ActionController),
BrowserController: Object.assign(BrowserController, BrowserController),
FolderActionController: Object.assign(FolderActionController, FolderActionController),
FieldtypeController: Object.assign(FieldtypeController, FieldtypeController),
AssetsController: Object.assign(AssetsController, AssetsController),
ThumbnailController: Object.assign(ThumbnailController, ThumbnailController),
SvgController: Object.assign(SvgController, SvgController),
PdfController: Object.assign(PdfController, PdfController),
}

export default Assets