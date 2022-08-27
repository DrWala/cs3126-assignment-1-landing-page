<template>
  <div id="cta" class="iot-cta-area bg--primary">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="cta-iot-img">
            <img src="../../../assets/img/iot-features-image/1.png" alt="image" />
          </div>
        </div>

        <div class="col-lg-6">
          <div class="cta-iot-content">
            <h3>Start using Seatigo today</h3>
            <p>Register now for an early preview within the uNivUS application.</p>
            <div class="banner-form ml-3">
              <form>
                <div class="form-group">
                  <label>NUSNET Id</label>
                  <input :disabled="disabled" type="text" class="form-control" placeholder="Enter NUSNET Id" />
                </div>
              </form>
              <button :class="{ 'btn-success': disabled, 'btn-primary': !disabled }" class="btn" @click="register">
                {{ registerNow }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="circle-box"><img src="../../../assets/img/circle.png" alt="image" /></div>
    <div class="cta-shape"><img src="../../../assets/img/cta-shape.png" alt="image" /></div>
  </div>
</template>

<script>
export default {
  name: "Cta",
  data() {
    return {
      registerNow: "Register Now",
      disabled: false,
    };
  },
  methods: {
    register() {
      this.$toast.success("Successfully registered!", {
        position: "bottom-right",
        duration: 5000,
      });
      this.registerNow = "Successfully registered!";
      this.disabled = true;
    },
  },
};
</script>
