// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
// eslint-disable-next-line import/no-unresolved
import { IElectronAPI } from "./Types/renderer";

const electronAPI: IElectronAPI = {
  loadPreferences: () => null,
  loadComm: () => ipcRenderer.invoke("load-comm"),
  startComm: () => ipcRenderer.invoke("start-comm"),
  handleDeviceData: (id, callback) => {
    ipcRenderer.on(`${id}/data`, callback);
    return {
      unsubscribe: () => ipcRenderer.removeListener(`${id}/data`, callback),
    };
  },
  handleDeviceStore: (id, callback) => {
    ipcRenderer.on(`${id}/store`, callback);
    return {
      unsubscribe: () => ipcRenderer.removeListener(`${id}/store`, callback),
    };
  },

  handleHoldNotif: (callback) => {
    ipcRenderer.on("hold", callback);
    return {
      unsubscribe: () => ipcRenderer.removeListener("hold", callback),
    };
  },

  handleAlarmNotif: (callback) => {
    ipcRenderer.on("alarm", callback);
    return {
      unsubscribe: () => ipcRenderer.removeListener("alarm", callback),
    };
  },

  getDevice: async (id) => {
    const device: Device = await ipcRenderer.invoke("get-device", id);
    return device;
  },
  getDevices: () => ipcRenderer.invoke("get-devices"),

  removeDeviceMeta: (device) =>
    ipcRenderer.invoke("remove-device-meta", device),

  putDeviceMeta: (device) => ipcRenderer.invoke("put-device-meta", device),

  getAllDeviceMeta: () => ipcRenderer.invoke("get-all-device-meta"),

  getDeviceMeta: (id) => ipcRenderer.invoke("get-device-meta", id),
  saveProfile: (profile) => ipcRenderer.invoke("save-profile", profile),
  getProfiles: () => ipcRenderer.invoke("get-profiles"),
  stopDevice: (slaveId) => ipcRenderer.invoke("stop-device", slaveId),
  startDevice: (slaveId, profile, step) =>
    ipcRenderer.invoke("start-device", slaveId, profile, step),

  getRecords: (slaveId, start, end) =>
    ipcRenderer.invoke("get-records", slaveId, start, end),
  editProfile: (slaveId, profile) =>
    ipcRenderer.invoke("edit-live-profile", slaveId, profile),
  deleteProfile: (profileId) => ipcRenderer.invoke("delete-profile", profileId),

  writeTune: (slaveId, tune) => ipcRenderer.invoke("write-tune", slaveId, tune),

  getAllSettings: () => ipcRenderer.invoke("get-settings"),
  getPath: () => ipcRenderer.invoke("get-path"),

  startSSP: (slaveId, ssp, alarm) =>
    ipcRenderer.invoke("start-ssp", slaveId, ssp, alarm),

  getAllBatches: (slaveId, date) =>
    ipcRenderer.invoke("get-all-batch", slaveId, date),
  deleteBatch: (id) => ipcRenderer.invoke("delete-batch", id),

  toggleChiller: (slaveId) => ipcRenderer.invoke("toggle-chiller", slaveId),

  uploadProfile: (profile, index) =>
    ipcRenderer.invoke("upload-profile", profile, index),
  saveConfig: (key, value) => ipcRenderer.invoke("save-config", key, value),
  getSerialPorts: () => ipcRenderer.invoke("get-serial-ports"),

  printReport: (landscape) => ipcRenderer.invoke("print-report", landscape),
};

contextBridge.exposeInMainWorld("electronAPI", electronAPI);
