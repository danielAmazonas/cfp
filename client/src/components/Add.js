import React, { Fragment } from 'react';

const Add = () => {
  const handleRadio = (event) => {
    const id = event.target.id;
    // const data = document.querySelector('input[name=type]:checked').value;
    console.log(id);
  };
  return (
    <Fragment>
      <div className="accordion">
        <input type="checkbox" id="accordion" name="accordion" hidden />
        <label
          className="accordion-header text-primary c-hand"
          htmlFor="accordion"
        >
          <i className="icon icon-arrow-right mr-1"></i>
          Adicionar Receita/Despesa
        </label>
        <div className="accordion-body">
          <div className="form-group">
            <label className="form-radio form-inline">
              <input
                type="radio"
                name="type"
                onClick={handleRadio}
                id="despesa"
              />
              <i className="form-icon"></i> Despesa
            </label>
            <label className="form-radio form-inline">
              <input
                type="radio"
                name="type"
                onClick={handleRadio}
                id="receita"
              />
              <i className="form-icon"></i> Receita
            </label>
            <div className="columns">
              <div className="has-icon-left column col-3">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Descrição"
                />
                <i
                  className="form-icon icon icon-check"
                  style={styles.marginIcon}
                ></i>
              </div>
              <div className="has-icon-left column col-3">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Categoria"
                />
                <i
                  className="form-icon icon icon-check"
                  style={styles.marginIcon}
                ></i>
              </div>
              <div className="has-icon-left column col-3">
                <input
                  type="number"
                  className="form-input"
                  placeholder="Valor"
                />
                <i
                  className="form-icon icon icon-check"
                  style={styles.marginIcon}
                ></i>
              </div>
              <div className="has-icon-left column col-3">
                <input type="date" className="form-input" />
                <i
                  className="form-icon icon icon-check"
                  style={styles.marginIcon}
                ></i>
              </div>
            </div>
          </div>
          <button className="btn btn-sm">Inserir</button>
        </div>
      </div>
    </Fragment>
  );
};

const styles = {
  marginIcon: {
    marginLeft: '14px',
  },
};

export default Add;
