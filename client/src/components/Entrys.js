import React, { Fragment, useState } from 'react';
import { formatNumber } from '../utils/formatNumber';
import Add from './Add';

const Entry = ({ listOutgoing }) => {
  const [newEntry, setNewEntry] = useState({});
  const [action, setAction] = useState('');
  const modal = document.querySelector('#modal-id');
  const handleClose = () => {
    modal.classList.remove('active');
  };
  return (
    <Fragment>
      <Add />
      <div className="columns">
        {listOutgoing.data &&
          listOutgoing.data.map((entry) => {
            return (
              <div
                style={styles.entry}
                key={entry._id}
                className="column col-12"
              >
                <div className="columns">
                  <div className="column col-6 text-left">
                    <span
                      className="chip mx-2"
                      style={
                        entry.category === 'Receita' ? styles.green : styles.red
                      }
                    >
                      {entry.day}
                    </span>
                    {entry.category} ({entry.description})
                  </div>
                  <div className="column col-6 text-right">
                    <span
                      style={
                        entry.category === 'Receita'
                          ? styles.greenValue
                          : styles.redValue
                      }
                    >
                      {formatNumber(entry.value)}
                    </span>
                    <div className="btn-group mx-2">
                      <button
                        className="btn btn-sm"
                        onClick={() => {
                          setAction('edit');
                          setNewEntry(entry);
                          modal.classList.add('active');
                          console.log(newEntry);
                        }}
                      >
                        <i className="icon icon-edit"></i>
                      </button>
                      <button
                        className="btn btn-sm"
                        onClick={() => {
                          setAction('delete');
                          setNewEntry(entry);
                          modal.classList.add('active');
                        }}
                      >
                        <i className="icon icon-delete"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="modal text-left" id="modal-id">
        <a
          href="#close"
          className="modal-overlay"
          aria-label="Close"
          onClick={handleClose}
        ></a>
        <div className="modal-container">
          <div className="modal-header">
            <a
              href="#close"
              className="btn btn-clear float-right"
              aria-label="Close"
              onClick={handleClose}
            ></a>
            <div className="modal-title h6">
              {action === 'edit'
                ? `Edição - ${newEntry.description} (Dia ${
                    newEntry.day
                  }) ${formatNumber(newEntry.value)}`
                : `Exclusão - ${newEntry.description} (Dia ${
                    newEntry.day
                  }) ${formatNumber(newEntry.value)}`}
            </div>
          </div>
          {action === 'edit' && (
            <Fragment>
              <hr style={styles.hrEdit} />
              <div className="modal-body">
                <div className="content">
                  <div className="form-group">
                    <label className="form-radio form-inline">
                      <input
                        type="radio"
                        name="type"
                        disabled
                        checked={newEntry.category !== 'Receita' ? true : false}
                      />
                      <i className="form-icon"></i> Despesa
                    </label>
                    <label className="form-radio form-inline">
                      <input
                        type="radio"
                        name="type"
                        disabled
                        checked={newEntry.category === 'Receita' ? true : false}
                      />
                      <i className="form-icon"></i> Receita
                    </label>
                    <div className="form-horizontal">
                      <div className="has-icon-left">
                        <input
                          type="text"
                          className="form-input my-1"
                          placeholder="Descrição"
                          autoFocus
                          value={newEntry.description}
                        />
                        <i className="form-icon icon icon-check"></i>
                      </div>
                      <div className="has-icon-left">
                        <input
                          type="text"
                          className="form-input my-1"
                          placeholder="Categoria"
                          value={newEntry.category}
                        />
                        <i className="form-icon icon icon-check"></i>
                      </div>
                      <div className="has-icon-left">
                        <input
                          type="number"
                          className="form-input my-1"
                          placeholder="Valor"
                          value={newEntry.value}
                        />
                        <i className="form-icon icon icon-check"></i>
                      </div>
                      <div className="has-icon-left">
                        <input
                          type="date"
                          className="form-input my-1"
                          value={newEntry.yearMonthDay}
                        />
                        <i className="form-icon icon icon-check"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-sm">Salvar</button>
              </div>
            </Fragment>
          )}
          {action === 'delete' && (
            <Fragment>
              <hr style={styles.hrDelete} />
              <div className="modal-body">
                <div className="content">
                  <p style={styles.redValue}>
                    Tem certeza que deseja remover esta entrada?
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-sm">Remover</button>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const styles = {
  entry: {
    borderLeft: '5px solid #ccc',
    margin: '5px',
    backgroundImage: 'linear-gradient(to right, #f1f1fc , white)',
    padding: '5px',
    paddingRight: '30px',
  },
  green: {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
  },
  red: {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
  },
  greenValue: {
    color: 'green',
    fontWeight: 'bold',
  },
  redValue: {
    color: 'red',
    fontWeight: 'bold',
  },
  hrEdit: {
    width: '100%',
    borderTop: '2px solid green',
  },
  hrDelete: {
    width: '100%',
    borderTop: '2px solid red',
  },
};

export default Entry;
