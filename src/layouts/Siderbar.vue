<template>
  <aside class="w-64 bg-[#0D23A5] text-white p-6">
    <div class="mb-8">
      <h2 class="text-2xl font-bold">SafeChild EduNest</h2>
      <p class="text-sm">Your partner in child care</p>
    </div>

    <nav>
      <ul>
        <li class="mb-4">
          <router-link to="/dashboard" class="hover:text-gray-300">Dashboard</router-link>
        </li>
        <li class="mb-4">
          <router-link to="/profile" class="hover:text-gray-300">Profile</router-link>
        </li>
        <li class="mb-4">
          <router-link to="/services" class="hover:text-gray-300">Services</router-link>
        </li>
        <li class="mb-4">
          <router-link to="/messages" class="hover:text-gray-300">Messages</router-link>
        </li>
        <li class="mb-4">
          <router-link to="/settings" class="hover:text-gray-300">Settings</router-link>
        </li>
      </ul>
    </nav>

    <div class="mt-8">
      <h3 class="text-lg font-semibold">User Profile</h3>
      <p>Name: John Doe</p>
      <p>Email: johndoe@example.com</p>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
aside {
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li a {
  text-decoration: none;
  color: white;
}
nav ul li a:hover {
  color: #ccc;
}
</style>

