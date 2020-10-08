const chartThema = {
  area: {
    style: {
      data: {
        fill: "#212121"
      },
      labels: {
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: "#90A4AE",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      axisLabel: {
        textAnchor: "middle",
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      grid: {
        fill: "none",
        stroke: "none"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: "#066899",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      tickLabels: {
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontSize: 7,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  bar: {
    style: {
      data: {
        fill: "#e00909",
        padding: 0,
        strokeWidth: 0
      },
      labels: {
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'",
        fontSize: 8,
        letterSpacing: "normal",
        padding: 8,
        fill: "#e00909",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 20
  },
  boxplot: {
    style: {
      max: {
        padding: 8,
        stroke: "#e00909",
        strokeWidth: 1
      },
      maxLabels: {
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#e00909",
        stroke: "transparent",
        strokeWidth: 0
      },
      median: {
        padding: 8,
        stroke: "#e00909",
        strokeWidth: 1
      },
      medianLabels: {
        fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#e00909",
        stroke: "transparent",
        strokeWidth: 0
      },
      min: {
        padding: 8,
        stroke: "#e00909",
        strokeWidth: 1
      },
      minLabels: {
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      q1: {
        padding: 8,
        fill: "#e00909"
      },
      q1Labels: {
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#e00909",
        stroke: "transparent",
        strokeWidth: 0
      },
      q3: {
        padding: 8,
        fill: "#e00909"
      },
      q3Labels: {
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#e00909",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    boxWidth: 20,
    width: 350,
    height: 350,
    padding: 50
  },
  candlestick: {
    style: {
      data: {
        stroke: "#e00909"
      },
      labels: {
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#e00909",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    candleColors: {
      positive: "#ffffff",
      negative: "#e00909"
    },
    width: 350,
    height: 350,
    padding: 50
  },
  chart: {
    width: 800,
    height: 300,
    padding: 50
  },
  errorbar: {
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#455A64",
        strokeWidth: 2
      },
      labels: {
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  group: {
    colorScale: [
      "#d9de3e",
      "#65c1c3",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    width: 350,
    height: 350,
    padding: 50
  },
  legend: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: {
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      },
      title: {
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 5,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    }
  },
  line: {
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#455A64",
        strokeWidth: 2
      },
      labels: {
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0
      }
    },
    width: 350,
    height: 350,
    padding: 50
  },
  stack: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064"
    ],
    width: 350,
    height: 350,
    padding: 50
  },
  tooltip: {
    style: {
      fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'",
      fontSize: 12,
      letterSpacing: "normal",
      padding: 5,
      fill: "#455A64",
      stroke: "transparent",
      strokeWidth: 0,
      pointerEvents: "none"
    },
    flyoutStyle: {
      stroke: "#212121",
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  }
};

export default chartThema;