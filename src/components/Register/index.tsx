import { FormEvent, useState } from 'react';

interface IProps {
  handleRegister: (s: any) => void;
}

const Register = ({ handleRegister }: IProps) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleRegister(state);
  };

  return (
    <main className="m-3 d-flex flex-column">
      <h1 className="align-self-center text-center">Register here</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            className="form-control"
            type="text"
            id="email"
            placeholder="Enter email address"
            name="email"
            value={state.email}
            onChange={(e) =>
              setState({
                ...state,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Create Password</label>
          <input
            className="form-control"
            type="text"
            id="password"
            name="password"
            placeholder="Enter password"
            value={state.password}
            onChange={(e) =>
              setState({
                ...state,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Register;
