// A helper object that houses a function that takes dynamic arguments
// and returns an array which is passed in as data to vue3-charts
// Also houses setup configurations for vue3-charts.

export default {
  builder: (forks, stars, issues) => ([
    {
      githubTitle: 'Repository Forks',
      counts: forks,
    },
    {
      githubTitle: 'Repository Stars',
      counts: stars,
    },
    {
      githubTitle: 'Repository Issue raised',
      counts: issues,
    },
  ]),
  margin: {
    left: 0,
    top: 20,
    right: 20,
    bottom: 0,
  },
  axis: {
    primary: {
      type: 'band',
    },
    secondary: {
      domain: ['dataMin', 'dataMax + 100'],
      type: 'linear',
    },
  },
};
