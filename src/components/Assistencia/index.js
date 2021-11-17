import React from 'react'
import GoogleMap from './googleMap'
const Teste = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className='container'>
        <div className='row' style={{ width: '100%' }}>
          <div
            className='col'
            style={{ width: '50%', float: 'left', padding: '10px' }}
          >
            <div className='card'>
              <div className='card-body'>
                <h1> Pedido de Assistência </h1>
                <form id='form-contato'>
                  <div className='form-group'>
                    <label for='nome'>Nome: </label>
                    <input
                      className='form-control'
                      type='text'
                      name='nome'
                      id='nome'
                      placeholder='Introduza o seu nome '
                    />
                  </div>
                  <div className='form-group'>
                    <label for='email'>Email: </label>
                    <input
                      className='form-control'
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Introduza o seu email '
                    />
                  </div>

                  <div className='form-group'>
                    <label for='aparelho'>Equipamento: </label>
                    <input
                      className='form-control'
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Introduza o nome do equipamento '
                    />
                  </div>

                  <div className='form-group'>
                    <label for='mensagem'>Mensagem: </label>
                    <textarea
                      className='form-control'
                      name='mensagem'
                      id='mensagem'
                      placeholder='Digite o problema do equipamento'
                    ></textarea>
                  </div>
                  <div className='form-group text-center'>
                    <button type='submit' className='btn btn-primary'>
                      Enviar{' '}
                    </button>
                  </div>

                  <div className=' altert alert-danger '>
                    Preencha o campo <span id='campo-erro'></span> !
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className='col'
            style={{ width: '50%', float: 'left', padding: '10px' }}
          >
            <div className='card'>
              <div className='card-body'>
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src='js/formulario.js'></script>
      <script src='js/jquery-3.4.1.slim.min.js'></script>
      <script src='js/bootstrap.min.js'></script>
    </>
  )
}

export default Teste
