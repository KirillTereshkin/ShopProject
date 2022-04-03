<template>
  <div class="site-section">
    <div class="container">
      <AdminNavbar />

      <div class="subscribers" v-if="subscribers">
        <ul>
          <li v-for="sub in Object.entries(subscribers)" :key="sub[0]">
            <h2>{{ sub[1] }}</h2>
          </li>
        </ul>
      </div>
      <Loader v-else />
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/components/AdminNavbar";
import Loader from "@/components/Loader";

export default {
  name: "subscribers",
  data: () => ({
    subscribers: null,
  }),
  components: { AdminNavbar, Loader },
  async mounted() {
    this.subscribers = await this.$store.dispatch("fetchSubscribers");
  },
};
</script>
<style lang="scss" scoped>
.subscribers{
    margin-top: 20px;
    ul{padding: 15px !important;}
}
</style>