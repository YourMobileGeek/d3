var bardata = [20, 30, 45, 15];
var height = 400, 
    width = 600, 
    barWidth = 50, 
    barOffset = 5; 

    d3.select('#viz').append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background', '#c9d7d6')
      .selectAll('rect').data(bardata)
      .enter().append('rect')
        .style('fill', '#c61c6f')
        .attr('width', barWidth)
        .attr('height', function(d) {
          return d; 
        })
        .attr('x', function(d, i) {
          return i*(barWidth + barOffset) 
        })
        .attr('y', function(d) {
          return height - d; 
        });