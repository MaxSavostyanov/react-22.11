export class CurrentDate
{
    constructor(){
        this.date = new Date();
    }

    showDate(){
        return `Сегодня: ${date}`;
    }
}