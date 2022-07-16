import Button from './button';
// import Btn from './btn';

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
      <h1>Welcome to Got Jokes!</h1>

      <Button />
    </div>
  );
}

export default Home;
