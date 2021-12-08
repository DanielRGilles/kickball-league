import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PlayersDetail from './PlayersDetail.jsx';

it('should render a detailed view of an individual team', () => {
  render(
    <MemoryRouter initialEntries={['/players/7']} >
      <Route path="/players/:id" >
       <PlayersDetail/>
       </Route>
   </MemoryRouter>
  );

  screen.getByText( 'Loading', {
    exact: false,
  });
  
});