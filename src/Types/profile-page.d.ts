type NewProfile = {
	onBack(): void;
	profile?: Profile;
};

type StepCard = {
	step: string | number;
	time: string | number;
	temp: string | number;
};

type StepCard2 = {
	step: string | number;
	pr: string | number;
	pl: string | number;
	pd: string | number;
};

type AddPointModal = {
	open: boolean;
	onClose: () => void;
	onAdd: (time: number, sp: number) => void;
	timeMode: TimeBase;
};

type AddPointModal2 = {
	open: boolean;
	onClose: () => void;
	onAdd: (pr: number, pl: number, pd: number) => void;
	timeMode: TimeBase;
};

type ProfileAlarm = {
	open: boolean;
	onClose: () => void;
	onSet: (relay1: number, relay2: number, setAlarm: boolean) => void;
	profile: Profile;
};

type SaveProfile = {
	open: boolean;
	onClose: () => void;
	onSave: (name: string, pNumber: number) => void;
};

type UploadProfile = {
	open: boolean;
	onClose: () => void;
	profile: Profile;
};
