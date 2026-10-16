'use strict';
const CONFIG={duration:12000,mythDuration:20000};
const img=(name,alt,cls='')=>`<img class="art ${cls}" src="assets/${name}.jpg" alt="${alt}" ${name==='cover'?'fetchpriority="high"':'loading="lazy"'}>`;
const tag=t=>`<div class="tag">${t}</div>`;
const source=t=>`<p class="source">科学依据 ${t} · 详见结尾</p>`;
function myth(n,title,wrong,right){return `${tag('拆解误区 / 0'+n)}<h2>${title}</h2><button class="flip" aria-label="点击翻卡查看真相" aria-pressed="false"><span class="flip-inner"><span class="face front"><span class="badge">误区 ×</span>${img('myth'+n+'_wrong','误区示范：'+(n===1?'过度追求出汗':'跑后长时间坐着'))}<span class="explain">${wrong}</span><span class="hint">点击查看真相 ↻</span></span><span class="face back" aria-hidden="true"><span class="badge">正解 ✓</span>${img('myth'+n+'_right','正确示范：'+(n===1?'舒适地快走':'学习间隙起身活动'))}<span class="explain">${right}</span><span class="hint">再次点击，回看误区 ↻</span></span></span></button>${source(n===1?'[2][5]':'[1]')}`}
const screens=[
['cover',`${img('cover','阳光下，两名青年在校园跑道上奔跑')}${tag('健康科普作品')}<p class="eyebrow">健康中国行 · 科学健身</p><h1>青春<br><span class="orange bounce" style="display:inline-block">动起来</span></h1><p class="subtitle">告别久坐，科学运动</p><div class="bottom"><button class="primary" data-go="1">开启活力之旅 ↗</button><p>上滑探索 · 11屏活力指南 · 18岁及以上</p></div>`],
['center',`${tag('01 / 发现久坐')}<h2>这一坐，<br>是不是又忘了时间？</h2><p class="muted">上课、赶作业，再刷一会儿手机……</p><div class="chips"><span class="chip">再写一页</span><span class="chip">再刷五分钟</span></div><div class="scene">${img('sitting','学习中的男生抬手揉肩')}</div><p class="thought">“怎么肩膀又开始紧了？”</p><p>让身体换个姿势，<br>也给自己一个起身的理由。</p>`],
['',`${tag('02 / 听见身体')}<h2>身体的小提醒，<br>值得被听见。</h2><p class="muted">有些是不适，有些是长期风险。</p><div class="list">${[
['↟','肩颈不适','姿势固定过久，肩颈肌肉易疲劳。'],['⌁','腰背不适','坐姿持续、支撑不当，腰背易受累。'],['◉','代谢健康风险','久坐、活动不足与糖尿病风险相关。[1]'],['♡','心血管健康风险','久坐较多与心血管疾病风险相关。[1]'],['◎','视疲劳','近距离用眼、看屏幕过久易眼疲劳。[3]'],['∿','便秘困扰','活动量、膳食和饮水等均有影响。[4]']].map(([i,h,p])=>`<div class="risk"><span class="icon" aria-hidden="true">${i}</span><div><h3>${h}</h3><p>${p}</p></div></div>`).join('')}</div><p class="small">相关风险不等于疾病诊断，也不是人人都会发生。</p>${source('[1][3][4][7]')}`],
['',`${tag('03 / 日常选择')}<h2>同样的一天，<br>让身体多一点参与。</h2><div class="comparison"><div class="compare"><small>久坐较多的一天</small><h3>身体“待机”久一点</h3><p>身体活动量较少<br>肌肉持续活动较少<br>心肺锻炼机会较少</p></div><div class="compare"><small>主动活动的一天</small><h3>把运动放进生活</h3><p>步行、跑走增加活动量<br>肌肉获得更多活动机会<br>适宜强度有助锻炼心肺</p></div></div><p class="center">不必一天改变全部，先从下一次起身开始。</p>${source('[1]')}`],
['guide',`${tag('04 / 科学健身')}<h2>科学动起来，<br>记住这几件事。</h2>${img('running','青年轻松跑走')}<div class="list"><div class="guide-item"><h3>① 成人每周活动目标 [1]</h3><p><b class="num">150–300</b> 分钟中等强度，或<br><b class="num">75–150</b> 分钟高强度，或等量组合。<br>每周至少 <b>2天</b> 主要肌群力量活动。</p></div><div class="guide-item"><h3>② 用说话感受强度 [2]</h3><p>中等：能说话，难唱歌。<br>高强度：说几句话就需停下来换气。<br>慢跑的强度因人而异。</p></div><div class="guide-item"><h3>③ 从步行起步，循序渐进 [1][6]</h3><p>先走再尝试跑走结合；跑前慢走热身，跑后逐渐减速，温和整理。</p></div><div><h3>④ 运动之外，也要少坐 [1]</h3><p>学习间隙起身，给身体更多活动机会。</p></div></div><p class="small">面向18岁及以上普通青年。量力而行；出现明显疼痛、头晕等不适时停止活动。</p>`],
['myth',myth(1,'一定要大汗淋漓，<br>运动才有效？','“汗越多，效果越好。”<br>汗量不能直接代表运动效果。','出汗主要帮助散热，受气温、体质等影响。关注强度、时长和规律性，不用追着汗量跑。')],
['myth',myth(2,'今天跑过步，<br>就能一直坐着了？','“跑完步，剩下时间随便坐。”<br>一次跑步不能简单抵消全天久坐。','规律运动与减少久坐要一起做。上课、学习之间起身走走，用日常活动替代一部分坐着的时间。')],
['initiative',`${tag('07 / 校园行动')}<h2>把运动，<br>放进日常。</h2>${img('activity','校园里结伴步行和跑走的三名青年')}<div class="steps"><div class="step"><b>01</b><p><strong>课间起身</strong><br>走出座位，活动一下身体。</p></div><div class="step"><b>02</b><p><strong>主动步行，适量跑走</strong><br>去食堂、图书馆，多走一段。</p></div><div class="step"><b>03</b><p><strong>结伴运动，循序渐进</strong><br>按自己的能力，慢慢增加。</p></div></div><button class="primary" id="pledge">我愿意行动 ↗</button><p id="pledgeFeedback" class="status" aria-live="polite">从下一个课间开始。</p>`],
['micro',`${tag('08 / 十分钟起点')}<h2>每天<span class="orange">10分钟</span>，<br>从动起来开始。</h2>${img('micro','青年步行、原地踏步与温和活动肩部')}<div class="micro-list">${[['轻松步行','2'],['原地踏步，轻轻摆臂','3'],['温和活动肩、腕、踝','2'],['放慢步行，调整呼吸','3']].map(([t,n])=>`<div class="micro-row"><span>${t}</span><span><b>${n}</b> 分钟</span></div>`).join('')}</div><p class="notice"><strong>2 + 3 + 2 + 3 = 10分钟</strong><br>这是行动起点，还需逐步增加活动量，向每周目标靠近。</p><p class="small">在平整安全的空间进行，动作幅度以舒适为准；明显疼痛、头晕等不适时停止。</p>${source('[1][6]')}`],
['quiz',`${tag('09 / 活力小测验')}<h2>你的运动知识，<br>过关了吗？</h2><p class="muted">3道题，把科学运动记在心里。</p><div id="quizContent" class="quiz-box" aria-live="polite"></div>`],
['finish',`${tag('10 / 让行动继续')}<h2>践行健康中国，<br>从今天动起来。</h2>${img('cover','呼应开场的校园阳光跑道')}<p class="motto center">少坐一点 · 多动一点<br><span class="orange">科学一点</span></p><p class="center small">把这份活力，带进下一个课间。</p><p id="endStatus" class="status"></p><div class="actions"><button class="primary" id="share">分享这份活力 ↗</button><button class="secondary" id="restart">再看一遍</button><button class="secondary" id="openSources">查看科学依据</button></div><p id="shareFeedback" class="small center" aria-live="polite"></p>`]
];
document.querySelector('#slides').innerHTML=screens.map(([cls,html],i)=>`<section class="screen ${cls} ${i===0?'active':''}" id="screen${i}" aria-label="第${i+1}屏" aria-hidden="${i!==0}" ${i?'inert':''}>${html}</section>`).join('');
const refs=[
['WHO guidelines on physical activity and sedentary behaviour','世界卫生组织（WHO）','2020','https://www.who.int/publications/i/item/9789240015128'],
['How to Measure Physical Activity Intensity','美国疾病控制与预防中心（CDC）','2025','https://www.cdc.gov/physical-activity-basics/measuring/index.html'],
['Computers, Digital Devices, and Eye Strain','美国眼科学会（AAO）','2024','https://www.aao.org/eye-health/tips-prevention/computer-usage'],
['Symptoms & Causes of Constipation','美国国立糖尿病、消化与肾病研究所（NIDDK）','2018','https://www.niddk.nih.gov/health-information/digestive-diseases/constipation/symptoms-causes'],
['Does Sweating Burn More Calories?','克利夫兰诊所','2026','https://health.clevelandclinic.org/does-sweating-burn-calories'],
['Warm Up, Cool Down','美国心脏协会（AHA）','2024','https://www.heart.org/en/healthy-living/exercise-and-physical-activity/fitness-basics/warm-up-cool-down'],
['Working safely with display screen equipment','英国健康与安全执行局（HSE）','在线指导，访问于2026年','https://www.hse.gov.uk/msd/dse/']
];
document.querySelector('#sourceList').innerHTML=refs.map(([t,o,y,u])=>`<li><strong>${t}</strong><br>${o} · ${y}<br><a href="${u}" target="_blank" rel="noopener noreferrer">查看原始资料 ↗</a></li>`).join('');
const questions=[{q:'对普通成年人，每周中等强度有氧活动的推荐量是？',a:['每天10分钟就足够','每周150–300分钟','必须每天跑到大汗淋漓'],correct:1,why:'成人推荐每周150–300分钟中等强度，或75–150分钟高强度，或等量组合；并安排力量活动。'},{q:'怎样理解运动时的出汗量？',a:['汗越多，运动效果一定越好','不出汗就没有健康益处','汗量受多种因素影响，不能代表效果'],correct:2,why:'汗的主要作用是散热。气温和个体差异也影响汗量，应关注适宜强度、时长和规律性。'},{q:'今天已经跑过步，学习时应该怎么做？',a:['仍要利用间隙起身活动','可以连续坐到晚上','只需多喝水，不必起身'],correct:0,why:'规律运动和减少久坐需要共同落实。一次跑步不能简单抵消全天久坐。'}];
let current=0,userPaused=matchMedia('(prefers-reduced-motion: reduce)').matches,timer=null,pledged=false,answers=[],questionIndex=0,lockedUntil=0;
const $=s=>document.querySelector(s),all=[...document.querySelectorAll('.screen')],dialog=$('#sources');
function updateControls(){ $('#counter').textContent=String(current+1).padStart(2,'0')+' / 11';$('#progress').style.width=((current+1)/11*100)+'%';$('#play').textContent=userPaused?'继续':current===9?'答题中':current===10?'已结束':'暂停';$('#play').setAttribute('aria-label',userPaused?'继续自动播放':'暂停自动播放');$('#prev').disabled=current===0;$('#next').disabled=current===10||current===9; }
function schedule(){clearTimeout(timer);timer=null;updateControls();if(userPaused||document.hidden||dialog.open||current>=9)return;timer=setTimeout(()=>go(current+1),current===5||current===6?CONFIG.mythDuration:CONFIG.duration)}
function go(n){if(dialog.open||n<0||n>=11)return;all[current].classList.remove('active');all[current].setAttribute('aria-hidden','true');all[current].inert=true;current=n;all[current].classList.add('active');all[current].setAttribute('aria-hidden','false');all[current].inert=false;all[current].scrollTop=0;lockedUntil=Date.now()+550;if(current===10)$('#endStatus').textContent=(answers.length===3?`本次答对 ${score()}/3 题`:'测验尚未完成')+' · '+(pledged?'已许下行动承诺':'从今天迈出第一步');schedule()}
$('#play').onclick=()=>{userPaused=!userPaused;schedule()};$('#prev').onclick=()=>go(current-1);$('#next').onclick=()=>go(current+1);document.querySelector('[data-go]').onclick=()=>go(1);
document.querySelectorAll('.flip').forEach(el=>el.onclick=()=>{const flipped=el.classList.toggle('flipped');el.setAttribute('aria-pressed',String(flipped));el.querySelector('.front').setAttribute('aria-hidden',String(flipped));el.querySelector('.back').setAttribute('aria-hidden',String(!flipped));schedule()});
$('#pledge').onclick=()=>{pledged=true;$('#pledge').textContent='已加入行动 ✓';$('#pledgeFeedback').textContent='约定好了：下一个课间，起身走一走！';schedule()};
function score(){return answers.reduce((s,a,i)=>s+(a===questions[i].correct),0)}
function renderQuiz(){if(answers.length===3&&questionIndex===3){let n=score();$('#quizContent').innerHTML=`<div class="result"><p>活力知识挑战完成</p><div class="score">${n}<span style="font-size:30px"> / 3</span></div><h3>${n===3?'太棒了':n===2?'差一点':'再接再厉'}</h3><p>答对${n}/3题</p><p class="feedback">把知识变成行动，才是今天的加分项。</p><div class="actions"><button class="primary" id="toEnd">查看结尾 →</button><button class="secondary" id="retry">重新作答</button></div></div>`;$('#toEnd').onclick=()=>go(10);$('#retry').onclick=()=>{answers=[];questionIndex=0;renderQuiz()};return}const q=questions[questionIndex],done=answers[questionIndex]!==undefined;$('#quizContent').innerHTML=`<div class="quiz-label"><span>知识检查</span><strong>${questionIndex+1}/3</strong></div><h3>${q.q}</h3><div class="answers">${q.a.map((a,i)=>`<button class="answer ${done?(i===q.correct?'correct':i===answers[questionIndex]?'wrong':''):''}" data-answer="${i}" ${done?'disabled':''}><span>${'ABC'[i]}</span>${a}</button>`).join('')}</div><p class="feedback">${done?`${answers[questionIndex]===q.correct?'✓ 答对了。':'再记一次：'}${q.why}`:'选出你认为最准确的一项。'}</p>${done?`<button class="primary" id="nextQuestion">${questionIndex===2?'查看成绩':'下一题 →'}</button>`:''}`;document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(answers[questionIndex]!==undefined)return;answers[questionIndex]=Number(b.dataset.answer);renderQuiz()});if(done)$('#nextQuestion').onclick=()=>{questionIndex++;renderQuiz()}}
renderQuiz();$('#restart').onclick=()=>go(0);$('#openSources').onclick=()=>{dialog.showModal();clearTimeout(timer)};$('#closeSources').onclick=()=>dialog.close();dialog.addEventListener('close',schedule);dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});

/* ===== 分享逻辑（已修复） ===== */
$('#share').onclick = async () => {
  const data = {
    title: document.title,
    text: '少坐一点，多动一点，科学一点。一起开启校园活力之旅！',
    url: location.href.split('#')[0]
  };
  const feedback = $('#shareFeedback');

  if (navigator.share) {
    try {
      await navigator.share(data);
      feedback.textContent = '感谢你分享这份活力。';
      return;
    } catch (e) {
      if (e.name === 'AbortError') {
        feedback.textContent = '已取消分享。';
        return;
      }
      console.warn('系统分享失败，尝试复制链接：', e);
    }
  }

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(location.href);
      feedback.textContent = '链接已复制。微信内也可点右上角“…”分享。';
      return;
    } catch (e) {
      console.warn('复制失败：', e);
    }
  }

  feedback.textContent = '请复制浏览器地址，或使用微信右上角“…”分享。';
};
/* ===== 分享逻辑结束 ===== */

function navigate(delta){if(Date.now()<lockedUntil||dialog.open||current===9&&delta>0)return;go(current+delta)}
window.addEventListener('keydown',e=>{if(dialog.open||/INPUT|TEXTAREA|BUTTON/.test(document.activeElement.tagName))return;if(['ArrowDown','PageDown','ArrowUp','PageUp'].includes(e.key)){e.preventDefault();navigate(['ArrowDown','PageDown'].includes(e.key)?1:-1)}});
let touch=null;$('#slides').addEventListener('touchstart',e=>{touch={y:e.touches[0].clientY,x:e.touches[0].clientX,target:e.target,scroll:all[current].scrollTop}},{passive:true});$('#slides').addEventListener('touchend',e=>{if(!touch)return;let dy=touch.y-e.changedTouches[0].clientY,dx=touch.x-e.changedTouches[0].clientX,s=all[current];if(!touch.target.closest('button,a')&&Math.abs(dy)>60&&Math.abs(dy)>Math.abs(dx)&&Math.abs(s.scrollTop-touch.scroll)<3){if(dy>0&&s.scrollTop+s.clientHeight>=s.scrollHeight-3||dy<0&&s.scrollTop<=0)navigate(dy>0?1:-1)}touch=null},{passive:true});let wheelSum=0;$('#slides').addEventListener('wheel',e=>{if(dialog.open||Date.now()<lockedUntil)return;const s=all[current];if(s.scrollHeight>s.clientHeight+3&&(e.deltaY>0&&s.scrollTop+s.clientHeight<s.scrollHeight-3||e.deltaY<0&&s.scrollTop>0))return;wheelSum+=e.deltaY;if(Math.abs(wheelSum)>60){navigate(wheelSum>0?1:-1);wheelSum=0}},{passive:true});document.addEventListener('visibilitychange',schedule);schedule();