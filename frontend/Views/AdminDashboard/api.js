import axios from 'axios';

export const getAdminDashboardInfoAPI = () => {
  return (axios.get('/api/admin/admin_dashboard_info'));
};

export const createForumAPI = (forum_obj) => {
  return (axios.post('/api/admin/create_forum', forum_obj));
};

export const deleteForumAPI = (forum_id) => {
  return (axios.post('/api/admin/delete_forum', { forum_id }));
};
