import { useTheme } from '@emotion/react';
import { Box } from '@mui/system';

export default function IntroLayout(props) {
	const theme = useTheme();
	return (
		<div>
			<h1>This is {props.campus}</h1>
		</div>
	);
}
