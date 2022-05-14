import React from 'react';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
// In built Image in NextJs
import insta from '../../assets/insta.jpg'
import Button from '@mui/material/Button';
// Routinmg is Handled by NextJS itself
function index() {
	return (

		<div className="login-container">

			<div className="login-card">
				<Image src={insta} />
				<TextField size="small" id="outlined-basic" margin="dense" label="Email" variant="outlined" fullWidth />
				<TextField size="small" id="outlined-basic" type="password" margin="dense" label="Password" variant="outlined" fullWidth />
				<TextField size="small" id="outlined-basic" margin="dense" label="Full Name" variant="outlined" fullWidth />
				<Button variant="outlined" component="label" fullWidth style={{ marginTop: '1rem' }}>
					<input type="file" accept="image/*" style={{ display: 'none' }} />
					Upload
				</Button>

				<Button variant="contained" component="span" fullWidth style={{ marginTop: '1rem' }}>

					Sign Up
				</Button>

			</div>

			<div className='bottom-card'>
			Already Have an Account ? <span style={{color:"blue"}}> Login</span>
			</div>

		</div>
	)
}

export default index