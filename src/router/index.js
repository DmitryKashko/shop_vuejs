import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/main/Index.vue')
    },
    {
      path: '/products',
      name: 'products.index',
      component: () => import('../views/product/Index.vue')
    },
    {
      path: '/products/:id',
      name: 'products.show',
      component: () => import('../views/product/Show.vue')
    },
    {
      path: '/cart',
      name: 'cart.index',
      component: () => import('../views/cart/Index.vue')
    },
    {
      path: '/user/login',
      name: 'user.login',
      component: () => import('../views/auth/Login.vue')
    },
    {
      path: '/user/registration',
      name: 'user.registration',
      component: () => import('../views/auth/Registration.vue')
    },
    {
      path: '/user/account',
      name: 'user.account',
      component: () => import('../views/auth/Account.vue')
    },
    {
      path: '/user/personal',
      name: 'user.personal',
      component: () => import('../views/auth/Personal.vue')
    },

    {
      path: '/*',
      name: '404',
      component: () => import('../views/auth/Personal.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {

  const accessToken = localStorage.getItem('access_token')

  if(!accessToken) {
    if (to.name === 'user.login' || to.name === 'user.registration') {
      return next()
    } else {
      return next({
        name: 'user.login'
      })
    }
  }

  /*if (to.name !== 'user.login' || to.name !== 'user.registration') {
    if (!accessToken) {
      return next({
        name: 'user.login'
      })
    }
  }*/
  if(to.name === 'user.login' || to.name === 'user.registration' && accessToken) {
    return next({
      name: 'user.personal'
    })
  }

  next()
})

export default router
