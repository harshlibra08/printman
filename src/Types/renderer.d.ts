export interface IElectronAPI {
	loadPreferences: LoadPreferences;
	loadComm: () => Promise<void>;
	startComm: () => Promise<void>;
	handleDeviceData: HandleDeviceData;
	handleDeviceStore: HandleDeviceStore;

	handleHoldNotif: HandleHoldNotif;
	handleAlarmNotif: HandleAlarmNotif;

	getDevice: GetDevice;
	getDevices: GetDevices;
	getAllDeviceMeta: GetAllDeviceMeta;
	getDeviceMeta: GetDeviceMeta;
	removeDeviceMeta: RemoveDeviceMeta;
	putDeviceMeta: PutDeviceMeta;

	saveProfile: HandleSaveProfile;
	getProfiles: HandleGetProfiles;
	stopDevice: StopDevice;
	startDevice: StartDevice;
	getRecords: GetRecords;
	editProfile: EditLivePorfile;
	deleteProfile: DeleteProfile;

	writeTune: WriteTune;

	getAllSettings: GetAllSettings;
	saveConfig: SaveConfig;
	getPath: GetPath;
	startSSP: StartSSP;

	getAllBatches: GetAllBatches;
	deleteBatch: DeleteBatch;

	toggleChiller: ToggleChiller;

	uploadProfile: UploadProfileFunc;

	getSerialPorts: GetSerialPorts;
	printReport: PrintReport;
}

declare global {
	interface Window {
		electronAPI: IElectronAPI;
	}
}
