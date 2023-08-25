type Device = {
	slaveId: number;
	protocol: ProtocolVersion;
	configInit: boolean;
	tuneInit: boolean;
	connected: boolean;
	config: DeviceConfig;
	live: DeviceLive;
	tune: DeviceTune;
	batch?: Batch;
	lastLoadedProfile?: Profile;
};

type ProtocolVersion = "v1" | "v1.1" | "v2";

type PIDLevel = 1 | 2;
type PIDMode = "Heat" | "Cool" | "HeatCool";

type DeviceConfig = {
	inputType: DeviceInputType;
	decimal: number;
	spanHigh: number;
	spanLow: number;
	format: ProfileFormat;
	timebase: TimeBase;
	level: PIDLevel;
	mode: PIDMode;
};

type DeviceInputType =
	| "J-T/C"
	| "K-T/C"
	| "R-T/C"
	| "S-T/C"
	| "B-T/C"
	| "N-T/C"
	| "T-T/C"
	| "RTD"
	| "0-20mA"
	| "4-20mA"
	| "0-5V"
	| "0-10V"
	| "0-1V"
	| "0-3.3V";

type ProfileFormat = "PR/PL" | "T/SP";

type TimeBase = "H:M" | "H" | "M" | "S";

type DeviceLive = {
	controlAction: DeviceControlAction;
	profile: number;
	rfsn: number;
	end: boolean;
	pvError: ChannelError;
	pv: number;
	profileStatus: ProfileStatus;
	csp: number;
	dest: number;
	rTime: number;
	step: number;
	heatOutput: number;
	coolOutput: number;
	hold: boolean;
	relay1: boolean;
	relay2: boolean;
	ssr: boolean;
	alarmLow: boolean;
	alarmHigh: boolean;
	profileCounter: number;
	delayTime: number;
	delaySet: number;
};

type DeviceControlAction = "OFF" | "PROFILE" | "D.PROFILE" | "SSP";

type ChannelError = null | "U.R." | "O.R." | "RPOL" | "OPEN";

type ProfileStatus = "HEATING" | "SOAKING" | "COOLING";

type DeviceTune = {
	prbHeat: number;
	prbCool: number;
	intHeat: number;
	intCool: number;
	derHeat: number;
	derCool: number;
	cycleHeat: number;
	cycleCool: number;
	hystHeat: number;
	hystCool: number;
	rampTime: number;
	pl: number;
	dualLevel: number;
	ssp: number;
	relay1SP: number;
	relay1Hyst: number;
	relay1Delay: number;
	relay2SP: number;
	relay2Hyst: number;
	relay2Delay: number;
	controlMode: number;
	dbh: number;
	dbl: number;
};

type Profile = {
	name?: string;
	steps: number;
	delay: number;
	loop: number;
	link: boolean;
	initSP: number;
	time: number[];
	sp: number[];
	pr: number[];
	pl: number[];
	pd: number[];
	profileNo: number;
	format: ProfileFormat;
	timeMode: TimeBase;
	relay1Set?: number;
	relay2Set?: number;
	setRelay?: boolean;
};

type ProfileStore = Profile & PouchDB.Core.IdMeta;

type Batch = {
	_id: `${number}|${BatchID}`;
	_rev?: string;
	slaveId: number;
	batchId: BatchID;
	ssp: number;
	isProfile: boolean;
	loadedProfile: Profile;
	runningProfile: Profile;
	startTime: string;
	endTime: string;
	startTemp: number;
	end: boolean;
	batchEnd?: BatchEndMode;
};

type BatchID = `${string}|${number}`;

type BatchEndMode = "PC" | "Controller" | "Auto" | "Shutdown";

type DeviceMeta = {
	_id: string;
	title: string;
	protocol: ProtocolVersion;
};

type DeviceData = {
	_id: `${number}|${string}`;
	timestamp: string;
	slaveId: number;
	data: DeviceLive;
};
