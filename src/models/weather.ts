import { Effect, Reducer } from 'umi';
import * as services from '@/services';
import { message } from 'antd';
const namespace = 'weather';
interface weather {
  state: any;
  namespace: 'weather';
  effects: {
    getAddress: Effect;
  };
  reducers: {
    save: Reducer;
  };
}
const weather: weather = {
  // models命名空间，需全局唯一
  namespace,
  // models存储的数据store
  state: {},
  effects: {
    *getAddress({ payload, callback }, { call, put, select }) {
      const res = yield call(services.getAddress, payload);
      if (res && res.status === '1') {
        // console.log(res);
        if (callback) callback(res);
      } else {
        message.error(`发生错误，${res.info}<${res.infocode}>`);
      }
      // const dataList = yield select((state) => state.weather.dataList);
      // console.log(dataList, 'datalist')

      // yield put({
      //   type: 'save',
      //   payload: { name: '慧慧' },
      // });
    },
  },
  // 更新store，用新数据合并state的旧数据
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default weather;
