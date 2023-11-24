import { useRef } from 'react';
import Pedido from './Pedido';
import baseStyle from './base.module.css';

function Login() {
  
  const user = useRef();
  const password = useRef();
  const getUser = sessionStorage.getItem('userData');
  const getPassword = sessionStorage.getItem('passwordData');

  const handleSubmit = () => {
    if (user.current.value === 'henri' && password.current.value === '1234') {
      let token =
        Math.random().toString(20).substring(2) +
        Math.random().toString(20).substring(2);
      sessionStorage.setItem('userData', 'henri');
      sessionStorage.setItem('passwordData', token);
    } else {
      alert('Usuário e senha inválidos! Tente novamente.');
    }
  };

  return (
    <>
      {!getPassword && !getUser ? (
        <>
          <section className={`${baseStyle.sectionContainer} ${baseStyle.loginContainer}`}>
            <div className={baseStyle.loginContainer}>
              <form onSubmit={handleSubmit} className={baseStyle.formContainer}>
                <fieldset>
                  <h1 className={baseStyle.formTittle}>Login</h1>
                  <div className={baseStyle.formGroup}>
                    <p className={baseStyle.loginLabel}>
                      Usuário
                      <input type="text" ref={user} /></p>
                  </div>
                  <div className={baseStyle.formGroup}>
                    <p className={baseStyle.loginLabel}> Senha
                      <input type="password" ref={password} />
                    </p>
                  </div>
                  <input type="submit" value="Login" className={baseStyle.btnSubmit}/>
                </fieldset>
              </form>
            </div>
          </section>
        </>
        ) : (
        <Pedido />
      )}
    </>
  );
}

export default Login;
