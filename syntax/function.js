f123();

function f123(){ //호이스팅을 통해 함수를 올려서 하단에 함수를 설정해도 상단에서 실행 됨
    console.log(1);
    console.log(2);
    console.log(3);
}

f123(); 