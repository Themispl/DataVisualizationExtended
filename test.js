const filter1 = document.querySelector('#filter1');
const filter2 = document.querySelector('#filter2');
const filter3 = document.querySelector('#filter3');
const chartTypeSelect = document.querySelector('#chart-type-select');
const colorPicker = document.querySelector('#color-picker');

let myChart;

filter1.addEventListener('click', () => {
  updateChart(getData1());
});

filter2.addEventListener('click', () => {
  updateChart(getData2());
});

filter3.addEventListener('click', () => {
  updateChart(getData3());
});

chartTypeSelect.addEventListener('change', () => {
  if (myChart) {
    myChart.destroy();
  }

  const data = getData();
  const type = chartTypeSelect.value;

  const ctx = document.getElementById('myChart').getContext('2d');
  myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: data.labels,
      datasets: [
        {
          label: 'Data Set',
          data: data.data,
          backgroundColor: colorPicker.value,
          borderColor: colorPicker.value,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Data Visualization Dashboard',
          font: {
            size: 16,
          },
        },
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

colorPicker.addEventListener('change', () => {
  if (myChart) {
    myChart.data.datasets[0].backgroundColor = colorPicker.value;
    myChart.data.datasets[0].borderColor = colorPicker.value;
    myChart.update();
  }
});

function updateChart(data) {
  if (myChart) {
    myChart.destroy();
  }

  const type = chartTypeSelect.value;
  const ctx = document.getElementById('myChart').getContext('2d');
  myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: data.labels,
      datasets: [
        {
          label: 'Data Set',
          data: data.data,
          backgroundColor: colorPicker.value,
          borderColor: colorPicker.value,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Data Visualization Dashboard',
          font: {
            size: 16,
          },
        },
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function getData1() {
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    data: [10, 20, 30, 40, 50, 60, 70],
  };
}

function getData2() {
  return {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    data: [12, 19, 3, 5, 2, 3],
  };
}

function getData3() {
  return {
    labels: ['North', 'South', 'East', 'West'],
    data: [500, 700, 300, 900],
  };
}

function getData() {
  const selectedFilter = document.querySelector('.filter.active');
  if (selectedFilter.id === 'filter1') {
    return getData1();
  } else if (selectedFilter.id === 'filter2') {
    return getData2();
  } else if (selectedFilter.id === 'filter3') {
    return getData3();
  }
}

chartTypeSelect.addEventListener('change', () => {
  if (myChart) {
    myChart.destroy();
  }

  const data = getData();
  const type = chartTypeSelect.value;

  const ctx = document.getElementById('myChart').getContext('2d');
  myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: data.labels,
      datasets: [
        {
          label: 'Data Set',
          data: data.data,
          backgroundColor: colorPicker.value,
          borderColor: colorPicker.value,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Data Visualization Dashboard',
          font: {
            size: 16,
          },
        },
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

function updateChart() {
  if (myChart) {
    myChart.destroy();
  }

  const data = getData();
  const type = chartTypeSelect.value;
  const ctx = document.getElementById('myChart').getContext('2d');
  myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: data.labels,
      datasets: [
        {
          label: 'Data Set',
          data: data.data,
          backgroundColor: colorPicker.value,
          borderColor: colorPicker.value,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Data Visualization Dashboard',
          font: {
            size: 16,
          },
        },
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function getData1() {
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    data: [10, 20, 30, 40, 50, 60, 70],
  };
}

function getData2() {
  return {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    data: [12, 19, 3, 5, 2, 3],
  };
}

function getData3() {
  return {
    labels: ['North', 'South', 'East', 'West'],
    data: [500, 700, 300, 900],
  };
}

const filters = document.querySelectorAll('.filter');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((f) => {
      f.classList.remove('active');
    });
    filter.classList.add('active');
    updateChart();
  });
});

colorPicker.addEventListener('change', () => {
  if (myChart) {
    myChart.data.datasets[0].backgroundColor = colorPicker.value;
    myChart.data.datasets[0].borderColor = colorPicker.value;
    myChart.update();
  }
});

updateChart();

