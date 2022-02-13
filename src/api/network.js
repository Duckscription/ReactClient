import axios from 'axios';

export async function getAllSubs() {
  return await axios.get('/api/subs');
}

export async function getSub(subId) {
  return await axios.get(`/api/subs/${subId}`);
}

export async function addNewSub(data) {
  return await axios.post('/api/subs/add', data);
}

export async function updateSub(subId, formContent) {
  return await axios.put(`/api/subs/update/${subId}`, { data: formContent });
}

export async function deleteSub(subId) {
  return await axios.delete(`/api/subs/delete/${subId}`);
}
