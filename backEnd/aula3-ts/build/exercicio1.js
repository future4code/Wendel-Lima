"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
const allEvents = [
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
];
const printAllEvents = (events) => {
    events.forEach((item) => {
        const duration = item.finishAt.diff(item.startAt, "minutes");
        const today = moment();
        const daysUntilEvent = item.startAt.diff(today, "days");
        console.log(`
			Nome: ${item.name}
			Horário de início: ${item.startAt.format("dddd, DD de MMMM de YYYY, HH:mm")}
			Horário de fim: ${item.finishAt.format("DD de MMMM de YYYY, HH:mm")}
			Descrição: ${item.description}
		`);
    });
};
//# sourceMappingURL=exercicio1.js.map