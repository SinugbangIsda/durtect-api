import React from 'react';
import Layout from '../../components/Layout';
import HistoryHeader from '../../components/History/HistoryHeader';
import HistoryList from '../../components/History/HistoryList';

const History = ({ route }: any) => {
  const { id, data } = route.params;

  return (
    <Layout twStyles = "flex-1 defaultBg">
      <HistoryHeader data = { data } />
      <HistoryList data = { data } id = { id }/>
    </Layout>
  )
}

export default History;