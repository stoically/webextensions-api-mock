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

export interface Manifest {}

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
  onCreated: SinonEventStub;
  onRemoved: SinonEventStub;
  onChanged: SinonEventStub;
  onMoved: SinonEventStub;
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
  onClicked: SinonEventStub;
}

export interface BrowserSettings {}

export interface BrowsingData {
  settings: sinon.SinonStub;
  remove: sinon.SinonStub;
  removeCache: sinon.SinonStub;
  removeCookies: sinon.SinonStub;
  removeDownloads: sinon.SinonStub;
  removeFormData: sinon.SinonStub;
  removeHistory: sinon.SinonStub;
  removeLocalStorage: sinon.SinonStub;
  removePluginData: sinon.SinonStub;
  removePasswords: sinon.SinonStub;
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
}

export interface ContentScripts {
  register: sinon.SinonStub;
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
}

export interface Cookies {
  get: sinon.SinonStub;
  getAll: sinon.SinonStub;
  set: sinon.SinonStub;
  remove: sinon.SinonStub;
  getAllCookieStores: sinon.SinonStub;
  onChanged: SinonEventStub;
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
}

export interface DevtoolsNetwork {
  getHAR: sinon.SinonStub;
  onRequestFinished: SinonEventStub;
  onNavigated: SinonEventStub;
}

export interface DevtoolsPanels {
  create: sinon.SinonStub;
  onThemeChanged: SinonEventStub;
}

export interface Dns {
  resolve: sinon.SinonStub;
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
  onCreated: SinonEventStub;
  onErased: SinonEventStub;
  onChanged: SinonEventStub;
}

export interface Events {}

export interface Experiments {}

export interface Extension {
  getURL: sinon.SinonStub;
  getViews: sinon.SinonStub;
  getBackgroundPage: sinon.SinonStub;
  isAllowedIncognitoAccess: sinon.SinonStub;
  isAllowedFileSchemeAccess: sinon.SinonStub;
}

export interface ExtensionTypes {}

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
}

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
}

export interface I18n {
  getAcceptLanguages: sinon.SinonStub;
  getMessage: sinon.SinonStub;
  getUILanguage: sinon.SinonStub;
  detectLanguage: sinon.SinonStub;
}

export interface Identity {
  launchWebAuthFlow: sinon.SinonStub;
  getRedirectURL: sinon.SinonStub;
}

export interface Idle {
  queryState: sinon.SinonStub;
  setDetectionInterval: sinon.SinonStub;
  onStateChanged: SinonEventStub;
}

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
}

export interface ContextMenus {}

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
  getTargetElement: sinon.SinonStub;
}

export interface NetworkStatus {
  getLinkInfo: sinon.SinonStub;
  onConnectionChanged: SinonEventStub;
}

export interface NormandyAddonStudy {
  getStudy: sinon.SinonStub;
  endStudy: sinon.SinonStub;
  getClientMetadata: sinon.SinonStub;
  onUnenroll: SinonEventStub;
}

export interface Notifications {
  create: sinon.SinonStub;
  clear: sinon.SinonStub;
  getAll: sinon.SinonStub;
  onClosed: SinonEventStub;
  onClicked: SinonEventStub;
  onButtonClicked: SinonEventStub;
  onShown: SinonEventStub;
}

export interface Omnibox {
  setDefaultSuggestion: sinon.SinonStub;
  onInputStarted: SinonEventStub;
  onInputChanged: SinonEventStub;
  onInputEntered: SinonEventStub;
  onInputCancelled: SinonEventStub;
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
  onClicked: SinonEventStub;
}

export interface Permissions {
  getAll: sinon.SinonStub;
  contains: sinon.SinonStub;
  request: sinon.SinonStub;
  remove: sinon.SinonStub;
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

export interface PrivacyNetwork {}

export interface PrivacyServices {}

export interface PrivacyWebsites {}

export interface Proxy {
  register: sinon.SinonStub;
  unregister: sinon.SinonStub;
  registerProxyScript: sinon.SinonStub;
  onRequest: SinonEventStub;
  onError: SinonEventStub;
  onProxyError: SinonEventStub;
}

export interface Runtime {
  getBackgroundPage: sinon.SinonStub;
  openOptionsPage: sinon.SinonStub;
  getManifest: sinon.SinonStub;
  getURL: sinon.SinonStub;
  setUninstallURL: sinon.SinonStub;
  reload: sinon.SinonStub;
  connect: sinon.SinonStub;
  connectNative: sinon.SinonStub;
  sendMessage: sinon.SinonStub;
  sendNativeMessage: sinon.SinonStub;
  getBrowserInfo: sinon.SinonStub;
  getPlatformInfo: sinon.SinonStub;
  onStartup: SinonEventStub;
  onInstalled: SinonEventStub;
  onUpdateAvailable: SinonEventStub;
  onConnect: SinonEventStub;
  onConnectExternal: SinonEventStub;
  onMessage: SinonEventStub;
  onMessageExternal: SinonEventStub;
}

export interface Search {
  get: sinon.SinonStub;
  search: sinon.SinonStub;
}

export interface Sessions {
  forgetClosedTab: sinon.SinonStub;
  forgetClosedWindow: sinon.SinonStub;
  getRecentlyClosed: sinon.SinonStub;
  restore: sinon.SinonStub;
  setTabValue: sinon.SinonStub;
  getTabValue: sinon.SinonStub;
  removeTabValue: sinon.SinonStub;
  setWindowValue: sinon.SinonStub;
  getWindowValue: sinon.SinonStub;
  removeWindowValue: sinon.SinonStub;
  onChanged: SinonEventStub;
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

export interface Storage {
  onChanged: SinonEventStub;
}

export interface Tabs {
  get: sinon.SinonStub;
  getCurrent: sinon.SinonStub;
  connect: sinon.SinonStub;
  sendMessage: sinon.SinonStub;
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
  onActivated: SinonEventStub;
  onHighlighted: SinonEventStub;
  onDetached: SinonEventStub;
  onAttached: SinonEventStub;
  onRemoved: SinonEventStub;
  onReplaced: SinonEventStub;
  onZoomChange: SinonEventStub;
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

export interface Test {
  notifyFail: sinon.SinonStub;
  notifyPass: sinon.SinonStub;
  log: sinon.SinonStub;
  sendMessage: sinon.SinonStub;
  fail: sinon.SinonStub;
  succeed: sinon.SinonStub;
  assertTrue: sinon.SinonStub;
  assertFalse: sinon.SinonStub;
  assertEq: sinon.SinonStub;
  assertRejects: sinon.SinonStub;
  assertThrows: sinon.SinonStub;
  onMessage: SinonEventStub;
}

export interface Theme {
  getCurrent: sinon.SinonStub;
  update: sinon.SinonStub;
  reset: sinon.SinonStub;
  onUpdated: SinonEventStub;
}

export interface TopSites {
  get: sinon.SinonStub;
}

export interface Types {}

export interface Urlbar {
  onBehaviorRequested: SinonEventStub;
  onQueryCanceled: SinonEventStub;
  onResultsRequested: SinonEventStub;
  contextualTip: UrlbarContextualTip;
}

export interface UrlbarContextualTip {
  set: sinon.SinonStub;
  remove: sinon.SinonStub;
  onButtonClicked: SinonEventStub;
  onLinkClicked: SinonEventStub;
}

export interface UserScripts {
  register: sinon.SinonStub;
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
}

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
}

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
}

export type contextMenus = Menus;
