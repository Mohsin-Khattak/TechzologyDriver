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
    update_profile: 'user/updateProfile',
    locations: 'locations',
    logout: 'v2/auth/logout',
  },
  app: {
    get_banners: 'v2/sliders',
    get_featured_categories: 'v2/categories/featured',
    get_all_featured_products: 'v2/products/featured',
    get_all_products: 'v2/products',
    get_product_details: 'v2/products/',
  },
  address: {
    get_address: 'v2/user/shipping/address/',
    add_address: 'v2/user/shipping/create',
    delete_address: 'v2/user/shipping/delete/',
    get_cities: 'v2/cities',
  },
  categories: {
    get_all_categories: 'v2/categories?parent_id=0',
    get_all_categories_featured: 'v2/categories/featured',
    get_all_products_of_category_paginated: 'v2/products/category/',
  },
};
