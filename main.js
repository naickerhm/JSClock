class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    autoStart() {
        setInterval(()=> {
            this.updateTime();
        }, 200);    
    } 

    updateTime() {
        const segments = this.getTimeSegments();
        const formatMinutes = segments.minutes.toString().padStart(2,"0");
        const formatSeconds = segments.seconds.toString().padStart(2,"0");
        const formattedTime = `${segments.hour}:${formatMinutes}:${formatSeconds}`;
        const AMPM = segments.isPM ? "PM" : "AM";

        this.element.querySelector(".time").textContent = formattedTime;
        this.element.querySelector(".time-period").textContent = AMPM;

        // console.log("formatted time "+formattedTime);
    }

    getTimeSegments() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
            isPM: now.getHours() > 12
        };
    }
}

const clockElement =  document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);
clockObject.autoStart();
// console.log(clockObject.getTimesegments());
// console.log(clockObject.updateTime());