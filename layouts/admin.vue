<template>
  <div>
    <nav
      class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
    >
      <nuxt-link
        to="/"
        class="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
        tag="a"
      >
        <img src="~/assets/images/logo.png" class="mw-100"
      /></nuxt-link>
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <span class="nav-link" @click="logOut">Đăng xuất</span>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav
          id="sidebarMenu"
          class="mt-5 col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <sidebar-dashboard />
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <nuxt />
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarDashboard from '@/components/Dashboard/SidebarDashboard'

export default {
  name: 'Admin',
  components: {
    SidebarDashboard,
  },
  middleware: ['auth'],
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/css/bootstrap.min.css',
        },
      ],
      script: [
        {
          type: 'text/javascript',
          src: '/js/jquery-2.0.0.min.js',
        },
        {
          type: 'text/javascript',
          src: '/js/bootstrap.bundle.min.js',
        },
      ],
    }
  },
  methods: {
    logOut() {
      this.$auth.logout()
    },
  },
}
</script>
<style lang="css">
body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .navbar-toggler {
  top: 0.25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff !important;
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}
</style>
