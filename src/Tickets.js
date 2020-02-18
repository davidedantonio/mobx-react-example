import React from "react";
import { Grid, Divider, Button } from "@material-ui/core";
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { inject, observer } from "mobx-react";
import { Alert } from "@material-ui/lab";

import TicketItem from './TicketItem';
import TicketModal from "./TicketModal";

@inject('support')
@observer
class Tickets extends React.Component {

  state = {
    openCreate: false
  };

  handleOpen = _ => {
    this.setState({openCreate: true});
  };

  render () {
    const { openedTicket, info } = this.props.support;
    
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button 
            color={'primary'}
            variant={'contained'}
            onClick={this.handleOpen}
          >Nuovo Ticket</Button>
        </Grid>

        <Grid item xs={12}>
          <Alert severity="info">{info}</Alert>
        </Grid>

        <Grid item xs={12}>
          <Paper>
            {openedTicket.length > 0 ? (
              <List>
                {openedTicket.map(ticket => (
                  <React.Fragment key={ticket.id}>
                    <TicketItem ticket={ticket} />
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            ) : (
              <Alert severity="success">Nessun titcket da lavorare</Alert>
            )}
          </Paper>
        </Grid>

        <TicketModal open={this.state.openCreate} onClose={_ => this.setState({ openCreate: false })} />
      </Grid>
    );
  }
}

export default Tickets;