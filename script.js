const totalMonthlySalesCtx = document.getElementById("totalMontlySales");

const totalMonthlySalesLabel = [
  "Sep 2016",
  "Oct 2016",
  "Nov 2016",
  "Dec 2016",
  "Jan 2017",
  "Feb 2017",
  "Mar 2017",
];

new Chart(totalMonthlySalesCtx, {
  type: "line",
  data: {
    labels: totalMonthlySalesLabel,
    datasets: [
      {
        label: "Bronx",
        data: [12, 19, 3, 5, 2, 3, 10],
        fill: false,
        borderColor: "hsl(24.6 95% 53.1%)",
        backgroundColor: "hsl(24.6 95% 53.1%)",
        tension: 0.3,
      },
      {
        label: "Manhattan",
        data: [9, 8, 5, 10, 3, 15, 2],
        fill: false,
        borderColor: "hsla(180, 40%, 65%, 1)",
        backgroundColor: "hsla(180, 40%, 65%, 1)",
        tension: 0.3,
      },
    ],
  },
  options: {
    aspectRatio: 10 / 4,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const propertyTypeSalesCtx = document.getElementById("propertyTypeSales");

new Chart(propertyTypeSalesCtx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Residential Units",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "hsl(24.6 95% 53.1%)",
      },
      {
        label: "Commercial Units",
        data: [1, 8, 5, 10, 3, 15, 2],
        backgroundColor: "hsla(180, 60%, 65%, 1)",
      },
    ],
  },
  options: {
    aspectRatio: 10 / 4,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
