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

				<div style={{ color: 'red' }}> Error Yahan Ayega</div>
				<Button variant="contained" component="span" fullWidth style={{ marginTop: '1rem' }}>

					Login In
				</Button>
				<div style={{ color: 'blue',marginTop:'0.5rem' }}> Forget Password ?</div>


			</div>

			<div className='bottom-card'>
				Don't Have an Account ? <span style={{ color: "blue" }}> Sign Up</span>
			</div>

		</div>
	)
}

export default index