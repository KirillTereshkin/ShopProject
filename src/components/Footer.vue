<template>
  <footer class="site-footer custom-border-top">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6 mb-4 mb-lg-0">
          <div class="block-7">
            <h3 class="footer-heading mb-4">О нас</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              quae reiciendis distinctio voluptates sed dolorum excepturi iure
              eaque, aut unde.
            </p>
          </div>
          <div class="block-7">
            <form action="#" method="post">
              <label for="email_subscribe" class="footer-heading"
                >Подписаться на новости</label
              >
              <div class="form-group">
                <input
                  type="text"
                  class="form-control py-4"
                  id="email_subscribe"
                  placeholder="Email"
                />
                <input
                  type="submit"
                  id="btn_subscribe"
                  class="btn btn-sm btn-primary"
                  value="Отправить"
                />
              </div>
            </form>
          </div>
        </div>
        
        <div class="col-md-6 col-lg-6">
          <div class="block-5 mb-5">
            <h3 class="footer-heading mb-4">Контактная информация</h3>
            <ul class="list-unstyled">
              <li class="address">
                ул. Гагарина, 2А., второй этаж, г. Малоярославец, Калужская обл., Россия, 249096
              </li>
              <li class="phone">
                <a href="tel://89105175964">+7 (910) 517 59 64</a>
              </li>
              <li class="email">visavismaloyaroslavets@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "SiteFooter",
};
</script>
<style scoped>
#btn_subscribe{
  width: 100px;
}
#email_subscribe{
  padding-right: 120px;
}
</style>