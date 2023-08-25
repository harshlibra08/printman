import { Tabs } from "@mantine/core";
import {
	IconCloudUpload,
	// IconDatabaseExport,
	IconMicrowave,
	IconPassword,
	IconPlugConnected,
	IconSettings2,
} from "@tabler/icons-react";
import { useContext, useEffect } from "react";
import { AppTitleContext } from "../Context/context";
import CommSettings from "./comm-settings";
// import DBSettings from "./db-settings";
import DeviceSettings from "./device-settings";
import PasswordSettings from "./password-settings";
import AppSettings from "./app-settings";
import BackupSettings from "./backup-settings";

const SettingsHome = () => {
	const appTitle = useContext(AppTitleContext);

	useEffect(() => {
		appTitle.updateTitle("Settings");
	}, []);

	return (
		<div>
			<Tabs defaultValue="communication" keepMounted={false}>
				<Tabs.List grow>
					<Tabs.Tab value="communication" icon={<IconPlugConnected></IconPlugConnected>}>
						Communication
					</Tabs.Tab>
					<Tabs.Tab value="devices" icon={<IconMicrowave></IconMicrowave>}>
						Devices
					</Tabs.Tab>
					<Tabs.Tab value="password" icon={<IconPassword></IconPassword>}>
						PIN
					</Tabs.Tab>
					{/* <Tabs.Tab value="database" icon={<IconDatabaseExport></IconDatabaseExport>}>
						Remote Database
					</Tabs.Tab> */}
					<Tabs.Tab value="app" icon={<IconSettings2></IconSettings2>}>
						Application
					</Tabs.Tab>
					<Tabs.Tab value="backup" icon={<IconCloudUpload></IconCloudUpload>}>
						Backup
					</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panel value="communication">
					<CommSettings></CommSettings>
				</Tabs.Panel>
				<Tabs.Panel value="devices">
					<DeviceSettings></DeviceSettings>
				</Tabs.Panel>
				<Tabs.Panel value="password">
					<PasswordSettings></PasswordSettings>
				</Tabs.Panel>
				<Tabs.Panel value="app">
					<AppSettings></AppSettings>
				</Tabs.Panel>
				<Tabs.Panel value="backup">
					<BackupSettings></BackupSettings>
				</Tabs.Panel>
				{/* <Tabs.Panel value="database">
					<DBSettings></DBSettings>
				</Tabs.Panel> */}
			</Tabs>
		</div>
	);
};

export default SettingsHome;
