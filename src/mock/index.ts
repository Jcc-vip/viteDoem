// 首先导入Mock
import Mock from "mockjs";

// 然后定义伪数据
Mock.mock(
  " lapi/feed",
  Mock.mock({
    "data|20": [{ age: 18 }],
  })
);
