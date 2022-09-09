import MessageDisplay from './components/MessageDisplay';
import UserDisplay from './components/UserDisplay';
// import type { User } from './types';
import { useQuery } from 'urql';
import { GetUsersDocument } from './graphql/generated';

function App() {
  // const users: User[] = [
  //   {
  //     name: 'JK',
  //     messages: [{ body: 'Hey there!' }, { body: 'Sup!' }],
  //   },
  // ];
  const [results] = useQuery({ query: GetUsersDocument });

  return (
    <div>
      {results.data?.users.map((user, i) => (
        <div>
          <UserDisplay key={i} user={user} />
          &#123;
          <div>
            {user.messages.map((message, i) => (
              <MessageDisplay index={i} message={message} />
            ))}
          </div>
          &#125;
        </div>
      ))}
    </div>
  );
}

export default App;
