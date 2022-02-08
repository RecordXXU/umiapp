import * as services from '@/services.ts';
const namespace = 'weather';
const weather = {
  // models命名空间，需全局唯一
  namespace,
  // models存储的数据store
  state: {
    dataList: 1,
  },
  effects: {
    *getAddress({ payload }, { call, put, select }) {
      console.log('12312');
      const res = yield call(services.getAddress, payload);
      // const dataList = yield select((state) => state.weather.dataList);
      // console.log(dataList, 'datalist')
      console.log(res);

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
