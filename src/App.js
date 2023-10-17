import { Button, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import ReplayIcon from '@mui/icons-material/Replay'
import './App.css'

function App() {
  const matches = useMediaQuery('(min-width:600px)')
  const [state, setState] = useState('')

  const clickFoto = () => {
    if (state !== '') return
    setState('foto')
  }

  const clickVideo = () => {
    if (state !== '') return
    setState('video')
  }

  const clickRefresh = () => {
    window.location.reload(false)
  }

  const fotoVariant = state !== 'foto' ? 'outlined' : 'contained'
  const videoVariant = state !== 'video' ? 'outlined' : 'contained'

  const fotoColor = state === 'foto' ? 'success' : 'primary'
  const videoColor = state === 'video' ? 'error' : 'primary'

  return (
    <main className='app'>
      <div className='wrapper'>
        <img src='https://picsum.photos/200' />
        <Typography variant={matches ? 'h3' : 'h4'}>Foto of video?</Typography>
        <span>
          <Button variant={fotoVariant} color={fotoColor} onClick={clickFoto}>
            foto
          </Button>
          <Button variant={videoVariant} color={videoColor} onClick={clickVideo}>
            video
          </Button>
        </span>
        {state !== '' && (
          <IconButton className='refresh' onClick={clickRefresh} variant='contained' color='primary'>
            <ReplayIcon />
          </IconButton>
        )}
      </div>
    </main>
  )
}

export default App
