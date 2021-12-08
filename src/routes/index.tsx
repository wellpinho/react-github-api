import { Route as Switch, Route } from 'react-router-dom'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { Repository } from '../pages/repository'

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repository} />
    </Switch>
  )
}

