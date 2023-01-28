/*var v1 = 'v1';
// 100000 code
v1 = 'hong';
var v2 = 'v2';
*/

var o = {
    v1:'v1',
    v2:'v2',
    f1:function (){
        console.log(this.v1);
    },
    f2:function (){
        console.log(this.v2);  //this는 상대적 주소라고 생각하면 됨
    }
}

o.f1();
o.f2();