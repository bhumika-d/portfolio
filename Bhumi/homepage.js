const isLeapYear = (year) => {
    return (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  };
  const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
  };
  let calendar = document.querySelector('.calendar');
  const month_names = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  let month_picker = document.querySelector('#month-picker');
  const dayTextFormate = document.querySelector('.day-text-formate');
  const timeFormate = document.querySelector('.time-formate');
  const dateFormate = document.querySelector('.date-formate');
  
  month_picker.onclick = () => {
    month_list.classList.remove('hideonce');
    month_list.classList.remove('hide');
    month_list.classList.add('show');
    dayTextFormate.classList.remove('showtime');
    dayTextFormate.classList.add('hidetime');
    timeFormate.classList.remove('showtime');
    timeFormate.classList.add('hideTime');
    dateFormate.classList.remove('showtime');
    dateFormate.classList.add('hideTime');
  };
  
  const generateCalendar = (month, year) => {
    let calendar_days = document.querySelector('.calendar-days');
    calendar_days.innerHTML = '';
    let calendar_header_year = document.querySelector('#year');
    let days_of_month = [
        31,
        getFebDays(year),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
      ];
  
    let currentDate = new Date();
  
    month_picker.innerHTML = month_names[month];
  
    calendar_header_year.innerHTML = year;
  
    let first_day = new Date(year, month);
  
  
    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
  
      let day = document.createElement('div');
  
      if (i >= first_day.getDay()) {
        day.innerHTML = i - first_day.getDay() + 1;
  
        if (i - first_day.getDay() + 1 === currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          day.classList.add('current-date');
        }
      }
      calendar_days.appendChild(day);
    }
  };
  
  let month_list = calendar.querySelector('.month-list');
  month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div>${e}</div>`;
  
    month_list.append(month);
    month.onclick = () => {
      currentMonth.value = index;
      generateCalendar(currentMonth.value, currentYear.value);
      month_list.classList.replace('show', 'hide');
      dayTextFormate.classList.remove('hideTime');
      dayTextFormate.classList.add('showtime');
      timeFormate.classList.remove('hideTime');
      timeFormate.classList.add('showtime');
      dateFormate.classList.remove('hideTime');
      dateFormate.classList.add('showtime');
    };
  });
  
  (function() {
    month_list.classList.add('hideonce');
  })();
  document.querySelector('#pre-year').onclick = () => {
    --currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
  };
  document.querySelector('#next-year').onclick = () => {
    ++currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
  };
  
  let currentDate = new Date();
  let currentMonth = { value: currentDate.getMonth() };
  let currentYear = { value: currentDate.getFullYear() };
  generateCalendar(currentMonth.value, currentYear.value);
  
  const todayShowTime = document.querySelector('.time-formate');
  const todayShowDate = document.querySelector('.date-formate');
  
  const currshowDate = new Date();
  const showCurrentDateOption = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  const currentDateFormate = new Intl.DateTimeFormat(
    'en-US',
    showCurrentDateOption
  ).format(currshowDate);
  todayShowDate.textContent = currentDateFormate;
  setInterval(() => {
    const timer = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
    let time = `${`${timer.getHours()}`.padStart(
        2,
        '0'
      )}:${`${timer.getMinutes()}`.padStart(
        2,
        '0'
      )}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
    todayShowTime.textContent = formateTimer;
  }, 1000);


  function toggleMenu(x) {
    x.classList.toggle("change");
    var menuLinks = document.querySelector(".dropdown_menu");
    menuLinks.classList.toggle("show");
  }
  function showPopup(id) {
    // Hide all popups
    var popups = document.querySelectorAll('.popup-container');
    popups.forEach(function(popup) {
        popup.style.display = 'none';
    });

    // Show the selected popup
    var selectedPopup = document.getElementById(id + 'Popup');
    if (selectedPopup) {
        selectedPopup.style.display = 'block';
    }
}
function togglePopup(popupId) {
  var popup = document.getElementById(popupId);
  if (popup.style.display === "none") {
      popup.style.display = "block";
  } else {
      popup.style.display = "none";
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('myChart').getContext('2d');

  const labels = ['1st semester', '2nd semester'];
  const data = {
      labels: labels,
      datasets: [{
          label: 'My Academic Growth',
          data: [3.36, 3.09],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
          ],
          borderWidth: 1,
          barThickness: 60 // Adjust the bar thickness here
      }]
  };

  const config = {
      type: 'bar',
      data: data,
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  suggestedMax: 4.00 // Ensure the highest point on the y-axis is 4.00
              }
          }
      }
  };

  new Chart(ctx, config);
});
// Function to toggle the visibility of the calendar
function toggleCalendar() {
  var calendar = document.querySelector('.calendar');
  calendar.classList.toggle('show-calendar');
}
function addTodo() {
  var input = document.getElementById("todoInput").value;
  var ul = document.getElementById("todoList");
  var li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = input + "<span class='delete-btn' onclick='deleteTodo(this)'>Delete</span>";
  ul.appendChild(li);
  document.getElementById("todoInput").value = "";
}

function deleteTodo(item) {
  item.parentNode.remove();
}
const activities= {
  quizes: 20,
  assignments: 10,
  midTerm: 20,
  attendance: 10,
  final: 40
  // Add more activities as needed
};

// Function to render the pie chart
function renderPieChart(data) {
  const ctx = document.getElementById('activityChart').getContext('2d');
  const labels = Object.keys(data);
  const values = Object.values(data);

  new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: labels,
          datasets: [{
              label: 'Activities (Marks)',
              data: values,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.5)', // Red
                  'rgba(54, 162, 235, 0.5)', // Blue
                  'rgba(255, 206, 86, 0.5)', // Yellow
                  'rgba(75, 192, 192, 0.5)', // Green
                  'rgba(153, 102, 255, 0.5)', // Purple
                  // Add more colors as needed
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: 50 // Adjust the percentage to control the size of the blank space
      }
  });
}

// Call the function to render the pie chart
renderPieChart(activitiesCompleted);
const activitiesCompleted = {
  quizes: 20,
  assignments: 10,
  midTerm: 20,
  attendance: 10,
  final: 40
  // Add more activities as needed
};

// Function to render the pie chart
function renderPieChart(data) {
  const ctx = document.getElementById('activityChart').getContext('2d');
  const labels = Object.keys(data);
  const values = Object.values(data);

  new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: labels,
          datasets: [{
              label: 'Activities (Marks)',
              data: values,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.5)', // Red
                  'rgba(54, 162, 235, 0.5)', // Blue
                  'rgba(255, 206, 86, 0.5)', // Yellow
                  'rgba(75, 192, 192, 0.5)', // Green
                  'rgba(153, 102, 255, 0.5)', // Purple
                  // Add more colors as needed
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: 50 // Adjust the percentage to control the size of the blank space
      }
  });
}

// Call the function to render the pie chart
renderPieChart(activitiesCompleted);
// Sample data for activities completed
        
        // Function to toggle the calendar visibility
        function toggleCalendar() {
          var calendar = document.querySelector('.calendar');
          calendar.classList.toggle('show-calendar');
      }

      // Function to add a new task to the to-do list
      function addTodo() {
          var input = document.getElementById("todoInput").value;
          var ul = document.getElementById("todoList");
          var li = document.createElement("li");
          li.className = "todo-item";
          li.innerHTML = input + "<span class='delete-btn' onclick='deleteTodo(this)'>Delete</span>";
          ul.appendChild(li);
          document.getElementById("todoInput").value = "";
      }

      // Function to delete a task from the to-do list
      function deleteTodo(item) {
          item.parentNode.remove();
      }

      // Populate calendar dates
      function populateCalendarDates() {
          const calendarDays = document.getElementById("calendar-days");
          calendarDays.innerHTML = "";

          // Number of days in the month
          const daysInMonth = 31; // Update this with actual days in the month

          // Populate the calendar days
          for (let i = 1; i <= daysInMonth; i++) {
              const dayElement = document.createElement("div");
              dayElement.textContent = i;
              calendarDays.appendChild(dayElement);
          }
      }
      // Populate calendar dates
function populateCalendarDates() {
  const calendarDays = document.getElementById("calendar-days");
  calendarDays.innerHTML = "";

  // Get current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  // Number of days in the month
  const daysInMonth = 31; // Update this with actual days in the month

  // Populate the calendar days
  for (let i = 1; i <= daysInMonth; i++) {
      const dayElement = document.createElement("div");
      dayElement.textContent = i;
      if (i === currentDay) {
          dayElement.classList.add("today");
      }
      calendarDays.appendChild(dayElement);
  }
}


      // Call function to populate calendar dates
      populateCalendarDates();