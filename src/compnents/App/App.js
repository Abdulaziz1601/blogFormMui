import React from 'react'
import avatar from '../../resources/avatar.png';
import { Grid, Avatar, Typography } from "@material-ui/core";
import useStyles from '../../style';
function App() {
	return (
		<Grid container spacing={5}>
			<Grid item>
				<Avatar
					alt="Remy Sharp"
					src={avatar}
					sx={{ width: '400px', height: 100 }}
				/>
				<Button
					variant="contained"
					component="label"
				>
					Upload File
					<input
						type="file"
						hidden
					/>
				</Button>
			</Grid>
			<Grid item>
				blalbdlabsdlabd
			</Grid>
		</Grid>
	)
}

export default App