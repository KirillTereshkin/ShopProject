<template>
  <div class="site-section">
    <div class="container">
      <AdminNavbar />
      <div v-if="questions">
        <Question
          v-for="question in Object.entries(questions)"
          :key="question[0]"
          :quest="question[1]"
        />
      </div>
      <Loader v-else />
    </div>
  </div>
</template>
<script>
import Loader from "@/components/Loader";
import Question from "@/components/Questions/Question";
import AdminNavbar from "@/components/AdminNavbar";

export default {
  name: "questions",
  data: () => ({
    questions: null,
  }),
  components: { Loader, Question, AdminNavbar },
  async mounted() {
    this.questions = await this.$store.dispatch("fetchQuestions");
  },
};
</script>