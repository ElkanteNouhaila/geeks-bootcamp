// ===== Exercise 6

function createCalendar(year, month) {
    const table = document.createElement("table");
    table.border = "1";

    const days = ["MO","TU","WE","TH","FR","SA","SU"];

    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    days.forEach(day => {
        const th = document.createElement("th");
        th.textContent = day;
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    const lastDay = new Date(year, month, 0).getDate(); // آخر يوم فال month
    const firstDay = new Date(year, month - 1, 1).getDay(); // Sunday = 0, Monday = 1

    let startDay = firstDay === 0 ? 6 : firstDay - 1;

    let date = 1;
    for (let i = 0; i < 6; i++) { 
        const tr = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            const td = document.createElement("td");

            if (i === 0 && j < startDay) {
                td.textContent = ""; 
            } else if (date > lastDay) {
                td.textContent = ""; 
            } else {
                td.textContent = date;
                date++;
            }

            tr.appendChild(td);
        }

        tbody.appendChild(tr);
        if (date > lastDay) break; 
   }

    table.appendChild(tbody);

    document.body.appendChild(table);
}

createCalendar(2012, 9); 