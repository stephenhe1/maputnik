# UI Coverage (Progress: 22/22)
Legend: [ ] not yet tested  -  [x] test written and passing  -  [~] intentionally skipped (reason)

## Main Layout
- [x] Main page loads - app renders toolbar, layer list, map container (toolbar.spec.ts)
- [x] Toolbar renders all action buttons (Open, Save, Code Editor, Data Sources, Style Settings, Global State, Help) (toolbar.spec.ts)
- [x] View selector - switch between Map/Inspect modes (toolbar.spec.ts)
- [x] Language selector - switch UI language (toolbar.spec.ts)

## Layer List
- [x] Layer list renders with Expand/Collapse and Add Layer buttons (layers.spec.ts)
- [x] Add Layer modal opens from layer list header button (layers.spec.ts)
- [x] Add Layer - fill type, id, submit adds layer to list (layers.spec.ts)
- [x] Layer item selected highlights in list + opens layer editor (layers.spec.ts, layer-editor.spec.ts)

## Layer Editor
- [x] Layer editor appears when a layer is selected (layer-editor.spec.ts)
- [x] Layer editor shows layer ID field (layer-editor.spec.ts)
- [x] Layer visibility toggle (layer-editor.spec.ts)
- [x] Layer copy/delete from list item buttons (layer-editor.spec.ts)

## Modals - Open Style
- [x] Open modal opens/closes via toolbar button (modal-open.spec.ts)
- [x] Open modal: URL input disabled when empty, enabled when text entered (modal-open.spec.ts)
- [x] Open modal: gallery styles displayed (modal-open.spec.ts)
- [x] Open modal: error shown on bad URL (modal-open.spec.ts)
- [x] Open modal: keyboard shortcut 'o' (modal-open.spec.ts)

## Modals - Save/Export
- [x] Export/Save modal opens/closes via toolbar Save button (modal-export.spec.ts)
- [x] Export modal: token fields and Save/Create HTML buttons present (modal-export.spec.ts)
- [x] Export modal: keyboard shortcut 'e' (modal-export.spec.ts)

## Modals - Code Editor
- [x] Code Editor modal opens/closes via toolbar Code Editor button (modal-other.spec.ts)
- [x] Code Editor hides layer list, shows JSON content (modal-other.spec.ts)
- [x] Code Editor close button works (modal-other.spec.ts)

## Modals - Data Sources
- [x] Sources modal opens/closes via toolbar Data Sources button (modal-sources.spec.ts)
- [x] Sources modal: add new GeoJSON source (modal-sources.spec.ts)
- [x] Sources modal: delete added source (modal-sources.spec.ts)
- [x] Sources modal: keyboard shortcut 'd' (modal-sources.spec.ts)

## Modals - Style Settings
- [x] Settings modal opens/closes via toolbar Style Settings button (modal-settings.spec.ts)
- [x] Settings modal: Name field and renderer selector visible (modal-settings.spec.ts)
- [x] Settings modal: renderer defaults to MapLibreGL JS (modal-settings.spec.ts)
- [x] Settings modal: can switch renderer to OpenLayers (modal-settings.spec.ts)
- [x] Settings modal: keyboard shortcut 's' (modal-settings.spec.ts)

## Modals - Other
- [x] Shortcuts modal opens via keyboard shortcut '?' (modal-other.spec.ts)
- [x] Debug modal opens via keyboard shortcut '!' with checkboxes, OSM link (modal-other.spec.ts)
- [x] Global State modal opens/closes via toolbar Global State button (modal-other.spec.ts)
- [x] Global State modal: add/remove variable (modal-other.spec.ts)
- [x] Global State modal: keyboard shortcut 'g' (modal-other.spec.ts)

## URL State
- [x] Initial redirect to /maputnik/ (url-state.spec.ts)
- [x] Inspect mode reflected in URL (url-state.spec.ts)
- [x] Modal state reflected in URL (url-state.spec.ts)
- [x] URL modal parameter opens modal on load (url-state.spec.ts)
