/*
BOOLEAN - logine reiksme
-true
-false

Loginiai operatoriai:
&&  AND (ir) prioritetas, kaip daugybos su sudetimi
||  OR (arba)

*/

const isEven = true;
const is0dd = false

console.log('&&----------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('||----------');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// jeigu &&
console.log(1, true && true || true);
console.log(2, true && true || false);
console.log(3, true && false ||true);
console.log(4, true && false || false);
console.log(5, false && true || true);
console.log(6, false && true || false);
console.log(7, false && false|| true);
console.log(8, false && false || false);



console.log(1, true || true && true);
console.log(2, true || true && false);
console.log(3, true || false && true);
console.log(4, true || false &&  false);
console.log(5, false || true &&  true);
console.log(6, false || true && false);
console.log(7, false || false && true);
console.log(8, false || false &&  false);

console.log('---------------------------------');

// ND: surasyti visas imanomas kombinacijas su && ir || kai yra naudojamos 4 boolean reiksmes.
// ND: kiek gavosim kombinaciju?

console.log(1, true && true && true && true);
console.log(2, true && true && true || true);
console.log(3, true && true || true || true);
console.log(4, true || true || true || true);
console.log(5, true || true || true && true);
console.log(6, true || true && true && true);
console.log(7, true && true || true && true);
console.log(8, true || true && true || true);

console.log(9, true && true && true && false);
console.log(10, true && true && true || false);
console.log(11, true && true || true || false);
console.log(12, true || true || true || false);
console.log(13, true || true || true && false);
console.log(14, true || true && true && false);
console.log(15, true && true || true && false);
console.log(16, true || true && true || false);

console.log(17, true && true && false && false);
console.log(18, true && true && false || false);
console.log(19, true && true || false || false);
console.log(20, true || true || false || false);
console.log(21, true || true || false && false);
console.log(22, true || true && false && false);
console.log(23, true && true || false && false);
console.log(24, true || true && false || false);

console.log(25, true && false && false && false);
console.log(26, true && false && false || false);
console.log(27, true && false || false || false);
console.log(28, true || false || false || false);
console.log(29, true || false || false && false);
console.log(30, true || false && false && false);
console.log(31, true && false || false && false);
console.log(32, true || false && false || false);

/*console.log(32, true && false && false && false);
console.log(33, true && false && false || false);
console.log(34, true && false || false || false);
console.log(35, true || false || false || false);
console.log(36, true || false && false && false);
console.log(37, true || false || false && false);
console.log(38, true && false || false && false);
console.log(39, true || false && false || false);
*/
console.log(33, false && false && false && false);
console.log(34, false && false && false || false);
console.log(35, false && false || false || false);
console.log(36, false || false || false || false);
console.log(37, false || false || false && false);
console.log(38, false || false && false && false);
console.log(39, false && false || false && false);
console.log(40, false || false && false || false);

console.log(41, false && false && false && true);
console.log(42, false && false && false || true);
console.log(43, false && false || false || true);
console.log(44, false || false || false || true);
console.log(45, false || false || false && true);
console.log(46, false || false && false && true);
console.log(47, false && false || false && true);
console.log(48, false || false && false || true);

console.log(49, false && false && true && true);
console.log(50, false && false && true || true);
console.log(51, false && false || true || true);
console.log(52, false || false || true || true);
console.log(53, false || false || true && true);
console.log(54, false || false && true && true);
console.log(55, false && false || true && true);
console.log(56, false || false && true || true);

console.log(57, false && true && true && true);
console.log(58, false && true && true || true);
console.log(59, false && true || true || true);
console.log(60, false || true || true || true);
console.log(61, false || true || true && true);
console.log(62, false || true && true && true);
console.log(63, false && true || true && true);
console.log(64, false || true && true || true);

console.log(65, false && true && true && false);
console.log(66, false && true && true || false);
console.log(67, false && true || true || false);
console.log(68, false || true || true || false);
console.log(69, false || true || true && false);
console.log(70, false || true && true && false);
console.log(71, false && true || true && false);
console.log(72, false || true && true || false);

console.log(73, false && false && true && false);
console.log(74, false && false && true || false);
console.log(75, false && false || true || false);
console.log(76, false || false || true || false);
console.log(77, false || false || true && false);
console.log(78, false || false && true && false);
console.log(79, false && false || true && false);
console.log(80, false || false && true || false);

console.log(81, false && true && false && false);
console.log(82, false && true && false || false);
console.log(83, false && true || false || false);
console.log(84, false || true || false || false);
console.log(85, false || true || false && false);
console.log(86, false || true && false && false);
console.log(87, false && true || false && false);
console.log(88, false || true && false || false);

console.log(89, false && true && false && true);
console.log(90, false && true && false || true);
console.log(91, false && true || false || true);
console.log(92, false || true || false || true);
console.log(93, false || true || false && true);
console.log(94, false || true && false && true);
console.log(95, false && true || false && true);
console.log(96, false || true && false || true);

console.log(97, true && false && true && false);
console.log(98, true && false && true || false);
console.log(99, true && false || true || false);
console.log(100, true || false || true || false);
console.log(101, true || false && true && false);
console.log(102, true || false || true && false);
console.log(103, true && false || true && false);
console.log(104, true || false && true || false);

console.log(105, true && true && false && true);
console.log(106, true && true && false || true);
console.log(107, true && true || false || true);
console.log(108, true || true || false || true);
console.log(109, true || true || false && true);
console.log(110, true || true && false && true);
console.log(111, true && true || false && true);
console.log(112, true || true && false || true);

console.log(113, true && false && true && true);
console.log(114, true && false && true || true); 
console.log(115, true && false || true || true); 
console.log(116, true || false || true || true); 
console.log(117, true || false || true && true); 
console.log(118, true || false && true && true); 
console.log(119, true && false || true && true); 
console.log(120, true || false && true || true); 

console.log(121, true && false && false && true); 
console.log(122, true && false && false || true); 
console.log(123, true && false || false || true); 
console.log(124, true || false || false || true); 
console.log(125, true || false || false && true); 
console.log(126, true || false && false && true); 
console.log(127, true && false || false && true); 
console.log(128, true || false && false || true); 



console.log('-------------------------------');

    
