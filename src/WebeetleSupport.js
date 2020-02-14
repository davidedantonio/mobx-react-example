import { 
  observable,
  action,
  autorun,
  computed
} from "mobx";

class WebeetleSupport {
  @observable tickets = [{
    id: 213123123123,
    createDate: new Date(),
    closeDate: null,
    subject: 'This is a ticket',
    body: 'This is a long body ticket. Interesting'
  }];

  constructor() {
    autorun(() => {
      console.log(`This is ticket: ${this.tickets.length}`);
    });
  }

  @computed
  get closedTicketCount () {
    return this.tickets.filter(item => item.closeDate).length
  }

  @computed
  get openedTicket () {
    return this.tickets.filter(item => item.closeDate === null)
  }

  @action
  addTicket (ticket) {
    Object.assign(ticket, {
      id: Math.floor(Date.now() / 1000),
      createDate: new Date(),
      closeDate: null
    })

    this.tickets.push(ticket)
    return ticket.id
  }

  @action
  closeTicket (ticketId) {
    const i = this.tickets.findIndex(item => item.id === ticketId);
    Object.assign(this.tickets[i], {closeDate: new Date()});
  }
}

export const support = new WebeetleSupport()