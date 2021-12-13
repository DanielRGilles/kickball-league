import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { Route, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import AddTeam from './AddTeam';
import TeamsDetail from './TeamsDetail';

const mockTeam = {
  id: 6,
  created_at: '2021-12-08T20:26:24.408898+00:00',
  name: 'redirect me!',
  city: 'okay',
  state: 'go',
  players: []
};

const server = setupServer(
  rest.get(
    'https://kyymosibdiehskestqsg.supabase.co/rest/v1/teams',
    (req, res, ctx) => {
      return res(ctx.json(mockTeam));
    }
  ),
  rest.post(
    'https://kyymosibdiehskestqsg.supabase.co/rest/v1/teams',
    (req, res, ctx) => {
      return res(ctx.json([mockTeam]));
    }
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it('should add a team and redirect to the team detail page', async () => {
  const history = createMemoryHistory();
  history.push('/teams/new');

  render(
    <Router history={history}>
      <Route path='/teams/new'>
        <AddTeam />
      </Route>
      <Route path='/teams/:id' component={TeamsDetail} />
    </Router>
  );

 

  const nameField = screen.getByLabelText(/name/i);
  const cityField = screen.getByLabelText(/city/i);
  const stateField = screen.getByLabelText(/state/i);
  const submitBtn = screen.getByRole('button', { name: 'Add a Team' });

  userEvent.type(nameField, 'My New Team');
  userEvent.type(cityField, 'Anytown');
  userEvent.type(stateField, 'US');
  userEvent.click(submitBtn);

  
});
