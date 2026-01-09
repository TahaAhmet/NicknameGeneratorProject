import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/submit', (req, res) => {
    const randomAdjective = descriptors[Math.floor(Math.random() * descriptors.length)];
    const randomNoun = objects[Math.floor(Math.random() * objects.length)];
    res.render('index.ejs', { adjective: randomAdjective, noun: randomNoun });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const descriptors = [
"able","active","agile","alert","aligned","ambient","ancient","applied","apt","arcane",
"balanced","basic","bold","bright","broad","calm","capable","casual","central","clean",
"clear","clever","close","cold","compact","complete","constant","cool","core","correct",
"creative","crisp","curious","daily","dark","deep","direct","distinct","dynamic","early",
"easy","efficient","elastic","elegant","empty","equal","even","exact","expert","fair",
"fast","firm","flexible","fluid","focused","formal","free","fresh","full","gentle",
"global","good","gradual","great","grounded","guided","happy","hard","harmonic","healthy",
"helpful","hidden","honest","ideal","immune","inner","instant","intact","intense","intent",
"interactive","internal","joint","just","keen","key","kind","known","large","latent",
"leading","light","linear","local","logical","loose","loud","low","main","major",
"manual","mature","measured","mental","mild","minimal","modern","modest","natural","near",
"neat","neutral","new","normal","noted","open","optimal","organic","outer","overall",
"patient","peaceful","perfect","plain","playful","polished","positive","precise","primary","prime",
"private","proactive","proper","pure","quick","quiet","rare","rapid","ready","real",
"refined","regular","reliable","remote","rich","robust","safe","secure","select","sensible",
"serene","sharp","short","simple","skilled","smart","smooth","social","soft","solid",
"stable","steady","strong","subtle","swift","systemic","tactical","technical","tested","tight",
"timely","tiny","total","true","trusted","uniform","unique","useful","valid","valuable",
"vast","virtual","visible","vital","warm","wide","wise","young",
"adaptable","advanced","balanced","brilliant","calculated","careful","clearcut","coherent","consistent","controlled",
"credible","deliberate","detailed","disciplined","distinctive","efficient","elevated","empirical","enabled","engaged",
"enhanced","essential","established","ethical","evident","explicit","extended","factual","feasible","finite",
"flexible","focused","formative","functional","fundamental","general","generic","genuine","gradual","granular",
"grounded","harmonized","holistic","incremental","independent","indicative","integrated","intended","intuitive","iterative",
"logical","measurable","methodical","moderate","modular","objective","observed","optimized","organized","practical",
"predictable","progressive","qualified","quantified","reflective","repeatable","responsive","scalable","selective","structured",
"sustainable","systematic","targeted","traceable","transparent","validated","verifiable","versatile","wellformed","workable"
];

const objects = [
"account","action","agent","anchor","angle","answer","aspect","asset","balance","base",
"beam","block","board","bond","branch","bridge","buffer","build","cache","canvas",
"channel","circle","client","cluster","code","core","corner","course","cycle","data",
"design","detail","device","diagram","domain","draft","drive","edge","element","engine",
"event","example","field","file","filter","flow","focus","format","frame","function",
"gateway","group","guide","handle","header","hub","idea","index","input","instance",
"interface","item","kernel","key","label","layer","layout","level","library","limit",
"line","link","list","logic","loop","map","matrix","method","model","module",
"motion","network","node","object","option","output","page","panel","path","pattern",
"phase","point","policy","process","profile","project","queue","range","record","reference",
"region","resource","result","route","rule","sample","scale","schema","scope","script",
"segment","service","signal","site","source","space","state","step","stream","structure",
"system","table","target","task","thread","tool","track","type","unit","value",
"vector","view","volume","window","zone",
"adapter","alignment","archive","array","baseline","benchmark","boundary","bundle","catalog","checkpoint",
"context","control","conversion","coverage","dataset","descriptor","dimension","directive","endpoint","estimate",
"framework","frequency","gradient","hierarchy","indicator","insight","instrument","interval","iteration","junction",
"milestone","namespace","observer","operator","parameter","pipeline","platform","priority","protocol","ratio",
"registry","snapshot","solution","specification","spectrum","strategy","template","threshold","timeline","workflow"
];

