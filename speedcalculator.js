import { LightningElement } from 'lwc';

export default class speedcalculator extends LightningElement {
   distance ;
    time ;
    currentResult;

    changeHandler1(event){
        this.distance = event.target.value;
    }
    changeHandler2(event){
        this.time = event.target.value;
    }
    onCalculate() {
        this.currentResult = parseInt(this.distance)/parseInt(this.time);
    }
}
