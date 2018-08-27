d3.select('#viz')
  .append('svg')
    .attr('width', 600)
    .attr('height', 400)
    .style('background', '#93a1a1')
  .append('rect')
    .attr('x', 200)
    .attr('y', 100)
    .attr('height', 200)
    .attr('width', 200)
    .style('fill', '#cb4b19');

d3.select('#viz svg')
  .append('circle')
  .attr('cx', 300)
  .attr('cy', 200)
  .attr('r', 50)
  .style('fill', '#840043');