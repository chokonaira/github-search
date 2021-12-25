export default {
  builder: (forksCount, starsCount, issuesCount) => ([
    {
      githubTitle: 'No. of Repository Forks',
      counts: forksCount,
    },
    {
      githubTitle: 'No. of Repository Stars',
      counts: starsCount,
    },
    {
      githubTitle: 'No. of Repository Issue raised',
      counts: issuesCount,
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
