let testing = require('testing');
let gate = require('../index');



function testOr(callback)
{
    const f = "OR_FAIL"
    testing.assertEquals(gate.or(0, 0),  false, f);
    testing.assertEquals(gate.or(1, 1), true), f;
    testing.assertEquals(gate.or(1, 0), true, f);
    testing.assertEquals(gate.or(0, 1), true, f);
    testing.success(callback);
}

function testNor(callback)
{
    const f = "NOR_FAIL"
    testing.assertEquals(gate.nor(0, 0),  true, f);
    testing.assertEquals(gate.nor(1, 1), false), f;
    testing.assertEquals(gate.nor(1, 0), false, f);
    testing.assertEquals(gate.nor(0, 1), false, f);
    testing.success(callback);
}


function testAnd(callback)
{
    const f = "AND_FAIL"
    testing.assertEquals(gate.and(0, 0), false, f);
    testing.assertEquals(gate.and(0, 1), false, f);
    testing.assertEquals(gate.and(1, 0), false, f);
    testing.assertEquals(gate.and(1, 1), true, f);
    testing.success(callback);
}

function testNand(callback)
{
    const f = "NAND_FAIL"
    testing.assertEquals(gate.nand(0, 0), true, f);
    testing.assertEquals(gate.nand(0, 1), true, f);
    testing.assertEquals(gate.nand(1, 0), true, f);
    testing.assertEquals(gate.nand(1, 1), false, f);
    testing.success(callback);
}


function testNot(callback)
{
    const f = "NOT_FAIL"
    testing.assertEquals(gate.not(0), true, f);
    testing.assertEquals(gate.not(1), false, f);
    testing.success(callback);
}

function testXOR(callback)
{
    const f = "XOR_FAIL"
    testing.assertEquals(gate.xor(0, 0), false, f);
    testing.assertEquals(gate.xor(0, 1), true, f);
    testing.assertEquals(gate.xor(1, 0), true, f);
    testing.assertEquals(gate.xor(1, 1), false, f);
    testing.success(callback);
}

function testXNOR(callback)
{
    const f = "XNOR_FAIL"
    testing.assertEquals(gate.xnor(0, 0), true, f);
    testing.assertEquals(gate.xnor(0, 1), false, f);
    testing.assertEquals(gate.xnor(1, 0), false, f);
    testing.assertEquals(gate.xnor(1, 1), true, f);
    testing.success(callback);
}

testing.run([
    testOr,
    testNor,
    testAnd,
    testNand,
    testNot,
    testXOR,
    testXNOR
], () => {
    console.log('done testing....')
});
