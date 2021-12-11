import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TeamsDetail from './TeamsDetail.jsx';

it('should render a detailed view of an individual team', () => {
  render(
    <MemoryRouter initialEntries={['/teams/3']} >
      <Route path="/teams/:id" >
        <TeamsDetail/>
      </Route>
    </MemoryRouter>
  );

  screen.getByText('Loading', {
    exact: false,
  });
  
});