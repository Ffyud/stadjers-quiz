(this["webpackJsonpstadjers-quiz"]=this["webpackJsonpstadjers-quiz"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),i=a.n(r),o=a(7),s=a.n(o),d=(a(13),a(2)),c=a(3),l=a(5),j=a(4),u=(a(14),[{id:1,vraag:"Waar is dit gebouw?",antwoorden:["Bij de Gorechtkade","Aan het Linneausplein","Aan het Damsterdiep","Bij het Pioenpark"]},{id:2,vraag:"Welk gebouw is dit?",antwoorden:["Het gemeentehuis","Het provinciehuis","Het Oude Groninger Museum","Het Stadskantoor"]},{id:3,vraag:"Welk gebouw is dit?",antwoorden:["Het Grand Theatre","De Stadsschouwburg","Het Prinsentheater","Het Noorderpoortcollege"]},{id:4,vraag:"Welk gebouw is dit?",antwoorden:["Het Goudkantoor","Het Academiegebouw","De Universiteitsbibliotheek","Het Noorderpoortcollege"]},{id:5,vraag:"Waar staat dit beeld?",antwoorden:["Bij het Martiniziekenhuis","Bij het UMCG","Bij het Harmoniecomplex","Het Noorderpoortcollege"]},{id:6,vraag:"Van welke gebouw is deze toren?",antwoorden:["De Sint-Franciscuskerk","De A-kerk","De Sint-Josef Kathedraal","De Nieuwe Kerk"]}]),h={foto1:a.p+"static/media/1.359cc080.JPG",foto2:a.p+"static/media/2.9cc4b294.JPG",foto3:a.p+"static/media/3.72aacefa.JPG",foto4:a.p+"static/media/4.099096ea.JPG",foto5:a.p+"static/media/5.23e9c207.JPG",foto6:a.p+"static/media/6.58a409b4.JPG"},g=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).isGeladen=function(){e.setState({imgLoaded:!0})},e.kiesAntwoord=function(t){e.props.antwoordGekozen(t)},e.state={imgLoaded:!1},e}return Object(c.a)(a,[{key:"geefFoto",value:function(e){return h["foto"+e]}},{key:"render",value:function(){var e=this.props.vraagData;return Object(n.jsxs)("div",{className:"vraagKader",children:[this.state.imgLoaded?null:Object(n.jsx)("div",{className:"imgPlaceholder"}),Object(n.jsx)("img",{alt:"derk!",style:this.state.imgLoaded?{}:{display:"none"},onLoad:this.isGeladen,src:this.geefFoto(e.id)}),Object(n.jsxs)("div",{className:"vraagOpties",children:[Object(n.jsx)("div",{className:"vraag",children:e.vraag}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{onClick:this.kiesAntwoord.bind(this),"data-vraag":e.id,"data-antwoord":"1",children:[Object(n.jsx)("span",{className:"antwoordNummer",children:"1"}),Object(n.jsx)("span",{children:e.antwoorden[0]})]}),Object(n.jsxs)("li",{onClick:this.kiesAntwoord.bind(this),"data-vraag":e.id,"data-antwoord":"2",children:[Object(n.jsx)("span",{className:"antwoordNummer",children:"2"}),Object(n.jsx)("span",{children:e.antwoorden[1]})]}),Object(n.jsxs)("li",{onClick:this.kiesAntwoord.bind(this),"data-vraag":e.id,"data-antwoord":"3",children:[Object(n.jsx)("span",{className:"antwoordNummer",children:"3"}),Object(n.jsx)("span",{children:e.antwoorden[2]})]}),Object(n.jsxs)("li",{onClick:this.kiesAntwoord.bind(this),"data-vraag":e.id,"data-antwoord":"4",children:[Object(n.jsx)("span",{className:"antwoordNummer",children:"4"}),Object(n.jsx)("span",{children:e.antwoorden[3]})]})]})]})]},e.id)}}]),a}(r.Component),v=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).antwoordGekozen=function(e){var t=e.currentTarget.dataset.vraag,a=e.currentTarget.dataset.antwoord;n.setState({vragenBeantwoord:n.state.vragenBeantwoord.concat(t),antwoorden:n.state.antwoorden.concat(a),vraagMeeBezig:n.state.vraagMeeBezig+1})},n.state={vraagMeeBezig:1,aantalVragen:u.length,vragenBeantwoord:[],antwoorden:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){console.log(this.state.aantalVragen)}},{key:"componentDidUpdate",value:function(){this.state.vraagMeeBezig>this.state.aantalVragen&&console.log("Alle vragen gehad!")}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{children:u.filter((function(t){return t.id===e.state.vraagMeeBezig})).map((function(t,a){return Object(n.jsx)(g,{antwoordGekozen:e.antwoordGekozen,vraagData:t},e.state.vraagMeeBezig)}))})}}]),a}(r.Component),b=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).vanStart=function(e){n.setState({vanStart:!0})},n.state={vanStart:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return!0===this.state.vanStart?Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(v,{})}):Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"intro",children:[Object(n.jsx)("div",{className:"introText",children:"Welkom bij de grote Stadjers Quiz! Beantwoord 100 vragen over de Stad Groningen en laat zien dat jij de ultieme kenner bent."}),Object(n.jsx)("div",{className:"introStart",onClick:this.vanStart,children:"Begin!"})]})})}}]),a}(r.Component);s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a6ab90ac.chunk.js.map