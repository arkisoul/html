function demoFun() {
  let param = 20;
  function funFun() {
    let fun = 40;
    console.log("funFun ", param, fun);
    function javaFun() {
      console.log("javaFun ", param, fun);
    }
    javaFun();
  }
  funFun();
  console.log("demoFun ", param, fun);
}
demoFun();
