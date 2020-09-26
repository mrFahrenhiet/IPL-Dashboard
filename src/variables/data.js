const data = require("../data/data.json");


// Data Pre-processing
const teams = [];
for(let itm in data) {
    if(teams.indexOf(data[itm].team1)===-1) {
        teams.push(data[itm].team1);
    }
}

let seasons = [];
for(let itm in data) {
    if(seasons.indexOf(data[itm].season)===-1) {
        seasons.push(data[itm].season);
    }
}
seasons.sort();

function winsByTeams(team,season) {
    let wins = 0;
    for(let itm in data) {
        if(data[itm].winner===team && data[itm].season===season) {
            wins++;
        }
    }
    return wins;
}

const winsTeam = {};
teams.forEach(x=>{
    let arr = [];
    seasons.forEach(s=>{
        arr.push(winsByTeams(x,s)); 
    });
    winsTeam[x] = arr; 
})
// console.log((winsTeam));
let toss_decisions = {};
seasons.forEach(s=>{
  toss_decisions[s] = {};
  toss_decisions[s]["field"] = 0;
  toss_decisions[s]["bat"] = 0;
})
for(let i in data) {
  if(data[i].toss_decision==="field") {
    toss_decisions[data[i].season]["field"]++;
  }
  if(data[i].toss_decision==="bat") {
    toss_decisions[data[i].season]["bat"]++;
  }
}
let batDecision = []
let ballDecision = []
seasons.forEach(s=>{
  batDecision.push(toss_decisions[s]["bat"]);
  ballDecision.push(toss_decisions[s]["field"]);
});

let seasonsMatches = {};
let seasMatch = []
seasons.forEach(s=>{
  seasonsMatches[s] = 0;
});
for(let i in data) {
  seasonsMatches[data[i].season]++;
}
seasons.forEach(s=>{
  seasMatch.push(seasonsMatches[s]);
});

let dl = {};
for(let i in data) {
  if(dl[data[i]["season"]]===undefined || isNaN(dl[data[i]["season"]]))
    dl[data[i]["season"]] = 0;
  else 
    dl[data[i]["season"]]++
}
let ld = [];
seasons.forEach(s=>{
  ld.push(dl[s]);
});





// Chart Data
const chart_1_2_3_options = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent"
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 16,
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ],
    xAxes: [
      {
        barPercentage: 1.0,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ]
  }
};
const chart1 = {};
teams.forEach(x=>{
  chart1["data"+x] = (canvas) => {
      let ctx = canvas.getContext("2d");
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      return {
        name: x,
        labels: seasons,
        datasets: [
          {
            label: "Wins of " +x,
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: winsTeam[x]
          }
        ]
      }
  }
});
chart1["options"] = chart_1_2_3_options

const chart2 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)");

    return {
      labels: ["CSK", "DC", "DD", "GL", "KXIP", "KTK","KKR","MI","PW","RR","RPS","RCB","SRH"],
      datasets: [
        {
          label: "Win Percentage",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [59, 38, 43, 43, 47, 43, 52, 60, 26, 54, 50, 48, 54]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 10,
            suggestedMax: 90,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};

const chart3 = {
  data: {
    labels: seasons,
    datasets: [
      {
        label: "Bat First",
        fill: true,
        backgroundColor: "#ff8a76",
        hoverBackgroundColor: " #ff8a76",
        borderColor: "#ff8a76",
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        data: batDecision
      },
      {
        label: "Field First",
        fill: true,
        backgroundColor: "#2782f0",
        hoverBackgroundColor: " #2782f0",
        borderColor: "#2782f0",
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        data: ballDecision
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 15,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 60,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};

const chart4 = {
  data: {
    labels: seasons,
    datasets: [
      {
        label: "Matches",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#ff8779", "#2a84e9", "#e2e2e2","#2dce89","#1d8cf8","#ffd600","#fb6340","#8965e0","#11cdef","#fd5d93"],
        borderWidth: 0,
        data: seasMatch
      }
    ]
  },
  options: {
    cutoutPercentage: 70,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    scales: {
      yAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)"
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  }
};


const chart5 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, "rgba(253,93,147,0.2)");
    gradientStroke.addColorStop(0, "rgba(253,93,147,0)");
    return {
      labels: ["CSK", "DC", "DD", "GL", "KXIP", "KTK","KKR","MI","PW","RR","RPS","RCB","SRH"],
      datasets: [
        {
          label: "Chances of winning",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#ff5991",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [32.5, 25.3, 23.2, 33.33, 18.3, 28.5, 29.99, 31.16, 0.06, 29.3, 26.6, 22.4, 21.6]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(253,93,147,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 35,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(253,93,147,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};

const chart6 = {
  data: {
    labels: seasons,
    datasets: [
      {
        label: "DLS method applied ",
        fill: true,
        backgroundColor: "rgba(255, 138, 118,0.1)",
        hoverBackgroundColor: "rgba(255, 138, 118,0.0)",
        borderColor: "#ff8a76",
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        data: ld
      },
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 15,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 10,
            suggestedMax: 90,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};
export {
  chart1,
  teams,
  chart3,
  chart2,
  chart4,
  chart5,
  chart6
};
  