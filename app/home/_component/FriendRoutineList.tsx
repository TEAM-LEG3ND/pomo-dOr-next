import FriendRoutineCard from "./FriendRoutineCard";

function FriendRoutineList() {
  return (
    <ul className="flex w-full flex-col gap-2">
      <li>
        <FriendRoutineCard />
      </li>
      <li>
        <FriendRoutineCard />
      </li>
      <li>
        <FriendRoutineCard />
      </li>
      <li>
        <FriendRoutineCard />
      </li>
    </ul>
  );
}

export default FriendRoutineList;
