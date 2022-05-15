import React from 'react';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
// In built Image in NextJs
import insta from '../../assets/insta.jpg'
import Button from '@mui/material/Button';
// Carousel
import { Carousel } from 'react-responsive-carousel';
// Importing Images
import bg1 from '../../assets/bg1.jpg'
import bg2 from '../../assets/bg2.jpg'
import bg3 from '../../assets/bg3.jpg'



// Routinmg is Handled by NextJS itself
function index() {
	return (

		<div className="login-container">

			<div className="carbg">
				<div className='car'>
					<Carousel
						showIndicators={false}
						showArrows={false}
						showThumbs={false}
						infiniteLoop={true}
						showStatus={false}
						interval={1400}
						autoPlay={true}>
						<Image src={bg1}></Image>
						<Image src={bg2}></Image>
						<Image src={bg3}></Image>

					</Carousel>

				</div>

			</div>

			<div>
				<div className="login-card">
					<Image src={insta} />
					<TextField size="small" id="outlined-basic" margin="dense" label="Email" variant="outlined" fullWidth />
					<TextField size="small" id="outlined-basic" type="password" margin="dense" label="Password" variant="outlined" fullWidth />

					<div style={{ color: 'red' }}> Error Yahan Ayega</div>
					<Button variant="contained" component="span" fullWidth style={{ marginTop: '1rem' }}>

						Login In
					</Button>
					<div style={{ color: 'blue', marginTop: '0.5rem' }}> Forget Password ?</div>


				</div>

				<div className='bottom-card'>
					Don't Have an Account ? <span style={{ color: "blue" }}> Sign Up</span>
				</div>
			</div>

		</div>
	)
}

export default index