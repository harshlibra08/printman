type LoadPreferences = () => Promise<void>;

// Device Data
type HandleDeviceDataCallback = (event: Electron.IpcRendererEvent, device: Device) => void;
type HandleDeviceStoreCallback = (event: Electron.IpcRendererEvent, data: DeviceData) => void;
type HandleDeviceData = (id: number, callback: HandleDeviceDataCallback) => HandleDataUnsubscribe;
type HandleDeviceStore = (id: number, callback: HandleDeviceStoreCallback) => HandleDataUnsubscribe;
type HandleDataUnsubscribe = {
	unsubscribe: () => void;
};

type HandleHoldNotif = (callback: HandleHoldNotifCallback) => HandleDataUnsubscribe;
type HandleHoldNotifCallback = (
	event: Electron.IpcRendererEvent,
	slaveId: number,
	hold: boolean
) => void;

type HandleAlarmNotif = (callback: HandleAlarmNotifCallback) => HandleDataUnsubscribe;
type HandleAlarmNotifCallback = (
	event: Electron.IpcRendererEvent,
	slaveId: number,
	alarm: "High" | "Low" | null
) => void;

// Profile
type HandleSaveProfile = (profile: Profile) => Promise<Profile>;
type HandleGetProfiles = () => Promise<ProfileStore[]>;

type DeleteProfile = (profileId: string) => Promise<void>;

type UploadProfileFunc = (profile: Profile, index: number) => Promise<void>;

// Device
type GetDevice = (id: number) => Promise<Device>;
type GetDevices = () => Promise<Device[]>;

type GetAllDeviceMeta = () => Promise<DeviceMeta[]>;

type GetDeviceMeta = (id: string) => Promise<DeviceMeta>;

type PutDeviceMeta = (device: DeviceMeta) => Promise<DeviceMeta>;
type RemoveDeviceMeta = (device: DeviceMeta) => Promise<void>;

type StopDevice = (slaveId: number) => void;
type StartDevice = (slaveId: number, profile: Profile, step: number) => void;

type GetRecords = (slaveId: number, start: string, end: string) => Promise<DeviceData[]>;
type EditLivePorfile = (slaveId: number, profile: Profile) => void;
type WriteTune = (slaveId: number, tune: DeviceTune) => void;

type StartSSP = (
	slaveId: number,
	ssp: number,
	alarm: { relay1: number; relay2: number; setRelay: boolean }
) => void;

type ToggleChiller = (slaveId: number) => void;

// Config

type GetAllSettings = () => Promise<StoreSchema>;
type SaveConfig = (key: string, value: any) => Promise<void>;

type GetPath = () => Promise<string>;

// Batch Data

type GetAllBatches = (slaveId: number, date?: string) => Promise<Batch[]>;
type DeleteBatch = (id: string) => Promise<void>;

type GetSerialPorts = () => Promise<import("@serialport/bindings-cpp").PortInfo[]>;

type PrintReport = (landscape: boolean) => Promise<void>;
