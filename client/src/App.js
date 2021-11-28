import "./App.css";
import {Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function App(){
  const RegisterQuandoClick = (values) => console.log(values);
  const loginQuandoClick = (values) => console.log(values);

  const validacaoLogin = yup.object().shape({
    email: yup.string()
    .email("Digite um email valido")
    .required("Email é obrigatório"),
    password: yup.string()
    .min(4, "A senha deve contar pelo menos 4 caracters")
    .required("Senha é obrigatório")
  })

  const validacaoCadastro = yup.object().shape({
    email: yup
    .string()
    .email("Digite um email valido")
    .required("Email é obrigatório"),
    password: yup
    .string()
    .min(4, "A senha deve contar pelo menos 4 caracters")
    .required("Senha é obrigatório"),
    confirmacaoSenha: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não sao iguais")
  })

  return (
      <div className="container"> 
      <h1>Login</h1>
      <Formik initialValues={{}} onSubmit={loginQuandoClick} validationSchema={validacaoLogin}>
          
          <Form className="login-form">
              <div className="login-form-group">
                  <Field name="email" className="form-field" placeholder="Email"/>
                  <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                  />
              </div>
              <div className="login-form-group">
                  <Field name="password" className="form-field" placeholder="senha"/>

                  <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                  />
              </div>
              <button className="button" type="submit">Login</button>
          </Form> 

      </Formik>

      <h1>Cadastro</h1>

      <Formik initialValues={{}} onSubmit={RegisterQuandoClick} validationSchema={validacaoCadastro}>
          
          <Form className="login-form">
              <div className="login-form-group">
                  <Field name="email" className="form-field" placeholder="Email"/>
                  <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                  />
              </div>
              <div className="login-form-group">
                  <Field name="password" className="form-field" placeholder="senha"/>

                  <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                  />
              </div>
              <div className="login-form-group">
                  <Field name="confirmacaoSenha" className="form-field" placeholder="senha"/>

                  <ErrorMessage
                  component="span"
                  name="confirmacaoSenha"
                  className="form-error"
                  />
              </div>
              <button className="button" type="submit">Registrar</button>
          </Form> 

      </Formik>
   
      
      </div>
  )
}
export default App;