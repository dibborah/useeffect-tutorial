import { useEffect, useRef } from "react";

const UserForm = () => {
  const  usernameRef  = useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form>
      <input ref={usernameRef} type="text" placeholder="Username"/>
    </form>
  );
};

export default UserForm;
