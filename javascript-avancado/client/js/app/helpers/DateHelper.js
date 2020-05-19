class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }

    static dateToText(date) {
        let data = [
            date.getDate(), 
            date.getMonth() + 1, 
            date.getFullYear()
        ];

        return data.join('/');
    }

    static textToDate(text) {
        if(!/\d{4}-\d{2}-\d{2}/.test(text))
            throw new Error('A data deve estar no formato aaaa-mm-dd');

        return new Date(...text.split('-').map( (item, index) => item - index % 2 ) );
    }
}