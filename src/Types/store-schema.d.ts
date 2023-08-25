type StoreSchema = {
	deviceCount: string;
	communication: CommunicationSettings;
	password: string;
	database: DatabaseSettings;
	appSettings: AppSettings;
	backup: BackupSettings;
};

type CommunicationSettings = {
	baseType: BaseType;
	baudRate: BaudRate;
	pollRate: number;
	skipPollOnWrite: number;
	serialPort?: SerialPortMeta;
	tcpPort?: TCPMeta;
};
type BaseType = "SERIAL" | "TCP/IP" | "TELNET" | "TCP/RTU";
type BaudRate = 9600 | 19200 | 57600;
type SerialPortMeta = {
	path: string;
};
type TCPMeta = {
	ip: string;
	tcpPort: number;
};

type DatabaseSettings = {
	remote: boolean;
	remotePath: string;
	username: string;
	password: string;
	authRequired: boolean;
	uuid: string;
};

// type TimeMode = "min" | "hour-min";

type AppSettings = {
	liveProfileEdit: boolean;
	timeMode: TimeBase;
	defaultProfileFormat: ProfileFormat;
	customXAxis: boolean;
	customYAxis: boolean;
	xTicks: number;
	yTicks: number;
	yMin: number;
	yMax: number;
	graphRealTime: boolean;
};

type BackupSettings = {
	autoBackup: boolean;
	backupPath: string;
};
