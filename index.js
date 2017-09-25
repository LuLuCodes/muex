/**
 * Created by qianqing on 2017/6/22.
 */

import Actionsheet from './src/components/actionsheet/index.vue';
import AjaxPlugin from './src/plugins/ajax/index.js';
import Alert from './src/components/alert/index.vue';
import AlertPlugin from './src/plugins/alert/index.js';
import Array2stringFilter from './src/filters/array2String.js';
import Badge from './src/components/badge/index.vue';
import base64 from './src/tools/base64/index.js';
import ButtonTab from './src/components/button-tab/button-tab.vue';
import ButtonTabItem from './src/components/button-tab/button-tab-item.vue';
import Cell from './src/components/cell/index.vue';
import CellBox from './src/components/cell-box/index.vue';
import CellFormPreview from './src/components/cell-form-preview/index.vue';
import Checker from './src/components/checker/checker.vue';
import CheckerItem from './src/components/checker/checker-item.vue';
import CheckList from './src/components/checklist/index.vue';
import ChinaAddressData from './src/datas/china_address.json';
import ChinaAddressV1Data from './src/datas/china_address_v1.json';
import ClickOutsideDirective from './src/directives/click-outside/index.js';
import Confirm from './src/components/confirm/index.vue';
import ConfirmPlugin from './src/plugins/confirm/index.js';
import cookie from './src/tools/cookie/index.js';
import dateFormat from './src/tools/date/format.js';
import dateRange from './src/tools/date/range.js';
import Datetime from './src/components/datetime/index.vue';
import debounce from './src/tools/debounce/index.js';
import DevicePlugin from './src/plugins/device/index.js';
import Divider from './src/components/divider/index.vue';
import Flexbox from './src/components/flexbox/flexbox.vue';
import FlexboxItem from './src/components/flexbox/flexbox-item.vue';
import FormatTimeFilter from './src/filters/format-time.js';
import FormPreview from './src/components/form-preview/index.vue';
import FriendlyTimeFilter from './src/filters/friendly-time.js';
import Group from './src/components/group/index.vue';
import GroupTitle from './src/components/group-title/index.vue';
import Icon from './src/components/icon/index.vue';
import InlineCalendar from './src/components/inline-calendar/index.vue'
import InlineDesc from './src/components/inline-desc/index.vue';
import InviewDirective from './src/directives/inview/index.js';
import Loading from './src/components/loading/index.vue';
import LoadingPlugin from './src/plugins/loading/index.js';
import LoadMore from './src/components/load-more/index.vue';
import LocalePlugin from './src/plugins/locale/index.js';
import md5 from './src/tools/md5/index.js';
import Msg from './src/components/msg/index.vue';
import Name2valueFilter from './src/filters/name2value.js';
import numberComma from './src/tools/number/comma.js';
import numberPad from './src/tools/number/pad.js';
import numberRandom from './src/tools/number/random.js';
import numberRange from './src/tools/number/range.js';
import Panel from './src/components/panel/index.vue';
import Picker from './src/components/picker/index.vue';
import Popup from './src/components/popup/index.vue';
import PopupPicker from './src/components/popup-picker/index.vue';
import querystring from './src/tools/querystring/index.js';
import Radio from './src/components/radio/index.vue';
import Rater from './src/components/rater/index.vue';
import Scroller from './src/components/scroller/index.vue';
import Search from './src/components/search/index.vue';
import Spinner from './src/components/spinner/index.vue';
import Step from './src/components/step/step.vue';
import StepItem from './src/components/step/step-item.vue';
import Sticky from './src/components/sticky/index.vue';
import stringTrim from './src/tools/string/trim.js';
import Swiper from './src/components/swiper/swiper.vue';
import SwiperItem from './src/components/swiper/swiper-item.vue';
import Tab from './src/components/tab/tab.vue';
import Tabbar from './src/components/tabbar/tabbar.vue';
import TabbarItem from './src/components/tabbar/tabbar-item.vue';
import TabItem from './src/components/tab/tab-item.vue';
import throttle from './src/tools/throttle/index.js';
import Timeline from './src/components/timeline/timeline.vue';
import TimelineItem from './src/components/timeline/timeline-item.vue';
import Tip from './src/components/tip/index.vue';
import Toast from './src/components/toast/index.vue';
import ToastPlugin from './src/plugins/toast/index.js';
import TransferDom from './src/directives/transfer-dom/index.js';
import trim from './src/tools/string/trim';
import Value2nameFilter from './src/filters/value2name.js';
import ViewBox from './src/components/view-box/index.vue';
import WechatPlugin from './src/plugins/wechat/index.js';

import MAddress from './src/components/m-address/index.vue';
import MButton from './src/components/m-button/index.vue';
import MDialog from './src/components/m-dialog/index.vue';
import MHeader from './src/components/m-header/index.vue';
import MInput from './src/components/m-input/index.vue';
import MNumber from './src/components/m-number/index.vue';
import MTextarea from './src/components/m-textarea/index.vue';
import MSwitch from './src/components/m-switch/index.vue';

export {
  Actionsheet,
  AjaxPlugin,
  Alert,
  AlertPlugin,
  Array2stringFilter,
  Badge,
  base64,
  ButtonTab,
  ButtonTabItem,
  Cell,
  CellBox,
  CellFormPreview,
  Checker,
  CheckerItem,
  CheckList,
  ChinaAddressData,
  ChinaAddressV1Data,
  ClickOutsideDirective,
  Confirm,
  ConfirmPlugin,
  cookie,
  dateFormat,
  dateRange,
  Datetime,
  debounce,
  DevicePlugin,
  Divider,
  Flexbox,
  FlexboxItem,
  FormatTimeFilter,
  FormPreview,
  FriendlyTimeFilter,
  Group,
  GroupTitle,
  Icon,
  InlineCalendar,
  InlineDesc,
  InviewDirective,
  Loading,
  LoadingPlugin,
  LoadMore,
  LocalePlugin,
  md5,
  Msg,
  Name2valueFilter,
  numberComma,
  numberPad,
  numberRandom,
  numberRange,
  Panel,
  Picker,
  Popup,
  PopupPicker,
  querystring,
  Radio,
  Rater,
  Scroller,
  Search,
  Spinner,
  Step,
  StepItem,
  Sticky,
  stringTrim,
  Swiper,
  SwiperItem,
  Tab,
  Tabbar,
  TabbarItem,
  TabItem,
  throttle,
  Timeline,
  TimelineItem,
  Tip,
  Toast,
  ToastPlugin,
  TransferDom,
  trim,
  Value2nameFilter,
  ViewBox,
  WechatPlugin,
  MAddress,
  MButton,
  MDialog,
  MHeader,
  MInput,
  MNumber,
  MTextarea,
  MSwitch
};