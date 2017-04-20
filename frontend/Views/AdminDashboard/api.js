import axios from 'axios';

export const getAdminDashboardInfoAPI = () => {
  return (axios.get('/api/admin/admin_dashboard_info'));
};
