type DeviceStat = {
  title: string;
  mainValue: string;
  subValue: string;
};

type DevicePageCard = {
  children: React.ReactNode;
};

type DevicePageLive = {
  device: Device;
};

type StartModal = {
  device: Device;
  open: boolean;
  onClose: () => void;
};

type DeviceCard = {
  dev: DeviceMeta;
  onSelect: (device: DeviceMeta) => void;
};

type DevicePage = {
  dev: DeviceMeta;
  onBack: () => void;
};

type DevicePageGraph = {
  graphHeight: number;
  graphWidth: number;
  device: Device;
  records: DeviceData[];
};

type ProfileLiveEdit = {
  device: Device;
  open: boolean;
  onClose: () => void;
};

type ProfileKeyboard = {
  value: number;
  open: boolean;
  onClose: () => void;
  onSave: (value: number) => void;
  type: "TIME" | "SP" | "PR" | "PL" | "PD";
  timebase: TimeBase;
};

type TuneModal = {
  device: Device;
  open: boolean;
  onClose: () => void;
};

type CustomNumberInout = {
  value: number;
  onUpdate: (value: number) => void;
  min: number;
  max: number;
  step: number;
  title: string;
};
