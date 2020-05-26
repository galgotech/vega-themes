/**
 * Copyright 2020 Google LLC.
 *
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file or at
 * https://developers.google.com/open-source/licenses/bsd
 */

import {Config} from './config';

const markColor = '#3366CC';
const gridColor = '#ccc';
const fontColor = '#52545c';
const fontSize = 12;
const defaultFont = 'Roboto,Helvetica Neue,Arial,sans-serif';

const googlechartsTheme: Config = {
  arc: {fill: markColor},
  area: {fill: markColor},
  path: {stroke: markColor},
  rect: {fill: markColor},
  shape: {stroke: markColor},
  symbol: {stroke: markColor},
  circle: {fill: markColor},
  background: '#fff',

  padding: {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  },
  style: {
    'guide-label': {
      font: defaultFont,
      fontSize: fontSize,
    },
    'guide-title': {
      font: defaultFont,
      fontSize: fontSize,
    },
    'group-title': {
      font: defaultFont,
      fontSize: fontSize,
    },
  },
  title: {
    font: defaultFont,
    fontSize: fontSize,
    fontWeight: 'bold',
    dy: -3,
    anchor: 'start',
  },
  axis: {
    gridColor: gridColor,
    tickColor: gridColor,
    labelFont: defaultFont,
    labelColor: fontColor,
    labelFontSize: fontSize,
    titleFont: defaultFont,
    titleColor: fontColor,
    titleFontSize: fontSize,
    domain: false,
    grid: true,
    ticks: true,
  },
  legend: {
    titleFont: defaultFont,
    titleColor: fontColor,
    titleFontSize: fontSize,
    titleFontWeight: 500,
    labelFont: defaultFont,
    labelColor: fontColor,
    labelFontSize: fontSize,
  },
  header: {
    labelFont: defaultFont,
    labelColor: fontColor,
    labelFontSize: fontSize,
    labelOrient: "bottom",
    labelPadding: 20,
    labelAlign: "center",
    labelAngle: 0,
  },
  range: {
    category: [
        "#73BF69",
        "#FADE2A",
        "#F2495C",
        "#5794F2",
        "#FF9830",
        "#B877D9"
    ],
    heatmap: ['#c6dafc', '#5e97f6', '#2a56c6'],
  },
};

export default googlechartsTheme;
