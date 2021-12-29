import chartDataBuilder from '@/helpers/chartDataBuilder';

describe('chartDataBuilder.js', () => {
  it('Builds chart data array', () => {
    const builder = chartDataBuilder.builder(20, 10, 20);
    const data = [
      {
        githubTitle: 'Repository Forks',
        counts: 20,
      },
      {
        githubTitle: 'Repository Stars',
        counts: 10,
      },
      {
        githubTitle: 'Repository Issue raised',
        counts: 20,
      },
    ];
    expect(builder).toEqual(data);
  });
});
