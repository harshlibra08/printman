import { Group } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { AppTitleContext } from "../Context/context";
import DeviceCard from "./device-card";
import DevicePage from "./device-page";

const Home = () => {
  const [devices] = useState<DeviceMeta[]>([]);
  const [selectDevice, setSelectDevice] = useState<DeviceMeta | null>(null);

  const appTitle = useContext(AppTitleContext);
  useEffect(() => {
    if (!selectDevice) {
      appTitle.updateTitle("PRINTMAN DEVICE - 123ABC");
    }
  }, []);

  if (selectDevice)
    return (
      <DevicePage
        dev={selectDevice}
        onBack={() => setSelectDevice(null)}
      ></DevicePage>
    );
  else
    return (
      <>
        <Group position="center">
          {devices.map((item) => (
            <DeviceCard
              dev={item}
              onSelect={setSelectDevice}
              key={item._id}
            ></DeviceCard>
          ))}
        </Group>
      </>
    );
};

export default Home;
