import React from 'react';
import { inject } from 'mobx-react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';

@inject("support")
class TicketItem extends React.Component {
  render () {
    const { ticket, support } = this.props;

    return (
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={`Creato il: ${ticket.createDate.toLocaleString()}`}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {ticket.subject}
              </Typography>
              {` - ${ticket.body}`}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={_ => support.closeTicket(ticket.id)}>
            <CancelIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

export default TicketItem;
