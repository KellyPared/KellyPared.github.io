samplesData = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

const dataPromise = d3.json(samplesData)
console.log(dataPromise)

var data = d3.json(samplesData).then(function(data) {
  console.log(data)
        //Create a Dropdown menu - top 10 OTU's
        var names = data.names;
          console.log(data.names);
          // populate the dropdown menu items ??? How do I select only 10????
          var dropdownMenu = d3.select('#selDataset');  // id="selDataset"
            // define the varaiable names for the dropdown menu -check the log. 
            //function is triggered (option)
          names.forEach(function(name){dropdownMenu.append('option').text(name).property('value')});
            // dropdownMenu.on('click', function(e, d) {
            // d3.select(this)
          // define the function for the dropdown menu
        //   selectElement.addEventListener("optionChanged", (event) => {
        //   const result = document.querySelector(".result");
        //   result.textContent = id;
});
function optionChanged(id) {
  plots(id);
  demInfo(id);
}

//Initialize Plots to start the page - default // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 40, left: 90},
width = 460 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

// create initial plots
// plots(init_id);

// write the initial demographic info
// demInfo(init_id);
//var sampleValues = sample_values; initiate a fake plot.
function init() {
  data = [{
    x: [1, 2],
    y: [1, 2] }];

Plotly.newPlot("plot", data);}
// identify the initial value for the initial plots and info
// var init_id = names[0]
//   console.log(init_id)

            // array.filter(function(value, index, arr), thisValue)
var samples = data.samples.filter(function(id) {
  return data.id == 0; })
  console.log(samples);

//get the values for the y bar chart and have it change the init_id
var otuIds = 'data.samples.${init_id}.otu_ids';
  console.log(otuIds);

//get the values for text hover data otu_labels
var otu_labels = 'data.samples.${init_id}.otu_labels';
console.log(otu_labels)

//get the values for x but need to use a filter.

var sample_values = data.samples.sample_values;
console.log(sample_values)



// Create a Horizontal Bar Chart
var bar_data = {
    y: otuIds,
    x: [4,2],
    type: 'bar',
    orientation: 'h',
    text: otu_labels, //['4.17 below the mean', ], 
    marker: {
      color: 'rgb(142,124,195)'
    }
  };

var bargraph = [bar_data];
  
var layout = {
  title: 'Top 10 OTUs found in Individual',
  font:{
    family: 'Raleway, sans-serif'
  },
  showlegend: false,
  xaxis: {
    tickangle: -45
  },
  yaxis: {
    zeroline: false,
    gridwidth: 2
  },
  bargap :0.05
};
 
Plotly.newPlot('bar', bargraph, layout);




//Create a bubble chart
  // id="bubble"
  // Use otu_ids for x values
  // Use sample_values for the y values
  // Use sample_values for the marker size
  // Use otu_ids for marker colors
  // Use otu_labels for text values
// Bubble Chart  
var bubbleGraph = {
  x: [1, 2, 3, 4],//otuIds
  y: [10, 11, 12, 13],//samples_values
  mode: 'markers',
  marker: {
    //color: otuIds,
    size: sample_values
  }
};

var bubble_data = [bubbleGraph];

var layout = {
  title: 'Sample Values of otu_ids',
  showlegend: true,
  height: 600,
  width: 600
};

Plotly.newPlot('bubble', bubble_data, layout);

// Make the Demographic Info - sample metadata
// inidividuals demographic information
// Display each key-value pair (dictionary) from metadata
  //id
  //ethnicity
  //gender
  //age
  //bbtype
  //wfreq 
// var metaData = data.metadata
//   console.log(metaData)

var metadata = SamplesData.metadata;
console.log(SamplesData.metadata);

var bubbledata = [{
        type: 'table',
        header: {
          align: "center",
          line: {width: 1, color: 'black'},
          fill: {color: "grey"},
          font: {family: "Arial", size: 12, color: "white"}
        },
        cells: {
          values: metadata,
          align: "center",
          line: {color: "black", width: 1},
          font: {family: "Arial", size: 11, color: ["black"]}
}
}]

Plotly.newPlot('sample-metadata', bubbledata);
//Create a Gauge Chart - weekly washing frequency
  //html id="gauge"
  // values 0-9
var guagedata = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    value: 270,
    title: { text: "Speed" },
    type: "indicator",
    mode: "gauge+number"
  }
];

var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
Plotly.newPlot('guage', gaugedata, layout);
//Update all plots when new sample is selected.


});
