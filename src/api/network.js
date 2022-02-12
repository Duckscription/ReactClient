import axios from 'axios';

export async function getAllSubs() {
  return await axios.get('/api/subs');
}

export async function postNewSub(data) {
  return await axios.post('/api/subs/add', data);
}

export async function updateSubById(subId, formContent) {
  return await axios.put(`/api/subs/update/${subId}`, { data: formContent });
}
export async function deleteSubById(subId) {
  return await axios.delete(`/api/entry/delete/${subId}`);
}
