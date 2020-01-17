/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
import sinon from 'sinon';

export interface BrowserMock {
  sinonSandbox: sinon.SinonSandbox;
  manifest: Manifest;
  activityLog: ActivityLog;
  alarms: Alarms;
  bookmarks: Bookmarks;
  browserAction: BrowserAction;
  browserSettings: BrowserSettings;
  browsingData: BrowsingData;
  captivePortal: CaptivePortal;
  clipboard: Clipboard;
  commands: Commands;
  contentScripts: ContentScripts;
  contextualIdentities: ContextualIdentities;
  cookies: Cookies;
  devtools: Devtools;
  dns: Dns;
  downloads: Downloads;
  events: Events;
  experiments: Experiments;
  extension: Extension;
  extensionTypes: ExtensionTypes;
  find: Find;
  geckoProfiler: GeckoProfiler;
  history: History;
  i18n: I18n;
  identity: Identity;
  idle: Idle;
  management: Management;
  contextMenus: ContextMenus;
  menus: Menus;
  networkStatus: NetworkStatus;
  normandyAddonStudy: NormandyAddonStudy;
  notifications: Notifications;
  omnibox: Omnibox;
  pageAction: PageAction;
  permissions: Permissions;
  pkcs11: Pkcs11;
  privacy: Privacy;
  proxy: Proxy;
  runtime: Runtime;
  search: Search;
  sessions: Sessions;
  sidebarAction: SidebarAction;
  storage: Storage;
  tabs: Tabs;
  telemetry: Telemetry;
  test: Test;
  theme: Theme;
  topSites: TopSites;
  types: Types;
  urlbar: Urlbar;
  userScripts: UserScripts;
  webNavigation: WebNavigation;
  webRequest: WebRequest;
  windows: Windows;
}

export interface Manifest {} // eslint-disable-line @typescript-eslint/no-empty-interface

export type ManifestKeyName = string;

export type ManifestOptionalPermission = any;

export type ManifestOptionalPermissionOrOrigin = any;

export type ManifestPermission = any;

export type ManifestPermissionOrOrigin = any;

export type ManifestHttpURL = string;

export type ManifestExtensionURL = string;

export type ManifestExtensionFileUrl = string;

export type ManifestImageDataOrExtensionURL = string;

export type ManifestExtensionID = any;

export type ManifestMatchPattern = any;

export type ManifestMatchPatternRestricted = any;

export type ManifestMatchPatternUnestricted = any;

export type ManifestIconPath = any;

export type ManifestIconImageData = any;

export type ManifestUnrecognizedProperty = any;

export type ManifestPersistentBackgroundProperty = any;

export type ManifestNativeManifest = any;

export type ManifestThemeColor = any;

export interface ManifestProtocolHandler {
  name: string;
  protocol: any;
  uriTemplate: any;
}

export interface ManifestManifestBase {
  manifest_version: number;
  applications?: {
    gecko?: ManifestFirefoxSpecificProperties;
  };
  browser_specific_settings?: {
    gecko?: ManifestFirefoxSpecificProperties;
    edge?: {};
  };
  name: string;
  short_name?: string;
  description?: string;
  author?: string;
  version: string;
  homepage_url?: string;
}

export interface ManifestWebExtensionManifest extends ManifestManifestBase {
  minimum_chrome_version?: string;
  minimum_opera_version?: string;
  icons?: {};
  incognito?: ManifestIncognito;
  background?: any;
  options_ui?: {
    page: ManifestExtensionURL;
    browser_style?: boolean;
    chrome_style?: boolean;
    open_in_tab?: boolean;
  };
  content_scripts?: ManifestContentScript[];
  content_security_policy?: string;
  permissions?: ManifestPermissionOrOrigin[];
  optional_permissions?: ManifestOptionalPermissionOrOrigin[];
  web_accessible_resources?: string[];
  developer?: {
    name?: string;
    url?: string;
  };
  hidden?: boolean;
}

export type ManifestIncognito = 'not_allowed' | 'spanning';

export interface ManifestWebExtensionLangpackManifest
  extends ManifestManifestBase {
  homepage_url?: string;
  langpack_id: string;
  languages: {};
  sources?: {};
}

export interface ManifestWebExtensionDictionaryManifest
  extends ManifestManifestBase {
  homepage_url?: string;
  dictionaries: {};
}

export interface ManifestThemeIcons {
  light: ManifestExtensionURL;
  dark: ManifestExtensionURL;
  size: number;
}

export interface ManifestFirefoxSpecificProperties {
  id?: ManifestExtensionID;
  update_url?: string;
  strict_min_version?: string;
  strict_max_version?: string;
}

export interface ManifestContentScript {
  matches: ManifestMatchPattern[];
  exclude_matches?: ManifestMatchPattern[];
  include_globs?: string[];
  exclude_globs?: string[];
  css?: ManifestExtensionURL[];
  js?: ManifestExtensionURL[];
  all_frames?: boolean;
  match_about_blank?: boolean;
  run_at?: ExtensionTypesRunAt;
}

export interface ManifestImageData extends ImageData {} // eslint-disable-line @typescript-eslint/no-empty-interface

export interface ManifestThemeExperiment {
  stylesheet?: ManifestExtensionURL;
  images?: {};
  colors?: {};
  properties?: {};
}

export interface ManifestThemeType {
  images?: {
    additional_backgrounds?: ManifestImageDataOrExtensionURL[];
    headerURL?: ManifestImageDataOrExtensionURL;
    theme_frame?: ManifestImageDataOrExtensionURL;
  };
  colors?: {
    tab_selected?: ManifestThemeColor;
    accentcolor?: ManifestThemeColor;
    frame?: ManifestThemeColor;
    frame_inactive?: ManifestThemeColor;
    textcolor?: ManifestThemeColor;
    tab_background_text?: ManifestThemeColor;
    tab_background_separator?: ManifestThemeColor;
    tab_loading?: ManifestThemeColor;
    tab_text?: ManifestThemeColor;
    tab_line?: ManifestThemeColor;
    toolbar?: ManifestThemeColor;
    toolbar_text?: ManifestThemeColor;
    bookmark_text?: ManifestThemeColor;
    toolbar_field?: ManifestThemeColor;
    toolbar_field_text?: ManifestThemeColor;
    toolbar_field_border?: ManifestThemeColor;
    toolbar_field_separator?: ManifestThemeColor;
    toolbar_top_separator?: ManifestThemeColor;
    toolbar_bottom_separator?: ManifestThemeColor;
    toolbar_vertical_separator?: ManifestThemeColor;
    icons?: ManifestThemeColor;
    icons_attention?: ManifestThemeColor;
    button_background_hover?: ManifestThemeColor;
    button_background_active?: ManifestThemeColor;
    popup?: ManifestThemeColor;
    popup_text?: ManifestThemeColor;
    popup_border?: ManifestThemeColor;
    toolbar_field_focus?: ManifestThemeColor;
    toolbar_field_text_focus?: ManifestThemeColor;
    toolbar_field_border_focus?: ManifestThemeColor;
    popup_highlight?: ManifestThemeColor;
    popup_highlight_text?: ManifestThemeColor;
    ntp_background?: ManifestThemeColor;
    ntp_text?: ManifestThemeColor;
    sidebar?: ManifestThemeColor;
    sidebar_border?: ManifestThemeColor;
    sidebar_text?: ManifestThemeColor;
    sidebar_highlight?: ManifestThemeColor;
    sidebar_highlight_text?: ManifestThemeColor;
    toolbar_field_highlight?: ManifestThemeColor;
    toolbar_field_highlight_text?: ManifestThemeColor;
  };
  properties?: {
    additional_backgrounds_alignment?: string[];
    additional_backgrounds_tiling?: string[];
  };
}

export interface ManifestThemeManifest extends ManifestManifestBase {
  theme: ManifestThemeType;
  dark_theme?: ManifestThemeType;
  default_locale?: string;
  theme_experiment?: ManifestThemeExperiment;
  icons?: {};
}

export interface ActivityLog {
  onExtensionActivity: EventsEvent;
}

export interface Alarms {
  create: sinon.SinonStub;
  get: sinon.SinonStub;
  getAll: sinon.SinonStub;
  clear: sinon.SinonStub;
  clearAll: sinon.SinonStub;
  onAlarm: EventsEvent;
}

export interface AlarmsAlarm {
  name: string;
  scheduledTime: number;
  periodInMinutes?: number;
}

export interface Bookmarks {
  get: sinon.SinonStub;
  getChildren: sinon.SinonStub;
  getRecent: sinon.SinonStub;
  getTree: sinon.SinonStub;
  getSubTree: sinon.SinonStub;
  search: sinon.SinonStub;
  create: sinon.SinonStub;
  move: sinon.SinonStub;
  update: sinon.SinonStub;
  remove: sinon.SinonStub;
  removeTree: sinon.SinonStub;
  import?: sinon.SinonStub;
  export?: sinon.SinonStub;
  onCreated: EventsEvent;
  onRemoved: EventsEvent;
  onChanged: EventsEvent;
  onMoved: EventsEvent;
  onChildrenReordered?: EventsEvent;
  onImportBegan?: EventsEvent;
  onImportEnded?: EventsEvent;
}

export type BookmarksBookmarkTreeNodeUnmodifiable = 'managed';

export type BookmarksBookmarkTreeNodeType = 'bookmark' | 'folder' | 'separator';

export interface BookmarksBookmarkTreeNode {
  id: string;
  parentId?: string;
  index?: number;
  url?: string;
  title: string;
  dateAdded?: number;
  dateGroupModified?: number;
  unmodifiable?: BookmarksBookmarkTreeNodeUnmodifiable;
  type?: BookmarksBookmarkTreeNodeType;
  children?: BookmarksBookmarkTreeNode[];
}

export interface BookmarksCreateDetails {
  parentId?: string;
  index?: number;
  title?: string;
  url?: string;
  type?: BookmarksBookmarkTreeNodeType;
}

export interface BrowserAction {
  setTitle: sinon.SinonStub;
  getTitle: sinon.SinonStub;
  setIcon: sinon.SinonStub;
  setPopup: sinon.SinonStub;
  getPopup: sinon.SinonStub;
  setBadgeText: sinon.SinonStub;
  getBadgeText: sinon.SinonStub;
  setBadgeBackgroundColor: sinon.SinonStub;
  getBadgeBackgroundColor: sinon.SinonStub;
  setBadgeTextColor: sinon.SinonStub;
  getBadgeTextColor: sinon.SinonStub;
  enable: sinon.SinonStub;
  disable: sinon.SinonStub;
  isEnabled: sinon.SinonStub;
  openPopup: sinon.SinonStub;
  onClicked: EventsEvent;
}

export type BrowserActionColorArray = number[];

export type BrowserActionColorValue = any;

export interface BrowserActionDetails {
  tabId?: number;
  windowId?: number;
}

export interface BrowserActionImageDataType extends ImageData {} // eslint-disable-line @typescript-eslint/no-empty-interface

export interface BrowserSettings {
  allowPopupsForUserEvents: TypesSetting;
  cacheEnabled: TypesSetting;
  closeTabsByDoubleClick: TypesSetting;
  contextMenuShowEvent: TypesSetting;
  homepageOverride: TypesSetting;
  imageAnimationBehavior: TypesSetting;
  newTabPageOverride: TypesSetting;
  newTabPosition: TypesSetting;
  openBookmarksInNewTabs: TypesSetting;
  openSearchResultsInNewTabs: TypesSetting;
  openUrlbarResultsInNewTabs: TypesSetting;
  webNotificationsDisabled: TypesSetting;
  overrideDocumentColors: TypesSetting;
  useDocumentFonts: TypesSetting;
}

export type BrowserSettingsImageAnimationBehavior = 'normal' | 'none' | 'once';

export type BrowserSettingsContextMenuMouseEvent = 'mouseup' | 'mousedown';

export interface BrowsingData {
  settings: sinon.SinonStub;
  remove: sinon.SinonStub;
  removeAppcache?: sinon.SinonStub;
  removeCache: sinon.SinonStub;
  removeCookies: sinon.SinonStub;
  removeDownloads: sinon.SinonStub;
  removeFileSystems?: sinon.SinonStub;
  removeFormData: sinon.SinonStub;
  removeHistory: sinon.SinonStub;
  removeIndexedDB?: sinon.SinonStub;
  removeLocalStorage: sinon.SinonStub;
  removePluginData: sinon.SinonStub;
  removePasswords: sinon.SinonStub;
  removeWebSQL?: sinon.SinonStub;
}

export interface BrowsingDataRemovalOptions {
  since?: ExtensionTypesDate;
  hostnames?: string[];
  originTypes?: {
    unprotectedWeb?: boolean;
    protectedWeb?: boolean;
    extension?: boolean;
  };
}

export interface BrowsingDataDataTypeSet {
  cache?: boolean;
  cookies?: boolean;
  downloads?: boolean;
  formData?: boolean;
  history?: boolean;
  indexedDB?: boolean;
  localStorage?: boolean;
  serverBoundCertificates?: boolean;
  passwords?: boolean;
  pluginData?: boolean;
  serviceWorkers?: boolean;
}

export interface CaptivePortal {
  getState: sinon.SinonStub;
  getLastChecked: sinon.SinonStub;
  onStateChanged: EventsEvent;
  onConnectivityAvailable: EventsEvent;
}

export interface Clipboard {
  setImageData: sinon.SinonStub;
}

export interface Commands {
  update: sinon.SinonStub;
  reset: sinon.SinonStub;
  getAll: sinon.SinonStub;
  onCommand: EventsEvent;
}

export interface CommandsCommand {
  name?: string;
  description?: string;
  shortcut?: string;
}

export interface ContentScripts {
  register: sinon.SinonStub;
}

export interface ContentScriptsRegisteredContentScriptOptions {
  matches: ManifestMatchPattern[];
  excludeMatches?: ManifestMatchPattern[];
  includeGlobs?: string[];
  excludeGlobs?: string[];
  css?: ExtensionTypesExtensionFileOrCode[];
  js?: ExtensionTypesExtensionFileOrCode[];
  allFrames?: boolean;
  matchAboutBlank?: boolean;
  runAt?: ExtensionTypesRunAt;
}

export interface ContentScriptsRegisteredContentScript {
  unregister: sinon.SinonStub;
}

export interface ContextualIdentities {
  get: sinon.SinonStub;
  query: sinon.SinonStub;
  create: sinon.SinonStub;
  update: sinon.SinonStub;
  remove: sinon.SinonStub;
  onUpdated: EventsEvent;
  onCreated: EventsEvent;
  onRemoved: EventsEvent;
}

export interface ContextualIdentitiesContextualIdentity {
  name: string;
  icon: string;
  iconUrl: string;
  color: string;
  colorCode: string;
  cookieStoreId: string;
}

export interface Cookies {
  get: sinon.SinonStub;
  getAll: sinon.SinonStub;
  set: sinon.SinonStub;
  remove: sinon.SinonStub;
  getAllCookieStores: sinon.SinonStub;
  onChanged: EventsEvent;
}

export type CookiesSameSiteStatus = 'no_restriction' | 'lax' | 'strict';

export type CookiesOnChangedCause =
  | 'evicted'
  | 'expired'
  | 'explicit'
  | 'expired_overwrite'
  | 'overwrite';

export interface CookiesCookie {
  name: string;
  value: string;
  domain: string;
  hostOnly: boolean;
  path: string;
  secure: boolean;
  httpOnly: boolean;
  sameSite: CookiesSameSiteStatus;
  session: boolean;
  expirationDate?: number;
  storeId: string;
  firstPartyDomain: string;
}

export interface CookiesCookieStore {
  id: string;
  tabIds: number[];
  incognito: boolean;
}

export interface Devtools {
  inspectedWindow: DevtoolsInspectedWindow;
  network: DevtoolsNetwork;
  panels: DevtoolsPanels;
}

export interface DevtoolsInspectedWindow {
  // @ts-ignore
  eval: sinon.SinonStub;
  reload: sinon.SinonStub;
  getResources?: sinon.SinonStub;
  onResourceAdded?: EventsEvent;
  onResourceContentCommitted?: EventsEvent;
  tabId: number;
}

export interface DevtoolsResource {
  getContent?: sinon.SinonStub;
  setContent?: sinon.SinonStub;
  url: string;
}

export interface DevtoolsNetwork {
  getHAR: sinon.SinonStub;
  onRequestFinished: EventsEvent;
  onNavigated: EventsEvent;
}

export interface DevtoolsRequest {
  getContent: sinon.SinonStub;
}

export interface DevtoolsPanels {
  create: sinon.SinonStub;
  setOpenResourceHandler?: sinon.SinonStub;
  openResource?: sinon.SinonStub;
  onThemeChanged: EventsEvent;
  elements: DevtoolsElementsPanel;
  sources: DevtoolsSourcesPanel;
  themeName: string;
}

export interface DevtoolsElementsPanel {
  createSidebarPane: sinon.SinonStub;
  onSelectionChanged: EventsEvent;
}

export interface DevtoolsSourcesPanel {
  createSidebarPane?: sinon.SinonStub;
  onSelectionChanged?: EventsEvent;
}

export interface DevtoolsExtensionPanel {
  createStatusBarButton?: () => DevtoolsButton;
  onSearch?: EventsEvent;
  onShown: EventsEvent;
  onHidden: EventsEvent;
}

export interface DevtoolsExtensionSidebarPane {
  setHeight?: sinon.SinonStub;
  setExpression: sinon.SinonStub;
  setObject: sinon.SinonStub;
  setPage: sinon.SinonStub;
  onShown: EventsEvent;
  onHidden: EventsEvent;
}

export interface DevtoolsButton {
  update?: sinon.SinonStub;
  onClicked?: EventsEvent;
}

export interface Dns {
  resolve: sinon.SinonStub;
}

export type DnsResolveFlags = string[];

export interface DnsDNSRecord {
  canonicalName?: string;
  isTRR: string;
  addresses: string[];
}

export interface Downloads {
  download: sinon.SinonStub;
  search: sinon.SinonStub;
  pause: sinon.SinonStub;
  resume: sinon.SinonStub;
  cancel: sinon.SinonStub;
  getFileIcon: sinon.SinonStub;
  open: sinon.SinonStub;
  show: sinon.SinonStub;
  showDefaultFolder: sinon.SinonStub;
  erase: sinon.SinonStub;
  removeFile: sinon.SinonStub;
  acceptDanger?: sinon.SinonStub;
  drag?: sinon.SinonStub;
  setShelfEnabled?: sinon.SinonStub;
  onCreated: EventsEvent;
  onErased: EventsEvent;
  onChanged: EventsEvent;
}

export type DownloadsFilenameConflictAction =
  | 'uniquify'
  | 'overwrite'
  | 'prompt';

export type DownloadsInterruptReason =
  | 'FILE_FAILED'
  | 'FILE_ACCESS_DENIED'
  | 'FILE_NO_SPACE'
  | 'FILE_NAME_TOO_LONG'
  | 'FILE_TOO_LARGE'
  | 'FILE_VIRUS_INFECTED'
  | 'FILE_TRANSIENT_ERROR'
  | 'FILE_BLOCKED'
  | 'FILE_SECURITY_CHECK_FAILED'
  | 'FILE_TOO_SHORT'
  | 'NETWORK_FAILED'
  | 'NETWORK_TIMEOUT'
  | 'NETWORK_DISCONNECTED'
  | 'NETWORK_SERVER_DOWN'
  | 'NETWORK_INVALID_REQUEST'
  | 'SERVER_FAILED'
  | 'SERVER_NO_RANGE'
  | 'SERVER_BAD_CONTENT'
  | 'SERVER_UNAUTHORIZED'
  | 'SERVER_CERT_PROBLEM'
  | 'SERVER_FORBIDDEN'
  | 'USER_CANCELED'
  | 'USER_SHUTDOWN'
  | 'CRASH';

export type DownloadsDangerType =
  | 'file'
  | 'url'
  | 'content'
  | 'uncommon'
  | 'host'
  | 'unwanted'
  | 'safe'
  | 'accepted';

export type DownloadsState = 'in_progress' | 'interrupted' | 'complete';

export type DownloadsDownloadTime = any;

export interface DownloadsDownloadItem {
  id: number;
  url: string;
  referrer?: string;
  filename: string;
  incognito: boolean;
  danger: DownloadsDangerType;
  mime?: string;
  startTime: string;
  endTime?: string;
  estimatedEndTime?: string;
  state: DownloadsState;
  paused: boolean;
  canResume: boolean;
  error?: DownloadsInterruptReason;
  bytesReceived: number;
  totalBytes: number;
  fileSize: number;
  exists: boolean;
  byExtensionId?: string;
  byExtensionName?: string;
}

export interface DownloadsStringDelta {
  current?: string;
  previous?: string;
}

export interface DownloadsDoubleDelta {
  current?: number;
  previous?: number;
}

export interface DownloadsBooleanDelta {
  current?: boolean;
  previous?: boolean;
}

export interface DownloadsDownloadQuery {
  query?: string[];
  startedBefore?: DownloadsDownloadTime;
  startedAfter?: DownloadsDownloadTime;
  endedBefore?: DownloadsDownloadTime;
  endedAfter?: DownloadsDownloadTime;
  totalBytesGreater?: number;
  totalBytesLess?: number;
  filenameRegex?: string;
  urlRegex?: string;
  limit?: number;
  orderBy?: string[];
  id?: number;
  url?: string;
  filename?: string;
  danger?: DownloadsDangerType;
  mime?: string;
  startTime?: string;
  endTime?: string;
  state?: DownloadsState;
  paused?: boolean;
  error?: DownloadsInterruptReason;
  bytesReceived?: number;
  totalBytes?: number;
  fileSize?: number;
  exists?: boolean;
}

export interface Events {} // eslint-disable-line @typescript-eslint/no-empty-interface

export interface EventsRule {
  id?: string;
  tags?: string[];
  conditions: any[];
  actions: any[];
  priority?: number;
}

export interface EventsEvent {
  addListener: sinon.SinonStub;
  removeListener: sinon.SinonStub;
  hasListener: sinon.SinonStub;
  hasListeners: sinon.SinonStub;
  addRules?: sinon.SinonStub;
  getRules?: sinon.SinonStub;
  removeRules?: sinon.SinonStub;
}

export interface EventsUrlFilter {
  hostContains?: string;
  hostEquals?: string;
  hostPrefix?: string;
  hostSuffix?: string;
  pathContains?: string;
  pathEquals?: string;
  pathPrefix?: string;
  pathSuffix?: string;
  queryContains?: string;
  queryEquals?: string;
  queryPrefix?: string;
  querySuffix?: string;
  urlContains?: string;
  urlEquals?: string;
  urlMatches?: string;
  originAndPathMatches?: string;
  urlPrefix?: string;
  urlSuffix?: string;
  schemes?: string[];
  ports?: any[];
}

export interface Experiments {} // eslint-disable-line @typescript-eslint/no-empty-interface

export type ExperimentsExperimentURL = string;

export type ExperimentsAPIPaths = ExperimentsAPIPath[];

export type ExperimentsAPIPath = string[];

export type ExperimentsAPIEvents = ExperimentsAPIEvent[];

export type ExperimentsAPIEvent = 'startup';

export type ExperimentsAPIParentScope =
  | 'addon_parent'
  | 'content_parent'
  | 'devtools_parent';

export type ExperimentsAPIChildScope =
  | 'addon_child'
  | 'content_child'
  | 'devtools_child';

export interface ExperimentsExperimentAPI {
  schema: ExperimentsExperimentURL;
  parent?: {
    events?: ExperimentsAPIEvents;
    paths?: ExperimentsAPIPaths;
    script: ExperimentsExperimentURL;
    scopes?: ExperimentsAPIParentScope[];
  };
  child?: {
    paths: ExperimentsAPIPaths;
    script: ExperimentsExperimentURL;
    scopes: ExperimentsAPIChildScope[];
  };
}

export interface Extension {
  getURL: sinon.SinonStub;
  getViews: sinon.SinonStub;
  getBackgroundPage: sinon.SinonStub;
  isAllowedIncognitoAccess: sinon.SinonStub;
  isAllowedFileSchemeAccess: sinon.SinonStub;
  setUpdateUrlData?: sinon.SinonStub;
  onRequest?: EventsEvent;
  onRequestExternal?: EventsEvent;
  lastError?: {
    message: string;
  };
  inIncognitoContext?: boolean;
}

export type ExtensionViewType = 'tab' | 'popup' | 'sidebar';

export interface ExtensionTypes {} // eslint-disable-line @typescript-eslint/no-empty-interface

export type ExtensionTypesImageFormat = 'jpeg' | 'png';

export type ExtensionTypesRunAt =
  | 'document_start'
  | 'document_end'
  | 'document_idle';

export type ExtensionTypesCSSOrigin = 'user' | 'author';

export type ExtensionTypesDate = any;

export type ExtensionTypesExtensionFileOrCode = any;

export type ExtensionTypesPlainJSONValue = any;

export interface ExtensionTypesImageDetails {
  format?: ExtensionTypesImageFormat;
  quality?: number;
}

export interface ExtensionTypesInjectDetails {
  code?: string;
  file?: string;
  allFrames?: boolean;
  matchAboutBlank?: boolean;
  frameId?: number;
  runAt?: ExtensionTypesRunAt;
  cssOrigin?: ExtensionTypesCSSOrigin;
}

export interface Find {
  find: sinon.SinonStub;
  highlightResults: sinon.SinonStub;
  removeHighlighting: sinon.SinonStub;
}

export interface GeckoProfiler {
  start: sinon.SinonStub;
  stop: sinon.SinonStub;
  pause: sinon.SinonStub;
  resume: sinon.SinonStub;
  dumpProfileToFile: sinon.SinonStub;
  getProfile: sinon.SinonStub;
  getProfileAsArrayBuffer: sinon.SinonStub;
  getProfileAsGzippedArrayBuffer: sinon.SinonStub;
  getSymbols: sinon.SinonStub;
  onRunning: EventsEvent;
}

export type GeckoProfilerProfilerFeature =
  | 'java'
  | 'js'
  | 'leaf'
  | 'mainthreadio'
  | 'privacy'
  | 'responsiveness'
  | 'screenshots'
  | 'seqstyle'
  | 'stackwalk'
  | 'tasktracer'
  | 'threads'
  | 'trackopts'
  | 'jstracer'
  | 'jsallocations'
  | 'preferencereads';

export type GeckoProfilerSupports = 'windowLength';

export interface History {
  search: sinon.SinonStub;
  getVisits: sinon.SinonStub;
  addUrl: sinon.SinonStub;
  deleteUrl: sinon.SinonStub;
  deleteRange: sinon.SinonStub;
  deleteAll: sinon.SinonStub;
  onVisited: EventsEvent;
  onVisitRemoved: EventsEvent;
  onTitleChanged: EventsEvent;
}

export type HistoryTransitionType =
  | 'link'
  | 'typed'
  | 'auto_bookmark'
  | 'auto_subframe'
  | 'manual_subframe'
  | 'generated'
  | 'auto_toplevel'
  | 'form_submit'
  | 'reload'
  | 'keyword'
  | 'keyword_generated';

export interface HistoryHistoryItem {
  id: string;
  url?: string;
  title?: string;
  lastVisitTime?: number;
  visitCount?: number;
  typedCount?: number;
}

export interface HistoryVisitItem {
  id: string;
  visitId: string;
  visitTime?: number;
  referringVisitId: string;
  transition: HistoryTransitionType;
}

export interface I18n {
  getAcceptLanguages: sinon.SinonStub;
  getMessage: sinon.SinonStub;
  getUILanguage: sinon.SinonStub;
  detectLanguage: sinon.SinonStub;
}

export type I18nLanguageCode = string;

export interface Identity {
  getAccounts?: sinon.SinonStub;
  getAuthToken?: sinon.SinonStub;
  getProfileUserInfo?: sinon.SinonStub;
  removeCachedAuthToken?: sinon.SinonStub;
  launchWebAuthFlow: sinon.SinonStub;
  getRedirectURL: sinon.SinonStub;
  onSignInChanged?: EventsEvent;
}

export interface IdentityAccountInfo {
  id: string;
}

export interface Idle {
  queryState: sinon.SinonStub;
  setDetectionInterval: sinon.SinonStub;
  onStateChanged: EventsEvent;
}

export type IdleIdleState = 'active' | 'idle';

export interface Management {
  getAll: sinon.SinonStub;
  get: sinon.SinonStub;
  install: sinon.SinonStub;
  getSelf: sinon.SinonStub;
  uninstallSelf: sinon.SinonStub;
  setEnabled: sinon.SinonStub;
  onDisabled: EventsEvent;
  onEnabled: EventsEvent;
  onInstalled: EventsEvent;
  onUninstalled: EventsEvent;
}

export type ManagementExtensionDisabledReason =
  | 'unknown'
  | 'permissions_increase';

export type ManagementExtensionType = 'extension' | 'theme';

export type ManagementExtensionInstallType =
  | 'development'
  | 'normal'
  | 'sideload'
  | 'other';

export interface ManagementIconInfo {
  size: number;
  url: string;
}

export interface ManagementExtensionInfo {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  version: string;
  versionName?: string;
  mayDisable: boolean;
  enabled: boolean;
  disabledReason?: ManagementExtensionDisabledReason;
  type: ManagementExtensionType;
  homepageUrl?: string;
  updateUrl?: string;
  optionsUrl: string;
  icons?: ManagementIconInfo[];
  permissions?: string[];
  hostPermissions?: string[];
  installType: ManagementExtensionInstallType;
}

export interface ContextMenus extends Menus {} // eslint-disable-line @typescript-eslint/no-empty-interface

export type ContextMenusContextType =
  | 'all'
  | 'page'
  | 'frame'
  | 'selection'
  | 'link'
  | 'editable'
  | 'password'
  | 'image'
  | 'video'
  | 'audio'
  | 'launcher'
  | 'bookmark'
  | 'browser_action'
  | 'page_action'
  | 'tab';

export interface Menus {
  create: sinon.SinonStub;
  update: sinon.SinonStub;
  remove: sinon.SinonStub;
  removeAll: sinon.SinonStub;
  overrideContext: sinon.SinonStub;
  refresh: sinon.SinonStub;
  onClicked: EventsEvent;
  onShown: EventsEvent;
  onHidden: EventsEvent;
  ACTION_MENU_TOP_LEVEL_LIMIT: 6;
  getTargetElement: sinon.SinonStub;
}

export type MenusContextType =
  | 'all'
  | 'page'
  | 'frame'
  | 'selection'
  | 'link'
  | 'editable'
  | 'password'
  | 'image'
  | 'video'
  | 'audio'
  | 'launcher'
  | 'bookmark'
  | 'browser_action'
  | 'page_action'
  | 'tab'
  | 'tools_menu';

export type MenusItemType = 'normal' | 'checkbox' | 'radio' | 'separator';

export interface MenusOnClickData {
  menuItemId: any;
  parentMenuItemId?: any;
  viewType?: ExtensionViewType;
  mediaType?: string;
  linkText?: string;
  linkUrl?: string;
  srcUrl?: string;
  pageUrl?: string;
  frameId?: number;
  frameUrl?: string;
  selectionText?: string;
  editable: boolean;
  wasChecked?: boolean;
  checked?: boolean;
  bookmarkId: string;
  modifiers: string[];
  button?: number;
  targetElementId?: number;
}

export interface NetworkStatus {
  getLinkInfo: sinon.SinonStub;
  onConnectionChanged: EventsEvent;
}

export interface NetworkStatusNetworkLinkInfo {
  status: NetworkStatusStatus;
  type: NetworkStatusType;
  id?: string;
}

export type NetworkStatusStatus = 'unknown' | 'up' | 'down';

export type NetworkStatusType =
  | 'unknown'
  | 'ethernet'
  | 'usb'
  | 'wifi'
  | 'wimax'
  | '2g'
  | '3g'
  | '4g';

export interface NormandyAddonStudy {
  getStudy: sinon.SinonStub;
  endStudy: sinon.SinonStub;
  getClientMetadata: sinon.SinonStub;
  onUnenroll: EventsEvent;
}

export interface NormandyAddonStudyStudy {
  recipeId: number;
  slug: string;
  userFacingName: string;
  userFacingDescription: string;
  branch: string;
  active: boolean;
  addonId: string;
  addonUrl: string;
  addonVersion: string;
  studyStartDate: ExtensionTypesDate;
  studyEndDate: ExtensionTypesDate;
  extensionApiId: number;
  extensionHash: string;
  extensionHashAlgorithm: string;
}

export interface Notifications {
  create: sinon.SinonStub;
  update?: sinon.SinonStub;
  clear: sinon.SinonStub;
  getAll: sinon.SinonStub;
  getPermissionLevel?: sinon.SinonStub;
  onClosed: EventsEvent;
  onClicked: EventsEvent;
  onButtonClicked: EventsEvent;
  onPermissionLevelChanged?: EventsEvent;
  onShowSettings?: EventsEvent;
  onShown: EventsEvent;
}

export type NotificationsTemplateType = 'basic' | 'image' | 'list' | 'progress';

export type NotificationsPermissionLevel = 'granted' | 'denied';

export interface NotificationsNotificationItem {
  title: string;
  message: string;
}

export interface NotificationsCreateNotificationOptions {
  type: NotificationsTemplateType;
  iconUrl?: string;
  appIconMaskUrl?: string;
  title: string;
  message: string;
  contextMessage?: string;
  priority?: number;
  eventTime?: number;
  buttons?: {
    title: string;
    iconUrl?: string;
  }[];
  imageUrl?: string;
  items?: NotificationsNotificationItem[];
  progress?: number;
  isClickable?: boolean;
}

export interface NotificationsUpdateNotificationOptions {
  type?: NotificationsTemplateType;
  iconUrl?: string;
  appIconMaskUrl?: string;
  title?: string;
  message?: string;
  contextMessage?: string;
  priority?: number;
  eventTime?: number;
  buttons?: {
    title: string;
    iconUrl?: string;
  }[];
  imageUrl?: string;
  items?: NotificationsNotificationItem[];
  progress?: number;
  isClickable?: boolean;
}

export interface Omnibox {
  setDefaultSuggestion: sinon.SinonStub;
  onInputStarted: EventsEvent;
  onInputChanged: EventsEvent;
  onInputEntered: EventsEvent;
  onInputCancelled: EventsEvent;
}

export type OmniboxDescriptionStyleType = 'url' | 'match' | 'dim';

export type OmniboxOnInputEnteredDisposition =
  | 'currentTab'
  | 'newForegroundTab'
  | 'newBackgroundTab';

export interface OmniboxSuggestResult {
  content: string;
  description: string;
  descriptionStyles?: {
    offset: number;
    type: OmniboxDescriptionStyleType;
    length?: number;
  }[];
  descriptionStylesRaw?: {
    offset: number;
    type: number;
  }[];
}

export interface OmniboxDefaultSuggestResult {
  description: string;
  descriptionStyles?: {
    offset: number;
    type: OmniboxDescriptionStyleType;
    length?: number;
  }[];
  descriptionStylesRaw?: {
    offset: number;
    type: number;
  }[];
}

export interface PageAction {
  show: sinon.SinonStub;
  hide: sinon.SinonStub;
  isShown: sinon.SinonStub;
  setTitle: sinon.SinonStub;
  getTitle: sinon.SinonStub;
  setIcon: sinon.SinonStub;
  setPopup: sinon.SinonStub;
  getPopup: sinon.SinonStub;
  openPopup: sinon.SinonStub;
  onClicked: EventsEvent;
}

export interface PageActionImageDataType extends ImageData {} // eslint-disable-line @typescript-eslint/no-empty-interface

export interface Permissions {
  getAll: sinon.SinonStub;
  contains: sinon.SinonStub;
  request: sinon.SinonStub;
  remove: sinon.SinonStub;
  onAdded?: EventsEvent;
  onRemoved?: EventsEvent;
}

export interface PermissionsPermissions {
  permissions?: ManifestOptionalPermission[];
  origins?: ManifestMatchPattern[];
}

export interface PermissionsAnyPermissions {
  permissions?: ManifestPermission[];
  origins?: ManifestMatchPattern[];
}

export interface Pkcs11 {
  isModuleInstalled: sinon.SinonStub;
  installModule: sinon.SinonStub;
  uninstallModule: sinon.SinonStub;
  getModuleSlots: sinon.SinonStub;
}

export interface Privacy {
  network: PrivacyNetwork;
  services: PrivacyServices;
  websites: PrivacyWebsites;
}

export interface PrivacyNetwork {
  networkPredictionEnabled: TypesSetting;
  peerConnectionEnabled: TypesSetting;
  webRTCIPHandlingPolicy: TypesSetting;
}

export type PrivacyIPHandlingPolicy =
  | 'default'
  | 'default_public_and_private_interfaces'
  | 'default_public_interface_only'
  | 'disable_non_proxied_udp'
  | 'proxy_only';

export interface PrivacyServices {
  passwordSavingEnabled: TypesSetting;
}

export interface PrivacyWebsites {
  thirdPartyCookiesAllowed?: TypesSetting;
  hyperlinkAuditingEnabled: TypesSetting;
  referrersEnabled: TypesSetting;
  resistFingerprinting: TypesSetting;
  firstPartyIsolate: TypesSetting;
  protectedContentEnabled?: TypesSetting;
  trackingProtectionMode: TypesSetting;
  cookieConfig: TypesSetting;
}

export type PrivacyTrackingProtectionModeOption =
  | 'always'
  | 'never'
  | 'private_browsing';

export interface PrivacyCookieConfig {
  behavior?: PrivacyBehavior;
  nonPersistentCookies?: boolean;
}

export type PrivacyBehavior =
  | 'allow_all'
  | 'reject_all'
  | 'reject_third_party'
  | 'allow_visited'
  | 'reject_trackers';

export interface Proxy {
  register: sinon.SinonStub;
  unregister: sinon.SinonStub;
  registerProxyScript: sinon.SinonStub;
  onRequest: EventsEvent;
  onError: EventsEvent;
  onProxyError: EventsEvent;
  settings: TypesSetting;
}

export interface ProxyProxyConfig {
  proxyType?: ProxyProxyType;
  http?: string;
  httpProxyAll?: boolean;
  ftp?: string;
  ssl?: string;
  socks?: string;
  socksVersion?: number;
  passthrough?: string;
  autoConfigUrl?: string;
  autoLogin?: boolean;
  proxyDNS?: boolean;
}

export type ProxyProxyType =
  | 'none'
  | 'autoDetect'
  | 'system'
  | 'manual'
  | 'autoConfig';

export interface Runtime {
  getBackgroundPage: sinon.SinonStub;
  openOptionsPage: sinon.SinonStub;
  getManifest: sinon.SinonStub;
  getURL: sinon.SinonStub;
  setUninstallURL: sinon.SinonStub;
  reload: sinon.SinonStub;
  requestUpdateCheck?: sinon.SinonStub;
  restart?: sinon.SinonStub;
  connect: () => RuntimePort;
  connectNative: () => RuntimePort;
  sendMessage: sinon.SinonStub;
  sendNativeMessage: sinon.SinonStub;
  getBrowserInfo: sinon.SinonStub;
  getPlatformInfo: sinon.SinonStub;
  getPackageDirectoryEntry?: sinon.SinonStub;
  onStartup: EventsEvent;
  onInstalled: EventsEvent;
  onSuspend?: EventsEvent;
  onSuspendCanceled?: EventsEvent;
  onUpdateAvailable: EventsEvent;
  onBrowserUpdateAvailable?: EventsEvent;
  onConnect: EventsEvent;
  onConnectExternal: EventsEvent;
  onMessage: EventsEvent;
  onMessageExternal: EventsEvent;
  onRestartRequired?: EventsEvent;
  lastError?: {
    message?: string;
  };
  id: string;
}

export type RuntimePlatformOs =
  | 'mac'
  | 'win'
  | 'android'
  | 'cros'
  | 'linux'
  | 'openbsd';

export type RuntimePlatformArch = 'arm' | 'x86-32' | 'x86-64';

export type RuntimeRequestUpdateCheckStatus =
  | 'throttled'
  | 'no_update'
  | 'update_available';

export type RuntimeOnInstalledReason = 'install' | 'update' | 'browser_update';

export type RuntimeOnRestartRequiredReason =
  | 'app_update'
  | 'os_update'
  | 'periodic';

export interface RuntimePort {
  name: string;
  disconnect: sinon.SinonStub;
  onDisconnect: EventsEvent;
  onMessage: EventsEvent;
  postMessage: sinon.SinonStub;
  sender?: RuntimeMessageSender;
}

export interface RuntimeMessageSender {
  tab?: TabsTab;
  frameId?: number;
  id?: string;
  url?: string;
  tlsChannelId?: string;
}

export interface RuntimePlatformInfo {
  os: RuntimePlatformOs;
  arch: RuntimePlatformArch;
  nacl_arch?: any;
}

export interface RuntimeBrowserInfo {
  name: string;
  vendor: string;
  version: string;
  buildID: string;
}

export interface Search {
  get: sinon.SinonStub;
  search: sinon.SinonStub;
}

export interface SearchSearchEngine {
  name: string;
  isDefault: boolean;
  alias?: string;
  favIconUrl?: string;
}

export interface Sessions {
  forgetClosedTab: sinon.SinonStub;
  forgetClosedWindow: sinon.SinonStub;
  getRecentlyClosed: sinon.SinonStub;
  getDevices?: sinon.SinonStub;
  restore: sinon.SinonStub;
  setTabValue: sinon.SinonStub;
  getTabValue: sinon.SinonStub;
  removeTabValue: sinon.SinonStub;
  setWindowValue: sinon.SinonStub;
  getWindowValue: sinon.SinonStub;
  removeWindowValue: sinon.SinonStub;
  onChanged: EventsEvent;
  MAX_SESSION_RESULTS: 25;
}

export interface SessionsFilter {
  maxResults?: number;
}

export interface SessionsSession {
  lastModified: number;
  tab?: TabsTab;
  window?: WindowsWindow;
}

export interface SessionsDevice {
  info: string;
  deviceName: string;
  sessions: SessionsSession[];
}

export interface SidebarAction {
  setTitle: sinon.SinonStub;
  getTitle: sinon.SinonStub;
  setIcon: sinon.SinonStub;
  setPanel: sinon.SinonStub;
  getPanel: sinon.SinonStub;
  open: sinon.SinonStub;
  close: sinon.SinonStub;
  isOpen: sinon.SinonStub;
}

export interface SidebarActionImageDataType extends ImageData {} // eslint-disable-line @typescript-eslint/no-empty-interface

export interface Storage {
  onChanged: EventsEvent;
  sync: StorageStorageArea;
  local: StorageStorageArea;
  managed: StorageStorageArea;
}

export interface StorageStorageChange {
  oldValue?: any;
  newValue?: any;
}

export interface StorageStorageArea {
  get: sinon.SinonStub;
  getBytesInUse?: sinon.SinonStub;
  set: sinon.SinonStub;
  remove: sinon.SinonStub;
  clear: sinon.SinonStub;
}

export interface Tabs {
  get: sinon.SinonStub;
  getCurrent: sinon.SinonStub;
  connect: () => RuntimePort;
  sendRequest?: sinon.SinonStub;
  sendMessage: sinon.SinonStub;
  getSelected?: sinon.SinonStub;
  getAllInWindow?: sinon.SinonStub;
  create: sinon.SinonStub;
  duplicate: sinon.SinonStub;
  query: sinon.SinonStub;
  highlight: sinon.SinonStub;
  update: sinon.SinonStub;
  move: sinon.SinonStub;
  reload: sinon.SinonStub;
  remove: sinon.SinonStub;
  discard: sinon.SinonStub;
  detectLanguage: sinon.SinonStub;
  toggleReaderMode: sinon.SinonStub;
  captureTab: sinon.SinonStub;
  captureVisibleTab: sinon.SinonStub;
  executeScript: sinon.SinonStub;
  insertCSS: sinon.SinonStub;
  removeCSS: sinon.SinonStub;
  setZoom: sinon.SinonStub;
  getZoom: sinon.SinonStub;
  setZoomSettings: sinon.SinonStub;
  getZoomSettings: sinon.SinonStub;
  print: sinon.SinonStub;
  printPreview: sinon.SinonStub;
  saveAsPDF: sinon.SinonStub;
  show: sinon.SinonStub;
  hide: sinon.SinonStub;
  moveInSuccession: sinon.SinonStub;
  onCreated: EventsEvent;
  onUpdated: EventsEvent;
  onMoved: EventsEvent;
  onSelectionChanged?: EventsEvent;
  onActiveChanged?: EventsEvent;
  onActivated: EventsEvent;
  onHighlightChanged?: EventsEvent;
  onHighlighted: EventsEvent;
  onDetached: EventsEvent;
  onAttached: EventsEvent;
  onRemoved: EventsEvent;
  onReplaced: EventsEvent;
  onZoomChange: EventsEvent;
  TAB_ID_NONE: -1;
}

export type TabsMutedInfoReason = 'user' | 'capture' | 'extension';

export type TabsZoomSettingsMode = 'automatic' | 'manual' | 'disabled';

export type TabsZoomSettingsScope = 'per-origin' | 'per-tab';

export type TabsTabStatus = 'loading' | 'complete';

export type TabsWindowType = 'normal' | 'popup' | 'panel' | 'app' | 'devtools';

export type TabsUpdatePropertyName =
  | 'attention'
  | 'audible'
  | 'discarded'
  | 'favIconUrl'
  | 'hidden'
  | 'isarticle'
  | 'isArticle'
  | 'mutedInfo'
  | 'pinned'
  | 'sharingState'
  | 'status'
  | 'title';

export interface TabsMutedInfo {
  muted: boolean;
  reason?: TabsMutedInfoReason;
  extensionId?: string;
}

export interface TabsSharingState {
  screen?: string;
  camera: boolean;
  microphone: boolean;
}

export interface TabsTab {
  id?: number;
  index: number;
  windowId?: number;
  openerTabId?: number;
  selected?: boolean;
  highlighted: boolean;
  active: boolean;
  pinned: boolean;
  lastAccessed?: number;
  audible?: boolean;
  mutedInfo?: TabsMutedInfo;
  url?: string;
  title?: string;
  favIconUrl?: string;
  status?: string;
  discarded?: boolean;
  incognito: boolean;
  width?: number;
  height?: number;
  hidden?: boolean;
  sessionId?: string;
  cookieStoreId?: string;
  isArticle?: boolean;
  isInReaderMode?: boolean;
  sharingState?: TabsSharingState;
  attention?: boolean;
  successorTabId?: number;
}

export interface TabsZoomSettings {
  mode?: TabsZoomSettingsMode;
  scope?: TabsZoomSettingsScope;
  defaultZoomFactor?: number;
}

export interface TabsPageSettings {
  paperSizeUnit?: number;
  paperWidth?: number;
  paperHeight?: number;
  orientation?: number;
  scaling?: number;
  shrinkToFit?: boolean;
  showBackgroundColors?: boolean;
  showBackgroundImages?: boolean;
  edgeLeft?: number;
  edgeRight?: number;
  edgeTop?: number;
  edgeBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  headerLeft?: string;
  headerCenter?: string;
  headerRight?: string;
  footerLeft?: string;
  footerCenter?: string;
  footerRight?: string;
}

export interface TabsUpdateFilter {
  urls?: string[];
  properties?: TabsUpdatePropertyName[];
  tabId?: number;
  windowId?: number;
}

export interface Telemetry {
  submitPing: sinon.SinonStub;
  canUpload: sinon.SinonStub;
  scalarAdd: sinon.SinonStub;
  scalarSet: sinon.SinonStub;
  scalarSetMaximum: sinon.SinonStub;
  recordEvent: sinon.SinonStub;
  registerScalars: sinon.SinonStub;
  registerEvents: sinon.SinonStub;
  setEventRecordingEnabled: sinon.SinonStub;
}

export type TelemetryScalarType = 'count' | 'string' | 'boolean';

export interface TelemetryScalarData {
  kind: TelemetryScalarType;
  keyed?: boolean;
  record_on_release?: boolean;
  expired?: boolean;
}

export interface TelemetryEventData {
  methods: string[];
  objects: string[];
  extra_keys: string[];
  record_on_release?: boolean;
  expired?: boolean;
}

export interface Test {
  notifyFail: sinon.SinonStub;
  notifyPass: sinon.SinonStub;
  log: sinon.SinonStub;
  sendMessage: sinon.SinonStub;
  fail: sinon.SinonStub;
  succeed: sinon.SinonStub;
  assertTrue: sinon.SinonStub;
  assertFalse: sinon.SinonStub;
  assertBool?: sinon.SinonStub;
  checkDeepEq?: sinon.SinonStub;
  assertEq: sinon.SinonStub;
  assertNoLastError?: sinon.SinonStub;
  assertLastError?: sinon.SinonStub;
  assertRejects: sinon.SinonStub;
  assertThrows: sinon.SinonStub;
  onMessage: EventsEvent;
}

export type TestExpectedError = any;

export type TestPromise = any;

export interface Theme {
  getCurrent: sinon.SinonStub;
  update: sinon.SinonStub;
  reset: sinon.SinonStub;
  onUpdated: EventsEvent;
}

export interface ThemeThemeUpdateInfo {
  theme: {};
  windowId?: number;
}

export interface TopSites {
  get: sinon.SinonStub;
}

export interface TopSitesMostVisitedURL {
  url: string;
  title?: string;
  favicon?: string;
  type?: TopSitesType;
}

export type TopSitesType = 'url' | 'search';

export interface Types {} // eslint-disable-line @typescript-eslint/no-empty-interface

export type TypesSettingScope =
  | 'regular'
  | 'regular_only'
  | 'incognito_persistent'
  | 'incognito_session_only';

export type TypesLevelOfControl =
  | 'not_controllable'
  | 'controlled_by_other_extensions'
  | 'controllable_by_this_extension'
  | 'controlled_by_this_extension';

export interface TypesSetting {
  get: sinon.SinonStub;
  set: sinon.SinonStub;
  clear: sinon.SinonStub;
  onChange?: EventsEvent;
}

export interface Urlbar {
  onBehaviorRequested: EventsEvent;
  onQueryCanceled: EventsEvent;
  onResultsRequested: EventsEvent;
  openViewOnFocus: TypesSetting;
  engagementTelemetry: TypesSetting;
  contextualTip: UrlbarContextualTip;
}

export type UrlbarResultType = 'remote_tab' | 'search' | 'tab' | 'url';

export type UrlbarSourceType =
  | 'bookmarks'
  | 'history'
  | 'search'
  | 'tabs'
  | 'local'
  | 'network';

export interface UrlbarQuery {
  isPrivate: boolean;
  maxResults: number;
  searchString: string;
  acceptableSources: UrlbarSourceType[];
}

export interface UrlbarResult {
  payload: {};
  source: UrlbarSourceType;
  type: UrlbarResultType;
}

export interface UrlbarContextualTip {
  set: sinon.SinonStub;
  remove: sinon.SinonStub;
  onButtonClicked: EventsEvent;
  onLinkClicked: EventsEvent;
  icon?: {
    defaultIcon: any;
    themeIcons?: ManifestThemeIcons[];
  };
  title: string;
  buttonTitle?: string;
  linkTitle?: string;
}

export interface UserScripts {
  register: sinon.SinonStub;
  onBeforeScript: EventsEvent;
}

export interface UserScriptsUserScriptOptions {
  js?: ExtensionTypesExtensionFileOrCode[];
  scriptMetadata?: ExtensionTypesPlainJSONValue;
  matches: ManifestMatchPattern[];
  excludeMatches?: ManifestMatchPattern[];
  includeGlobs?: string[];
  excludeGlobs?: string[];
  allFrames?: boolean;
  matchAboutBlank?: boolean;
  runAt?: ExtensionTypesRunAt;
}

export interface UserScriptsRegisteredUserScript {
  unregister: sinon.SinonStub;
}

export interface WebNavigation {
  getFrame: sinon.SinonStub;
  getAllFrames: sinon.SinonStub;
  onBeforeNavigate: EventsEvent;
  onCommitted: EventsEvent;
  onDOMContentLoaded: EventsEvent;
  onCompleted: EventsEvent;
  onErrorOccurred: EventsEvent;
  onCreatedNavigationTarget: EventsEvent;
  onReferenceFragmentUpdated: EventsEvent;
  onTabReplaced: EventsEvent;
  onHistoryStateUpdated: EventsEvent;
}

export type WebNavigationTransitionType =
  | 'link'
  | 'typed'
  | 'auto_bookmark'
  | 'auto_subframe'
  | 'manual_subframe'
  | 'generated'
  | 'start_page'
  | 'form_submit'
  | 'reload'
  | 'keyword'
  | 'keyword_generated';

export type WebNavigationTransitionQualifier =
  | 'client_redirect'
  | 'server_redirect'
  | 'forward_back'
  | 'from_address_bar';

export interface WebNavigationEventUrlFilters {
  url: EventsUrlFilter[];
}

export interface WebRequest {
  handlerBehaviorChanged: sinon.SinonStub;
  filterResponseData: sinon.SinonStub;
  getSecurityInfo: sinon.SinonStub;
  onBeforeRequest: EventsEvent;
  onBeforeSendHeaders: EventsEvent;
  onSendHeaders: EventsEvent;
  onHeadersReceived: EventsEvent;
  onAuthRequired: EventsEvent;
  onResponseStarted: EventsEvent;
  onBeforeRedirect: EventsEvent;
  onCompleted: EventsEvent;
  onErrorOccurred: EventsEvent;
  MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: 20;
}

export type WebRequestResourceType =
  | 'main_frame'
  | 'sub_frame'
  | 'stylesheet'
  | 'script'
  | 'image'
  | 'object'
  | 'object_subrequest'
  | 'xmlhttprequest'
  | 'xbl'
  | 'xslt'
  | 'ping'
  | 'beacon'
  | 'xml_dtd'
  | 'font'
  | 'media'
  | 'websocket'
  | 'csp_report'
  | 'imageset'
  | 'web_manifest'
  | 'speculative'
  | 'other';

export type WebRequestOnBeforeRequestOptions = 'blocking' | 'requestBody';

export type WebRequestOnBeforeSendHeadersOptions =
  | 'requestHeaders'
  | 'blocking';

export type WebRequestOnSendHeadersOptions = 'requestHeaders';

export type WebRequestOnHeadersReceivedOptions = 'blocking' | 'responseHeaders';

export type WebRequestOnAuthRequiredOptions =
  | 'responseHeaders'
  | 'blocking'
  | 'asyncBlocking';

export type WebRequestOnResponseStartedOptions = 'responseHeaders';

export type WebRequestOnBeforeRedirectOptions = 'responseHeaders';

export type WebRequestOnCompletedOptions = 'responseHeaders';

export type WebRequestHttpHeaders = {
  name: string;
  value?: string;
  binaryValue?: number[];
}[];

export type WebRequestCertificateTransparencyStatus =
  | 'not_applicable'
  | 'policy_compliant'
  | 'policy_not_enough_scts'
  | 'policy_not_diverse_scts';

export type WebRequestTransportWeaknessReasons = 'cipher';

export type WebRequestUrlClassificationFlags =
  | 'fingerprinting'
  | 'fingerprinting_content'
  | 'cryptomining'
  | 'cryptomining_content'
  | 'tracking'
  | 'tracking_ad'
  | 'tracking_analytics'
  | 'tracking_social'
  | 'tracking_content'
  | 'any_basic_tracking'
  | 'any_strict_tracking'
  | 'any_social_tracking';

export type WebRequestUrlClassificationParty = WebRequestUrlClassificationFlags[];

export interface WebRequestRequestFilter {
  urls: string[];
  types?: WebRequestResourceType[];
  tabId?: number;
  windowId?: number;
  incognito?: boolean;
}

export interface WebRequestBlockingResponse {
  cancel?: boolean;
  redirectUrl?: string;
  upgradeToSecure?: boolean;
  requestHeaders?: WebRequestHttpHeaders;
  responseHeaders?: WebRequestHttpHeaders;
  authCredentials?: {
    username: string;
    password: string;
  };
}

export interface WebRequestCertificateInfo {
  subject: string;
  issuer: string;
  validity: {
    start: number;
    end: number;
  };
  fingerprint: {
    sha1: string;
    sha256: string;
  };
  serialNumber: string;
  isBuiltInRoot: boolean;
  subjectPublicKeyInfoDigest: {
    sha256: string;
  };
  rawDER?: number[];
}

export interface WebRequestSecurityInfo {
  state: WebRequestState;
  errorMessage?: string;
  protocolVersion?: WebRequestProtocolVersion;
  cipherSuite?: string;
  keaGroupName?: string;
  signatureSchemeName?: string;
  certificates: WebRequestCertificateInfo[];
  isDomainMismatch?: boolean;
  isExtendedValidation?: boolean;
  isNotValidAtThisTime?: boolean;
  isUntrusted?: boolean;
  certificateTransparencyStatus?: WebRequestCertificateTransparencyStatus;
  hsts?: boolean;
  hpkp?: string;
  weaknessReasons?: WebRequestTransportWeaknessReasons[];
}

export type WebRequestState = 'insecure' | 'weak' | 'broken' | 'secure';

export type WebRequestProtocolVersion =
  | 'TLSv1'
  | 'TLSv1.1'
  | 'TLSv1.2'
  | 'TLSv1.3'
  | 'unknown';

export interface WebRequestUploadData {
  bytes?: any;
  file?: string;
}

export interface WebRequestUrlClassification {
  firstParty: WebRequestUrlClassificationParty;
  thirdParty: WebRequestUrlClassificationParty;
}

export interface Windows {
  get: sinon.SinonStub;
  getCurrent: sinon.SinonStub;
  getLastFocused: sinon.SinonStub;
  getAll: sinon.SinonStub;
  create: sinon.SinonStub;
  update: sinon.SinonStub;
  remove: sinon.SinonStub;
  onCreated: EventsEvent;
  onRemoved: EventsEvent;
  onFocusChanged: EventsEvent;
  WINDOW_ID_NONE: -1;
  WINDOW_ID_CURRENT: -2;
}

export type WindowsWindowType =
  | 'normal'
  | 'popup'
  | 'panel'
  | 'app'
  | 'devtools';

export type WindowsWindowState =
  | 'normal'
  | 'minimized'
  | 'maximized'
  | 'fullscreen'
  | 'docked';

export type WindowsCreateType = 'normal' | 'popup' | 'panel' | 'detached_panel';

export interface WindowsWindow {
  id?: number;
  focused: boolean;
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  tabs?: TabsTab[];
  incognito: boolean;
  type?: WindowsWindowType;
  state?: WindowsWindowState;
  alwaysOnTop: boolean;
  sessionId?: string;
  title?: string;
}

export interface WindowsGetInfo {
  populate?: boolean;
  windowTypes?: WindowsWindowType[];
}
