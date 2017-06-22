import LoadingComponent from '../../components/loading/index.vue';

let $vm;
let watcher;

const plugin = {
  install (vue, options) {
    const Loading = vue.extend(LoadingComponent);

    if (!$vm) {
      $vm = new Loading({
        el: document.createElement('div')
      });
      document.body.appendChild($vm.$el);
    }

    const loading = {
      show (options) {
        // destroy watcher
        watcher && watcher();
        if (typeof options === 'string') {
          $vm.text = options;
        } else if (typeof options === 'object') {
          for (let i in options) {
            $vm[i] = options[i];
          }
        }
        if (typeof options === 'object' && options.onShow || options.onHide) {
          watcher = $vm.$watch('show', (val) => {
            val && options.onShow && options.onShow($vm);
            val === false && options.onHide && options.onHide($vm);
          });
        }
        $vm.show = true;
      },
      hide () {
        $vm.show = false;
      }
    };

    // all mue's plugins are included in this.$m
    if (!vue.$mue) {
      vue.$mue = {
        loading
      };
    } else {
      vue.$mue.loading = loading;
    }

    vue.mixin({
      created: function () {
        this.$mue = vue.$mue;
      }
    });
  }
};

export default plugin;
export const install = plugin.install;