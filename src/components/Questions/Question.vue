<template>
  <div class="question">
    <div class="question__personal-info">
      <h4 class="text-black">
        Имя: <span class="text-primary">{{ quest.name }}</span>
      </h4>
      <h4 class="text-black">
        Фамилия: <span class="text-primary">{{ quest.surname }}</span>
      </h4>
    </div>
    <div class="question__personal-info">
      <h4 class="text-black">
        Email: <span class="text-primary">{{ quest.email }}</span>
      </h4>
    </div>
    <div class="question__personal-info" v-if="quest.theme">
      <h4 class="text-black">
        Тема: <span class="text-primary">{{ quest.theme }}</span>
      </h4>
    </div>
    <div class="question__personal-info" v-if="quest.message">
      <h4 class="text-black">
        Вопрос: <span class="text-primary">{{ quest.message }}</span>
      </h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "question",
  props: {
    quest: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.question {
  margin: 20px 0;
  padding: 10px;
  border: 3px solid #9e9e9e;
  border-radius: 15px;

  &__personal-info {
    margin: 15px 0;
    display: flex;

    h4:first-child {
      margin-right: 20px;
    }
  }
}
</style>