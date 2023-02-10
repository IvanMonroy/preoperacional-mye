import React from 'react';
import './LoginComponent.css';
import { Card, CardContent, TextField, Typography, FormControlLabel, Checkbox, Button } from '@mui/material';
import { BackgroundComponent } from '../../BasicComponents/BackgroundComponent/BackgroundComponent';
import Login from '../../Resources/images/Login.png';
import MYE from '../../Resources/images/MYE.png';
import MYEF from '../../Resources/images/MYEF.png';
import { Stack } from '@mui/system';

export const LoginComponent = () => {

    return (
        <div className='login-component'>
            <BackgroundComponent backgroundSrc={Login} />
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', top: 297, width: 428, height: 628, borderRadius: 4 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', px: 2, py: 3, top: 71, position: 'absolute' }} gap={2} >
                    <Stack direction="column" alignItems="center" gap={1} sx={{ width: 316 }} >
                        <img src={MYE} alt="Maquinaría y equipos" width={71.23} height={73} />
                        <Typography sx={{ fontSize: 14 }} color="text.secondary"> Maquinaría y equipos </Typography>
                    </Stack>
                    <Stack direction="column" alignItems="flex-start" gap={2} sx={{ width: 316 }}>
                        <TextField id="user" label="Usuario" variant="outlined" size='medium' fullWidth />
                        <TextField id="password" type='password' label="Contraseña" variant="outlined" size='medium' fullWidth />
                        <FormControlLabel direction="row" alignItems="center" sx={{ width: 133 }} control={<Checkbox color="default" />} label="Recuérdame" />
                    </Stack>
                    <Button style={{ backgroundColor: "#0CBBE2" }} variant="contained" fullWidth>Ingresar</Button>
                    <img src={MYEF} alt="Maquinaría y equipos" width={130} height={72} />
                </CardContent>
            </Card>
        </div>
    )
}
