import type { Message, User } from '../types';

type Props = {
  index: Number;
  message: Message;
};

const MessageDisplay = ({ message }: Props) => {
  return (
    <div className="">
      <p className="text-red-500 ml-5">&#95; {message.body}</p>
    </div>
  );
};

export default MessageDisplay;
