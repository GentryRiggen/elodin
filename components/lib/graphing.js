import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';

const d3 = {
  scale,
  shape,
};

const createScaleX = (start, end, width) => (
  d3.scale.scaleTime()
    .domain([new Date(start), new Date(end)])
    .range([0, width])
);

const createScaleY = (minY, maxY, height) => (
  d3.scale.scaleLinear().domain([minY, maxY]).nice().range([height, 0])
);

const createLineGraph = ({
  data,
  xSelector,
  ySelector,
  width,
  height,
}) => {
  const lastDatum = data[data.length - 1];
  const scaleX = createScaleX(data[0].time, lastDatum.time, width);
  const allYValues = data.reduce((all, datum) => {
    all.push(ySelector(datum));
    return all;
  }, []);
  const extentY = d3Array.extent(allYValues);
  const scaleY = createScaleY(extentY[0], extentY[1], height);
  const lineShape = d3.shape.line()
    .x(d => scaleX(xSelector(d)))
    .y(d => scaleY(ySelector(d)));

  return {
    data,
    scale: {
      x: scaleX,
      y: scaleY,
    },
    path: lineShape(data),
    ticks: data.map((datum) => {
      const time = xSelector(datum);
      const value = ySelector(datum);

      return {
        x: scaleX(time),
        y: scaleY(value),
        datum,
      };
    }),
  };
};

const createPieGraph = ({
  data,
  innerRadius,
  outerRadius,
  selected,
  size,
  valueSelector,
}) => {
  const radiusSelected = outerRadius + 12;
  return d3.shape.pie()
    .value(valueSelector)(data)
    .map((d, i) => ({
      data: data[i],
      path: d3.shape.arc()
        .outerRadius(i === selected ? radiusSelected : outerRadius)
        .padAngle(0.1)
        .innerRadius(innerRadius)(d),

    }));
};

export default {
  createLineGraph,
  createPieGraph,
};
