import React from 'react';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
// In built Image in NextJs
import insta from '../../assets/insta.jpg'
import Button from '@mui/material/Button';
// Carousel
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// Routinmg is Handled by NextJS itself
function index() {
	return (

		<div className="login-container">

			<div className="carbg">
				<div className='car'>
					<CarouselProvider
						naturalSlideWidth={100}
						naturalSlideHeight={125}
						totalSlides={3}
					>
						<Slider>
							<Slide index={0}>I am the first Slide.</Slide>
							<Slide index={1}>I am the second Slide.</Slide>
							<Slide index={2}>I am the third Slide.</Slide>
						</Slider>
					</CarouselProvider>

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