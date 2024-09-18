class eventHandler{
    constructor(){
        this.eventList = [];
    }

    addEvent(event){
        this.eventList.push(event);
    }

    removeEvent(event){
        this.eventList = this.eventList.filter(e => e !== event);
    }

    handleEvent(event){
        this.eventList.forEach(e => e(event));
    }
}