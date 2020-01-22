/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
import sinon from 'sinon';

export interface BrowserMock {
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
  contextMenus: ContextMenus;
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
  manifest: Manifest;
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
  sinonSandbox: sinon.SinonSandbox;
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

export interface ActivityLog {
  onExtensionActivity: Events['Event'];
}

export interface Alarms {
  Alarm: {
    name: string;
    periodInMinutes?: number;
    scheduledTime: number;
  };
  clear: sinon.SinonStub;
  clearAll: sinon.SinonStub;
  create: sinon.SinonStub;
  get: sinon.SinonStub;
  getAll: sinon.SinonStub;
  onAlarm: Events['Event'];
}

export interface Bookmarks {
  BookmarkTreeNode: {
    children?: Bookmarks['BookmarkTreeNode'][];
    dateAdded?: number;
    dateGroupModified?: number;
    id: string;
    index?: number;
    parentId?: string;
    title: string;
    type?: Bookmarks['BookmarkTreeNodeType'];
    unmodifiable?: Bookmarks['BookmarkTreeNodeUnmodifiable'];
    url?: string;
  };
  BookmarkTreeNodeType: BookmarksBookmarkTreeNodeType;
  BookmarkTreeNodeUnmodifiable: BookmarksBookmarkTreeNodeUnmodifiable;
  CreateDetails: {
    index?: number;
    parentId?: string;
    title?: string;
    type?: Bookmarks['BookmarkTreeNodeType'];
    url?: string;
  };
  create: sinon.SinonStub;
  export?: sinon.SinonStub;
  get: sinon.SinonStub;
  getChildren: sinon.SinonStub;
  getRecent: sinon.SinonStub;
  getSubTree: sinon.SinonStub;
  getTree: sinon.SinonStub;
  import?: sinon.SinonStub;
  move: sinon.SinonStub;
  onChanged: Events['Event'];
  onChildrenReordered: Events['Event'];
  onCreated: Events['Event'];
  onImportBegan: Events['Event'];
  onImportEnded: Events['Event'];
  onMoved: Events['Event'];
  onRemoved: Events['Event'];
  remove: sinon.SinonStub;
  removeTree: sinon.SinonStub;
  search: sinon.SinonStub;
  update: sinon.SinonStub;
}

export type BookmarksBookmarkTreeNodeType = 'bookmark' | 'folder' | 'separator';

export type BookmarksBookmarkTreeNodeUnmodifiable = 'managed';

export interface BrowserAction {
  ColorArray: number[];
  ColorValue: any;
  Details: {
    tabId?: number;
    windowId?: number;
  };
  ImageDataType: {};
  OnClickData: {
    button?: number;
    modifiers: 'Shift' | 'Alt' | 'Command' | 'Ctrl' | 'MacCtrl'[];
  };
  disable: sinon.SinonStub;
  enable: sinon.SinonStub;
  getBadgeBackgroundColor: sinon.SinonStub;
  getBadgeText: sinon.SinonStub;
  getBadgeTextColor: sinon.SinonStub;
  getPopup: sinon.SinonStub;
  getTitle: sinon.SinonStub;
  isEnabled: sinon.SinonStub;
  onClicked: Events['Event'];
  openPopup: sinon.SinonStub;
  setBadgeBackgroundColor: sinon.SinonStub;
  setBadgeText: sinon.SinonStub;
  setBadgeTextColor: sinon.SinonStub;
  setIcon: sinon.SinonStub;
  setPopup: sinon.SinonStub;
  setTitle: sinon.SinonStub;
}

export interface BrowserSettings {
  ContextMenuMouseEvent: BrowserSettingsContextMenuMouseEvent;
  ImageAnimationBehavior: BrowserSettingsImageAnimationBehavior;
  allowPopupsForUserEvents: Types['Setting'];
  cacheEnabled: Types['Setting'];
  closeTabsByDoubleClick: Types['Setting'];
  contextMenuShowEvent: Types['Setting'];
  ftpProtocolEnabled: Types['Setting'];
  homepageOverride: Types['Setting'];
  imageAnimationBehavior: Types['Setting'];
  newTabPageOverride: Types['Setting'];
  newTabPosition: Types['Setting'];
  openBookmarksInNewTabs: Types['Setting'];
  openSearchResultsInNewTabs: Types['Setting'];
  openUrlbarResultsInNewTabs: Types['Setting'];
  overrideDocumentColors: Types['Setting'];
  useDocumentFonts: Types['Setting'];
  webNotificationsDisabled: Types['Setting'];
}

export type BrowserSettingsContextMenuMouseEvent = 'mouseup' | 'mousedown';

export type BrowserSettingsImageAnimationBehavior = 'normal' | 'none' | 'once';

export interface BrowsingData {
  DataTypeSet: {
    cache?: boolean;
    cookies?: boolean;
    downloads?: boolean;
    formData?: boolean;
    history?: boolean;
    indexedDB?: boolean;
    localStorage?: boolean;
    passwords?: boolean;
    pluginData?: boolean;
    serverBoundCertificates?: boolean;
    serviceWorkers?: boolean;
  };
  RemovalOptions: {
    hostnames?: string[];
    originTypes?: {
      extension?: boolean;
      protectedWeb?: boolean;
      unprotectedWeb?: boolean;
    };
    since?: ExtensionTypes['Date'];
  };
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
  removePasswords: sinon.SinonStub;
  removePluginData: sinon.SinonStub;
  removeWebSQL?: sinon.SinonStub;
  settings: sinon.SinonStub;
}

export interface CaptivePortal {
  canonicalURL: Types['Setting'];
  getLastChecked: sinon.SinonStub;
  getState: sinon.SinonStub;
  onConnectivityAvailable: Events['Event'];
  onStateChanged: Events['Event'];
}

export interface Clipboard {
  setImageData: sinon.SinonStub;
}

export interface Commands {
  Command: {
    description?: string;
    name?: string;
    shortcut?: string;
  };
  getAll: sinon.SinonStub;
  onCommand: Events['Event'];
  reset: sinon.SinonStub;
  update: sinon.SinonStub;
}

export interface ContentScripts {
  RegisteredContentScript: {
    unregister: sinon.SinonStub;
  };
  RegisteredContentScriptOptions: {
    allFrames?: boolean;
    css?: ExtensionTypes['ExtensionFileOrCode'][];
    excludeGlobs?: string[];
    excludeMatches?: Manifest['MatchPattern'][];
    includeGlobs?: string[];
    js?: ExtensionTypes['ExtensionFileOrCode'][];
    matchAboutBlank?: boolean;
    matches: Manifest['MatchPattern'][];
    runAt?: ExtensionTypes['RunAt'];
  };
  register: sinon.SinonStub;
}

export type ContextMenus = Menus;

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

export interface ContextualIdentities {
  ContextualIdentity: {
    color: string;
    colorCode: string;
    cookieStoreId: string;
    icon: string;
    iconUrl: string;
    name: string;
  };
  create: sinon.SinonStub;
  get: sinon.SinonStub;
  onCreated: Events['Event'];
  onRemoved: Events['Event'];
  onUpdated: Events['Event'];
  query: sinon.SinonStub;
  remove: sinon.SinonStub;
  update: sinon.SinonStub;
}

export interface Cookies {
  Cookie: {
    domain: string;
    expirationDate?: number;
    firstPartyDomain: string;
    hostOnly: boolean;
    httpOnly: boolean;
    name: string;
    path: string;
    sameSite: Cookies['SameSiteStatus'];
    secure: boolean;
    session: boolean;
    storeId: string;
    value: string;
  };
  CookieStore: {
    id: string;
    incognito: boolean;
    tabIds: number[];
  };
  OnChangedCause: CookiesOnChangedCause;
  SameSiteStatus: CookiesSameSiteStatus;
  get: sinon.SinonStub;
  getAll: sinon.SinonStub;
  getAllCookieStores: sinon.SinonStub;
  onChanged: Events['Event'];
  remove: sinon.SinonStub;
  set: sinon.SinonStub;
}

export type CookiesOnChangedCause =
  | 'evicted'
  | 'expired'
  | 'explicit'
  | 'expired_overwrite'
  | 'overwrite';

export type CookiesSameSiteStatus = 'no_restriction' | 'lax' | 'strict';

export interface Devtools {
  inspectedWindow: DevtoolsInspectedWindow;
  network: DevtoolsNetwork;
  panels: DevtoolsPanels;
}

export interface DevtoolsInspectedWindow {
  Resource: {
    getContent?: sinon.SinonStub;
    setContent?: sinon.SinonStub;
    url: string;
  };
  // @ts-ignore
  eval: sinon.SinonStub;
  getResources?: sinon.SinonStub;
  onResourceAdded: Events['Event'];
  onResourceContentCommitted: Events['Event'];
  reload: sinon.SinonStub;
  tabId: number;
}

export interface DevtoolsNetwork {
  Request: {
    getContent: sinon.SinonStub;
  };
  getHAR: sinon.SinonStub;
  onNavigated: Events['Event'];
  onRequestFinished: Events['Event'];
}

export interface DevtoolsPanels {
  Button: {
    onClicked: Events['Event'];
    update?: sinon.SinonStub;
  };
  ElementsPanel: {
    createSidebarPane: sinon.SinonStub;
    onSelectionChanged: Events['Event'];
  };
  ExtensionPanel: {
    createStatusBarButton?: sinon.SinonStub<any[], DevtoolsPanels['Button']>;
    onHidden: Events['Event'];
    onShown: Events['Event'];
  };
  ExtensionSidebarPane: {
    onHidden: Events['Event'];
    onShown: Events['Event'];
    setExpression: sinon.SinonStub;
    setHeight?: sinon.SinonStub;
    setObject: sinon.SinonStub;
    setPage: sinon.SinonStub;
  };
  SourcesPanel: {
    createSidebarPane?: sinon.SinonStub;
  };
  create: sinon.SinonStub;
  elements: DevtoolsPanels['ElementsPanel'];
  onThemeChanged: Events['Event'];
  openResource?: sinon.SinonStub;
  setOpenResourceHandler?: sinon.SinonStub;
  sources: DevtoolsPanels['SourcesPanel'];
  themeName: string;
}

export interface Dns {
  DNSRecord: {
    addresses: string[];
    canonicalName?: string;
    isTRR: string;
  };
  ResolveFlags: DnsResolveFlags[];
  resolve: sinon.SinonStub;
}

export type DnsResolveFlags =
  | 'allow_name_collisions'
  | 'bypass_cache'
  | 'canonical_name'
  | 'disable_ipv4'
  | 'disable_ipv6'
  | 'disable_trr'
  | 'offline'
  | 'priority_low'
  | 'priority_medium'
  | 'speculate';

export interface Downloads {
  BooleanDelta: {
    current?: boolean;
    previous?: boolean;
  };
  DangerType: DownloadsDangerType;
  DoubleDelta: {
    current?: number;
    previous?: number;
  };
  DownloadItem: {
    byExtensionId?: string;
    byExtensionName?: string;
    bytesReceived: number;
    canResume: boolean;
    danger: Downloads['DangerType'];
    endTime?: string;
    error?: Downloads['InterruptReason'];
    estimatedEndTime?: string;
    exists: boolean;
    fileSize: number;
    filename: string;
    id: number;
    incognito: boolean;
    mime?: string;
    paused: boolean;
    referrer?: string;
    startTime: string;
    state: Downloads['State'];
    totalBytes: number;
    url: string;
  };
  DownloadQuery: {
    bytesReceived?: number;
    danger?: Downloads['DangerType'];
    endTime?: string;
    endedAfter?: Downloads['DownloadTime'];
    endedBefore?: Downloads['DownloadTime'];
    error?: Downloads['InterruptReason'];
    exists?: boolean;
    fileSize?: number;
    filename?: string;
    filenameRegex?: string;
    id?: number;
    limit?: number;
    mime?: string;
    orderBy?: string[];
    paused?: boolean;
    query?: string[];
    startTime?: string;
    startedAfter?: Downloads['DownloadTime'];
    startedBefore?: Downloads['DownloadTime'];
    state?: Downloads['State'];
    totalBytes?: number;
    totalBytesGreater?: number;
    totalBytesLess?: number;
    url?: string;
    urlRegex?: string;
  };
  DownloadTime: any;
  FilenameConflictAction: DownloadsFilenameConflictAction;
  InterruptReason: DownloadsInterruptReason;
  State: DownloadsState;
  StringDelta: {
    current?: string;
    previous?: string;
  };
  acceptDanger?: sinon.SinonStub;
  cancel: sinon.SinonStub;
  download: sinon.SinonStub;
  drag?: sinon.SinonStub;
  erase: sinon.SinonStub;
  getFileIcon: sinon.SinonStub;
  onChanged: Events['Event'];
  onCreated: Events['Event'];
  onErased: Events['Event'];
  open: sinon.SinonStub;
  pause: sinon.SinonStub;
  removeFile: sinon.SinonStub;
  resume: sinon.SinonStub;
  search: sinon.SinonStub;
  setShelfEnabled?: sinon.SinonStub;
  show: sinon.SinonStub;
  showDefaultFolder: sinon.SinonStub;
}

export type DownloadsDangerType =
  | 'file'
  | 'url'
  | 'content'
  | 'uncommon'
  | 'host'
  | 'unwanted'
  | 'safe'
  | 'accepted';

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

export type DownloadsState = 'in_progress' | 'interrupted' | 'complete';

export interface Events {
  Event: {
    addListener: sinon.SinonStub;
    addRules?: sinon.SinonStub;
    getRules?: sinon.SinonStub;
    hasListener: sinon.SinonStub;
    hasListeners: sinon.SinonStub;
    removeListener: sinon.SinonStub;
    removeRules?: sinon.SinonStub;
  };
  Rule: {
    actions: any[];
    conditions: any[];
    id?: string;
    priority?: number;
    tags?: string[];
  };
  UrlFilter: {
    hostContains?: string;
    hostEquals?: string;
    hostPrefix?: string;
    hostSuffix?: string;
    originAndPathMatches?: string;
    pathContains?: string;
    pathEquals?: string;
    pathPrefix?: string;
    pathSuffix?: string;
    ports?: any[];
    queryContains?: string;
    queryEquals?: string;
    queryPrefix?: string;
    querySuffix?: string;
    schemes?: string[];
    urlContains?: string;
    urlEquals?: string;
    urlMatches?: string;
    urlPrefix?: string;
    urlSuffix?: string;
  };
}

export interface Experiments {
  APIChildScope: ExperimentsAPIChildScope;
  APIEvent: ExperimentsAPIEvent;
  APIEvents: Experiments['APIEvent'][];
  APIParentScope: ExperimentsAPIParentScope;
  APIPath: string[];
  APIPaths: Experiments['APIPath'][];
  ExperimentAPI: {
    child?: {
      paths: Experiments['APIPaths'];
      scopes: Experiments['APIChildScope'][];
      script: Experiments['ExperimentURL'];
    };
    parent?: {
      events?: Experiments['APIEvents'];
      paths?: Experiments['APIPaths'];
      scopes?: Experiments['APIParentScope'][];
      script: Experiments['ExperimentURL'];
    };
    schema: Experiments['ExperimentURL'];
  };
  ExperimentURL: string;
}

export type ExperimentsAPIChildScope =
  | 'addon_child'
  | 'content_child'
  | 'devtools_child';

export type ExperimentsAPIEvent = 'startup';

export type ExperimentsAPIParentScope =
  | 'addon_parent'
  | 'content_parent'
  | 'devtools_parent';

export interface Extension {
  ViewType: ExtensionViewType;
  getBackgroundPage: sinon.SinonStub;
  getURL: sinon.SinonStub;
  getViews: sinon.SinonStub;
  inIncognitoContext?: boolean;
  isAllowedFileSchemeAccess: sinon.SinonStub;
  isAllowedIncognitoAccess: sinon.SinonStub;
  lastError?: {
    message: string;
  };
  onRequest: Events['Event'];
  onRequestExternal: Events['Event'];
  setUpdateUrlData?: sinon.SinonStub;
}

export interface ExtensionTypes {
  CSSOrigin: ExtensionTypesCSSOrigin;
  Date: any;
  ExtensionFileOrCode: any;
  ImageDetails: {
    format?: ExtensionTypes['ImageFormat'];
    quality?: number;
  };
  ImageFormat: ExtensionTypesImageFormat;
  InjectDetails: {
    allFrames?: boolean;
    code?: string;
    cssOrigin?: ExtensionTypes['CSSOrigin'];
    file?: string;
    frameId?: number;
    matchAboutBlank?: boolean;
    runAt?: ExtensionTypes['RunAt'];
  };
  PlainJSONValue: any;
  RunAt: ExtensionTypesRunAt;
}

export type ExtensionTypesCSSOrigin = 'user' | 'author';

export type ExtensionTypesImageFormat = 'jpeg' | 'png';

export type ExtensionTypesRunAt =
  | 'document_start'
  | 'document_end'
  | 'document_idle';

export type ExtensionViewType = 'tab' | 'popup' | 'sidebar';

export interface Find {
  find: sinon.SinonStub;
  highlightResults: sinon.SinonStub;
  removeHighlighting: sinon.SinonStub;
}

export interface GeckoProfiler {
  ProfilerFeature: GeckoProfilerProfilerFeature;
  Supports: GeckoProfilerSupports;
  dumpProfileToFile: sinon.SinonStub;
  getProfile: sinon.SinonStub;
  getProfileAsArrayBuffer: sinon.SinonStub;
  getProfileAsGzippedArrayBuffer: sinon.SinonStub;
  getSymbols: sinon.SinonStub;
  onRunning: Events['Event'];
  pause: sinon.SinonStub;
  resume: sinon.SinonStub;
  start: sinon.SinonStub;
  stop: sinon.SinonStub;
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
  | 'nostacksampling'
  | 'nativeallocations'
  | 'preferencereads'
  | 'ipcmessages';

export type GeckoProfilerSupports = 'windowLength';

export interface History {
  HistoryItem: {
    id: string;
    lastVisitTime?: number;
    title?: string;
    typedCount?: number;
    url?: string;
    visitCount?: number;
  };
  TransitionType: HistoryTransitionType;
  VisitItem: {
    id: string;
    referringVisitId: string;
    transition: History['TransitionType'];
    visitId: string;
    visitTime?: number;
  };
  addUrl: sinon.SinonStub;
  deleteAll: sinon.SinonStub;
  deleteRange: sinon.SinonStub;
  deleteUrl: sinon.SinonStub;
  getVisits: sinon.SinonStub;
  onTitleChanged: Events['Event'];
  onVisitRemoved: Events['Event'];
  onVisited: Events['Event'];
  search: sinon.SinonStub;
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
  LanguageCode: string;
  detectLanguage: sinon.SinonStub;
  getAcceptLanguages: sinon.SinonStub;
  getMessage: sinon.SinonStub;
  getUILanguage: sinon.SinonStub;
}

export interface Identity {
  AccountInfo: {
    id: string;
  };
  getAccounts?: sinon.SinonStub;
  getAuthToken?: sinon.SinonStub;
  getProfileUserInfo?: sinon.SinonStub;
  getRedirectURL: sinon.SinonStub;
  launchWebAuthFlow: sinon.SinonStub;
  onSignInChanged: Events['Event'];
  removeCachedAuthToken?: sinon.SinonStub;
}

export interface Idle {
  IdleState: IdleIdleState;
  onStateChanged: Events['Event'];
  queryState: sinon.SinonStub;
  setDetectionInterval: sinon.SinonStub;
}

export type IdleIdleState = 'active' | 'idle';

export interface Management {
  ExtensionDisabledReason: ManagementExtensionDisabledReason;
  ExtensionInfo: {
    description: string;
    disabledReason?: Management['ExtensionDisabledReason'];
    enabled: boolean;
    homepageUrl?: string;
    hostPermissions?: string[];
    icons?: Management['IconInfo'][];
    id: string;
    installType: Management['ExtensionInstallType'];
    mayDisable: boolean;
    name: string;
    optionsUrl: string;
    permissions?: string[];
    shortName?: string;
    type: Management['ExtensionType'];
    updateUrl?: string;
    version: string;
    versionName?: string;
  };
  ExtensionInstallType: ManagementExtensionInstallType;
  ExtensionType: ManagementExtensionType;
  IconInfo: {
    size: number;
    url: string;
  };
  get: sinon.SinonStub;
  getAll: sinon.SinonStub;
  getSelf: sinon.SinonStub;
  install: sinon.SinonStub;
  onDisabled: Events['Event'];
  onEnabled: Events['Event'];
  onInstalled: Events['Event'];
  onUninstalled: Events['Event'];
  setEnabled: sinon.SinonStub;
  uninstallSelf: sinon.SinonStub;
}

export type ManagementExtensionDisabledReason =
  | 'unknown'
  | 'permissions_increase';

export type ManagementExtensionInstallType =
  | 'development'
  | 'normal'
  | 'sideload'
  | 'other';

export type ManagementExtensionType = 'extension' | 'theme';

export interface Manifest {
  ContentScript: {
    all_frames?: boolean;
    css?: Manifest['ExtensionURL'][];
    exclude_globs?: string[];
    exclude_matches?: Manifest['MatchPattern'][];
    include_globs?: string[];
    js?: Manifest['ExtensionURL'][];
    match_about_blank?: boolean;
    matches: Manifest['MatchPattern'][];
    run_at?: ExtensionTypes['RunAt'];
  };
  ExtensionFileUrl: string;
  ExtensionID: any;
  ExtensionURL: string;
  FirefoxSpecificProperties: {
    id?: Manifest['ExtensionID'];
    strict_max_version?: string;
    strict_min_version?: string;
    update_url?: string;
  };
  HttpURL: string;
  IconImageData: any;
  IconPath: any;
  ImageData: {};
  ImageDataOrExtensionURL: string;
  KeyName: string;
  ManifestBase: {
    applications?: {
      gecko?: Manifest['FirefoxSpecificProperties'];
    };
    author?: string;
    browser_specific_settings?: {
      edge?: {};
      gecko?: Manifest['FirefoxSpecificProperties'];
    };
    description?: string;
    homepage_url?: string;
    manifest_version: number;
    name: string;
    short_name?: string;
    version: string;
  };
  MatchPattern: any;
  MatchPatternRestricted: any;
  MatchPatternUnestricted: any;
  NativeManifest: any;
  OptionalPermission: any;
  OptionalPermissionOrOrigin: any;
  Permission: any;
  PermissionOrOrigin: any;
  PersistentBackgroundProperty: any;
  ProtocolHandler: {
    name: string;
    protocol: any;
    uriTemplate: any;
  };
  ThemeColor: any;
  ThemeExperiment: {
    colors?: {};
    images?: {};
    properties?: {};
    stylesheet?: Manifest['ExtensionURL'];
  };
  ThemeIcons: {
    dark: Manifest['ExtensionURL'];
    light: Manifest['ExtensionURL'];
    size: number;
  };
  ThemeType: {
    colors?: {
      accentcolor?: Manifest['ThemeColor'];
      bookmark_text?: Manifest['ThemeColor'];
      button_background_active?: Manifest['ThemeColor'];
      button_background_hover?: Manifest['ThemeColor'];
      frame?: Manifest['ThemeColor'];
      frame_inactive?: Manifest['ThemeColor'];
      icons?: Manifest['ThemeColor'];
      icons_attention?: Manifest['ThemeColor'];
      ntp_background?: Manifest['ThemeColor'];
      ntp_text?: Manifest['ThemeColor'];
      popup?: Manifest['ThemeColor'];
      popup_border?: Manifest['ThemeColor'];
      popup_highlight?: Manifest['ThemeColor'];
      popup_highlight_text?: Manifest['ThemeColor'];
      popup_text?: Manifest['ThemeColor'];
      sidebar?: Manifest['ThemeColor'];
      sidebar_border?: Manifest['ThemeColor'];
      sidebar_highlight?: Manifest['ThemeColor'];
      sidebar_highlight_text?: Manifest['ThemeColor'];
      sidebar_text?: Manifest['ThemeColor'];
      tab_background_separator?: Manifest['ThemeColor'];
      tab_background_text?: Manifest['ThemeColor'];
      tab_line?: Manifest['ThemeColor'];
      tab_loading?: Manifest['ThemeColor'];
      tab_selected?: Manifest['ThemeColor'];
      tab_text?: Manifest['ThemeColor'];
      textcolor?: Manifest['ThemeColor'];
      toolbar?: Manifest['ThemeColor'];
      toolbar_bottom_separator?: Manifest['ThemeColor'];
      toolbar_field?: Manifest['ThemeColor'];
      toolbar_field_border?: Manifest['ThemeColor'];
      toolbar_field_border_focus?: Manifest['ThemeColor'];
      toolbar_field_focus?: Manifest['ThemeColor'];
      toolbar_field_highlight?: Manifest['ThemeColor'];
      toolbar_field_highlight_text?: Manifest['ThemeColor'];
      toolbar_field_separator?: Manifest['ThemeColor'];
      toolbar_field_text?: Manifest['ThemeColor'];
      toolbar_field_text_focus?: Manifest['ThemeColor'];
      toolbar_text?: Manifest['ThemeColor'];
      toolbar_top_separator?: Manifest['ThemeColor'];
      toolbar_vertical_separator?: Manifest['ThemeColor'];
    };
    images?: {
      additional_backgrounds?: Manifest['ImageDataOrExtensionURL'][];
      headerURL?: Manifest['ImageDataOrExtensionURL'];
      theme_frame?: Manifest['ImageDataOrExtensionURL'];
    };
    properties?: {
      additional_backgrounds_alignment?:
        | 'bottom'
        | 'center'
        | 'left'
        | 'right'
        | 'top'
        | 'center bottom'
        | 'center center'
        | 'center top'
        | 'left bottom'
        | 'left center'
        | 'left top'
        | 'right bottom'
        | 'right center'
        | 'right top'[];
      additional_backgrounds_tiling?:
        | 'no-repeat'
        | 'repeat'
        | 'repeat-x'
        | 'repeat-y'[];
    };
  };
  UnrecognizedProperty: any;
}

export interface Menus {
  ACTION_MENU_TOP_LEVEL_LIMIT: 6;
  ContextType: MenusContextType;
  ItemType: MenusItemType;
  OnClickData: {
    bookmarkId: string;
    button?: number;
    checked?: boolean;
    editable: boolean;
    frameId?: number;
    frameUrl?: string;
    linkText?: string;
    linkUrl?: string;
    mediaType?: string;
    menuItemId: any;
    modifiers: 'Shift' | 'Alt' | 'Command' | 'Ctrl' | 'MacCtrl'[];
    pageUrl?: string;
    parentMenuItemId?: any;
    selectionText?: string;
    srcUrl?: string;
    targetElementId?: number;
    viewType?: Extension['ViewType'];
    wasChecked?: boolean;
  };
  create: sinon.SinonStub;
  getTargetElement: sinon.SinonStub;
  onClicked: Events['Event'];
  onHidden: Events['Event'];
  onShown: Events['Event'];
  overrideContext: sinon.SinonStub;
  refresh: sinon.SinonStub;
  remove: sinon.SinonStub;
  removeAll: sinon.SinonStub;
  update: sinon.SinonStub;
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

export interface NetworkStatus {
  NetworkLinkInfo: {
    id?: string;
    status: 'unknown' | 'up' | 'down';
    type:
      | 'unknown'
      | 'ethernet'
      | 'usb'
      | 'wifi'
      | 'wimax'
      | '2g'
      | '3g'
      | '4g';
  };
  getLinkInfo: sinon.SinonStub;
  onConnectionChanged: Events['Event'];
}

export interface NormandyAddonStudy {
  Study: {
    active: boolean;
    addonId: string;
    addonUrl: string;
    addonVersion: string;
    branch: string;
    extensionApiId: number;
    extensionHash: string;
    extensionHashAlgorithm: string;
    recipeId: number;
    slug: string;
    studyEndDate: ExtensionTypes['Date'];
    studyStartDate: ExtensionTypes['Date'];
    userFacingDescription: string;
    userFacingName: string;
  };
  endStudy: sinon.SinonStub;
  getClientMetadata: sinon.SinonStub;
  getStudy: sinon.SinonStub;
  onUnenroll: Events['Event'];
}

export interface Notifications {
  CreateNotificationOptions: {
    appIconMaskUrl?: string;
    buttons?: {
      iconUrl?: string;
      title: string;
    }[];
    contextMessage?: string;
    eventTime?: number;
    iconUrl?: string;
    imageUrl?: string;
    isClickable?: boolean;
    items?: Notifications['NotificationItem'][];
    message: string;
    priority?: number;
    progress?: number;
    title: string;
    type: Notifications['TemplateType'];
  };
  NotificationItem: {
    message: string;
    title: string;
  };
  PermissionLevel: NotificationsPermissionLevel;
  TemplateType: NotificationsTemplateType;
  UpdateNotificationOptions: {
    appIconMaskUrl?: string;
    buttons?: {
      iconUrl?: string;
      title: string;
    }[];
    contextMessage?: string;
    eventTime?: number;
    iconUrl?: string;
    imageUrl?: string;
    isClickable?: boolean;
    items?: Notifications['NotificationItem'][];
    message?: string;
    priority?: number;
    progress?: number;
    title?: string;
    type?: Notifications['TemplateType'];
  };
  clear: sinon.SinonStub;
  create: sinon.SinonStub;
  getAll: sinon.SinonStub;
  getPermissionLevel?: sinon.SinonStub;
  onButtonClicked: Events['Event'];
  onClicked: Events['Event'];
  onClosed: Events['Event'];
  onPermissionLevelChanged: Events['Event'];
  onShowSettings: Events['Event'];
  onShown: Events['Event'];
  update?: sinon.SinonStub;
}

export type NotificationsPermissionLevel = 'granted' | 'denied';

export type NotificationsTemplateType = 'basic' | 'image' | 'list' | 'progress';

export interface Omnibox {
  DefaultSuggestResult: {
    description: string;
    descriptionStyles?: {
      length?: number;
      offset: number;
      type: Omnibox['DescriptionStyleType'];
    }[];
    descriptionStylesRaw?: {
      offset: number;
      type: number;
    }[];
  };
  DescriptionStyleType: OmniboxDescriptionStyleType;
  OnInputEnteredDisposition: OmniboxOnInputEnteredDisposition;
  SuggestResult: {
    content: string;
    description: string;
    descriptionStyles?: {
      length?: number;
      offset: number;
      type: Omnibox['DescriptionStyleType'];
    }[];
    descriptionStylesRaw?: {
      offset: number;
      type: number;
    }[];
  };
  onInputCancelled: Events['Event'];
  onInputChanged: Events['Event'];
  onInputEntered: Events['Event'];
  onInputStarted: Events['Event'];
  setDefaultSuggestion: sinon.SinonStub;
}

export type OmniboxDescriptionStyleType = 'url' | 'match' | 'dim';

export type OmniboxOnInputEnteredDisposition =
  | 'currentTab'
  | 'newForegroundTab'
  | 'newBackgroundTab';

export interface PageAction {
  ImageDataType: {};
  OnClickData: {
    button?: number;
    modifiers: 'Shift' | 'Alt' | 'Command' | 'Ctrl' | 'MacCtrl'[];
  };
  getPopup: sinon.SinonStub;
  getTitle: sinon.SinonStub;
  hide: sinon.SinonStub;
  isShown: sinon.SinonStub;
  onClicked: Events['Event'];
  openPopup: sinon.SinonStub;
  setIcon: sinon.SinonStub;
  setPopup: sinon.SinonStub;
  setTitle: sinon.SinonStub;
  show: sinon.SinonStub;
}

export interface Permissions {
  AnyPermissions: {
    origins?: Manifest['MatchPattern'][];
    permissions?: Manifest['Permission'][];
  };
  Permissions: {
    origins?: Manifest['MatchPattern'][];
    permissions?: Manifest['OptionalPermission'][];
  };
  contains: sinon.SinonStub;
  getAll: sinon.SinonStub;
  onAdded: Events['Event'];
  onRemoved: Events['Event'];
  remove: sinon.SinonStub;
  request: sinon.SinonStub;
}

export interface Pkcs11 {
  getModuleSlots: sinon.SinonStub;
  installModule: sinon.SinonStub;
  isModuleInstalled: sinon.SinonStub;
  uninstallModule: sinon.SinonStub;
}

export interface Privacy {
  network: PrivacyNetwork;
  services: PrivacyServices;
  websites: PrivacyWebsites;
}

export interface PrivacyNetwork {
  IPHandlingPolicy: PrivacyNetworkIPHandlingPolicy;
  TlsVersionRestrictionConfig: {
    maximum?: 'TLSv1' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | 'unknown';
    minimum?: 'TLSv1' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | 'unknown';
  };
  networkPredictionEnabled: Types['Setting'];
  peerConnectionEnabled: Types['Setting'];
  tlsVersionRestriction: Types['Setting'];
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
  CookieConfig: {
    behavior?:
      | 'allow_all'
      | 'reject_all'
      | 'reject_third_party'
      | 'allow_visited'
      | 'reject_trackers';
    nonPersistentCookies?: boolean;
  };
  TrackingProtectionModeOption: PrivacyWebsitesTrackingProtectionModeOption;
  cookieConfig: Types['Setting'];
  firstPartyIsolate: Types['Setting'];
  hyperlinkAuditingEnabled: Types['Setting'];
  protectedContentEnabled?: Types['Setting'];
  referrersEnabled: Types['Setting'];
  resistFingerprinting: Types['Setting'];
  thirdPartyCookiesAllowed?: Types['Setting'];
  trackingProtectionMode: Types['Setting'];
}

export type PrivacyWebsitesTrackingProtectionModeOption =
  | 'always'
  | 'never'
  | 'private_browsing';

export interface Proxy {
  ProxyConfig: {
    autoConfigUrl?: string;
    autoLogin?: boolean;
    ftp?: string;
    http?: string;
    httpProxyAll?: boolean;
    passthrough?: string;
    proxyDNS?: boolean;
    proxyType?: 'none' | 'autoDetect' | 'system' | 'manual' | 'autoConfig';
    respectBeConservative?: boolean;
    socks?: string;
    socksVersion?: number;
    ssl?: string;
  };
  onError: Events['Event'];
  onRequest: Events['Event'];
  settings: Types['Setting'];
}

export interface Runtime {
  BrowserInfo: {
    buildID: string;
    name: string;
    vendor: string;
    version: string;
  };
  MessageSender: {
    frameId?: number;
    id?: string;
    tab?: Tabs['Tab'];
    tlsChannelId?: string;
    url?: string;
  };
  OnInstalledReason: RuntimeOnInstalledReason;
  OnRestartRequiredReason: RuntimeOnRestartRequiredReason;
  PlatformArch: RuntimePlatformArch;
  PlatformInfo: {
    arch: Runtime['PlatformArch'];
    nacl_arch?: any;
    os: Runtime['PlatformOs'];
  };
  PlatformOs: RuntimePlatformOs;
  Port: {
    disconnect: sinon.SinonStub;
    name: string;
    onDisconnect: Events['Event'];
    onMessage: Events['Event'];
    postMessage: sinon.SinonStub;
    sender?: Runtime['MessageSender'];
  };
  RequestUpdateCheckStatus: RuntimeRequestUpdateCheckStatus;
  connect: sinon.SinonStub<any[], Runtime['Port']>;
  connectNative: sinon.SinonStub<any[], Runtime['Port']>;
  getBackgroundPage: sinon.SinonStub;
  getBrowserInfo: sinon.SinonStub;
  getManifest: sinon.SinonStub;
  getPackageDirectoryEntry?: sinon.SinonStub;
  getPlatformInfo: sinon.SinonStub;
  getURL: sinon.SinonStub;
  id: string;
  lastError?: {
    message?: string;
  };
  onBrowserUpdateAvailable: Events['Event'];
  onConnect: Events['Event'];
  onConnectExternal: Events['Event'];
  onInstalled: Events['Event'];
  onMessage: Events['Event'];
  onMessageExternal: Events['Event'];
  onRestartRequired: Events['Event'];
  onStartup: Events['Event'];
  onSuspend: Events['Event'];
  onSuspendCanceled: Events['Event'];
  onUpdateAvailable: Events['Event'];
  openOptionsPage: sinon.SinonStub;
  reload: sinon.SinonStub;
  requestUpdateCheck?: sinon.SinonStub;
  restart?: sinon.SinonStub;
  sendMessage: sinon.SinonStub;
  sendNativeMessage: sinon.SinonStub;
  setUninstallURL: sinon.SinonStub;
}

export type RuntimeOnInstalledReason = 'install' | 'update' | 'browser_update';

export type RuntimeOnRestartRequiredReason =
  | 'app_update'
  | 'os_update'
  | 'periodic';

export type RuntimePlatformArch = 'arm' | 'x86-32' | 'x86-64';

export type RuntimePlatformOs =
  | 'mac'
  | 'win'
  | 'android'
  | 'cros'
  | 'linux'
  | 'openbsd';

export type RuntimeRequestUpdateCheckStatus =
  | 'throttled'
  | 'no_update'
  | 'update_available';

export interface Search {
  SearchEngine: {
    alias?: string;
    favIconUrl?: string;
    isDefault: boolean;
    name: string;
  };
  get: sinon.SinonStub;
  search: sinon.SinonStub;
}

export interface Sessions {
  Device: {
    deviceName: string;
    info: string;
    sessions: Sessions['Session'][];
  };
  Filter: {
    maxResults?: number;
  };
  MAX_SESSION_RESULTS: 25;
  Session: {
    lastModified: number;
    tab?: Tabs['Tab'];
    window?: Windows['Window'];
  };
  forgetClosedTab: sinon.SinonStub;
  forgetClosedWindow: sinon.SinonStub;
  getDevices?: sinon.SinonStub;
  getRecentlyClosed: sinon.SinonStub;
  getTabValue: sinon.SinonStub;
  getWindowValue: sinon.SinonStub;
  onChanged: Events['Event'];
  removeTabValue: sinon.SinonStub;
  removeWindowValue: sinon.SinonStub;
  restore: sinon.SinonStub;
  setTabValue: sinon.SinonStub;
  setWindowValue: sinon.SinonStub;
}

export interface SidebarAction {
  ImageDataType: {};
  close: sinon.SinonStub;
  getPanel: sinon.SinonStub;
  getTitle: sinon.SinonStub;
  isOpen: sinon.SinonStub;
  open: sinon.SinonStub;
  setIcon: sinon.SinonStub;
  setPanel: sinon.SinonStub;
  setTitle: sinon.SinonStub;
}

export interface Storage {
  StorageArea: {
    clear: sinon.SinonStub;
    get: sinon.SinonStub;
    getBytesInUse?: sinon.SinonStub;
    remove: sinon.SinonStub;
    set: sinon.SinonStub;
  };
  StorageChange: {
    newValue?: any;
    oldValue?: any;
  };
  local: Storage['StorageArea'];
  managed: Storage['StorageArea'];
  onChanged: Events['Event'];
  sync: Storage['StorageArea'];
}

export interface Tabs {
  MutedInfo: {
    extensionId?: string;
    muted: boolean;
    reason?: Tabs['MutedInfoReason'];
  };
  MutedInfoReason: TabsMutedInfoReason;
  PageSettings: {
    edgeBottom?: number;
    edgeLeft?: number;
    edgeRight?: number;
    edgeTop?: number;
    footerCenter?: string;
    footerLeft?: string;
    footerRight?: string;
    headerCenter?: string;
    headerLeft?: string;
    headerRight?: string;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    orientation?: number;
    paperHeight?: number;
    paperSizeUnit?: number;
    paperWidth?: number;
    scaling?: number;
    showBackgroundColors?: boolean;
    showBackgroundImages?: boolean;
    shrinkToFit?: boolean;
  };
  SharingState: {
    camera: boolean;
    microphone: boolean;
    screen?: string;
  };
  TAB_ID_NONE: -1;
  Tab: {
    active: boolean;
    attention?: boolean;
    audible?: boolean;
    cookieStoreId?: string;
    discarded?: boolean;
    favIconUrl?: string;
    height?: number;
    hidden?: boolean;
    highlighted: boolean;
    id?: number;
    incognito: boolean;
    index: number;
    isArticle?: boolean;
    isInReaderMode?: boolean;
    lastAccessed?: number;
    mutedInfo?: Tabs['MutedInfo'];
    openerTabId?: number;
    pinned: boolean;
    selected?: boolean;
    sessionId?: string;
    sharingState?: Tabs['SharingState'];
    status?: string;
    successorTabId?: number;
    title?: string;
    url?: string;
    width?: number;
    windowId?: number;
  };
  TabStatus: TabsTabStatus;
  UpdateFilter: {
    properties?: Tabs['UpdatePropertyName'][];
    tabId?: number;
    urls?: string[];
    windowId?: number;
  };
  UpdatePropertyName: TabsUpdatePropertyName;
  WindowType: TabsWindowType;
  ZoomSettings: {
    defaultZoomFactor?: number;
    mode?: Tabs['ZoomSettingsMode'];
    scope?: Tabs['ZoomSettingsScope'];
  };
  ZoomSettingsMode: TabsZoomSettingsMode;
  ZoomSettingsScope: TabsZoomSettingsScope;
  captureTab: sinon.SinonStub;
  captureVisibleTab: sinon.SinonStub;
  connect: sinon.SinonStub<any[], Runtime['Port']>;
  create: sinon.SinonStub;
  detectLanguage: sinon.SinonStub;
  discard: sinon.SinonStub;
  duplicate: sinon.SinonStub;
  executeScript: sinon.SinonStub;
  get: sinon.SinonStub;
  getAllInWindow?: sinon.SinonStub;
  getCurrent: sinon.SinonStub;
  getSelected?: sinon.SinonStub;
  getZoom: sinon.SinonStub;
  getZoomSettings: sinon.SinonStub;
  hide: sinon.SinonStub;
  highlight: sinon.SinonStub;
  insertCSS: sinon.SinonStub;
  move: sinon.SinonStub;
  moveInSuccession: sinon.SinonStub;
  onActivated: Events['Event'];
  onActiveChanged: Events['Event'];
  onAttached: Events['Event'];
  onCreated: Events['Event'];
  onDetached: Events['Event'];
  onHighlightChanged: Events['Event'];
  onHighlighted: Events['Event'];
  onMoved: Events['Event'];
  onRemoved: Events['Event'];
  onReplaced: Events['Event'];
  onSelectionChanged: Events['Event'];
  onUpdated: Events['Event'];
  onZoomChange: Events['Event'];
  print: sinon.SinonStub;
  printPreview: sinon.SinonStub;
  query: sinon.SinonStub;
  reload: sinon.SinonStub;
  remove: sinon.SinonStub;
  removeCSS: sinon.SinonStub;
  saveAsPDF: sinon.SinonStub;
  sendMessage: sinon.SinonStub;
  sendRequest?: sinon.SinonStub;
  setZoom: sinon.SinonStub;
  setZoomSettings: sinon.SinonStub;
  show: sinon.SinonStub;
  toggleReaderMode: sinon.SinonStub;
  update: sinon.SinonStub;
}

export type TabsMutedInfoReason = 'user' | 'capture' | 'extension';

export type TabsTabStatus = 'loading' | 'complete';

export type TabsUpdatePropertyName =
  | 'attention'
  | 'audible'
  | 'discarded'
  | 'favIconUrl'
  | 'hidden'
  | 'isArticle'
  | 'mutedInfo'
  | 'pinned'
  | 'sharingState'
  | 'status'
  | 'title';

export type TabsWindowType = 'normal' | 'popup' | 'panel' | 'app' | 'devtools';

export type TabsZoomSettingsMode = 'automatic' | 'manual' | 'disabled';

export type TabsZoomSettingsScope = 'per-origin' | 'per-tab';

export interface Telemetry {
  EventData: {
    expired?: boolean;
    extra_keys: string[];
    methods: string[];
    objects: string[];
    record_on_release?: boolean;
  };
  ScalarData: {
    expired?: boolean;
    keyed?: boolean;
    kind: Telemetry['ScalarType'];
    record_on_release?: boolean;
  };
  ScalarType: TelemetryScalarType;
  canUpload: sinon.SinonStub;
  keyedScalarAdd: sinon.SinonStub;
  keyedScalarSet: sinon.SinonStub;
  keyedScalarSetMaximum: sinon.SinonStub;
  recordEvent: sinon.SinonStub;
  registerEvents: sinon.SinonStub;
  registerScalars: sinon.SinonStub;
  scalarAdd: sinon.SinonStub;
  scalarSet: sinon.SinonStub;
  scalarSetMaximum: sinon.SinonStub;
  setEventRecordingEnabled: sinon.SinonStub;
  submitPing: sinon.SinonStub;
}

export type TelemetryScalarType = 'count' | 'string' | 'boolean';

export interface Test {
  ExpectedError: any;
  Promise: any;
  assertBool?: sinon.SinonStub;
  assertEq: sinon.SinonStub;
  assertFalse: sinon.SinonStub;
  assertLastError?: sinon.SinonStub;
  assertNoLastError?: sinon.SinonStub;
  assertRejects: sinon.SinonStub;
  assertThrows: sinon.SinonStub;
  assertTrue: sinon.SinonStub;
  checkDeepEq?: sinon.SinonStub;
  fail: sinon.SinonStub;
  log: sinon.SinonStub;
  notifyFail: sinon.SinonStub;
  notifyPass: sinon.SinonStub;
  onMessage: Events['Event'];
  sendMessage: sinon.SinonStub;
  succeed: sinon.SinonStub;
  withHandlingUserInput: sinon.SinonStub;
}

export interface Theme {
  ThemeUpdateInfo: {
    theme: {};
    windowId?: number;
  };
  getCurrent: sinon.SinonStub;
  onUpdated: Events['Event'];
  reset: sinon.SinonStub;
  update: sinon.SinonStub;
}

export interface TopSites {
  MostVisitedURL: {
    favicon?: string;
    title?: string;
    type?: 'url' | 'search';
    url: string;
  };
  get: sinon.SinonStub;
}

export interface Types {
  LevelOfControl: TypesLevelOfControl;
  Setting: {
    clear: sinon.SinonStub;
    get: sinon.SinonStub;
    onChange: Events['Event'];
    set: sinon.SinonStub;
  };
  SettingScope: TypesSettingScope;
}

export type TypesLevelOfControl =
  | 'not_controllable'
  | 'controlled_by_other_extensions'
  | 'controllable_by_this_extension'
  | 'controlled_by_this_extension';

export type TypesSettingScope =
  | 'regular'
  | 'regular_only'
  | 'incognito_persistent'
  | 'incognito_session_only';

export interface Urlbar {
  EngagementState: UrlbarEngagementState;
  Query: {
    acceptableSources: Urlbar['SourceType'][];
    isPrivate: boolean;
    maxResults: number;
    searchString: string;
  };
  Result: {
    payload: {};
    source: Urlbar['SourceType'];
    suggestedIndex?: number;
    type: Urlbar['ResultType'];
  };
  ResultType: UrlbarResultType;
  SearchOptions: {
    focus?: boolean;
  };
  SourceType: UrlbarSourceType;
  closeView: sinon.SinonStub;
  contextualTip: UrlbarContextualTip;
  engagementTelemetry: Types['Setting'];
  focus: sinon.SinonStub;
  onBehaviorRequested: Events['Event'];
  onEngagement: Events['Event'];
  onQueryCanceled: Events['Event'];
  onResultPicked: Events['Event'];
  onResultsRequested: Events['Event'];
  openViewOnFocus: Types['Setting'];
  search: sinon.SinonStub;
}

export interface UrlbarContextualTip {
  ContextualTip: {
    buttonTitle?: string;
    icon?: {
      defaultIcon: any;
      themeIcons?: Manifest['ThemeIcons'][];
    };
    linkTitle?: string;
    title: string;
  };
  onButtonClicked: Events['Event'];
  onLinkClicked: Events['Event'];
  remove: sinon.SinonStub;
  set: sinon.SinonStub;
}

export type UrlbarEngagementState =
  | 'start'
  | 'engagement'
  | 'abandonment'
  | 'discard';

export type UrlbarResultType = 'remote_tab' | 'search' | 'tab' | 'tip' | 'url';

export type UrlbarSourceType =
  | 'bookmarks'
  | 'history'
  | 'local'
  | 'network'
  | 'search'
  | 'tabs';

export interface UserScripts {
  RegisteredUserScript: {
    unregister: sinon.SinonStub;
  };
  UserScriptOptions: {
    allFrames?: boolean;
    excludeGlobs?: string[];
    excludeMatches?: Manifest['MatchPattern'][];
    includeGlobs?: string[];
    js?: ExtensionTypes['ExtensionFileOrCode'][];
    matchAboutBlank?: boolean;
    matches: Manifest['MatchPattern'][];
    runAt?: ExtensionTypes['RunAt'];
    scriptMetadata?: ExtensionTypes['PlainJSONValue'];
  };
  onBeforeScript: Events['Event'];
  register: sinon.SinonStub;
}

export interface WebNavigation {
  EventUrlFilters: {
    url: Events['UrlFilter'][];
  };
  TransitionQualifier: WebNavigationTransitionQualifier;
  TransitionType: WebNavigationTransitionType;
  getAllFrames: sinon.SinonStub;
  getFrame: sinon.SinonStub;
  onBeforeNavigate: Events['Event'];
  onCommitted: Events['Event'];
  onCompleted: Events['Event'];
  onCreatedNavigationTarget: Events['Event'];
  onDOMContentLoaded: Events['Event'];
  onErrorOccurred: Events['Event'];
  onHistoryStateUpdated: Events['Event'];
  onReferenceFragmentUpdated: Events['Event'];
  onTabReplaced: Events['Event'];
}

export type WebNavigationTransitionQualifier =
  | 'client_redirect'
  | 'server_redirect'
  | 'forward_back'
  | 'from_address_bar';

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

export interface WebRequest {
  BlockingResponse: {
    authCredentials?: {
      password: string;
      username: string;
    };
    cancel?: boolean;
    redirectUrl?: string;
    requestHeaders?: WebRequest['HttpHeaders'];
    responseHeaders?: WebRequest['HttpHeaders'];
    upgradeToSecure?: boolean;
  };
  CertificateInfo: {
    fingerprint: {
      sha1: string;
      sha256: string;
    };
    isBuiltInRoot: boolean;
    issuer: string;
    rawDER?: number[];
    serialNumber: string;
    subject: string;
    subjectPublicKeyInfoDigest: {
      sha256: string;
    };
    validity: {
      end: number;
      start: number;
    };
  };
  CertificateTransparencyStatus: WebRequestCertificateTransparencyStatus;
  HttpHeaders: {
    binaryValue?: number[];
    name: string;
    value?: string;
  }[];
  MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: 20;
  OnAuthRequiredOptions: WebRequestOnAuthRequiredOptions;
  OnBeforeRedirectOptions: WebRequestOnBeforeRedirectOptions;
  OnBeforeRequestOptions: WebRequestOnBeforeRequestOptions;
  OnBeforeSendHeadersOptions: WebRequestOnBeforeSendHeadersOptions;
  OnCompletedOptions: WebRequestOnCompletedOptions;
  OnHeadersReceivedOptions: WebRequestOnHeadersReceivedOptions;
  OnResponseStartedOptions: WebRequestOnResponseStartedOptions;
  OnSendHeadersOptions: WebRequestOnSendHeadersOptions;
  RequestFilter: {
    incognito?: boolean;
    tabId?: number;
    types?: WebRequest['ResourceType'][];
    urls: string[];
    windowId?: number;
  };
  ResourceType: WebRequestResourceType;
  SecurityInfo: {
    certificateTransparencyStatus?: WebRequest['CertificateTransparencyStatus'];
    certificates: WebRequest['CertificateInfo'][];
    cipherSuite?: string;
    errorMessage?: string;
    hpkp?: string;
    hsts?: boolean;
    isDomainMismatch?: boolean;
    isExtendedValidation?: boolean;
    isNotValidAtThisTime?: boolean;
    isUntrusted?: boolean;
    keaGroupName?: string;
    protocolVersion?: 'TLSv1' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | 'unknown';
    signatureSchemeName?: string;
    state: 'insecure' | 'weak' | 'broken' | 'secure';
    weaknessReasons?: WebRequest['TransportWeaknessReasons'][];
  };
  TransportWeaknessReasons: WebRequestTransportWeaknessReasons;
  UploadData: {
    bytes?: any;
    file?: string;
  };
  UrlClassification: {
    firstParty: WebRequest['UrlClassificationParty'];
    thirdParty: WebRequest['UrlClassificationParty'];
  };
  UrlClassificationFlags: WebRequestUrlClassificationFlags;
  UrlClassificationParty: WebRequest['UrlClassificationFlags'][];
  filterResponseData: sinon.SinonStub;
  getSecurityInfo: sinon.SinonStub;
  handlerBehaviorChanged: sinon.SinonStub;
  onAuthRequired: Events['Event'];
  onBeforeRedirect: Events['Event'];
  onBeforeRequest: Events['Event'];
  onBeforeSendHeaders: Events['Event'];
  onCompleted: Events['Event'];
  onErrorOccurred: Events['Event'];
  onHeadersReceived: Events['Event'];
  onResponseStarted: Events['Event'];
  onSendHeaders: Events['Event'];
}

export type WebRequestCertificateTransparencyStatus =
  | 'not_applicable'
  | 'policy_compliant'
  | 'policy_not_enough_scts'
  | 'policy_not_diverse_scts';

export type WebRequestOnAuthRequiredOptions =
  | 'responseHeaders'
  | 'blocking'
  | 'asyncBlocking';

export type WebRequestOnBeforeRedirectOptions = 'responseHeaders';

export type WebRequestOnBeforeRequestOptions = 'blocking' | 'requestBody';

export type WebRequestOnBeforeSendHeadersOptions =
  | 'requestHeaders'
  | 'blocking';

export type WebRequestOnCompletedOptions = 'responseHeaders';

export type WebRequestOnHeadersReceivedOptions = 'blocking' | 'responseHeaders';

export type WebRequestOnResponseStartedOptions = 'responseHeaders';

export type WebRequestOnSendHeadersOptions = 'requestHeaders';

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
  CreateType: WindowsCreateType;
  GetInfo: {
    populate?: boolean;
    windowTypes?: Windows['WindowType'][];
  };
  WINDOW_ID_CURRENT: -2;
  WINDOW_ID_NONE: -1;
  Window: {
    alwaysOnTop: boolean;
    focused: boolean;
    height?: number;
    id?: number;
    incognito: boolean;
    left?: number;
    sessionId?: string;
    state?: Windows['WindowState'];
    tabs?: Tabs['Tab'][];
    title?: string;
    top?: number;
    type?: Windows['WindowType'];
    width?: number;
  };
  WindowState: WindowsWindowState;
  WindowType: WindowsWindowType;
  create: sinon.SinonStub;
  get: sinon.SinonStub;
  getAll: sinon.SinonStub;
  getCurrent: sinon.SinonStub;
  getLastFocused: sinon.SinonStub;
  onCreated: Events['Event'];
  onFocusChanged: Events['Event'];
  onRemoved: Events['Event'];
  remove: sinon.SinonStub;
  update: sinon.SinonStub;
}

export type WindowsCreateType = 'normal' | 'popup' | 'panel' | 'detached_panel';

export type WindowsWindowState =
  | 'normal'
  | 'minimized'
  | 'maximized'
  | 'fullscreen'
  | 'docked';

export type WindowsWindowType =
  | 'normal'
  | 'popup'
  | 'panel'
  | 'app'
  | 'devtools';
