// map
mapboxgl.accessToken = 'pk.eyJ1IjoienVyYW51IiwiYSI6ImNsOWdxNzhzMTA0YWUzbnI3N2Y1cmh2ZjUifQ.IuhHjcZZ3JZQrZE7HZ0-Fg';
// "middle" of a map
const middle = [10.2204, 56.1582];
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/zuranu/clak629bh000114o42qws8kn5',
center: middle,
zoom: 13,
});

// plastic
const plastic = [10.22293, 56.16519];

const plasticpopup = new mapboxgl.Popup({ offset: 30 }).setText('Trash can for plastic, metal and glass');

const a = document.createElement('div');
a.classList = 'marker_trash';

new mapboxgl.Marker(a)
.setLngLat(plastic)
.setPopup(plasticpopup)
.addTo(map);

// batteries
const batteries = [10.22319, 56.16521];

const batteriespopup = new mapboxgl.Popup({ offset: 30 }).setText('Trash can for batteries and glass');

const b = document.createElement('div');
b.classList = 'marker_trash';

new mapboxgl.Marker(b)
.setLngLat(batteries)
.setPopup(batteriespopup)
.addTo(map);

// cardboard
const cardboard = [10.22362, 56.16505];

const cardboardpopup = new mapboxgl.Popup({ offset: 30 }).setText('Trash can for cardboard');

const c = document.createElement('div');
c.classList = 'marker_trash';

new mapboxgl.Marker(c)
.setLngLat(cardboard)
.setPopup(cardboardpopup)
.addTo(map);

// paper
const paper = [10.22386, 56.16515];

const paperpopup = new mapboxgl.Popup({ offset: 30 }).setText('Trash can for paper');

const d = document.createElement('div');
d.classList = 'marker_trash';

new mapboxgl.Marker(d)
.setLngLat(paper)
.setPopup(paperpopup)
.addTo(map);


// court1
const court1 = [10.22914, 56.16582];

const court1popup = new mapboxgl.Popup({ offset: 30 }).setText('Basketball and football court');

const f = document.createElement('div');
f.classList = 'marker_court';

new mapboxgl.Marker(f)
.setLngLat(court1)
.setPopup(court1popup)
.addTo(map);

// court2
const court2 = [10.21402, 56.15710];

const court2popup = new mapboxgl.Popup({ offset: 30 }).setText('Basketball and football court');

const g = document.createElement('div');
g.classList = 'marker_court';

new mapboxgl.Marker(g)
.setLngLat(court2)
.setPopup(court2popup)
.addTo(map);

// netto
const netto = [10.21671, 56.16437];

const nettopopup = new mapboxgl.Popup({ offset: 30 }).setText('Netto');

const h = document.createElement('div');
h.classList = 'marker_shop';

new mapboxgl.Marker(h)
.setLngLat(netto)
.setPopup(nettopopup)
.addTo(map);

// rema
const rema = [10.20710, 56.16033];

const remapopup = new mapboxgl.Popup({ offset: 30 }).setText('Rema 1000');

const i = document.createElement('div');
i.classList = 'marker_shop';

new mapboxgl.Marker(i)
.setLngLat(rema)
.setPopup(remapopup)
.addTo(map);

// 7-eleven
const seven = [10.21163, 56.16209];

const sevenpopup = new mapboxgl.Popup({ offset: 30 }).setText('7-Eleven');

const j = document.createElement('div');
j.classList = 'marker_shop';

new mapboxgl.Marker(j)
.setLngLat(seven)
.setPopup(sevenpopup)
.addTo(map);

// crossfit
const crossfit = [10.21508, 56.15160];

const crossfitpopup = new mapboxgl.Popup({ offset: 30 }).setText('Crossfit Copenhagen');

const k = document.createElement('div');
k.classList = 'marker_fitness';

new mapboxgl.Marker(k)
.setLngLat(crossfit)
.setPopup(crossfitpopup)
.addTo(map);

// fitness
const fitness = [10.21180, 56.16221];

const fitnesspopup = new mapboxgl.Popup({ offset: 30 }).setText('Fitness World');

const l = document.createElement('div');
l.classList = 'marker_fitness';

new mapboxgl.Marker(l)
.setLngLat(fitness)
.setPopup(fitnesspopup)
.addTo(map);

// water
const water = [10.22496, 56.16360];

const waterpopup = new mapboxgl.Popup({ offset: 30 }).setText('Wakeboard and sauna');

const m = document.createElement('div');
m.classList = 'marker_water';

new mapboxgl.Marker(m)
.setLngLat(water)
.setPopup(waterpopup)
.addTo(map);

// food stails
const stails = [10.22527, 56.16393];

const stailspopup = new mapboxgl.Popup({ offset: 30 }).setText('Food stails');

const n = document.createElement('div');
n.classList = 'marker_food';

new mapboxgl.Marker(n)
.setLngLat(stails)
.setPopup(stailspopup)
.addTo(map);

// street food
const street = [10.20965, 56.15145];

const streetpopup = new mapboxgl.Popup({ offset: 30 }).setText('Street Food Aarhus');

const o = document.createElement('div');
o.classList = 'marker_food';

new mapboxgl.Marker(o)
.setLngLat(street)
.setPopup(streetpopup)
.addTo(map);

// train
const train = [10.20387, 56.14972];

const trainpopup = new mapboxgl.Popup({ offset: 30 }).setText('Train station: Aarhus H');

const p = document.createElement('div');
p.classList = 'marker_train';

new mapboxgl.Marker(p)
.setLngLat(train)
.setPopup(trainpopup)
.addTo(map);

// home
const home = [10.22404, 56.16502];

const homepopup = new mapboxgl.Popup({ offset: 30 }).setText('Grundfos Kollegiet');

const e = document.createElement('div');
e.classList = 'marker_home';

new mapboxgl.Marker(e)
.setLngLat(home)
.setPopup(homepopup)
.addTo(map);




