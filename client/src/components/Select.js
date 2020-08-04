import React, { Fragment } from 'react';
import { getYearMonths } from '../utils/periods';
import { formatNumber } from '../utils/formatNumber';

const Select = ({ onSelectPeriod, entrys, revenues, outgoings, balance }) => {
  const yearMonths = getYearMonths();

  const handleGetPeriod = async (event) => {
    const period = await event.target.value;
    onSelectPeriod(period);
  };

  return (
    <Fragment>
      <div>
        <div className="form-group py-2">
          <label style={styles.label} className="text-primary" htmlFor="period">
            Escolha um período:
          </label>
          <select
            style={styles.select}
            className="form-select"
            id="period"
            name="period"
            onChange={handleGetPeriod}
          >
            {yearMonths.map((data) => {
              return (
                <option key={data.key} value={data.key}>
                  {data.value}
                </option>
              );
            })}
          </select>
          <div className="columns my-2">
            <div className="column col-3">
              <span className="text-primary">
                Lançamentos: <span style={styles.orange}>{entrys}</span>
              </span>
            </div>
            <div className="column col-3">
              <span className="text-primary">
                Receitas:{' '}
                <span style={styles.green}>{formatNumber(revenues)}</span>
              </span>
            </div>
            <div className="column col-3">
              <span className="text-primary">
                Despesas:{' '}
                <span style={styles.red}>{formatNumber(outgoings)}</span>
              </span>
            </div>
            <div className="column col-3">
              <span className="text-primary">
                Saldo:{' '}
                <span style={balance > 0 ? styles.green : styles.red}>
                  {formatNumber(balance)}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const styles = {
  select: {
    width: '250px',
    padding: '6px',
  },
  label: {
    paddingRight: '20px',
  },
  green: {
    color: 'green',
    fontWeight: 'bold',
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
  },
  orange: {
    color: 'orange',
    fontWeight: 'bold',
  },
};

export default Select;
