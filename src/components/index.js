const _mue = {};
!!window && (window.mue = _mue);
// import Style from '../styles/index.vue';
import mueMHeader from 'src/components/m-header/index.vue';

_mue['mueMHeader'] = mueMHeader;

if (!!window) {
  for (let i in _mue) {
    window[i] = _mue[i];
  }
}
