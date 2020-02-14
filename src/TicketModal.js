import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { inject } from 'mobx-react';

@inject("support")
class TicketModal extends React.Component {
  state = {
    ticket: {
      subject: '',
      body: ''
    }
  };

  handleClose = _ => {
    this.setState({
      ticket: {
        subject: '',
        body: ''
      }
    }, _ => {
      if (typeof this.props.onClose === 'function') {
        this.props.onClose();
      }
    });
  };

  handleChange = (field, e) => {
    const { ticket } = this.state;
    Object.assign(ticket, {
      [field]: e.target.value
    });
    this.setState({ ticket: ticket });
  };

  handleSave = _ => {
    this.props.support.addTicket(this.state.ticket);
    this.handleClose();
  }

  render () {
    const { open } = this.props;

    return (
      <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Crea un Ticket</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Inserire i dati relativi al ticket
          </DialogContentText>
          <TextField
            margin="dense"
            id="subjet"
            label="Oggetto"
            type="text"
            value={this.state.subject}
            onChange={e => this.handleChange('subject', e)}
            fullWidth
          />
          <TextField
            margin="dense"
            id="body"
            label="Ulteriori dettagli"
            type="text"
            fullWidth
            multiline
            value={this.state.body}
            onChange={e => this.handleChange('body', e)}
            rows={10}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="secondary">
            Annulla
          </Button>
          <Button 
            onClick={this.handleSave} 
            color="primary">
            Crea
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default TicketModal;