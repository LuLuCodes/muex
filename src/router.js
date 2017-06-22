/**
 * Created by qianqing on 2017/3/2.
 */
const routers = [
  {
    path: '/',
    name: 'index',
    component (resolve) {
      require.ensure(['./App.vue'], () => {
        resolve(require('./App.vue'));
      });
    },
    children: [
      {
        path: '',
        redirect: '/demo'
      },
      {
        path: 'demo',
        name: 'demo',
        component (resolve) {
          require.ensure(['./views/Demo.vue'], () => {
            resolve(require('./views/Demo.vue'));
          });
        }
      },
      {
        path: 'MButton',
        name: 'MButton',
        component (resolve) {
          require.ensure(['./views/MButton.vue'], () => {
            resolve(require('./views/MButton.vue'));
          });
        }
      },
      {
        path: 'MFlexBox',
        name: 'MFlexBox',
        component (resolve) {
          require.ensure(['./views/MFlexBox.vue'], () => {
            resolve(require('./views/MFlexBox.vue'));
          });
        }
      },
      {
        path: 'MHeader',
        name: 'MHeader',
        component (resolve) {
          require.ensure(['./views/MHeader.vue'], () => {
            resolve(require('./views/MHeader.vue'));
          });
        }
      },
      {
        path: 'MTimeLine',
        name: 'MTimeLine',
        component (resolve) {
          require.ensure(['./views/MTimeLine.vue'], () => {
            resolve(require('./views/MTimeLine.vue'));
          });
        }
      },
      {
        path: 'MStep',
        name: 'MStep',
        component (resolve) {
          require.ensure(['./views/MStep.vue'], () => {
            resolve(require('./views/MStep.vue'));
          });
        }
      },
      {
        path: 'MTabBar',
        name: 'MTabBar',
        component (resolve) {
          require.ensure(['./views/MTabBar.vue'], () => {
            resolve(require('./views/MTabBar.vue'));
          });
        }
      },
      {
        path: 'MSearch',
        name: 'MSearch',
        component (resolve) {
          require.ensure(['./views/MSearch.vue'], () => {
            resolve(require('./views/MSearch.vue'));
          });
        }
      },
      {
        path: 'MTab',
        name: 'MTab',
        component (resolve) {
          require.ensure(['./views/MTab.vue'], () => {
            resolve(require('./views/MTab.vue'));
          });
        }
      },
      {
        path: 'MCellBox',
        name: 'MCellBox',
        component (resolve) {
          require.ensure(['./views/MCellBox.vue'], () => {
            resolve(require('./views/MCellBox.vue'));
          });
        }
      },
      {
        path: 'MCell',
        name: 'MCell',
        component (resolve) {
          require.ensure(['./views/MCell.vue'], () => {
            resolve(require('./views/MCell.vue'));
          });
        }
      },
      {
        path: 'MDateTime',
        name: 'MDateTime',
        component (resolve) {
          require.ensure(['./views/MDateTime.vue'], () => {
            resolve(require('./views/MDateTime.vue'));
          });
        }
      },
      {
        path: 'MButtonTab',
        name: 'MButtonTab',
        component (resolve) {
          require.ensure(['./views/MButtonTab.vue'], () => {
            resolve(require('./views/MButtonTab.vue'));
          });
        }
      },
      {
        path: 'MPanel',
        name: 'MPanel',
        component (resolve) {
          require.ensure(['./views/MPanel.vue'], () => {
            resolve(require('./views/MPanel.vue'));
          });
        }
      },
      {
        path: 'MPopUpPicker',
        name: 'MPopUpPicker',
        component (resolve) {
          require.ensure(['./views/MPopUpPicker.vue'], () => {
            resolve(require('./views/MPopUpPicker.vue'));
          });
        }
      },
      {
        path: 'MPopUp',
        name: 'MPopUp',
        component (resolve) {
          require.ensure(['./views/MPopUp.vue'], () => {
            resolve(require('./views/MPopUp.vue'));
          });
        }
      },
      {
        path: 'MInput',
        name: 'MInput',
        component (resolve) {
          require.ensure(['./views/MInput.vue'], () => {
            resolve(require('./views/MInput.vue'));
          });
        }
      },
      {
        path: 'MRadio',
        name: 'MRadio',
        component (resolve) {
          require.ensure(['./views/MRadio.vue'], () => {
            resolve(require('./views/MRadio.vue'));
          });
        }
      },
      {
        path: 'MChecklist',
        name: 'MChecklist',
        component (resolve) {
          require.ensure(['./views/MChecklist.vue'], () => {
            resolve(require('./views/MChecklist.vue'));
          });
        }
      },
      {
        path: 'MChecker',
        name: 'MChecker',
        component (resolve) {
          require.ensure(['./views/MChecker.vue'], () => {
            resolve(require('./views/MChecker.vue'));
          });
        }
      },
      {
        path: 'MNumber',
        name: 'MNumber',
        component (resolve) {
          require.ensure(['./views/MNumber.vue'], () => {
            resolve(require('./views/MNumber.vue'));
          });
        }
      },
      {
        path: 'MRater',
        name: 'MRater',
        component (resolve) {
          require.ensure(['./views/MRater.vue'], () => {
            resolve(require('./views/MRater.vue'));
          });
        }
      },
      {
        path: 'MMsg',
        name: 'MMsg',
        component (resolve) {
          require.ensure(['./views/MMsg.vue'], () => {
            resolve(require('./views/MMsg.vue'));
          });
        }
      },
      {
        path: 'MTextarea',
        name: 'MTextarea',
        component (resolve) {
          require.ensure(['./views/MTextarea.vue'], () => {
            resolve(require('./views/MTextarea.vue'));
          });
        }
      },
      {
        path: 'MAddress',
        name: 'MAddress',
        component (resolve) {
          require.ensure(['./views/MAddress.vue'], () => {
            resolve(require('./views/MAddress.vue'));
          });
        }
      },
      {
        path: 'MAlert',
        name: 'MAlert',
        component (resolve) {
          require.ensure(['./views/MAlert.vue'], () => {
            resolve(require('./views/MAlert.vue'));
          });
        }
      },
      {
        path: 'MConfirm',
        name: 'MConfirm',
        component (resolve) {
          require.ensure(['./views/MConfirm.vue'], () => {
            resolve(require('./views/MConfirm.vue'));
          });
        }
      },
      {
        path: 'MToast',
        name: 'MToast',
        component (resolve) {
          require.ensure(['./views/MToast.vue'], () => {
            resolve(require('./views/MToast.vue'));
          });
        }
      },
      {
        path: 'MActionsheet',
        name: 'MActionsheet',
        component (resolve) {
          require.ensure(['./views/MActionsheet.vue'], () => {
            resolve(require('./views/MActionsheet.vue'));
          });
        }
      },
      {
        path: 'MLoad',
        name: 'MLoad',
        component (resolve) {
          require.ensure(['./views/MLoad.vue'], () => {
            resolve(require('./views/MLoad.vue'));
          });
        }
      },
      {
        path: 'MScroller',
        name: 'MScroller',
        component (resolve) {
          require.ensure(['./views/MScroller.vue'], () => {
            resolve(require('./views/MScroller.vue'));
          });
        }
      },
      {
        path: 'Pullup',
        name: 'Pullup',
        component (resolve) {
          require.ensure(['./views/Pullup.vue'], () => {
            resolve(require('./views/Pullup.vue'));
          });
        }
      },
      {
        path: 'Pulldown',
        name: 'Pulldown',
        component (resolve) {
          require.ensure(['./views/Pulldown.vue'], () => {
            resolve(require('./views/Pulldown.vue'));
          });
        }
      },
      {
        path: 'PullUpDown',
        name: 'PullUpDown',
        component (resolve) {
          require.ensure(['./views/PullUpDown.vue'], () => {
            resolve(require('./views/PullUpDown.vue'));
          });
        }
      },
      {
        path: 'ViewBox',
        name: 'ViewBox',
        component (resolve) {
          require.ensure(['./views/ViewBox.vue'], () => {
            resolve(require('./views/ViewBox.vue'));
          });
        }
      },
      {
        path: 'CellFormPreview',
        name: 'CellFormPreview',
        component (resolve) {
          require.ensure(['./views/CellFormPreview.vue'], () => {
            resolve(require('./views/CellFormPreview.vue'));
          });
        }
      },
      {
        path: 'FormPreview',
        name: 'FormPreview',
        component (resolve) {
          require.ensure(['./views/FormPreview.vue'], () => {
            resolve(require('./views/FormPreview.vue'));
          });
        }
      },
      {
        path: 'login',
        name: 'login',
        component (resolve) {
          require.ensure(['./views/login.vue'], () => {
            resolve(require('./views/login.vue'));
          });
        }
      },
      {
        path: 'resetPassword',
        name: 'resetPassword',
        component (resolve) {
          require.ensure(['./views/reset-password.vue'], () => {
            resolve(require('./views/reset-password.vue'));
          });
        }
      },
      {
        path: 'goodsListA',
        name: 'goodsListA',
        component (resolve) {
          require.ensure(['./views/goods-list-a.vue'], () => {
            resolve(require('./views/goods-list-a.vue'));
          });
        }
      },
      {
        path: 'goodsListB',
        name: 'goodsListB',
        component (resolve) {
          require.ensure(['./views/goods-list-b.vue'], () => {
            resolve(require('./views/goods-list-b.vue'));
          });
        }
      },
      {
        path: 'goodsListC',
        name: 'goodsListC',
        component (resolve) {
          require.ensure(['./views/goods-list-c.vue'], () => {
            resolve(require('./views/goods-list-c.vue'));
          });
        }
      },
      {
        path: 'cartA',
        name: 'cartA',
        component (resolve) {
          require.ensure(['./views/cart-a.vue'], () => {
            resolve(require('./views/cart-a.vue'));
          });
        }
      },
      {
        path: 'cartB',
        name: 'cartB',
        component (resolve) {
          require.ensure(['./views/cart-b.vue'], () => {
            resolve(require('./views/cart-b.vue'));
          });
        }
      },
      {
        path: 'bookList',
        name: 'bookList',
        component (resolve) {
          require.ensure(['./views/book-list.vue'], () => {
            resolve(require('./views/book-list.vue'));
          });
        }
      },
      {
        path: 'addressList',
        name: 'addressList',
        component (resolve) {
          require.ensure(['./views/address-list.vue'], () => {
            resolve(require('./views/address-list.vue'));
          });
        }
      },
      {
        path: 'badge',
        name: 'badge',
        component (resolve) {
          require.ensure(['./views/badge.vue'], () => {
            resolve(require('./views/badge.vue'));
          });
        }
      }
    ]
  }
];

export default routers;
