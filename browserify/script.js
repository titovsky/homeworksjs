export class Timer {
    constructor(secs) {
        this.secs = secs;
        this.start = (function () {return new Promise (function (resolve,reject) {
            setTimeout (()=>{resolve(secs*1000)},secs*1000);
        })})();
    };
};

export const myTimer = function () {
    const timer1 = new Timer(5);
    timer1.start.then(x=>document.title=x); 
};
