type BatchPage = {
	batch: Batch;
	onBack: () => void;
};

type DataTable = {
	batch: Batch;
	data: DeviceData[];
	timeMode: TimeBase;
};
