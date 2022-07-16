// import Button from './button';
import Btn from './btn';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome to Joke Central!</h1>

      <Btn />
    </div>
  );
}

export default Home;
