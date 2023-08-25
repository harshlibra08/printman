type WriteListItem = {
	slaveId: number;
	address: number;
	data: number[];
	retry: number;
	callback?(): void;
};

type ReadListItem = {
	slaveId: number;
	address: number;
	length: number;
	retry: number;
	callback: ReadCallback;
};

type ReadCallback = (slaveId: number, data: number[] | null | false) => void;
