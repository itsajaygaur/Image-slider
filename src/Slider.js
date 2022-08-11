import React from 'react'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';



const Slider = ({ imgData }) => {

    const [current, setCurrent] = React.useState(0)
    const [icon, setIcon] = React.useState('pause')
    const length = imgData.length
    let id = null

    const next = () => setCurrent(current === length - 1 ? 0 : current + 1)
    const prev = () => setCurrent(current === 0 ? length - 1 : current - 1)

    const auto = () => {
        setIcon(prevIcon => prevIcon === 'play' ? 'pause' : 'play')
    }

    React.useEffect(() => {
        if (icon === 'play') {
            id = setInterval(next, 3000)
        }
        return () => clearInterval(id)
    }, [imgData[current].url, icon])


    return (
        <Box sx={{ display: 'flex', alignItems: "center", flexDirection: 'column' }}>
            <Box className='box1' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: "60px", flexDirection: { sm: 'row', xs: 'column' } }}>
                <Avatar variant='square' className="avatar" src={imgData[current].url} sx={{ borderRadius: '10px', height: 'auto', width: { sm: "420px", xs: "320px" } }} />
                <Typography variant="body1" sx={{ p: '20px', maxWidth: { sm: "150px", xs: "350px" } }}>
                    {imgData[current].desc}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ArrowBackIosRoundedIcon sx={{ cursor: 'pointer', m: '0 10px', fontSize: '3.5rem' }} onClick={prev} />
                <Box onClick={auto} sx={{ cursor: 'pointer' }}>
                    {icon === 'play' ? <PauseCircleFilledRoundedIcon sx={{ fontSize: "3.5rem" }} /> : <PlayCircleFilledRoundedIcon sx={{ fontSize: "3.5rem" }} />}
                </Box>
                <ArrowForwardIosRoundedIcon sx={{ cursor: 'pointer', m: '0 10px', fontSize: '3.5rem' }} onClick={next} />
            </Box>
        </Box>
    )
}

export default Slider



