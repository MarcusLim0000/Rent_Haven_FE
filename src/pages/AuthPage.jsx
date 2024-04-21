import { useState } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

function AuthPage() {
  const [choice, setChoice] = useState(false);

  return (
    <div>
      AuthPage
      {choice ? <SignIn /> : <SignUp />}
      <button onClick={() => setChoice(!choice )}>
      {choice ? 'Sign Up Instead' : 'Sign In Instead'}
      </button>
    </div>
  );
}

export default AuthPage;