import { ErrorCard } from '../../components/Error';
import { useForm } from 'react-hook-form';
import './index.scss';

import { useUser } from '../../hooks/useUser';

interface FormInput {
  name: string;
  email: string;
}

export const SignupScreen = () => {
  const { register, handleSubmit } = useForm<FormInput>();
  const { userSignup, error } = useUser();
  const onSubmit = (data: FormInput) => {
    userSignup(data.email, data.name);
  };

  return (
    <>
      <nav>
        <div className='nav-wrapper'>
          <p className='brand-logo'>Taskia</p>
        </div>
      </nav>
      <div className='center-align login-container'>
        <h3>Signup now!</h3>
        <h4>It's that easy, no password needed</h4>

        {error && <ErrorCard props={error} />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            className='email'
            id=''
            placeholder='John Doe'
            {...register('name', { required: true })}
          />
          <input
            type='email'
            className='email'
            id=''
            placeholder='example@mail.com'
            {...register('email', { required: true })}
          />
          <button className='waves-effect waves-green btn-large'>Signup</button>
        </form>
      </div>
    </>
  );
};
