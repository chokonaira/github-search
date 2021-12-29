import dateFormatter from '@/helpers/dateFormatter';

describe('dateFormatter.js', () => {
  it('Formats date string to the', () => {
    const dateString = '2021-11-09T16:39:15Z';
    const formatter = dateFormatter(dateString);

    expect(formatter).toEqual('2021-11-09');
  });
});
