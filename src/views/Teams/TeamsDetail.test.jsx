import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TeamsDetail from './TeamsDetail.jsx';

it('should render a detailed view of an individual team', async () => {
  render(
    <MemoryRouter>
      <TeamsDetail
        label='The value of the label prop...'
        match={{ params: { id: '3' } }}
      />
    </MemoryRouter>
  );

  screen.getByText('Loading team...');

  const teamName = await screen.findByText(/ Lakeville /, {
    exact: false,
  });
  const customLabel = screen.getByText('The value of the label prop...');

  expect(teamName).toBeInTheDocument();
  expect(customLabel).toBeInTheDocument();
});