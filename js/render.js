const countdownRef = document.querySelector("#timer-1");

const format = (time) => {
  return time < 10 ? "0" + time : time;
};

const render = ({ days, hours, minutes, seconds }) => {
  countdownRef.innerHTML = `
          <div class="field">
              <span class="value" data-value="days">${format(days)}</span>
              <span class="label">Days</span>
          </div>
          <div class="field">
              <span class="value" data-value="hours">${format(hours)}</span>
              <span class="label">Hours</span>
          </div>
          <div class="field">
              <span class="value" data-value="mins">${format(minutes)}</span>
              <span class="label">Minutes</span>
          </div>
          <div class="field">
              <span class="value" data-value="secs">${format(seconds)}</span>
              <span class="label">Seconds</span>
          </div>   
      `;
};

const countdownTimer = new CountDownTimer(new Date("Feb 12, 2022"), render);
