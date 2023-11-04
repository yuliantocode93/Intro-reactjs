import { useState, useEffect, useCallback } from "react";

const Identity = () => {
  const fetchUser = useCallback(() => ["echo1", "echo2", "echo3"], []);
  let [user, setUser] = useState([]);

  useEffect(() => {
    const data = fetchUser();
    setUser(data);
  }, [fetchUser]);

  return (
    <div>
      <ul>
        {user.map((u) => (
          <li key={u}>{u}</li>
        ))}
      </ul>
    </div>
  );
};

export default Identity;
