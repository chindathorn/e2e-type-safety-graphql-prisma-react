import type { User } from '../types';

type Props = {
  user: User;
};

const UserDisplay = ({ user }: Props) => {
  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
};

export default UserDisplay;
