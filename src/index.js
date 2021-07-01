import './sass/main.scss';


// Класс
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerId = null;
    this.selector = selector;
    this.targetDate = targetDate;

    this.start()
      
  };

  getRefs() {
    return {
      days: document.querySelector(
        `${this.selector} [data-value="days"]`,
      ),
      hours: document.querySelector(
        `${this.selector} [data-value="hours"]`,
      ),
      mins: document.querySelector(
        `${this.selector} [data-value="mins"]`,
      ),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`),
    };
  };

  pad(value) {
    return String(value).padStart(2, '0');
  };


  start() {
    this.timerId = setInterval(() => {
      const time = this.targetDate - Date.now();
      const { days, hours, mins, secs } = this.getRefs();

      days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

      hours.textContent = this.pad(Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      ));

      mins.textContent = this.pad(Math.floor(
        (time % (1000 * 60 * 60)) / (1000 * 60),
      ));
      
      secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    }, 1000);
  }
};

  

// Экземпляр
const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 24, 2021'),

});

