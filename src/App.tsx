import { googleLogin } from "./services/auth";
import { createUserIfNotExists } from "./services/userService";

function App() {
  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();

      await createUserIfNotExists(result.user);

      alert(`Welcome ${result.user.displayName}`);
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>SFR Print Portal</h1>

      <button
        onClick={handleGoogleLogin}
        style={{
          padding: "12px 20px",
          cursor: "pointer",
        }}
      >
        Login With Google
      </button>
    </div>
  );
}

export default App;