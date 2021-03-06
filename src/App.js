import "./styles.css";
import SimpleCard from "./Cards";

export default function App() {
  function PaperForm() {
    function handleSubmit(event) {
      event.preventDefault();
      alert("You are crazy");
    }
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input id="usernameInput" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <div className="App">
      <PaperForm />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SimpleCard a="Scout: Exploring" b="yeah" />
      <SimpleCard a="Scout: Exploring" />
    </div>
  );
}
