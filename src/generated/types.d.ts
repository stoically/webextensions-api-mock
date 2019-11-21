/* eslint-disable @typescript-eslint/class-name-casing */
/// <reference types="sinon"/>

export declare namespace browserMock {
  const sinonSandbox: sinon.SinonSandbox;
  interface SinonEventStub {
    addListener: sinon.SinonStub;
    removeListener: sinon.SinonStub;
    hasListener: sinon.SinonStub;
  }

  namespace manifest {}
  namespace activityLog {
    const onExtensionActivity: SinonEventStub;
  }
  namespace alarms {
    const create: sinon.SinonStub;
    const get: sinon.SinonStub;
    const getAll: sinon.SinonStub;
    const clear: sinon.SinonStub;
    const clearAll: sinon.SinonStub;
    const onAlarm: SinonEventStub;
  }
  namespace bookmarks {
    const get: sinon.SinonStub;
    const getChildren: sinon.SinonStub;
    const getRecent: sinon.SinonStub;
    const getTree: sinon.SinonStub;
    const getSubTree: sinon.SinonStub;
    const search: sinon.SinonStub;
    const create: sinon.SinonStub;
    const move: sinon.SinonStub;
    const update: sinon.SinonStub;
    const remove: sinon.SinonStub;
    const removeTree: sinon.SinonStub;
    const onCreated: SinonEventStub;
    const onRemoved: SinonEventStub;
    const onChanged: SinonEventStub;
    const onMoved: SinonEventStub;
  }
  namespace browserAction {
    const setTitle: sinon.SinonStub;
    const getTitle: sinon.SinonStub;
    const setIcon: sinon.SinonStub;
    const setPopup: sinon.SinonStub;
    const getPopup: sinon.SinonStub;
    const setBadgeText: sinon.SinonStub;
    const getBadgeText: sinon.SinonStub;
    const setBadgeBackgroundColor: sinon.SinonStub;
    const getBadgeBackgroundColor: sinon.SinonStub;
    const setBadgeTextColor: sinon.SinonStub;
    const getBadgeTextColor: sinon.SinonStub;
    const enable: sinon.SinonStub;
    const disable: sinon.SinonStub;
    const isEnabled: sinon.SinonStub;
    const openPopup: sinon.SinonStub;
    const onClicked: SinonEventStub;
  }
  namespace browserSettings {}
  namespace browsingData {
    const settings: sinon.SinonStub;
    const remove: sinon.SinonStub;
    const removeCache: sinon.SinonStub;
    const removeCookies: sinon.SinonStub;
    const removeDownloads: sinon.SinonStub;
    const removeFormData: sinon.SinonStub;
    const removeHistory: sinon.SinonStub;
    const removeLocalStorage: sinon.SinonStub;
    const removePluginData: sinon.SinonStub;
    const removePasswords: sinon.SinonStub;
  }
  namespace captivePortal {
    const getState: sinon.SinonStub;
    const getLastChecked: sinon.SinonStub;
    const onStateChanged: SinonEventStub;
    const onConnectivityAvailable: SinonEventStub;
  }
  namespace clipboard {
    const setImageData: sinon.SinonStub;
  }
  namespace commands {
    const update: sinon.SinonStub;
    const reset: sinon.SinonStub;
    const getAll: sinon.SinonStub;
    const onCommand: SinonEventStub;
  }
  namespace contentScripts {
    const register: sinon.SinonStub;
  }
  namespace contextualIdentities {
    const get: sinon.SinonStub;
    const query: sinon.SinonStub;
    const create: sinon.SinonStub;
    const update: sinon.SinonStub;
    const remove: sinon.SinonStub;
    const onUpdated: SinonEventStub;
    const onCreated: SinonEventStub;
    const onRemoved: SinonEventStub;
  }
  namespace cookies {
    const get: sinon.SinonStub;
    const getAll: sinon.SinonStub;
    const set: sinon.SinonStub;
    const remove: sinon.SinonStub;
    const getAllCookieStores: sinon.SinonStub;
    const onChanged: SinonEventStub;
  }
  namespace devtools {}
  namespace inspectedWindow {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const eval: sinon.SinonStub;
    const reload: sinon.SinonStub;
  }
  namespace network {
    const getHAR: sinon.SinonStub;
    const onRequestFinished: SinonEventStub;
    const onNavigated: SinonEventStub;
  }
  namespace panels {
    const create: sinon.SinonStub;
    const onThemeChanged: SinonEventStub;
  }
  namespace dns {
    const resolve: sinon.SinonStub;
  }
  namespace downloads {
    const download: sinon.SinonStub;
    const search: sinon.SinonStub;
    const pause: sinon.SinonStub;
    const resume: sinon.SinonStub;
    const cancel: sinon.SinonStub;
    const getFileIcon: sinon.SinonStub;
    const open: sinon.SinonStub;
    const show: sinon.SinonStub;
    const showDefaultFolder: sinon.SinonStub;
    const erase: sinon.SinonStub;
    const removeFile: sinon.SinonStub;
    const onCreated: SinonEventStub;
    const onErased: SinonEventStub;
    const onChanged: SinonEventStub;
  }
  namespace events {}
  namespace experiments {}
  namespace extension {
    const getURL: sinon.SinonStub;
    const getViews: sinon.SinonStub;
    const getBackgroundPage: sinon.SinonStub;
    const isAllowedIncognitoAccess: sinon.SinonStub;
    const isAllowedFileSchemeAccess: sinon.SinonStub;
  }
  namespace extensionTypes {}
  namespace find {
    const find: sinon.SinonStub;
    const highlightResults: sinon.SinonStub;
    const removeHighlighting: sinon.SinonStub;
  }
  namespace geckoProfiler {
    const start: sinon.SinonStub;
    const stop: sinon.SinonStub;
    const pause: sinon.SinonStub;
    const resume: sinon.SinonStub;
    const dumpProfileToFile: sinon.SinonStub;
    const getProfile: sinon.SinonStub;
    const getProfileAsArrayBuffer: sinon.SinonStub;
    const getProfileAsGzippedArrayBuffer: sinon.SinonStub;
    const getSymbols: sinon.SinonStub;
    const onRunning: SinonEventStub;
  }
  namespace history {
    const search: sinon.SinonStub;
    const getVisits: sinon.SinonStub;
    const addUrl: sinon.SinonStub;
    const deleteUrl: sinon.SinonStub;
    const deleteRange: sinon.SinonStub;
    const deleteAll: sinon.SinonStub;
    const onVisited: SinonEventStub;
    const onVisitRemoved: SinonEventStub;
    const onTitleChanged: SinonEventStub;
  }
  namespace i18n {
    const getAcceptLanguages: sinon.SinonStub;
    const getMessage: sinon.SinonStub;
    const getUILanguage: sinon.SinonStub;
    const detectLanguage: sinon.SinonStub;
  }
  namespace identity {
    const launchWebAuthFlow: sinon.SinonStub;
    const getRedirectURL: sinon.SinonStub;
  }
  namespace idle {
    const queryState: sinon.SinonStub;
    const setDetectionInterval: sinon.SinonStub;
    const onStateChanged: SinonEventStub;
  }
  namespace management {
    const getAll: sinon.SinonStub;
    const get: sinon.SinonStub;
    const install: sinon.SinonStub;
    const getSelf: sinon.SinonStub;
    const uninstallSelf: sinon.SinonStub;
    const setEnabled: sinon.SinonStub;
    const onDisabled: SinonEventStub;
    const onEnabled: SinonEventStub;
    const onInstalled: SinonEventStub;
    const onUninstalled: SinonEventStub;
  }
  namespace menus {
    const create: sinon.SinonStub;
    const update: sinon.SinonStub;
    const remove: sinon.SinonStub;
    const removeAll: sinon.SinonStub;
    const overrideContext: sinon.SinonStub;
    const refresh: sinon.SinonStub;
    const onClicked: SinonEventStub;
    const onShown: SinonEventStub;
    const onHidden: SinonEventStub;
    const getTargetElement: sinon.SinonStub;
  }
  namespace networkStatus {
    const getLinkInfo: sinon.SinonStub;
    const onConnectionChanged: SinonEventStub;
  }
  namespace normandyAddonStudy {
    const getStudy: sinon.SinonStub;
    const endStudy: sinon.SinonStub;
    const getClientMetadata: sinon.SinonStub;
    const onUnenroll: SinonEventStub;
  }
  namespace notifications {
    const create: sinon.SinonStub;
    const clear: sinon.SinonStub;
    const getAll: sinon.SinonStub;
    const onClosed: SinonEventStub;
    const onClicked: SinonEventStub;
    const onButtonClicked: SinonEventStub;
    const onShown: SinonEventStub;
  }
  namespace omnibox {
    const setDefaultSuggestion: sinon.SinonStub;
    const onInputStarted: SinonEventStub;
    const onInputChanged: SinonEventStub;
    const onInputEntered: SinonEventStub;
    const onInputCancelled: SinonEventStub;
  }
  namespace pageAction {
    const show: sinon.SinonStub;
    const hide: sinon.SinonStub;
    const isShown: sinon.SinonStub;
    const setTitle: sinon.SinonStub;
    const getTitle: sinon.SinonStub;
    const setIcon: sinon.SinonStub;
    const setPopup: sinon.SinonStub;
    const getPopup: sinon.SinonStub;
    const openPopup: sinon.SinonStub;
    const onClicked: SinonEventStub;
  }
  namespace permissions {
    const getAll: sinon.SinonStub;
    const contains: sinon.SinonStub;
    const request: sinon.SinonStub;
    const remove: sinon.SinonStub;
  }
  namespace pkcs11 {
    const isModuleInstalled: sinon.SinonStub;
    const installModule: sinon.SinonStub;
    const uninstallModule: sinon.SinonStub;
    const getModuleSlots: sinon.SinonStub;
  }
  namespace privacy {}
  namespace network {}
  namespace services {}
  namespace websites {}
  namespace proxy {
    const register: sinon.SinonStub;
    const unregister: sinon.SinonStub;
    const registerProxyScript: sinon.SinonStub;
    const onRequest: SinonEventStub;
    const onError: SinonEventStub;
    const onProxyError: SinonEventStub;
  }
  namespace runtime {
    const getBackgroundPage: sinon.SinonStub;
    const openOptionsPage: sinon.SinonStub;
    const getManifest: sinon.SinonStub;
    const getURL: sinon.SinonStub;
    const setUninstallURL: sinon.SinonStub;
    const reload: sinon.SinonStub;
    const connect: sinon.SinonStub;
    const connectNative: sinon.SinonStub;
    const sendMessage: sinon.SinonStub;
    const sendNativeMessage: sinon.SinonStub;
    const getBrowserInfo: sinon.SinonStub;
    const getPlatformInfo: sinon.SinonStub;
    const onStartup: SinonEventStub;
    const onInstalled: SinonEventStub;
    const onUpdateAvailable: SinonEventStub;
    const onConnect: SinonEventStub;
    const onConnectExternal: SinonEventStub;
    const onMessage: SinonEventStub;
    const onMessageExternal: SinonEventStub;
  }
  namespace search {
    const get: sinon.SinonStub;
    const search: sinon.SinonStub;
  }
  namespace sessions {
    const forgetClosedTab: sinon.SinonStub;
    const forgetClosedWindow: sinon.SinonStub;
    const getRecentlyClosed: sinon.SinonStub;
    const restore: sinon.SinonStub;
    const setTabValue: sinon.SinonStub;
    const getTabValue: sinon.SinonStub;
    const removeTabValue: sinon.SinonStub;
    const setWindowValue: sinon.SinonStub;
    const getWindowValue: sinon.SinonStub;
    const removeWindowValue: sinon.SinonStub;
    const onChanged: SinonEventStub;
  }
  namespace sidebarAction {
    const setTitle: sinon.SinonStub;
    const getTitle: sinon.SinonStub;
    const setIcon: sinon.SinonStub;
    const setPanel: sinon.SinonStub;
    const getPanel: sinon.SinonStub;
    const open: sinon.SinonStub;
    const close: sinon.SinonStub;
    const isOpen: sinon.SinonStub;
  }
  namespace storage {
    const onChanged: SinonEventStub;
  }
  namespace tabs {
    const get: sinon.SinonStub;
    const getCurrent: sinon.SinonStub;
    const connect: sinon.SinonStub;
    const sendMessage: sinon.SinonStub;
    const create: sinon.SinonStub;
    const duplicate: sinon.SinonStub;
    const query: sinon.SinonStub;
    const highlight: sinon.SinonStub;
    const update: sinon.SinonStub;
    const move: sinon.SinonStub;
    const reload: sinon.SinonStub;
    const remove: sinon.SinonStub;
    const discard: sinon.SinonStub;
    const detectLanguage: sinon.SinonStub;
    const toggleReaderMode: sinon.SinonStub;
    const captureTab: sinon.SinonStub;
    const captureVisibleTab: sinon.SinonStub;
    const executeScript: sinon.SinonStub;
    const insertCSS: sinon.SinonStub;
    const removeCSS: sinon.SinonStub;
    const setZoom: sinon.SinonStub;
    const getZoom: sinon.SinonStub;
    const setZoomSettings: sinon.SinonStub;
    const getZoomSettings: sinon.SinonStub;
    const print: sinon.SinonStub;
    const printPreview: sinon.SinonStub;
    const saveAsPDF: sinon.SinonStub;
    const show: sinon.SinonStub;
    const hide: sinon.SinonStub;
    const moveInSuccession: sinon.SinonStub;
    const onCreated: SinonEventStub;
    const onUpdated: SinonEventStub;
    const onMoved: SinonEventStub;
    const onActivated: SinonEventStub;
    const onHighlighted: SinonEventStub;
    const onDetached: SinonEventStub;
    const onAttached: SinonEventStub;
    const onRemoved: SinonEventStub;
    const onReplaced: SinonEventStub;
    const onZoomChange: SinonEventStub;
  }
  namespace telemetry {
    const submitPing: sinon.SinonStub;
    const canUpload: sinon.SinonStub;
    const scalarAdd: sinon.SinonStub;
    const scalarSet: sinon.SinonStub;
    const scalarSetMaximum: sinon.SinonStub;
    const recordEvent: sinon.SinonStub;
    const registerScalars: sinon.SinonStub;
    const registerEvents: sinon.SinonStub;
    const setEventRecordingEnabled: sinon.SinonStub;
  }
  namespace test {
    const notifyFail: sinon.SinonStub;
    const notifyPass: sinon.SinonStub;
    const log: sinon.SinonStub;
    const sendMessage: sinon.SinonStub;
    const fail: sinon.SinonStub;
    const succeed: sinon.SinonStub;
    const assertTrue: sinon.SinonStub;
    const assertFalse: sinon.SinonStub;
    const assertEq: sinon.SinonStub;
    const assertRejects: sinon.SinonStub;
    const assertThrows: sinon.SinonStub;
    const onMessage: SinonEventStub;
  }
  namespace theme {
    const getCurrent: sinon.SinonStub;
    const update: sinon.SinonStub;
    const reset: sinon.SinonStub;
    const onUpdated: SinonEventStub;
  }
  namespace topSites {
    const get: sinon.SinonStub;
  }
  namespace types {}
  namespace urlbar {
    const onBehaviorRequested: SinonEventStub;
    const onQueryCanceled: SinonEventStub;
    const onResultsRequested: SinonEventStub;
  }
  namespace contextualTip {
    const set: sinon.SinonStub;
    const remove: sinon.SinonStub;
    const onButtonClicked: SinonEventStub;
    const onLinkClicked: SinonEventStub;
  }
  namespace userScripts {
    const register: sinon.SinonStub;
    const onBeforeScript: SinonEventStub;
  }
  namespace webNavigation {
    const getFrame: sinon.SinonStub;
    const getAllFrames: sinon.SinonStub;
    const onBeforeNavigate: SinonEventStub;
    const onCommitted: SinonEventStub;
    const onDOMContentLoaded: SinonEventStub;
    const onCompleted: SinonEventStub;
    const onErrorOccurred: SinonEventStub;
    const onCreatedNavigationTarget: SinonEventStub;
    const onReferenceFragmentUpdated: SinonEventStub;
    const onTabReplaced: SinonEventStub;
    const onHistoryStateUpdated: SinonEventStub;
  }
  namespace webRequest {
    const handlerBehaviorChanged: sinon.SinonStub;
    const filterResponseData: sinon.SinonStub;
    const getSecurityInfo: sinon.SinonStub;
    const onBeforeRequest: SinonEventStub;
    const onBeforeSendHeaders: SinonEventStub;
    const onSendHeaders: SinonEventStub;
    const onHeadersReceived: SinonEventStub;
    const onAuthRequired: SinonEventStub;
    const onResponseStarted: SinonEventStub;
    const onBeforeRedirect: SinonEventStub;
    const onCompleted: SinonEventStub;
    const onErrorOccurred: SinonEventStub;
  }
  namespace windows {
    const get: sinon.SinonStub;
    const getCurrent: sinon.SinonStub;
    const getLastFocused: sinon.SinonStub;
    const getAll: sinon.SinonStub;
    const create: sinon.SinonStub;
    const update: sinon.SinonStub;
    const remove: sinon.SinonStub;
    const onCreated: SinonEventStub;
    const onRemoved: SinonEventStub;
    const onFocusChanged: SinonEventStub;
  }
  const contextMenus: typeof menus;
}
