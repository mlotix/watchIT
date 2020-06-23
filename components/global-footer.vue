<template>
  <div class="footer-wrapper bg-blue-featured mt-12 p-6 lg:p-16 lg:pb-12 text-md">
    <div class="flex flex-row items-start justify-between">
      <div class="flex items-start justify-around flex-col lg:flex-row w-full lg:max-w-3xl">
        <div class="mb-4" v-for="(foot, index) in footMenu"  :key="index">
          <h4 class="font-semibold">{{ foot.title }}</h4>
          <ul class="my-1">
            <li class="mb-1" v-for="child in foot.childs"  :key="child">
              {{ child.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col justify-end items-end">
        <img src="~/assets/images/stripe-logo.png" alt="stripe" class="h-8 md:h-10 m-3">
        <img src="~/assets/images/DHL_Logo.png" alt="DHL" class="h-8 md:h-10 m-3">
      </div>
    </div>
    <div class="copyright mx-6 mt-8 font-light text-opacity-50">
      <p>© 2020 | Created by <a href="https://michalmlotowski.com" class="hover:underline">Michal Mlotowski</a> as a demo website. <a href="https://michalmlotowski.com" class="hover:underline">To get a website like this go here.</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footMenu: [
        {
          title: 'Information',
          childs: [
            {
              name: 'About us',
              link: null
            },
            {
              name: 'Payments',
              link: null
            },
            {
              name: 'Shipping',
              link: null
            },
            {
              name: 'Contact',
              link: null
            }
          ]
        },
        {
          title: 'Help',
          childs: [
            {
              name: 'FAQ',
              link: null
            },
            {
              name: 'Help center',
              link: null
            },
            {
              name: 'Order status',
              link: null
            },
            {
              name: 'Returns',
              link: null
            }
          ]
        },
        {
          title: 'Rules',
          childs: [
            {
              name: 'Terms of Use',
              link: null
            },
            {
              name: 'Cookies Policy',
              link: null
            },
            {
              name: 'Privacy Policy',
              link: null
            },
            {
              name: 'Return Policy',
              link: null
            }
          ]
        },
        {
          title: 'More',
          childs: [
            {
              name: 'Lorum ipsum',
              link: null
            },
            {
              name: 'Lorum ipsum',
              link: null
            },
            {
              name: 'Lorum ipsum',
              link: null
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="css" scoped >
  h4 {
    font-size: 22px;
  }
  li {
    font-size: 15px;
  }
</style>
