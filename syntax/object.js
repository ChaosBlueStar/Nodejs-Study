var members = ['hong','semi','derstern'];
console.log(members[1]); //semi
var i = 0;
while(i < members.length){
    console.log('array loop',members[i]);
    i = i + 1;
}
var roles = {'programmer':'hong',
             'designer':'semi',
             'manager':'derstern'}
             
console.log(roles.designer); //semi

for(var name in roles){
    console.log('object =>', name, 'value =>', roles[name]);
}