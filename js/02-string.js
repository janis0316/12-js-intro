/*
STRING - tekstas
reiksmes konstravimas
- viengubos kabutes (')
- dvigubos kabutes (")
- bektikas/apostrofas(`)

SPECIALUSIS ATVEJIS:
- Jei tekste yra kabutes, jas norint padaryti ne komandiniu simboliu, o tekstiniu simboliu, galima ta kabute  "eskeipinti" -> \


*/

console.log('2' + '2');
console.log(2 + 2);
console.log(2 + '2');
console.log('2' + 2);

const firstName = 'Petras';
console.log(firstName);

const lastName = "Petraitis";
console.log(lastName);

const fullName = firstName + ' ' + lastName;
console.log(fullName);

const kabutes = 'Cia tures buti 2 kabutes.';
console.log(kabutes);

const kabutes2 = 'Dviguba kabutes (").';
console.log(kabutes2);

const kabutes1 = "Vienguba kabute (').";
console.log(kabutes1);

const kabutesSplit = "Vienguba (') ir dviguba" + ' (") kabutes.';
console.log(kabutesSplit);

const kabutes11 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(kabutes11);

const multiline = 'Labas\n\r\
rytas,\n\r\
Lietuva';
console.log(multiline);

const HTML = '<header\n\r\
    <img>\n\r\
    <nav>\n\r\
        <a></a>\n\r\
        <a></a>\n\r\
        <a></a>\n\r\
    </nav>\n\r\
</header>';
console.log(HTML);


const backtick = 'Kabute.';
console.log(backtick);

const backtick12 = `Vienguba (') ir dviguba (") kabutes.`;
console.log(backtick12);

const backtick123 = `Vienguba ('), dviguba (") ir backtick (\`) kabutes.`;
console.log(backtick123);

const HTML2 = `<header>
<img>
<nav>
    <a></a>
    <a></a>
    <a></a>
</nav>
</header>`;
console.log(HTML);

console.log('---------');

//Hi there, Chuck!
const username = 'Pomidoras';
const h1 = 'Hi there, ' + username + '!';
console.log(h1);

const h11 = `Hi there, ${username}!`;
console.log(h11);


const n1 = 7;
const n2 = 5;
const sum = n1 + n2;
const sumString = `${n1} + ${n2} = ${sum}`;
console.log(sumString);

const sumString2 = `${n1} + ${n2} = ${n1 + n2}`;
console.log(sumString2);

