import { SidenavAndHeader } from '../../components/SidenavAndHeader';
import './index.scss';

export const LoginScreen = () => {
  return (
    <>
      <SidenavAndHeader />
      <div className='center-align login-container'>
        <h3>You're not logged!</h3>
        <h4>Just type your email</h4>
        <input
          type='email'
          name='name'
          className='email'
          id=''
          placeholder='John Doe'
        />
        <input
          type='email'
          name='email'
          className='email'
          id=''
          placeholder='example@mail.com'
        />
        <i className='material-icons'>send</i>
      </div>
      <div>
        <p className='center-align'>
          (If you already have an account, it will log in your account)
        </p>
      </div>
    </>
  );
};
