<template>
  <div>
    <transition name="iv-fade">
        <div v-show="show">
          <div v-show="type === 'loading' && mask" class="iv-overlay"></div>
          <div :class="['iv-toast', type === 'text' ? ('iv-toast-' + type) : '']">
            <div>
              <span v-show="type === 'loading'" class="circularBox">
                <svg viewBox="25 25 50 50" class="circular">
                  <circle style="stroke:#fff;" cx="50" cy="50" r="20" fill="none" class="path"></circle>
                </svg>
              </span>
            </div>
            <span class="iv-toast__text">{{message}}</span>
          </div>
        </div>
      </transition>
  </div>
</template>
<script type="text/javascript">
  export default {
    data () {
      return {
        message: '',
        show: false,
        type: '',
        className: '',
        mask: true,
        closed: function () {}
      }
    },
  };
</script>