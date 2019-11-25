/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
import sinon from 'sinon';

export interface SinonEventStub {
  addListener: sinon.SinonStub;
  removeListener: sinon.SinonStub;
  hasListener: sinon.SinonStub;
}

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

export interface Manifest {
  KeyName: string[];
  ProtocolHandler: {
    name: string;
  };
  ManifestBase: {
    manifest_version: number;
    name: string;
    short_name?: string;
    description?: string;
    author?: string;
    version: string;
    homepage_url?: string;
  };
  WebExtensionManifest: {
    minimum_chrome_version?: string;
    minimum_opera_version?: string;
    incognito?: string;
    content_security_policy?: string;
    web_accessible_resources?: string[];
    hidden?: boolean;
  };
  WebExtensionLangpackManifest: {
    homepage_url?: string;
    langpack_id: string;
  };
  WebExtensionDictionaryManifest: {
    homepage_url?: string;
  };
  ThemeIcons: {
    size: number;
  };
  HttpURL: string[];
  ExtensionURL: string[];
  ExtensionFileUrl: string[];
  ImageDataOrExtensionURL: string[];
  FirefoxSpecificProperties: {
    update_url?: string;
    strict_min_version?: string;
    strict_max_version?: string;
  };
  ContentScript: {
    include_globs?: string[];
    exclude_globs?: string[];
    all_frames?: boolean;
    match_about_blank?: boolean;
  };
  ImageData: {};
  ThemeExperiment: {};
  ThemeType: {};
  ThemeManifest: {
    default_locale?: string;
  };
}

export interface ActivityLog {
  onExtensionActivity: SinonEventStub;
}

export interface Alarms {
  create: sinon.SinonStub;
  get: sinon.SinonStub;
  getAll: sinon.SinonStub;
  clear: sinon.SinonStub;
  clearAll: sinon.SinonStub;
  onAlarm: SinonEventStub;
  Alarm: {
    name: string;
  };
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
  onCreated: SinonEventStub;
  onRemoved: SinonEventStub;
  onChanged: SinonEventStub;
  onMoved: SinonEventStub;
  onChildrenReordered?: SinonEventStub;
  onImportBegan?: SinonEventStub;
  onImportEnded?: SinonEventStub;
  BookmarkTreeNodeUnmodifiable: BookmarksBookmarkTreeNodeUnmodifiable[];
  BookmarkTreeNodeType: BookmarksBookmarkTreeNodeType[];
  BookmarkTreeNode: {
    id: string;
    parentId?: string;
    index?: number;
    url?: string;
    title: string;
  };
  CreateDetails: {
    parentId?: string;
    index?: number;
    title?: string;
    url?: string;
  };
}

export type BookmarksBookmarkTreeNodeUnmodifiable = 'managed';

export type BookmarksBookmarkTreeNodeType = 'bookmark' | 'folder' | 'separator';

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
  onClicked: SinonEventStub;
  Details: {
    tabId?: number;
    windowId?: number;
  };
  ImageDataType: {};
}

export interface BrowserSettings {
  ImageAnimationBehavior: BrowserSettingsImageAnimationBehavior[];
  ContextMenuMouseEvent: BrowserSettingsContextMenuMouseEvent[];
  allowPopupsForUserEvents: Types['Setting'];
  cacheEnabled: Types['Setting'];
  closeTabsByDoubleClick: Types['Setting'];
  contextMenuShowEvent: Types['Setting'];
  homepageOverride: Types['Setting'];
  imageAnimationBehavior: Types['Setting'];
  newTabPageOverride: Types['Setting'];
  newTabPosition: Types['Setting'];
  openBookmarksInNewTabs: Types['Setting'];
  openSearchResultsInNewTabs: Types['Setting'];
  openUrlbarResultsInNewTabs: Types['Setting'];
  webNotificationsDisabled: Types['Setting'];
  overrideDocumentColors: Types['Setting'];
  useDocumentFonts: Types['Setting'];
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
  RemovalOptions: {
    hostnames?: string[];
  };
  DataTypeSet: {
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
  };
}

export interface CaptivePortal {
  getState: sinon.SinonStub;
  getLastChecked: sinon.SinonStub;
  onStateChanged: SinonEventStub;
  onConnectivityAvailable: SinonEventStub;
}

export interface Clipboard {
  setImageData: sinon.SinonStub;
}

export interface Commands {
  update: sinon.SinonStub;
  reset: sinon.SinonStub;
  getAll: sinon.SinonStub;
  onCommand: SinonEventStub;
  Command: {
    name?: string;
    description?: string;
    shortcut?: string;
  };
}

export interface ContentScripts {
  register: sinon.SinonStub;
  RegisteredContentScriptOptions: {
    includeGlobs?: string[];
    excludeGlobs?: string[];
    allFrames?: boolean;
    matchAboutBlank?: boolean;
  };
  RegisteredContentScript: {
    unregister: sinon.SinonStub;
  };
}

export interface ContextualIdentities {
  get: sinon.SinonStub;
  query: sinon.SinonStub;
  create: sinon.SinonStub;
  update: sinon.SinonStub;
  remove: sinon.SinonStub;
  onUpdated: SinonEventStub;
  onCreated: SinonEventStub;
  onRemoved: SinonEventStub;
  ContextualIdentity: {
    name: string;
    icon: string;
    iconUrl: string;
    color: string;
    colorCode: string;
    cookieStoreId: string;
  };
}

export interface Cookies {
  get: sinon.SinonStub;
  getAll: sinon.SinonStub;
  set: sinon.SinonStub;
  remove: sinon.SinonStub;
  getAllCookieStores: sinon.SinonStub;
  onChanged: SinonEventStub;
  SameSiteStatus: CookiesSameSiteStatus[];
  Cookie: {
    name: string;
    value: string;
    domain: string;
    hostOnly: boolean;
    path: string;
    secure: boolean;
    httpOnly: boolean;
    session: boolean;
    storeId: string;
    firstPartyDomain: string;
  };
  CookieStore: {
    id: string;
    incognito: boolean;
  };
  OnChangedCause: CookiesOnChangedCause[];
}

export type CookiesSameSiteStatus = 'no_restriction' | 'lax' | 'strict';

export type CookiesOnChangedCause =
  | 'evicted'
  | 'expired'
  | 'explicit'
  | 'expired_overwrite'
  | 'overwrite';

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
  onResourceAdded?: SinonEventStub;
  onResourceContentCommitted?: SinonEventStub;
  Resource: {
    getContent?: sinon.SinonStub;
    setContent?: sinon.SinonStub;
    url: string;
  };
}

export interface DevtoolsNetwork {
  getHAR: sinon.SinonStub;
  onRequestFinished: SinonEventStub;
  onNavigated: SinonEventStub;
  Request: {
    getContent: sinon.SinonStub;
  };
}

export interface DevtoolsPanels {
  create: sinon.SinonStub;
  setOpenResourceHandler?: sinon.SinonStub;
  openResource?: sinon.SinonStub;
  onThemeChanged: SinonEventStub;
  ElementsPanel: {
    createSidebarPane: sinon.SinonStub;
    onSelectionChanged: SinonEventStub;
  };
  SourcesPanel: {
    createSidebarPane?: sinon.SinonStub;
    onSelectionChanged?: SinonEventStub;
  };
  ExtensionPanel: {
    createStatusBarButton?: sinon.SinonStub;
    onSearch?: SinonEventStub;
    onShown: SinonEventStub;
    onHidden: SinonEventStub;
  };
  ExtensionSidebarPane: {
    setHeight?: sinon.SinonStub;
    setExpression: sinon.SinonStub;
    setObject: sinon.SinonStub;
    setPage: sinon.SinonStub;
    onShown: SinonEventStub;
    onHidden: SinonEventStub;
  };
  Button: {
    update?: sinon.SinonStub;
    onClicked?: SinonEventStub;
  };
  elements: DevtoolsPanels['ElementsPanel'];
  sources: DevtoolsPanels['SourcesPanel'];
  themeName: string[];
}

export interface Dns {
  resolve: sinon.SinonStub;
  DNSRecord: {
    canonicalName?: string;
    isTRR: string;
    addresses: string[];
  };
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
  onCreated: SinonEventStub;
  onErased: SinonEventStub;
  onChanged: SinonEventStub;
  FilenameConflictAction: DownloadsFilenameConflictAction[];
  InterruptReason: DownloadsInterruptReason[];
  DangerType: DownloadsDangerType[];
  State: DownloadsState[];
  DownloadItem: {
    id: number;
    url: string;
    referrer?: string;
    filename: string;
    incognito: boolean;
    mime?: string;
    startTime: string;
    endTime?: string;
    estimatedEndTime?: string;
    paused: boolean;
    canResume: boolean;
    exists: boolean;
    byExtensionId?: string;
    byExtensionName?: string;
  };
  StringDelta: {
    current?: string;
    previous?: string;
  };
  DoubleDelta: {};
  BooleanDelta: {
    current?: boolean;
    previous?: boolean;
  };
  DownloadQuery: {
    query?: string[];
    filenameRegex?: string;
    urlRegex?: string;
    limit?: number;
    orderBy?: string[];
    id?: number;
    url?: string;
    filename?: string;
    mime?: string;
    startTime?: string;
    endTime?: string;
    paused?: boolean;
    exists?: boolean;
  };
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

export interface Events {
  Rule: {
    id?: string;
    tags?: string[];
    priority?: number;
  };
  Event: {
    addListener: sinon.SinonStub;
    removeListener: sinon.SinonStub;
    hasListener: sinon.SinonStub;
    hasListeners: sinon.SinonStub;
    addRules?: sinon.SinonStub;
    getRules?: sinon.SinonStub;
    removeRules?: sinon.SinonStub;
  };
  UrlFilter: {
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
  };
}

export interface Experiments {
  ExperimentAPI: {};
  ExperimentURL: string[];
  APIEvent: ExperimentsAPIEvent[];
  APIParentScope: ExperimentsAPIParentScope[];
  APIChildScope: ExperimentsAPIChildScope[];
}

export type ExperimentsAPIEvent = 'startup';

export type ExperimentsAPIParentScope =
  | 'addon_parent'
  | 'content_parent'
  | 'devtools_parent';

export type ExperimentsAPIChildScope =
  | 'addon_child'
  | 'content_child'
  | 'devtools_child';

export interface Extension {
  getURL: sinon.SinonStub;
  getViews: sinon.SinonStub;
  getBackgroundPage: sinon.SinonStub;
  isAllowedIncognitoAccess: sinon.SinonStub;
  isAllowedFileSchemeAccess: sinon.SinonStub;
  setUpdateUrlData?: sinon.SinonStub;
  onRequest?: SinonEventStub;
  onRequestExternal?: SinonEventStub;
  ViewType: ExtensionViewType[];
  lastError: {
    message: string;
  };
}

export type ExtensionViewType = 'tab' | 'popup' | 'sidebar';

export interface ExtensionTypes {
  ImageFormat: ExtensionTypesImageFormat[];
  ImageDetails: {
    quality?: number;
  };
  RunAt: ExtensionTypesRunAt[];
  CSSOrigin: ExtensionTypesCSSOrigin[];
  InjectDetails: {
    code?: string;
    file?: string;
    allFrames?: boolean;
    matchAboutBlank?: boolean;
    frameId?: number;
  };
}

export type ExtensionTypesImageFormat = 'jpeg' | 'png';

export type ExtensionTypesRunAt =
  | 'document_start'
  | 'document_end'
  | 'document_idle';

export type ExtensionTypesCSSOrigin = 'user' | 'author';

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
  onRunning: SinonEventStub;
  ProfilerFeature: GeckoProfilerProfilerFeature[];
  supports: GeckoProfilerSupports[];
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
  onVisited: SinonEventStub;
  onVisitRemoved: SinonEventStub;
  onTitleChanged: SinonEventStub;
  TransitionType: HistoryTransitionType[];
  HistoryItem: {
    id: string;
    url?: string;
    title?: string;
    visitCount?: number;
    typedCount?: number;
  };
  VisitItem: {
    id: string;
    visitId: string;
    referringVisitId: string;
  };
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

export interface I18n {
  getAcceptLanguages: sinon.SinonStub;
  getMessage: sinon.SinonStub;
  getUILanguage: sinon.SinonStub;
  detectLanguage: sinon.SinonStub;
  LanguageCode: string[];
}

export interface Identity {
  getAccounts?: sinon.SinonStub;
  getAuthToken?: sinon.SinonStub;
  getProfileUserInfo?: sinon.SinonStub;
  removeCachedAuthToken?: sinon.SinonStub;
  launchWebAuthFlow: sinon.SinonStub;
  getRedirectURL: sinon.SinonStub;
  onSignInChanged?: SinonEventStub;
  AccountInfo: {
    id: string;
  };
}

export interface Idle {
  queryState: sinon.SinonStub;
  setDetectionInterval: sinon.SinonStub;
  onStateChanged: SinonEventStub;
  IdleState: IdleIdleState[];
}

export type IdleIdleState = 'active' | 'idle';

export interface Management {
  getAll: sinon.SinonStub;
  get: sinon.SinonStub;
  install: sinon.SinonStub;
  getSelf: sinon.SinonStub;
  uninstallSelf: sinon.SinonStub;
  setEnabled: sinon.SinonStub;
  onDisabled: SinonEventStub;
  onEnabled: SinonEventStub;
  onInstalled: SinonEventStub;
  onUninstalled: SinonEventStub;
  IconInfo: {
    size: number;
    url: string;
  };
  ExtensionDisabledReason: ManagementExtensionDisabledReason[];
  ExtensionType: ManagementExtensionType[];
  ExtensionInstallType: ManagementExtensionInstallType[];
  ExtensionInfo: {
    id: string;
    name: string;
    shortName?: string;
    description: string;
    version: string;
    versionName?: string;
    mayDisable: boolean;
    enabled: boolean;
    homepageUrl?: string;
    updateUrl?: string;
    optionsUrl: string;
    permissions?: string[];
    hostPermissions?: string[];
  };
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

export interface Menus {
  create: sinon.SinonStub;
  update: sinon.SinonStub;
  remove: sinon.SinonStub;
  removeAll: sinon.SinonStub;
  overrideContext: sinon.SinonStub;
  refresh: sinon.SinonStub;
  onClicked: SinonEventStub;
  onShown: SinonEventStub;
  onHidden: SinonEventStub;
  ContextType: MenusContextType[];
  ItemType: MenusItemType[];
  OnClickData: {
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
    modifiers: MenusModifiers[];
    button?: number;
    targetElementId?: number;
  };
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

export type MenusModifiers = 'Shift' | 'Alt' | 'Command' | 'Ctrl' | 'MacCtrl';

export interface NetworkStatus {
  getLinkInfo: sinon.SinonStub;
  onConnectionChanged: SinonEventStub;
  NetworkLinkInfo: {
    status: string;
    type: string;
    id?: string;
  };
}

export interface NormandyAddonStudy {
  getStudy: sinon.SinonStub;
  endStudy: sinon.SinonStub;
  getClientMetadata: sinon.SinonStub;
  onUnenroll: SinonEventStub;
  Study: {
    recipeId: number;
    slug: string;
    userFacingName: string;
    userFacingDescription: string;
    branch: string;
    active: boolean;
    addonId: string;
    addonUrl: string;
    addonVersion: string;
    extensionApiId: number;
    extensionHash: string;
    extensionHashAlgorithm: string;
  };
}

export interface Notifications {
  create: sinon.SinonStub;
  update?: sinon.SinonStub;
  clear: sinon.SinonStub;
  getAll: sinon.SinonStub;
  getPermissionLevel?: sinon.SinonStub;
  onClosed: SinonEventStub;
  onClicked: SinonEventStub;
  onButtonClicked: SinonEventStub;
  onPermissionLevelChanged?: SinonEventStub;
  onShowSettings?: SinonEventStub;
  onShown: SinonEventStub;
  TemplateType: NotificationsTemplateType[];
  PermissionLevel: NotificationsPermissionLevel[];
  NotificationItem: {
    title: string;
    message: string;
  };
  CreateNotificationOptions: {
    iconUrl?: string;
    appIconMaskUrl?: string;
    title: string;
    message: string;
    contextMessage?: string;
    priority?: number;
    imageUrl?: string;
    progress?: number;
    isClickable?: boolean;
  };
  UpdateNotificationOptions: {
    iconUrl?: string;
    appIconMaskUrl?: string;
    title?: string;
    message?: string;
    contextMessage?: string;
    priority?: number;
    imageUrl?: string;
    progress?: number;
    isClickable?: boolean;
  };
}

export type NotificationsTemplateType = 'basic' | 'image' | 'list' | 'progress';

export type NotificationsPermissionLevel = 'granted' | 'denied';

export interface Omnibox {
  setDefaultSuggestion: sinon.SinonStub;
  onInputStarted: SinonEventStub;
  onInputChanged: SinonEventStub;
  onInputEntered: SinonEventStub;
  onInputCancelled: SinonEventStub;
  DescriptionStyleType: OmniboxDescriptionStyleType[];
  OnInputEnteredDisposition: OmniboxOnInputEnteredDisposition[];
  SuggestResult: {
    content: string;
    description: string;
  };
  DefaultSuggestResult: {
    description: string;
  };
}

export type OmniboxDescriptionStyleType = 'url' | 'match' | 'dim';

export type OmniboxOnInputEnteredDisposition =
  | 'currentTab'
  | 'newForegroundTab'
  | 'newBackgroundTab';

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
  onClicked: SinonEventStub;
  ImageDataType: {};
}

export interface Permissions {
  getAll: sinon.SinonStub;
  contains: sinon.SinonStub;
  request: sinon.SinonStub;
  remove: sinon.SinonStub;
  onAdded?: SinonEventStub;
  onRemoved?: SinonEventStub;
  Permissions: {};
  AnyPermissions: {};
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
  IPHandlingPolicy: PrivacyNetworkIPHandlingPolicy[];
  networkPredictionEnabled: Types['Setting'];
  peerConnectionEnabled: Types['Setting'];
  webRTCIPHandlingPolicy: Types['Setting'];
}

export type PrivacyNetworkIPHandlingPolicy =
  | 'default'
  | 'default_public_and_private_interfaces'
  | 'default_public_interface_only'
  | 'disable_non_proxied_udp'
  | 'proxy_only';

export interface PrivacyServices {
  passwordSavingEnabled: Types['Setting'];
}

export interface PrivacyWebsites {
  TrackingProtectionModeOption: PrivacyWebsitesTrackingProtectionModeOption[];
  CookieConfig: {
    behavior?: string;
    nonPersistentCookies?: boolean;
  };
  thirdPartyCookiesAllowed: Types['Setting'];
  hyperlinkAuditingEnabled: Types['Setting'];
  referrersEnabled: Types['Setting'];
  resistFingerprinting: Types['Setting'];
  firstPartyIsolate: Types['Setting'];
  protectedContentEnabled: Types['Setting'];
  trackingProtectionMode: Types['Setting'];
  cookieConfig: Types['Setting'];
}

export type PrivacyWebsitesTrackingProtectionModeOption =
  | 'always'
  | 'never'
  | 'private_browsing';

export interface Proxy {
  register: sinon.SinonStub;
  unregister: sinon.SinonStub;
  registerProxyScript: sinon.SinonStub;
  onRequest: SinonEventStub;
  onError: SinonEventStub;
  onProxyError: SinonEventStub;
  ProxyConfig: {
    proxyType?: string;
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
  };
  settings: Types['Setting'];
}

export interface Runtime {
  getBackgroundPage: sinon.SinonStub;
  openOptionsPage: sinon.SinonStub;
  getManifest: sinon.SinonStub;
  getURL: sinon.SinonStub;
  setUninstallURL: sinon.SinonStub;
  reload: sinon.SinonStub;
  requestUpdateCheck?: sinon.SinonStub;
  restart?: sinon.SinonStub;
  connect: sinon.SinonStub;
  connectNative: sinon.SinonStub;
  sendMessage: sinon.SinonStub;
  sendNativeMessage: sinon.SinonStub;
  getBrowserInfo: sinon.SinonStub;
  getPlatformInfo: sinon.SinonStub;
  getPackageDirectoryEntry?: sinon.SinonStub;
  onStartup: SinonEventStub;
  onInstalled: SinonEventStub;
  onSuspend?: SinonEventStub;
  onSuspendCanceled?: SinonEventStub;
  onUpdateAvailable: SinonEventStub;
  onBrowserUpdateAvailable?: SinonEventStub;
  onConnect: SinonEventStub;
  onConnectExternal: SinonEventStub;
  onMessage: SinonEventStub;
  onMessageExternal: SinonEventStub;
  onRestartRequired?: SinonEventStub;
  Port: {
    name: string;
  };
  MessageSender: {
    frameId?: number;
    id?: string;
    url?: string;
    tlsChannelId?: string;
  };
  PlatformOs: RuntimePlatformOs[];
  PlatformArch: RuntimePlatformArch[];
  PlatformInfo: {};
  BrowserInfo: {
    name: string;
    vendor: string;
    version: string;
    buildID: string;
  };
  RequestUpdateCheckStatus: RuntimeRequestUpdateCheckStatus[];
  OnInstalledReason: RuntimeOnInstalledReason[];
  OnRestartRequiredReason: RuntimeOnRestartRequiredReason[];
  lastError: {
    message?: string;
  };
  id: string[];
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

export interface Search {
  get: sinon.SinonStub;
  search: sinon.SinonStub;
  SearchEngine: {
    name: string;
    isDefault: boolean;
    alias?: string;
    favIconUrl?: string;
  };
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
  onChanged: SinonEventStub;
  Filter: {
    maxResults?: number;
  };
  Session: {
    lastModified: number;
  };
  Device: {
    info: string;
    deviceName: string;
  };
  MAX_SESSION_RESULTS: 25;
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
  ImageDataType: {};
}

export interface Storage {
  onChanged: SinonEventStub;
  StorageChange: {
    oldValue?: any;
    newValue?: any;
  };
  StorageArea: {
    get: sinon.SinonStub;
    getBytesInUse?: sinon.SinonStub;
    set: sinon.SinonStub;
    remove: sinon.SinonStub;
    clear: sinon.SinonStub;
  };
  sync: Storage['StorageArea'];
  local: Storage['StorageArea'];
  managed: Storage['StorageArea'];
}

export interface Tabs {
  get: sinon.SinonStub;
  getCurrent: sinon.SinonStub;
  connect: sinon.SinonStub;
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
  onCreated: SinonEventStub;
  onUpdated: SinonEventStub;
  onMoved: SinonEventStub;
  onSelectionChanged?: SinonEventStub;
  onActiveChanged?: SinonEventStub;
  onActivated: SinonEventStub;
  onHighlightChanged?: SinonEventStub;
  onHighlighted: SinonEventStub;
  onDetached: SinonEventStub;
  onAttached: SinonEventStub;
  onRemoved: SinonEventStub;
  onReplaced: SinonEventStub;
  onZoomChange: SinonEventStub;
  MutedInfoReason: TabsMutedInfoReason[];
  MutedInfo: {
    muted: boolean;
    extensionId?: string;
  };
  SharingState: {
    screen?: string;
    camera: boolean;
    microphone: boolean;
  };
  Tab: {
    id?: number;
    index: number;
    windowId?: number;
    openerTabId?: number;
    selected: boolean;
    highlighted: boolean;
    active: boolean;
    pinned: boolean;
    lastAccessed?: number;
    audible?: boolean;
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
    attention?: boolean;
    successorTabId?: number;
  };
  ZoomSettingsMode: TabsZoomSettingsMode[];
  ZoomSettingsScope: TabsZoomSettingsScope[];
  ZoomSettings: {};
  PageSettings: {
    paperSizeUnit?: number;
    orientation?: number;
    shrinkToFit?: boolean;
    showBackgroundColors?: boolean;
    showBackgroundImages?: boolean;
    headerLeft?: string;
    headerCenter?: string;
    headerRight?: string;
    footerLeft?: string;
    footerCenter?: string;
    footerRight?: string;
  };
  TabStatus: TabsTabStatus[];
  WindowType: TabsWindowType[];
  UpdatePropertyName: TabsUpdatePropertyName[];
  UpdateFilter: {
    urls?: string[];
    tabId?: number;
    windowId?: number;
  };
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
  ScalarType: TelemetryScalarType[];
  ScalarData: {
    keyed?: boolean;
    record_on_release?: boolean;
    expired?: boolean;
  };
  EventData: {
    methods: string[];
    objects: string[];
    extra_keys: string[];
    record_on_release?: boolean;
    expired?: boolean;
  };
}

export type TelemetryScalarType = 'count' | 'string' | 'boolean';

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
  onMessage: SinonEventStub;
}

export interface Theme {
  getCurrent: sinon.SinonStub;
  update: sinon.SinonStub;
  reset: sinon.SinonStub;
  onUpdated: SinonEventStub;
  ThemeUpdateInfo: {
    windowId?: number;
  };
}

export interface TopSites {
  get: sinon.SinonStub;
  MostVisitedURL: {
    url: string;
    title?: string;
    favicon?: string;
    type?: string;
  };
}

export interface Types {
  SettingScope: TypesSettingScope[];
  LevelOfControl: TypesLevelOfControl[];
  Setting: {
    get: sinon.SinonStub;
    set: sinon.SinonStub;
    clear: sinon.SinonStub;
    onChange?: SinonEventStub;
  };
}

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

export interface Urlbar {
  onBehaviorRequested: SinonEventStub;
  onQueryCanceled: SinonEventStub;
  onResultsRequested: SinonEventStub;
  Query: {
    isPrivate: boolean;
    maxResults: number;
    searchString: string;
  };
  Result: {};
  ResultType: UrlbarResultType[];
  SourceType: UrlbarSourceType[];
  openViewOnFocus: Types['Setting'];
  engagementTelemetry: Types['Setting'];
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

export interface UrlbarContextualTip {
  set: sinon.SinonStub;
  remove: sinon.SinonStub;
  onButtonClicked: SinonEventStub;
  onLinkClicked: SinonEventStub;
  ContextualTip: {
    title: string;
    buttonTitle?: string;
    linkTitle?: string;
  };
}

export interface UserScripts {
  register: sinon.SinonStub;
  UserScriptOptions: {
    includeGlobs?: string[];
    excludeGlobs?: string[];
    allFrames?: boolean;
    matchAboutBlank?: boolean;
  };
  RegisteredUserScript: {
    unregister: sinon.SinonStub;
  };
  onBeforeScript: SinonEventStub;
}

export interface WebNavigation {
  getFrame: sinon.SinonStub;
  getAllFrames: sinon.SinonStub;
  onBeforeNavigate: SinonEventStub;
  onCommitted: SinonEventStub;
  onDOMContentLoaded: SinonEventStub;
  onCompleted: SinonEventStub;
  onErrorOccurred: SinonEventStub;
  onCreatedNavigationTarget: SinonEventStub;
  onReferenceFragmentUpdated: SinonEventStub;
  onTabReplaced: SinonEventStub;
  onHistoryStateUpdated: SinonEventStub;
  TransitionType: WebNavigationTransitionType[];
  TransitionQualifier: WebNavigationTransitionQualifier[];
  EventUrlFilters: {};
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

export interface WebRequest {
  handlerBehaviorChanged: sinon.SinonStub;
  filterResponseData: sinon.SinonStub;
  getSecurityInfo: sinon.SinonStub;
  onBeforeRequest: SinonEventStub;
  onBeforeSendHeaders: SinonEventStub;
  onSendHeaders: SinonEventStub;
  onHeadersReceived: SinonEventStub;
  onAuthRequired: SinonEventStub;
  onResponseStarted: SinonEventStub;
  onBeforeRedirect: SinonEventStub;
  onCompleted: SinonEventStub;
  onErrorOccurred: SinonEventStub;
  ResourceType: WebRequestResourceType[];
  OnBeforeRequestOptions: WebRequestOnBeforeRequestOptions[];
  OnBeforeSendHeadersOptions: WebRequestOnBeforeSendHeadersOptions[];
  OnSendHeadersOptions: WebRequestOnSendHeadersOptions[];
  OnHeadersReceivedOptions: WebRequestOnHeadersReceivedOptions[];
  OnAuthRequiredOptions: WebRequestOnAuthRequiredOptions[];
  OnResponseStartedOptions: WebRequestOnResponseStartedOptions[];
  OnBeforeRedirectOptions: WebRequestOnBeforeRedirectOptions[];
  OnCompletedOptions: WebRequestOnCompletedOptions[];
  RequestFilter: {
    urls: string[];
    tabId?: number;
    windowId?: number;
    incognito?: boolean;
  };
  BlockingResponse: {
    cancel?: boolean;
    redirectUrl?: string;
    upgradeToSecure?: boolean;
  };
  CertificateInfo: {
    subject: string;
    issuer: string;
    serialNumber: string;
    isBuiltInRoot: boolean;
  };
  CertificateTransparencyStatus: WebRequestCertificateTransparencyStatus[];
  TransportWeaknessReasons: WebRequestTransportWeaknessReasons[];
  SecurityInfo: {
    state: string;
    errorMessage?: string;
    protocolVersion?: string;
    cipherSuite?: string;
    keaGroupName?: string;
    signatureSchemeName?: string;
    isDomainMismatch?: boolean;
    isExtendedValidation?: boolean;
    isNotValidAtThisTime?: boolean;
    isUntrusted?: boolean;
    hsts?: boolean;
    hpkp?: string;
  };
  UploadData: {
    bytes?: any;
    file?: string;
  };
  UrlClassificationFlags: WebRequestUrlClassificationFlags[];
  UrlClassification: {};
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

export interface Windows {
  get: sinon.SinonStub;
  getCurrent: sinon.SinonStub;
  getLastFocused: sinon.SinonStub;
  getAll: sinon.SinonStub;
  create: sinon.SinonStub;
  update: sinon.SinonStub;
  remove: sinon.SinonStub;
  onCreated: SinonEventStub;
  onRemoved: SinonEventStub;
  onFocusChanged: SinonEventStub;
  WindowType: WindowsWindowType[];
  WindowState: WindowsWindowState[];
  Window: {
    id?: number;
    focused: boolean;
    top?: number;
    left?: number;
    width?: number;
    height?: number;
    incognito: boolean;
    alwaysOnTop: boolean;
    sessionId?: string;
    title?: string;
  };
  CreateType: WindowsCreateType[];
  GetInfo: {
    populate?: boolean;
  };
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

export type ContextMenus = Menus;
