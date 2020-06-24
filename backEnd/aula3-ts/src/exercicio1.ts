import * as moment from 'moment'
moment.locale("pt-br")

type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
}

const allEvents: event[] = [
	{
		name: "Reunião de família ",
		description: "Reunião muito importante",
		startAt: moment("28/06/2020 14:00", "DD/MM/YYYY HH:mm"),
	 	finishAt: moment("28/06/2020 21:00", "DD/MM/YYYY HH:mm")
	},
	{
		name: "Reuniões de projeto",
		description: "Reuniões online diárias, muito importantes",
		startAt: moment("20/06/2020 09:00", "DD/MM/YYYY HH:mm"),
	 	finishAt: moment("26/06/2020 12:00", "DD/MM/YYYY HH:mm")
	}
]

