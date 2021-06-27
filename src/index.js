
import './sass/main.scss';

// ССылки
const refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value = "hours"]'),
      mins: document.querySelector('[data-value = "mins"]'),
      secs: document.querySelector('[data-value = "secs"]'),
};
    
// Класс
class CountdownTimer {
  constructor({selector, targetDate, onTick }) {
      this.timerId = null;
      this.selector = selector;
      this.targetDate = targetDate;
      this.onTick = onTick;
  }

  start() {
    this.timerId = setInterval(() => {
      const deltaTime = this.targetDate - Date.now();
        const time = this.getTimeComponents(deltaTime);
        this.onTick(time);
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    };

  pad(value) {
    return String(value).padStart(2, '0');
    };
};

// Экземпляр
const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 24, 2021'),
  onTick: updateClockface
});

// Обновление интерфейса
 function updateClockface({ days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }

countdownTimer.start();