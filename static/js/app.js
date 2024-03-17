dropdownMenu = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    sampleNames = data.names;

    sampleNames.forEach((sample) => {
      dropdownMenu
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    Sample = sampleNames[0];
   plotCharts(Sample);
    DisplaySeldata(Sample);
  });
  
d3.json("samples.json").then((data) => {
  //Create a variable that holds the samples array. 
  sampleArray = data.samples;
     
  //Create a variable that filters the samples passed to function.
  chart = sampleArray.filter(sampleObj => sampleObj.id == 940);
  
  // Create a variable that holds the sample in the array.
  ArraySample = chart[0];
    
  //Create variables that hold the otu_ids, otu_labels, and sample_values.
  Ids = ArraySample.otu_ids;
  Labels = ArraySample.otu_labels;
  sampleValues = ArraySample.sample_values;
  
  


  yticks = Ids.slice(0,10).map(OTU => "OTU " + OTU).reverse();

    //Create the trace for the bar chart. 
  trace = {
    type: "bar",
    text: Labels.slice(0,10).reverse(),
    x: sampleValues.slice(0,10).reverse(),
    y: yticks,
    hovertext: Labels,
    orientation: 'h'
  };

  barData = [trace];

  // Create the layout for the bar chart. 
  barLayout = {
    title: "<b>Top 10 Bacteria Cultures Found</b>",

       };
  //Use Plotly to plot the data with the layout. 
  Plotly.newPlot('bar',barData, barLayout);
});
