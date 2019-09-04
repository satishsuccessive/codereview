import React from 'react';
import { TextField, Grid, makeStyles, Card, CardContent, Button, Typography, CardActions } from '@material-ui/core';
// import { LockOutlinedIcon } from '@material-ui/icons';
import { VpnKey, Email, LockOutlined } from '@material-ui/icons';
// import { LockOutlinedIcon } from '@material-ui/icons/LockOutlinedIcon';

const useStyles = makeStyles({
    card: {
      width: '400px',
      margin: '0 auto',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    center: {
    textAlign: 'center',
    },
    right: {
        textAlign: 'right',
        },
    fullW: {
    width:'100%',
    },
    Flexcenter:{
    justifyContent: 'center',
    },
    red:{
      backgroundColor: '#f44336',
      width:'40px',
      height:'40px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      margin: '0 auto',
    }
  });

const Login = () => {
    const classes = useStyles();
    return (
      <>
        <Card className={classes.card}>
          <CardContent className={classes.center}>
            <span className={classes.red}>
              <LockOutlined color="#fff" />
            </span>
            <p>Login</p>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end" className={classes.Flexcenter}>
                <Grid item>
                  <Email />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Email" type="email" />
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="flex-end" className={classes.Flexcenter}>
                   <Grid item>
                    <VpnKey />
                  </Grid>
                   <Grid item>
                    <TextField id="input-with-icon-grid" label="Password" type="password" />
                  </Grid>
                 </Grid>
            </div>
          </CardContent>
          <CardActions className={classes.right}>
            <Button variant="contained" size="big" color="primary" className={classes.fullW}>Login</Button>
          </CardActions>
        </Card>
      </>
    )
}
export default Login;
