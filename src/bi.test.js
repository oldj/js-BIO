/**
 * bi.test.js
 * @author oldj
 * @blog http://oldj.net
 */

'use strict'

const bi = require('./bi')
const assert = require('chai').assert

describe('basic test', () => {

  it('cmp', () => {
    assert.equal(bi.cmp('10', '5'), 1)
    assert.equal(bi.cmp('10', '10'), 0)
    assert.equal(bi.cmp('10', '20'), -1)

    assert.equal(bi.cmp('10', '-20'), 1)
    assert.equal(bi.cmp('-10', '-20'), 1)
    assert.equal(bi.cmp('-10', '20'), -1)
    assert.equal(bi.cmp('-10', '-10'), 0)

    assert.equal(bi.cmp('42591326516327035908763051880173380381788815744668330115462360920489984', '226526480060336135717878995990786719145076498183027508100134326420542290980241408'), -1)
    assert.equal(bi.cmp('226526480060336135717878995990786719145076498183027508100134326420542290980241408', '42591326516327035908763051880173380381788815744668330115462360920489984'), 1)
    assert.equal(bi.cmp('226526480060336135717878995990786719145076498183027508100134326420542290980241408', '226526480060336135717878995990786719145076498183027508100134326420542290980241408'), 0)

    assert.isFalse(bi.gt('48425152590922886882708725543321024666767128745361555290932588675334144', '878782345793210627487837578726420599253522187037792587849123716553481934046494720'))
    assert.isTrue(bi.gte('805066830633321465545770742110813606388868347299541281627305174271283477845377024', '42399552963717860867161828799098011030080101663311245519220365301121024'))
    assert.isTrue(bi.lt('34323159524268280151781627516729713651395912191256806238094071789780992', '880472680885540873983702835847686690616785994122406205346718986092559362762473472'))
    assert.isTrue(bi.lte('34323159524268280151781627516729713651395912191256806238094071789780992', '34323159524268280151781627516729713651395912191256806238094071789780992'))
  })

  it('normal integer add', () => {
    assert.equal(bi.add(1, 2), '3')
    assert.equal(bi.add(123, 123), '246')
    assert.equal(bi.add(99, 97), '196')
    assert.equal(bi.add(95, 97), '192')

    let i, a, b
    for (i = 0; i < 100; i++) {
      a = Math.floor(Math.random() * 10000000000)
      b = Math.floor(Math.random() * 10000000000)
      assert.equal(bi.add(a, b), a + b)
    }
  })

  it('big integer add', () => {
    assert.equal(bi.add('480027871711443951698680625592', '1'), '480027871711443951698680625593')
    assert.equal(bi.add('480027871711443951698680625592', '720909917396388080276392278025'), '1200937789107832031975072903617')
    assert.equal(bi.add('5253475347546238175049014050816', '5202873682266597444058278264832'), '10456349029812835619107292315648')
    assert.equal(bi.add('60473120133317888948734273443043682380747322777992917547253434093889148892703825510307401124110401536', '55957687045486570518588298474543882810249517599331189044932895225227820749258907974028121089371013120'), '116430807178804459467322571917587565190996840377324106592186329319116969641962733484335522213481414656')

    assert.equal(bi.add('7964251263141221312780218362880764969929157797010796760012098690632120941367722012871671818900206042674123909295692403691826455826914055779186758670911012848789195631038962102761642122980567382449325437051604554299633376077309526080331254003637106040840179389973815718277813038361246497140762639742206699480785001944320377922503901406363441620256929', '-6041581518829395946988325784191298318293491546423663798486419863386969452441288881473260485739346824545868799081691734491690825804448678356457200311408052202702028807407469734758582573207469230527418683527280728080065555388592241779877494246069657019298215767227545462368064871982275248994180834409627281211211459984657048004768359601546568271433442736104741249651078544844318808778292818232964963993515241811366314085548407741162016834041823956833175288982098388891331076745932014'), '-6041581518829395946988325784191298318293491546423663798486419863386969452441288881473260485739346824545868799081691734491690825804440714105194059090095271984339148042437540576961571776447457131836786562585913006067193883569692035737203370336773964615606389311400631406588878113311364236145391638778588319108449817861676480622319034164494963717133809360027431723570747290840681702737452638842991148275237428773005067588407645101419810134561038954888854911059594487484967635125675085')
  })

  it('normal integer substrace', () => {
    assert.equal(bi.sub(3, 2), '1')
    assert.equal(bi.sub(1, 2), '-1')
    assert.equal(bi.sub(217946, 380108), '-162162')
    assert.equal(bi.sub(380108, 217946), '162162')

    let i, a, b
    for (i = 0; i < 100; i++) {
      a = Math.floor(Math.random() * 10000000000)
      b = Math.floor(Math.random() * 10000000000)
      assert.equal(bi.sub(a, b), (a - b).toString())
    }
  })

  it('big integer substrace', () => {
    assert.equal(bi.sub('5253475347546238175049014050816', '5202873682266597444058278264832'), '50601665279640730990735785984')
    assert.equal(bi.sub('1558967553146982599274520379392', '2659840624870349911674882883584'), '-1100873071723367312400362504192')
    assert.equal(bi.sub('7052925032575858187901935288320', '5549540621356321857555415433216'), '1503384411219536330346519855104')
    assert.equal(bi.sub('81803404497614272556494655971045508648784614479854977629190804272880484333339135713708630998142418944', '4709667966829785171519114648462214801905085617160881886643201985618793984468810439610859520'), '81803404492904604589664870799526394000322399677949892012029922386237282347720341729239820558531559424')
  })

  it('normal integer multiply', () => {
    assert.equal(bi.mul(2, 3), '6')
    assert.equal(bi.mul(5, 3), '15')
    assert.equal(bi.mul(282683, 99), '27985617')

    let i, a, b
    for (i = 0; i < 100; i++) {
      a = Math.floor(Math.random() * 100000)
      b = Math.floor(Math.random() * 100000)
      assert.equal(bi.mul(a, b), (a * b).toString())
    }
  })

  it('big integer multiply', () => {
    assert.equal(bi.mul('2438028546298331864303040200704', '9750324070021132876790640934912'), '23771568418371257134242894718584464502323088368272530680578048')
    assert.equal(bi.mul('9873623885529270874027906301952', '303318275406403419894911598592'), '2994850568970210417353067684446923409209437856586655370051584')
    assert.equal(bi.mul('372536125961462789047919650542277336744656656924672', '396744719154541532084272281240212087200856070422528'), '147801740669501462732597060848595811499149358229470981239102803325150905088076151059738191896107810816')
    assert.equal(bi.mul('1338105307763825975614802760052214459414629616419827327717901212208315922873558758607629642499096576', '30188170642201315089305830675711360824999828186001538896692879433040509221475053389096499378003116032'), '40394951368009686776184877249336606112518312404298014359261676119487292947103790766644730372808284803194803642825204094682188762083536016132816855677047622967329982357453501468322898556105472901906432')
  })

  it('normal integer divide', () => {
    assert.equal(bi.div(20, 4), '5')
    assert.equal(bi.div(20, 40), '0')
    assert.equal(bi.div(100, 40), '2')
    assert.equal(bi.div(100, 99), '1')

    let i, a, b
    for (i = 0; i < 100; i++) {
      a = Math.floor(Math.random() * 10000000000)
      b = Math.floor(Math.random() * 10000000000)
      assert.equal(bi.div(a, b), Math.floor(a / b).toString())
    }
  })

  it('big integer divide', () => {
    assert.equal(bi.div('22466694603796577071109505024', '66555113825'), '337565264524533732')
    assert.equal(bi.div('6504316431554324436195485868666086963392526187994983536843542214355342785963041250916384694842949632', '8807521979132428913217150311010664708524964535493929185442501691784095285878564398959689728'), '738495623')
    assert.equal(bi.div('49945287092747356403756026621266219515535525280429866772760560705931415772361433183594862137598541824', '2446936440419392588430859829248'), '20411354487077312728254121374340174216382430866471502031496530687695244')
    assert.equal(bi.div('28742270385565103832505509574422278938532309711862552603384360870575156382001082652764858408482373632', '2773925897677096099762266963968'), '10361585509416120749647636358241713944244663695338932844870922208510201')
    assert.equal(bi.div('110716864246771846418029820731038245625127669223748414582179395701295170105376768', '6995253431370876665073564572579703585705307369450889894786869311036013788942601752359731200'), '0')
  })

  it('normal integer mod', () => {
    assert.equal(bi.mod(10, 3), '1')
    assert.equal(bi.mod(10, 2), '0')
    assert.equal(bi.mod(10, 20), '10')
    assert.equal(bi.mod(10, 1), '0')

    let i, a, b
    for (i = 0; i < 100; i++) {
      a = Math.floor(Math.random() * 10000000000)
      b = Math.floor(Math.random() * 10000000000)
      assert.equal(bi.mod(a, b), (a - b * Math.floor(a / b)).toString())
    }

    assert.equal(bi.mod('66342254507826357490762791913825962641783925187443952051659260897681835388999417939854151629733363712', '11778086101189411695577935930581448684487120597840440036762621610819584'), '6803296768837560712372319944385636217904493840820499899928365410287616')
    assert.equal(bi.mod('50941199731078312254927379719728172859375075218525389781165107028823995288841024664034430593729036288', '61672722723312806244589892381907384818596044386640573354771302527876370586927104'), '57343025035099135233646306076407603139154106932191526779848560767898392696193024')
    assert.equal(bi.mod('60185581202776446983835868184298291190978933353720194970879021945169891191136777628055538064450125824', '17'), '11')
    assert.equal(bi.mod('19121965999257561992137003337350809430281845066195094462019761365581824', '312502567488005262042437383515164118411964681227003094687323626579496279673405440'), '19121965999257561992137003337350809430281845066195094462019761365581824')
    assert.equal(bi.mod('49523224280555588964840632475327869871740689378976887382462246934282240', '2'), '0')
  })

  it('abs', () => {
    assert.equal(bi.abs('1'), '1')
    assert.equal(bi.abs('-100'), '100')
  })

  it('sign', () => {
    assert.equal(bi.sign('1'), 1)
    assert.equal(bi.sign('-100'), -1)
    assert.equal(bi.sign('0'), 0)
    assert.equal(bi.sign(0), 0)
    assert.equal(bi.sign(1000), 1)
    assert.equal(bi.sign(-1000), -1)
  })
})

describe('more test', () => {
  it('python generated tests for \'+-*/%\'', function () {
    this.timeout(10000)
    let tests = require('../test/tests').tests

    for (let t of tests) {
      assert.equal(bi[t[0]](t[1], t[2]), t[3])
    }
  })
})
