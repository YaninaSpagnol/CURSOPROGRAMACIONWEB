var moment = require('moment');

moment.locale('es');
console.log('Naci ' + moment('31/07/1993','DD/MM/YYYY').fromNow());
