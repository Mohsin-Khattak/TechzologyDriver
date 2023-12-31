export const IP = 'https://multiecom.prismatic-technologies.com';
export const URLS = {
  base_url: `${IP}/api/`,
  image_url: `${IP}/`,
  auth: {
    signup: 'v2/auth/signup',
    get_notification: 'user/getNotification',
    login: 'v2/auth/login',
    get_user_info: 'user/userInfo',
    update_password: 'user/updatePassword',
    change_password: 'v2/auth/password/confirm_reset',
    otp_verify: 'v2/auth/confirm_code',
    resend_otp_verify: 'v2/auth/resend_code',
    forget_password: 'v2/auth/password/forget_request',
    resend_password_code: 'v2/auth/password/resend_code',
    update_profile: 'v2/profile/update',
    locations: 'locations',
    logout: 'v2/auth/logout',
    update_image: 'v2/profile/image-upload',
    user_active: 'v2/delivery-boy/activeStatus',
  },

  address: {
    get_address: 'v2/user/shipping/address/',
    add_address: 'v2/user/shipping/create',
    delete_address: 'v2/user/shipping/delete/',
    get_cities: 'v2/cities',
  },
  dashboard: {
    get_dashboard: 'v2/delivery-boy/dashboard-summary/',
    get_collection: 'v2/delivery-boy/collection-summary/',
    get_collection_history: 'v2/delivery-boy/collection/',
    get_earning: 'v2/delivery-boy/earning-summary/',
    get_completed_delivery: 'v2/delivery-boy/deliveries/completed/',
    get_completed_delivery_history: 'v2/delivery-boy/purchase-history-details/',
    get_pending_delivery: 'v2/delivery-boy/deliveries/assigned/',
    get_confirm_delivery: 'v2/delivery-boy/deliveries/confirmed/',
    get_amount_delivery: 'v2/delivery-boy/purchase-history-items/',
    get_on_the_way: 'v2/delivery-boy/deliveries/on_the_way/',
    get_picked_up: 'v2/delivery-boy/deliveries/picked_up/',
    change_status: 'v2/delivery-boy/change-delivery-status',
    get_cancle_delivery: 'v2/delivery-boy/deliveries/cancelled/',
  },
  direction: {
    get_direction: 'v2/delivery-boy/get-direction/',
  },
};
