import { Badge } from "@mantine/core";

const RunningBadge = (
	<Badge
		color="green"
		fullWidth
		size="lg"
		variant="filled"
		styles={{
			inner: {
				fontSize: 20,
			},
		}}
	>
		RUN
	</Badge>
);

const EndBadge = (
	<Badge
		color="ornage"
		fullWidth
		size="lg"
		variant="filled"
		styles={{
			inner: {
				fontSize: 20,
			},
		}}
	>
		END
	</Badge>
);

const OffBadge = (
	<Badge
		color="red"
		fullWidth
		size="lg"
		variant="filled"
		styles={{
			inner: {
				fontSize: 20,
			},
		}}
	>
		OFF
	</Badge>
);

const DelayBadge = (
	<Badge
		color="teal"
		fullWidth
		size="lg"
		variant="filled"
		styles={{
			inner: {
				fontSize: 20,
			},
		}}
	>
		D.RUN
	</Badge>
);

export { RunningBadge, EndBadge, OffBadge, DelayBadge };
