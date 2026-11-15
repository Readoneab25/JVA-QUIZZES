/* Regression tests for the two JVA Standard 65-question tutor-review mocks. */
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const root=require('node:path').resolve(__dirname,'..');
function read(p){return fs.readFileSync(require('node:path').join(root,p),'utf8')}
const shared=read('jva-standard-65-common/shared-questions.js');
function load(folder){
 const ctx={};vm.createContext(ctx);
 vm.runInContext(shared+'\n'+read(folder+'/quiz-questions.js')+'\nglobalThis.questions=QUESTIONS;\n'+read(folder+'/quiz-config.js')+'\nglobalThis.config=QUIZ_CONFIG;',ctx);
 return {questions:JSON.parse(JSON.stringify(ctx.questions)),cfg:JSON.parse(JSON.stringify(ctx.config)),html:read(folder+'/index.html')};
}
const eng=load('jva-standard-engineering-65-set-01');
const med=load('jva-standard-medical-65-set-01');
const expected=['English','Physics','Chemistry'];
const expectedKeys={
 English:'BBBBBBB BABB CABCBBBB C'.replace(/\s+/g,''),
 Physics:'DBCBBCBDCBDCBAC',
 Chemistry:'CBDCBDCBB BCCBCB'.replace(/\s+/g,''),
 Biology:'BCDBACCABCB D CAB'.replace(/\s+/g,''),
 Mathematics:'BAABCA CBBBBBBCC'.replace(/\s+/g,'')
};
for(const [type,exam,distinct] of [['Engineering',eng,'Mathematics'],['Medical',med,'Biology']]){
 const {questions:q,cfg,html}=exam;
 assert.equal(q.length,65,type+' exactly 65 questions');
 assert.equal(cfg.mode,'tutor-review',type+' hides results pending release');
 assert.equal(cfg.timeMinutes,40,type+' 40 minutes');
 assert.ok(cfg.id.includes(type.toLowerCase()),'distinct quiz ID');
 assert.equal(q.filter(x=>x.subject==='English').length,20);
 for(const subject of [...expected.slice(1),distinct])assert.equal(q.filter(x=>x.subject===subject).length,15);
 assert.deepEqual(q.map(x=>x.subject).slice(0,20),Array(20).fill('English'));
 assert.ok(q.every(x=>x&&typeof x.q==='string'&&x.q.trim()&&Array.isArray(x.c)&&x.c.length===4&&
   x.c.every(v=>typeof v==='string'&&v.trim())&&Number.isInteger(x.a)&&x.a>=0&&x.a<4),'valid item shape');
 assert.equal(new Set(q.map(x=>x.q.trim().toLowerCase())).size,65,'no duplicate question text');
 assert.match(html,/total!==65/);
 assert.match(html,/65 questions • 40 minutes • Tutor Review/);
 assert.match(html,/const EXPECTED_COUNTS=\{English:20,Physics:15,Chemistry:15,/);
 assert.match(html,/submit_quiz_result/);
 assert.match(html,/p_mode:cfg.mode/);
 assert.match(html,/if\(cfg.mode==="tutor-review"\)\{showPendingResult\(\)\}/);
 assert.match(html,/document\.getElementById\("export"\)\.style\.display="none"/);
 assert.match(html,/showPendingResult\(\)/);
 assert.match(html,/timeMinutes\*60/);
 assert.doesNotMatch(html,/400 marks|\/400|out of 400|score\s*\*\s*400/i);
 assert.match(html,/src="\.\.\/jva-standard-65-common\/shared-questions\.js"/);
 assert.match(html,/src="quiz-questions\.js"/);
 assert.match(html,/src="quiz-config\.js"/);
 const keys=q.filter(x=>x.subject===distinct).map(x=>'ABCD'[x.a]).join('');
 console.log('PASS '+type+': '+q.length+' questions, '+distinct+' answer key '+keys+', 40min tutor-review, out of 65');
}
const eShared=eng.questions.filter(x=>expected.includes(x.subject));
const mShared=med.questions.filter(x=>expected.includes(x.subject));
assert.deepEqual(eShared,mShared,'all 50 English Physics Chemistry questions identical including answer keys');
for(const subject of expected){
 const a=eShared.filter(x=>x.subject===subject);
 const key=a.map(x=>'ABCD'[x.a]).join('');
 const source={
 English:'BBBBBBBBABBCABCBBBB C'.replace(/\s/g,''),
 Physics:'DBCBBCBDCBDCBAC',
 Chemistry:'CBDCBDCBB BCCBCB'.replace(/\s/g,'')
 }[subject];
 // Independently review the correct choices from the supplied teacher key.
 const teacher={
 English:['B','B','B','B','B','B','B','B','A','B','B','C','A','B','C','B','B','B','B','C'],
 Physics:['D','B','C','B','B','C','B','D','C','B','D','C','B','A','C'],
 Chemistry:['C','B','D','C','B','D','C','B','B','B','C','C','B','C','B']
 }[subject].join('');
 assert.equal(key,teacher,subject+' validated teacher key');
 console.log('PASS shared '+subject+' '+a.length+' / answers '+key);
}
assert.equal(med.questions.filter(x=>x.subject==='Biology').map(x=>'ABCD'[x.a]).join(''),'BCDBACCABCB DCAB'.replace(/\s/g,''));
assert.equal(eng.questions.filter(x=>x.subject==='Mathematics').map(x=>'ABCD'[x.a]).join(''),'BAABCA CBBBBBBCC'.replace(/\s/g,''));
console.log('PASS all 80 unique questions and 2 × 65 mock composition');
