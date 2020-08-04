import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Select from './components/Select';
import Entrys from './components/Entrys';

const api = axios.create({ baseURL: 'api' });

const App = () => {
  const [period, setPeriod] = useState('2019-01');
  const [listOutgoing, setListOutgoing] = useState([]);
  const [entrys, setEntrys] = useState(0);
  const [revenues, setRevenues] = useState(0);
  const [outgoings, setOutgoings] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // const fetchTransactions = async () => {
    //   const { data } = await api.get('/transaction?period=2019-07');
    // };
    // fetchTransactions();
    const newPeriod = period;
    setPeriod(newPeriod);
  }, [period, listOutgoing]);

  const handleSelectPeriod = async (data) => {
    const newListOutgoing = await api.get(`/transaction?period=${data}`);
    setEntrys(newListOutgoing.data.length);
    let newRevenues = 0;
    let newOutgoings = 0;
    for (let i = 0; i < newListOutgoing.data.length; i++) {
      if (newListOutgoing.data[i].category === 'Receita') {
        newRevenues += newListOutgoing.data[i].value;
      } else {
        newOutgoings += newListOutgoing.data[i].value;
      }
    }
    setListOutgoing(newListOutgoing);
    setRevenues(newRevenues);
    setOutgoings(newOutgoings);
    setBalance(newRevenues - newOutgoings);
  };

  return (
    <Fragment>
      <div className="container text-center mt-2">
        <Header />
        <Select
          onSelectPeriod={handleSelectPeriod}
          entrys={entrys}
          revenues={revenues}
          outgoings={outgoings}
          balance={balance}
        />
        <Entrys listOutgoing={listOutgoing} />
      </div>
    </Fragment>
  );
};

export default App;
