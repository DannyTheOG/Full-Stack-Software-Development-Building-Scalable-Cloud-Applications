function UserInfo( props ) {
  return (
    <div>
      <p>name: {props.user.name}</p>
      <p>age: {props.user.age}</p>
    </div>
  );
}

export default UserInfo;