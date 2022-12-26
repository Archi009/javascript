/* main.js */
import * as md from "./module.js"; //현js에서 외부 js를 참조하기위해 수입 하는 느낌 *as 를 참조변수 지정 전에 해주면 한꺼번에 사용가능하다
md.module("test1");
md.area(10, 10);
// import { area } from "./module.js"; //현js에서 외부 js를 참조하기위해 수입 하는 느낌//중괄호를 씌어서 원하는 함수만 불러서 사용가능하다

// area(10, 10);

import sq, { circle } from "./moduleone.js";
sq();
circle();
