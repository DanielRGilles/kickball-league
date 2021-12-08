import { render } from '@testing-library/react'
import PlayersDetail from './PlayersDetail'

it('Should fetch then render a specific player', async () => {
  
    const { container } = await render(<PlayersDetail />)
  expect(container).toMatchSnapshot()
})
