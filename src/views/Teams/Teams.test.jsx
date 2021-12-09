import { render } from '@testing-library/react'

import Teams from './Teams'

it('Should fetch then render a list of teams', async () => {
  const { container } = render(<Teams />)
  expect(container).toMatchSnapshot()
})
