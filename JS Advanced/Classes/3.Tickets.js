function tickets(allTickets, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
                this.price = price,
                this.status = status
        }
    }

    const tickets = [];

    for (let item of allTickets) {
        let [destination, price, status] = item.split('|');
        let currTicket = new Ticket(destination, Number(price), status);
        tickets.push(currTicket)
    }

    if (criterion == 'destination') {
        tickets.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        });
    } else if (criterion == 'price') {
        tickets.sort((a, b) => {
            return a.price - b.price;
        });
    } else if (criterion == 'status') {
        tickets.sort((a, b) => {
            return a.status.localeCompare(b.status);
        });
    }

    return tickets;

}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));