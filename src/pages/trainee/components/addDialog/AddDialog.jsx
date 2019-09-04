import React from 'react';
import { Dialog, Button, TextField, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import PropTypes from 'prop-types';
import style from './style';

         export default function AnalogDialog(props) {
            const [open, setOpen] = React.useState(false);

            function handleClickOpen() {
              setOpen(true);
            }

            function handleClose() {
              setOpen(false);
            }
            const { onClick, errorName, errorEmail, ...rest } = props;
            const erroStyle = errorName ? style.error : {};
            return (
              <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        Open form dialog
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Enter Your Trainee Details
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Name"
                      type="text"
                      fullWidth
                      { ...rest }
                    />
                    {
                        errorName && (
                          <span style={{ ...erroStyle }}>{errorName}</span>
                        )
                      }
                    <TextField
                      margin="dense"
                      id="email"
                      label="Email Address"
                      type="email"
                      fullWidth
                      { ...rest }
                    />
                    {/* {
                        errorEmail && (
                          <span style={{ ...erroStyle }}>{errorEmail}</span>
                        )
                      } */}
                    <TextField
                      margin="dense"
                      id="pass"
                      label="Password"
                      type="password"
                      halfWidth
                    />
                    <TextField
                      margin="dense"
                      id="confirm_pass"
                      label="Confirm Password"
                      type="password"
                      halfWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={onClick} color="primary">
                    Submit
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            )
         }
         AnalogDialog.propTypes = {
          onClick: PropTypes.func.isRequired,
      }
         AnalogDialog.defaultProps = {
        // onClick: 'Default Banner',
      }
